import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Save, Eye, Bot, PanelRightClose, PanelRightOpen, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useLMS } from '@/contexts/LMSContext';
import LMSLayout from '@/components/lms/LMSLayout';
import ModuleEditor from '@/components/lms/ModuleEditor';
import ClaudeAssistant from '@/components/lms/ClaudeAssistant';
import { callClaude, parseJsonResponse, generateCourseFromOutline, getStoredApiKey } from '@/services/claudeService';
import type { LMSCourse, LMSModule } from '@/types/lms';

const categories = [
  'Recruiting & Talent', 'HR Management', 'Payroll & Compensation',
  'Compliance', 'HR Technology', 'Leadership', 'Employee Experience',
  'Learning & Development', 'Organizational Design', 'General',
];

export default function CourseBuilder() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getCourse, addCourse, updateCourse } = useLMS();
  const { toast } = useToast();
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [generating, setGenerating] = useState(false);

  const isEdit = !!courseId;
  const existingCourse = courseId ? getCourse(courseId) : undefined;

  const [course, setCourse] = useState<LMSCourse>(() => {
    if (existingCourse) return existingCourse;
    return {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      thumbnail: '',
      status: 'draft',
      difficulty: 'intermediate',
      category: 'General',
      tags: [],
      estimatedDuration: '',
      modules: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      authorId: user?.id || '',
      authorName: user?.email || '',
    };
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateField = <K extends keyof LMSCourse>(key: K, value: LMSCourse[K]) => {
    setCourse(prev => ({ ...prev, [key]: value }));
  };

  const addModule = () => {
    const newModule: LMSModule = {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      order: course.modules.length + 1,
      lessons: [],
    };
    updateField('modules', [...course.modules, newModule]);
  };

  const updateModule = (moduleId: string, updated: LMSModule) => {
    updateField('modules', course.modules.map(m => m.id === moduleId ? updated : m));
  };

  const deleteModule = (moduleId: string) => {
    updateField('modules', course.modules.filter(m => m.id !== moduleId));
  };

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !course.tags.includes(tag)) {
      updateField('tags', [...course.tags, tag]);
    }
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    updateField('tags', course.tags.filter(t => t !== tag));
  };

  const handleSave = (status?: LMSCourse['status']) => {
    if (!course.title.trim()) {
      toast({ variant: 'destructive', title: 'Title required', description: 'Give your course a title before saving.' });
      return;
    }
    const updated = {
      ...course,
      status: status || course.status,
      updatedAt: new Date().toISOString(),
      authorId: user?.id || course.authorId,
      authorName: user?.email || course.authorName,
    };
    if (isEdit) {
      updateCourse(updated);
    } else {
      addCourse(updated);
    }
    toast({ title: 'Saved', description: `Course ${status === 'published' ? 'published' : 'saved'} successfully.` });
    if (!isEdit) navigate(`/lms/builder/${updated.id}`, { replace: true });
  };

  const handleGenerateOutline = async (topic: string) => {
    if (!getStoredApiKey()) {
      toast({ variant: 'destructive', title: 'API Key Required', description: 'Add your Claude API key in Settings.' });
      return;
    }
    setGenerating(true);
    try {
      const raw = await callClaude({ type: 'outline', topic, difficulty: course.difficulty });
      const outline = parseJsonResponse<{
        title: string;
        description: string;
        category: string;
        tags: string[];
        estimatedDuration: string;
        modules: LMSModule[];
      }>(raw);

      setCourse(prev => ({
        ...prev,
        title: prev.title || outline.title,
        description: prev.description || outline.description,
        category: outline.category || prev.category,
        tags: outline.tags?.length ? outline.tags : prev.tags,
        estimatedDuration: outline.estimatedDuration || prev.estimatedDuration,
        modules: outline.modules.map((m, i) => ({
          ...m,
          id: m.id || crypto.randomUUID(),
          order: i + 1,
          lessons: m.lessons.map((l, j) => ({
            ...l,
            id: l.id || crypto.randomUUID(),
            order: j + 1,
          })),
        })),
      }));

      toast({ title: 'Outline Generated', description: `Created ${outline.modules.length} modules from your topic.` });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Generation Failed', description: error instanceof Error ? error.message : 'Something went wrong.' });
    } finally {
      setGenerating(false);
    }
  };

  const handleApplyContent = (content: string) => {
    try {
      const parsed = parseJsonResponse<any>(content);
      if (parsed.modules) {
        handleGenerateOutline(course.title || 'HR Course');
      } else if (parsed.content) {
        toast({ title: 'Content Generated', description: 'Paste the generated content into a lesson editor.' });
      } else if (parsed.quiz) {
        toast({ title: 'Quiz Generated', description: 'The quiz has been generated. Apply it to a lesson.' });
      }
    } catch {
      toast({ title: 'Content Received', description: 'Use the generated content in your course modules.' });
    }
  };

  const handleGenerateLesson = async (moduleTitle: string, lessonTitle: string) => {
    if (!getStoredApiKey()) {
      toast({ variant: 'destructive', title: 'API Key Required', description: 'Add your Claude API key in Settings.' });
      return;
    }
    setGenerating(true);
    try {
      const raw = await callClaude({
        type: 'lesson',
        moduleTitle,
        lessonTitle,
        context: course.description,
        difficulty: course.difficulty,
      });
      const parsed = parseJsonResponse<{ content: string }>(raw);

      setCourse(prev => ({
        ...prev,
        modules: prev.modules.map(m => {
          if (m.title !== moduleTitle) return m;
          return {
            ...m,
            lessons: m.lessons.map(l => {
              if (l.title !== lessonTitle) return l;
              return { ...l, content: parsed.content };
            }),
          };
        }),
      }));

      toast({ title: 'Lesson Content Generated', description: `Content created for "${lessonTitle}"` });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Generation Failed', description: error instanceof Error ? error.message : 'Something went wrong.' });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <LMSLayout>
      <div className="flex gap-6 max-w-full">
        {/* Main editor */}
        <div className={cn("flex-1 min-w-0 space-y-6", assistantOpen && "max-w-[calc(100%-380px)]")}>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {isEdit ? 'Edit Course' : 'Create New Course'}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {isEdit ? 'Update your course content and settings' : 'Build a course with Claude AI assistance'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setAssistantOpen(!assistantOpen)}>
                {assistantOpen ? <PanelRightClose className="h-4 w-4 mr-1" /> : <PanelRightOpen className="h-4 w-4 mr-1" />}
                {assistantOpen ? 'Hide' : 'Show'} Claude
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleSave()}>
                <Save className="h-4 w-4 mr-1" />
                Save Draft
              </Button>
              <Button size="sm" onClick={() => handleSave('published')}>
                <Eye className="h-4 w-4 mr-1" />
                Publish
              </Button>
            </div>
          </div>

          {generating && (
            <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 rounded-lg border border-primary/20">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <span className="text-sm text-primary font-medium">Claude is generating content...</span>
            </div>
          )}

          {/* Course details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Course Details</h3>
            <Input
              value={course.title}
              onChange={e => updateField('title', e.target.value)}
              placeholder="Course title"
              className="text-lg font-semibold"
            />
            <Textarea
              value={course.description}
              onChange={e => updateField('description', e.target.value)}
              placeholder="Course description — what will students learn?"
              className="resize-none min-h-[80px]"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Select value={course.difficulty} onValueChange={v => updateField('difficulty', v as LMSCourse['difficulty'])}>
                <SelectTrigger><SelectValue placeholder="Difficulty" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={course.category} onValueChange={v => updateField('category', v)}>
                <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
              <Input
                value={course.estimatedDuration}
                onChange={e => updateField('estimatedDuration', e.target.value)}
                placeholder="Duration (e.g., 4 hours)"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <Input
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  placeholder="Add tag and press Enter"
                  className="flex-1 text-sm"
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
                />
                <Button variant="outline" size="sm" onClick={addTag}>Add</Button>
              </div>
              {course.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} &times;
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Quick Generate */}
          {course.modules.length === 0 && (
            <div className="bg-gradient-to-r from-primary/5 to-violet-500/5 rounded-xl border border-primary/20 p-6 text-center">
              <Bot className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Generate Course with Claude</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
                Enter a topic above and let Claude create a full course outline with modules and lessons.
              </p>
              <Button
                onClick={() => handleGenerateOutline(course.title || course.description || 'HR fundamentals')}
                disabled={generating || !getStoredApiKey()}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {generating ? 'Generating...' : 'Generate Course Outline'}
              </Button>
            </div>
          )}

          {/* Modules */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Modules ({course.modules.length})
              </h3>
            </div>

            {course.modules.map((module) => (
              <ModuleEditor
                key={module.id}
                module={module}
                onChange={(updated) => updateModule(module.id, updated)}
                onDelete={() => deleteModule(module.id)}
                onGenerateLesson={handleGenerateLesson}
              />
            ))}

            <Button variant="outline" onClick={addModule} className="w-full border-dashed">
              <Plus className="h-4 w-4 mr-2" />
              Add Module
            </Button>
          </div>
        </div>

        {/* Claude Assistant panel */}
        {assistantOpen && (
          <div className="w-[360px] flex-shrink-0 sticky top-20 h-[calc(100vh-8rem)]">
            <ClaudeAssistant
              onApplyContent={handleApplyContent}
              courseContext={JSON.stringify({ title: course.title, description: course.description, modules: course.modules.map(m => m.title) })}
              className="h-full"
            />
          </div>
        )}
      </div>
    </LMSLayout>
  );
}
