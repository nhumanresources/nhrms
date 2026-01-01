import { cn } from '@/lib/utils';
import { Course } from '@/data/academy/courses';
import { Users, Briefcase, Wallet, Shield, Cpu } from 'lucide-react';

interface TopicFilterProps {
  selectedTopic: Course['topic'] | 'all';
  onTopicChange: (topic: Course['topic'] | 'all') => void;
  selectedLevel?: Course['level'] | 'all';
  onLevelChange?: (level: Course['level'] | 'all') => void;
  showLevelFilter?: boolean;
}

const topics: { id: Course['topic'] | 'all'; label: string; icon: typeof Users }[] = [
  { id: 'all', label: 'All Topics', icon: Briefcase },
  { id: 'recruiting', label: 'Recruiting', icon: Users },
  { id: 'hr-management', label: 'HR Management', icon: Briefcase },
  { id: 'payroll', label: 'Payroll', icon: Wallet },
  { id: 'compliance', label: 'Compliance', icon: Shield },
  { id: 'hr-tech', label: 'HR Tech', icon: Cpu },
];

const levels: { id: Course['level'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

export default function TopicFilter({
  selectedTopic,
  onTopicChange,
  selectedLevel = 'all',
  onLevelChange,
  showLevelFilter = true,
}: TopicFilterProps) {
  return (
    <div className="space-y-4">
      {/* Topic Filters */}
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isSelected = selectedTopic === topic.id;

          return (
            <button
              key={topic.id}
              onClick={() => onTopicChange(topic.id)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{topic.label}</span>
            </button>
          );
        })}
      </div>

      {/* Level Filters */}
      {showLevelFilter && onLevelChange && (
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => {
            const isSelected = selectedLevel === level.id;

            return (
              <button
                key={level.id}
                onClick={() => onLevelChange(level.id)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-all border',
                  isSelected
                    ? 'bg-secondary/10 text-secondary border-secondary/30'
                    : 'bg-background border-border text-muted-foreground hover:border-secondary/30 hover:text-foreground'
                )}
              >
                {level.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
