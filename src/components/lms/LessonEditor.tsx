import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Sparkles } from 'lucide-react';
import type { LMSLesson } from '@/types/lms';
import QuizEditor from './QuizEditor';

interface Props {
  lesson: LMSLesson;
  onChange: (updates: Partial<LMSLesson>) => void;
  onDelete: () => void;
  onGenerate?: () => void;
}

export default function LessonEditor({ lesson, onChange, onDelete, onGenerate }: Props) {
  return (
    <div className="space-y-3 py-2">
      <div className="flex gap-2">
        <Input
          value={lesson.title}
          onChange={e => onChange({ title: e.target.value })}
          placeholder="Lesson title"
          className="flex-1 text-sm"
        />
        <Select value={lesson.type} onValueChange={(v) => onChange({ type: v as LMSLesson['type'] })}>
          <SelectTrigger className="w-[130px] text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="quiz">Quiz</SelectItem>
            <SelectItem value="assignment">Assignment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Input
          value={lesson.duration}
          onChange={e => onChange({ duration: e.target.value })}
          placeholder="Duration (e.g., 15 min)"
          className="w-[140px] text-sm"
        />
        {lesson.type === 'video' && (
          <Input
            value={lesson.videoUrl || ''}
            onChange={e => onChange({ videoUrl: e.target.value })}
            placeholder="Video URL"
            className="flex-1 text-sm"
          />
        )}
      </div>

      {lesson.type === 'quiz' ? (
        <QuizEditor
          quiz={lesson.quiz}
          onChange={(quiz) => onChange({ quiz })}
        />
      ) : (
        <Textarea
          value={lesson.content}
          onChange={e => onChange({ content: e.target.value })}
          placeholder="Lesson content (supports HTML)"
          className="min-h-[200px] text-sm font-mono"
        />
      )}

      <div className="flex justify-between">
        <Button variant="outline" size="sm" onClick={onGenerate} className="text-xs">
          <Sparkles className="h-3 w-3 mr-1" />
          Generate with Claude
        </Button>
        <Button variant="ghost" size="sm" onClick={onDelete} className="text-red-500 hover:text-red-700 text-xs">
          <Trash2 className="h-3 w-3 mr-1" />
          Delete Lesson
        </Button>
      </div>
    </div>
  );
}
