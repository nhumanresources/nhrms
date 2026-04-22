import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ChevronDown, ChevronRight, GripVertical, Plus, Trash2,
  FileText, Video, FileQuestion, ClipboardList,
} from 'lucide-react';
import type { LMSModule, LMSLesson } from '@/types/lms';
import LessonEditor from './LessonEditor';

const lessonTypeIcons = {
  text: FileText,
  video: Video,
  quiz: FileQuestion,
  assignment: ClipboardList,
};

interface Props {
  module: LMSModule;
  onChange: (module: LMSModule) => void;
  onDelete: () => void;
  onGenerateLesson?: (moduleTitle: string, lessonTitle: string) => void;
}

export default function ModuleEditor({ module, onChange, onDelete, onGenerateLesson }: Props) {
  const [expanded, setExpanded] = useState(true);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const updateField = <K extends keyof LMSModule>(key: K, value: LMSModule[K]) => {
    onChange({ ...module, [key]: value });
  };

  const addLesson = () => {
    const newLesson: LMSLesson = {
      id: crypto.randomUUID(),
      title: '',
      content: '',
      type: 'text',
      order: module.lessons.length + 1,
      duration: '10 min',
    };
    updateField('lessons', [...module.lessons, newLesson]);
    setActiveLesson(newLesson.id);
  };

  const updateLesson = (lessonId: string, updates: Partial<LMSLesson>) => {
    updateField('lessons', module.lessons.map(l =>
      l.id === lessonId ? { ...l, ...updates } : l
    ));
  };

  const deleteLesson = (lessonId: string) => {
    updateField('lessons', module.lessons.filter(l => l.id !== lessonId));
    if (activeLesson === lessonId) setActiveLesson(null);
  };

  return (
    <Card className="border border-gray-200">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-grab" />
        <button onClick={() => setExpanded(!expanded)} className="text-gray-500">
          {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
        <Input
          value={module.title}
          onChange={e => updateField('title', e.target.value)}
          placeholder="Module title"
          className="flex-1 bg-transparent border-0 shadow-none text-sm font-semibold focus-visible:ring-0 px-1 h-8"
        />
        <span className="text-xs text-gray-400">{module.lessons.length} lessons</span>
        <Button variant="ghost" size="icon" onClick={onDelete} className="h-7 w-7 text-gray-400 hover:text-red-500">
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {expanded && (
        <div className="p-4 space-y-3">
          <Textarea
            value={module.description}
            onChange={e => updateField('description', e.target.value)}
            placeholder="Module description (optional)"
            className="text-sm resize-none min-h-[60px]"
          />

          {/* Lesson list */}
          <div className="space-y-2">
            {module.lessons.map((lesson) => {
              const Icon = lessonTypeIcons[lesson.type];
              return (
                <div key={lesson.id}>
                  <button
                    onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
                    className={cn(
                      "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors text-left",
                      activeLesson === lesson.id
                        ? "bg-primary/5 border border-primary/20"
                        : "bg-gray-50 hover:bg-gray-100 border border-transparent"
                    )}
                  >
                    <Icon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="flex-1 truncate">{lesson.title || 'Untitled Lesson'}</span>
                    <span className="text-xs text-gray-400">{lesson.duration}</span>
                  </button>

                  {activeLesson === lesson.id && (
                    <div className="mt-2 ml-6 border-l-2 border-primary/20 pl-4">
                      <LessonEditor
                        lesson={lesson}
                        onChange={(updates) => updateLesson(lesson.id, updates)}
                        onDelete={() => deleteLesson(lesson.id)}
                        onGenerate={() => onGenerateLesson?.(module.title, lesson.title)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Button variant="outline" size="sm" onClick={addLesson} className="w-full border-dashed">
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Lesson
          </Button>
        </div>
      )}
    </Card>
  );
}
