import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import type { LMSQuiz, LMSQuestion } from '@/types/lms';

interface Props {
  quiz?: LMSQuiz;
  onChange: (quiz: LMSQuiz) => void;
}

export default function QuizEditor({ quiz, onChange }: Props) {
  const current: LMSQuiz = quiz || {
    id: crypto.randomUUID(),
    title: 'Quiz',
    passingScore: 70,
    questions: [],
  };

  const updateQuiz = (updates: Partial<LMSQuiz>) => {
    onChange({ ...current, ...updates });
  };

  const addQuestion = () => {
    const newQ: LMSQuestion = {
      id: crypto.randomUUID(),
      text: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: '',
      explanation: '',
    };
    updateQuiz({ questions: [...current.questions, newQ] });
  };

  const updateQuestion = (qId: string, updates: Partial<LMSQuestion>) => {
    updateQuiz({
      questions: current.questions.map(q => q.id === qId ? { ...q, ...updates } : q),
    });
  };

  const deleteQuestion = (qId: string) => {
    updateQuiz({ questions: current.questions.filter(q => q.id !== qId) });
  };

  const updateOption = (qId: string, index: number, value: string) => {
    const question = current.questions.find(q => q.id === qId);
    if (!question) return;
    const newOptions = [...question.options];
    newOptions[index] = value;
    updateQuestion(qId, { options: newOptions });
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={current.title}
          onChange={e => updateQuiz({ title: e.target.value })}
          placeholder="Quiz title"
          className="flex-1 text-sm"
        />
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500 whitespace-nowrap">Pass:</span>
          <Input
            type="number"
            value={current.passingScore}
            onChange={e => updateQuiz({ passingScore: Number(e.target.value) })}
            className="w-16 text-sm"
            min={0}
            max={100}
          />
          <span className="text-xs text-gray-500">%</span>
        </div>
      </div>

      <div className="space-y-3">
        {current.questions.map((question, qi) => (
          <Card key={question.id} className="p-3 space-y-2 border-gray-200">
            <div className="flex items-start gap-2">
              <GripVertical className="h-4 w-4 text-gray-400 mt-2.5 cursor-grab" />
              <span className="text-xs font-medium text-gray-400 mt-2.5 w-5">Q{qi + 1}</span>
              <div className="flex-1 space-y-2">
                <Textarea
                  value={question.text}
                  onChange={e => updateQuestion(question.id, { text: e.target.value })}
                  placeholder="Question text"
                  className="text-sm resize-none min-h-[40px]"
                />
                <div className="flex gap-2">
                  <Select
                    value={question.type}
                    onValueChange={v => {
                      const type = v as LMSQuestion['type'];
                      const options = type === 'true-false'
                        ? ['True', 'False']
                        : type === 'short-answer'
                          ? []
                          : ['', '', '', ''];
                      updateQuestion(question.id, { type, options });
                    }}
                  >
                    <SelectTrigger className="w-[150px] text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="true-false">True / False</SelectItem>
                      <SelectItem value="short-answer">Short Answer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {question.type !== 'short-answer' && (
                  <div className="space-y-1.5">
                    {question.options.map((opt, oi) => (
                      <div key={oi} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct-${question.id}`}
                          checked={question.correctAnswer === opt && opt !== ''}
                          onChange={() => updateQuestion(question.id, { correctAnswer: opt })}
                          className="accent-primary"
                        />
                        <Input
                          value={opt}
                          onChange={e => updateOption(question.id, oi, e.target.value)}
                          placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                          className="flex-1 text-xs h-8"
                          disabled={question.type === 'true-false'}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {question.type === 'short-answer' && (
                  <Input
                    value={question.correctAnswer}
                    onChange={e => updateQuestion(question.id, { correctAnswer: e.target.value })}
                    placeholder="Expected answer"
                    className="text-xs"
                  />
                )}

                <Input
                  value={question.explanation}
                  onChange={e => updateQuestion(question.id, { explanation: e.target.value })}
                  placeholder="Explanation (shown after answering)"
                  className="text-xs"
                />
              </div>
              <Button variant="ghost" size="icon" onClick={() => deleteQuestion(question.id)} className="h-7 w-7 text-gray-400 hover:text-red-500">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" size="sm" onClick={addQuestion} className="w-full border-dashed text-xs">
        <Plus className="h-3 w-3 mr-1" />
        Add Question
      </Button>
    </div>
  );
}
