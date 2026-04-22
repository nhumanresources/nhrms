export interface LMSCourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: 'draft' | 'published' | 'archived';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  estimatedDuration: string;
  modules: LMSModule[];
  createdAt: string;
  updatedAt: string;
  authorId: string;
  authorName: string;
}

export interface LMSModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: LMSLesson[];
}

export interface LMSLesson {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'quiz' | 'assignment';
  order: number;
  duration: string;
  videoUrl?: string;
  quiz?: LMSQuiz;
}

export interface LMSQuiz {
  id: string;
  title: string;
  passingScore: number;
  questions: LMSQuestion[];
}

export interface LMSQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LMSEnrollment {
  courseId: string;
  userId: string;
  enrolledAt: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  progress: number;
}

export interface ClaudeMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface CourseGenerationRequest {
  type: 'outline' | 'lesson' | 'quiz' | 'improve' | 'general';
  topic?: string;
  context?: string;
  difficulty?: string;
  moduleTitle?: string;
  lessonTitle?: string;
  existingContent?: string;
}
