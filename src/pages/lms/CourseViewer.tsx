import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useLMS } from '@/contexts/LMSContext';
import { useToast } from '@/components/ui/use-toast';
import DOMPurify from 'dompurify';
import {
  ArrowLeft, CheckCircle2, Circle, FileText, Video,
  FileQuestion, ClipboardList, ChevronRight, Award,
} from 'lucide-react';
import type { LMSLesson, LMSQuestion } from '@/types/lms';

const lessonIcons = { text: FileText, video: Video, quiz: FileQuestion, assignment: ClipboardList };

export default function CourseViewer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getCourse, enrollInCourse, markLessonComplete, saveQuizScore, getEnrollment } = useLMS();
  const { toast } = useToast();

  const course = getCourse(courseId || '');
  const enrollment = getEnrollment(courseId || '', user?.id || '');

  const [activeModuleId, setActiveModuleId] = useState('');
  const [activeLessonId, setActiveLessonId] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course && course.modules.length > 0) {
      const firstModule = course.modules[0];
      setActiveModuleId(firstModule.id);
      if (firstModule.lessons.length > 0) {
        setActiveLessonId(firstModule.lessons[0].id);
      }
    }
  }, [course]);

  useEffect(() => {
    if (course && user && !enrollment) {
      enrollInCourse(course.id, user.id);
    }
  }, [course, user, enrollment, enrollInCourse]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Course not found</h2>
          <Button asChild><Link to="/lms/browse">Browse Courses</Link></Button>
        </div>
      </div>
    );
  }

  const activeModule = course.modules.find(m => m.id === activeModuleId);
  const activeLesson = activeModule?.lessons.find(l => l.id === activeLessonId);
  const isCompleted = (lessonId: string) => enrollment?.completedLessons.includes(lessonId) ?? false;

  const handleComplete = () => {
    if (!user || !activeLesson) return;
    markLessonComplete(course.id, user.id, activeLesson.id);
    toast({ title: 'Lesson Complete', description: `"${activeLesson.title}" marked as complete.` });

    const currentModule = course.modules.find(m => m.id === activeModuleId);
    if (!currentModule) return;
    const lessonIdx = currentModule.lessons.findIndex(l => l.id === activeLessonId);
    if (lessonIdx < currentModule.lessons.length - 1) {
      setActiveLessonId(currentModule.lessons[lessonIdx + 1].id);
    } else {
      const moduleIdx = course.modules.findIndex(m => m.id === activeModuleId);
      if (moduleIdx < course.modules.length - 1) {
        const nextModule = course.modules[moduleIdx + 1];
        setActiveModuleId(nextModule.id);
        if (nextModule.lessons.length > 0) setActiveLessonId(nextModule.lessons[0].id);
      }
    }
    setQuizSubmitted(false);
    setQuizAnswers({});
    setQuizScore(null);
  };

  const handleQuizSubmit = () => {
    if (!activeLesson?.quiz || !user) return;
    const questions = activeLesson.quiz.questions;
    let correct = 0;
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / questions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    saveQuizScore(course.id, user.id, activeLesson.quiz.id, score);

    if (score >= activeLesson.quiz.passingScore) {
      toast({ title: 'Quiz Passed!', description: `You scored ${score}%. Great job!` });
    } else {
      toast({ variant: 'destructive', title: 'Quiz Not Passed', description: `You scored ${score}%. You need ${activeLesson.quiz.passingScore}% to pass. Try again!` });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/lms/browse')}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <div className="h-5 w-px bg-gray-200" />
            <h1 className="text-sm font-semibold text-gray-900 truncate max-w-[300px]">{course.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{enrollment?.progress ?? 0}% complete</span>
            <Progress value={enrollment?.progress ?? 0} className="w-32 h-2" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar nav */}
        <aside className="w-72 bg-white border-r border-gray-200 flex-shrink-0 hidden md:block">
          <ScrollArea className="h-[calc(100vh-57px)]">
            <div className="p-4 space-y-4">
              {course.modules.map((module) => (
                <div key={module.id}>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
                    {module.title}
                  </h4>
                  <ul className="space-y-0.5">
                    {module.lessons.map((lesson) => {
                      const Icon = lessonIcons[lesson.type];
                      const active = activeLessonId === lesson.id;
                      const completed = isCompleted(lesson.id);
                      return (
                        <li key={lesson.id}>
                          <button
                            onClick={() => {
                              setActiveModuleId(module.id);
                              setActiveLessonId(lesson.id);
                              setQuizSubmitted(false);
                              setQuizAnswers({});
                              setQuizScore(null);
                            }}
                            className={cn(
                              "flex items-center gap-2 w-full px-2 py-2 rounded-lg text-sm transition-colors text-left",
                              active ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50"
                            )}
                          >
                            {completed ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                            )}
                            <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate flex-1">{lesson.title || 'Untitled'}</span>
                            <span className="text-xs text-gray-400">{lesson.duration}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Content area */}
        <main className="flex-1 overflow-auto">
          {activeLesson ? (
            <div className="max-w-3xl mx-auto py-8 px-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>{activeModule?.title}</span>
                  <ChevronRight className="h-3 w-3" />
                  <span>{activeLesson.title}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeLesson.title}</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">{activeLesson.type}</Badge>
                  <span className="text-xs text-gray-400">{activeLesson.duration}</span>
                </div>
              </div>

              {activeLesson.type === 'video' && activeLesson.videoUrl && (
                <div className="aspect-video bg-gray-900 rounded-xl mb-6 flex items-center justify-center">
                  <iframe
                    src={activeLesson.videoUrl}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                    title={activeLesson.title}
                  />
                </div>
              )}

              {activeLesson.type === 'quiz' && activeLesson.quiz ? (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{activeLesson.quiz.title}</h3>
                        <span className="text-xs text-gray-400 ml-auto">Pass: {activeLesson.quiz.passingScore}%</span>
                      </div>

                      {quizSubmitted && quizScore !== null && (
                        <div className={cn(
                          "px-4 py-3 rounded-lg mb-6 text-sm font-medium",
                          quizScore >= activeLesson.quiz.passingScore
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        )}>
                          Score: {quizScore}% — {quizScore >= activeLesson.quiz.passingScore ? 'Passed!' : 'Not passed. Try again.'}
                        </div>
                      )}

                      <div className="space-y-6">
                        {activeLesson.quiz.questions.map((q, qi) => (
                          <QuestionBlock
                            key={q.id}
                            question={q}
                            index={qi}
                            answer={quizAnswers[q.id] || ''}
                            onAnswer={(a) => setQuizAnswers(prev => ({ ...prev, [q.id]: a }))}
                            submitted={quizSubmitted}
                          />
                        ))}
                      </div>

                      {!quizSubmitted ? (
                        <Button className="mt-6 w-full" onClick={handleQuizSubmit}
                          disabled={Object.keys(quizAnswers).length < activeLesson.quiz.questions.length}>
                          Submit Quiz
                        </Button>
                      ) : (
                        <div className="flex gap-2 mt-6">
                          <Button variant="outline" className="flex-1" onClick={() => {
                            setQuizSubmitted(false);
                            setQuizAnswers({});
                            setQuizScore(null);
                          }}>
                            Retry
                          </Button>
                          <Button className="flex-1" onClick={handleComplete}>
                            Continue
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <>
                  {activeLesson.content ? (
                    <div
                      className="prose prose-gray max-w-none mb-8"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(activeLesson.content) }}
                    />
                  ) : (
                    <div className="text-center py-16 text-gray-400">
                      <FileText className="h-12 w-12 mx-auto mb-3 opacity-40" />
                      <p>No content yet for this lesson.</p>
                    </div>
                  )}
                  <div className="flex justify-end pt-4 border-t">
                    <Button onClick={handleComplete} disabled={isCompleted(activeLesson.id)}>
                      {isCompleted(activeLesson.id) ? 'Completed' : 'Mark Complete & Continue'}
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a lesson to begin
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function QuestionBlock({ question, index, answer, onAnswer, submitted }: {
  question: LMSQuestion;
  index: number;
  answer: string;
  onAnswer: (a: string) => void;
  submitted: boolean;
}) {
  const isCorrect = answer === question.correctAnswer;

  return (
    <div className={cn(
      "p-4 rounded-lg border",
      submitted ? (isCorrect ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50") : "border-gray-200"
    )}>
      <p className="font-medium text-sm mb-3">
        <span className="text-gray-400 mr-2">Q{index + 1}.</span>
        {question.text}
      </p>

      {question.type === 'short-answer' ? (
        <input
          type="text"
          value={answer}
          onChange={e => onAnswer(e.target.value)}
          disabled={submitted}
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
          placeholder="Type your answer..."
        />
      ) : (
        <div className="space-y-2">
          {question.options.map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md border text-sm cursor-pointer transition-colors",
                answer === opt ? "border-primary bg-primary/5" : "border-gray-200 hover:bg-gray-50",
                submitted && opt === question.correctAnswer && "border-green-500 bg-green-50",
                submitted && answer === opt && !isCorrect && "border-red-500 bg-red-50"
              )}
            >
              <input
                type="radio"
                name={`q-${question.id}`}
                value={opt}
                checked={answer === opt}
                onChange={() => onAnswer(opt)}
                disabled={submitted}
                className="accent-primary"
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {submitted && question.explanation && (
        <p className="mt-3 text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-md">
          {question.explanation}
        </p>
      )}
    </div>
  );
}
