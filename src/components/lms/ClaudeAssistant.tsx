import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, Loader2, Sparkles, X, BookOpen, FileQuestion, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { callClaude, getStoredApiKey } from '@/services/claudeService';
import type { ClaudeMessage, CourseGenerationRequest } from '@/types/lms';

interface Props {
  onApplyContent?: (content: string, type: string) => void;
  courseContext?: string;
  className?: string;
}

const quickActions = [
  { icon: BookOpen, label: 'Generate Outline', type: 'outline' as const },
  { icon: FileQuestion, label: 'Create Quiz', type: 'quiz' as const },
  { icon: Lightbulb, label: 'Improve Content', type: 'improve' as const },
];

export default function ClaudeAssistant({ onApplyContent, courseContext, className }: Props) {
  const [messages, setMessages] = useState<ClaudeMessage[]>([{
    id: '1',
    role: 'assistant',
    content: "I'm your AI course-building assistant. I can help you:\n\n- **Generate course outlines** from a topic\n- **Write lesson content** with examples and scenarios\n- **Create quizzes** with explanations\n- **Review and improve** existing content\n\nWhat would you like to create?",
    timestamp: new Date().toISOString(),
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasApiKey = !!getStoredApiKey();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (content: string, requestType: CourseGenerationRequest['type'] = 'general') => {
    if (!content.trim() || isLoading) return;

    const userMessage: ClaudeMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const request: CourseGenerationRequest = {
        type: requestType,
        topic: content.trim(),
        context: courseContext || content.trim(),
        existingContent: requestType === 'improve' ? courseContext : undefined,
        moduleTitle: content.trim(),
      };

      const response = await callClaude(request);

      const assistantMessage: ClaudeMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ClaudeMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Something went wrong. Please try again.'}`,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (type: CourseGenerationRequest['type']) => {
    const prompts = {
      outline: 'Generate a course outline for: ',
      quiz: 'Create a quiz for: ',
      improve: 'Review and improve the current course content',
    };
    if (type === 'improve') {
      sendMessage(prompts[type], type);
    } else {
      setInput(prompts[type] || '');
    }
  };

  const handleApply = (content: string) => {
    onApplyContent?.(content, 'generated');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <Bot className="h-6 w-6 text-white" />
      </button>
    );
  }

  return (
    <div className={cn(
      "flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/10 to-violet-500/10 border-b">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Claude Assistant</h3>
            <p className="text-xs text-gray-500">AI-powered course builder</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
          <X className="h-4 w-4" />
        </button>
      </div>

      {!hasApiKey && (
        <div className="px-4 py-3 bg-amber-50 border-b border-amber-200 text-sm">
          <p className="text-amber-800 font-medium">API Key Required</p>
          <p className="text-amber-600 text-xs mt-0.5">
            Add your Claude API key in <a href="/lms/settings" className="underline">LMS Settings</a> to enable AI features.
          </p>
        </div>
      )}

      {/* Quick actions */}
      <div className="flex gap-2 px-4 py-2 border-b bg-gray-50/50">
        {quickActions.map(({ icon: Icon, label, type }) => (
          <button
            key={type}
            onClick={() => handleQuickAction(type)}
            disabled={!hasApiKey || isLoading}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:border-primary/30 hover:text-primary transition-colors disabled:opacity-50"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 min-h-0" ref={scrollRef}>
        <div className="p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex gap-3", msg.role === 'user' && "flex-row-reverse")}>
              <div className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
                msg.role === 'assistant' ? "bg-primary/10" : "bg-gray-200"
              )}>
                {msg.role === 'assistant' ? (
                  <Bot className="h-4 w-4 text-primary" />
                ) : (
                  <span className="text-xs font-medium text-gray-600">U</span>
                )}
              </div>
              <div className={cn(
                "flex-1 max-w-[85%] text-sm rounded-xl px-3.5 py-2.5",
                msg.role === 'assistant'
                  ? "bg-gray-50 text-gray-700"
                  : "bg-primary text-white ml-auto"
              )}>
                <div className="whitespace-pre-wrap break-words" dangerouslySetInnerHTML={
                  msg.role === 'assistant' ? { __html: formatMessage(msg.content) } : undefined
                }>
                  {msg.role === 'user' ? msg.content : undefined}
                </div>
                {msg.role === 'assistant' && msg.content.includes('{') && onApplyContent && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 h-7 text-xs"
                    onClick={() => handleApply(msg.content)}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Apply to Course
                  </Button>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-sm text-gray-500">Generating...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={hasApiKey ? "Ask Claude to help build your course..." : "Configure API key first..."}
            disabled={!hasApiKey || isLoading}
            className="min-h-[40px] max-h-[120px] resize-none text-sm"
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || !hasApiKey || isLoading}
            className="h-10 w-10 flex-shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}

function formatMessage(content: string): string {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded text-xs">$1</code>')
    .replace(/^- (.*)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n/g, '<br />');
}
