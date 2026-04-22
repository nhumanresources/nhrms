import type { CourseGenerationRequest, LMSCourse, LMSModule, LMSLesson, LMSQuiz, LMSQuestion } from '@/types/lms';

const STORAGE_KEY = 'lms_claude_api_key';

export function getStoredApiKey(): string {
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function setStoredApiKey(key: string) {
  localStorage.setItem(STORAGE_KEY, key);
}

export function clearStoredApiKey() {
  localStorage.removeItem(STORAGE_KEY);
}

function generateId(): string {
  return crypto.randomUUID();
}

const SYSTEM_PROMPT = `You are an expert instructional designer and course creator for an HR-focused Learning Management System (nHRMS Academy). You help create structured, engaging educational content.

When generating course content, follow these principles:
- Use clear, professional language appropriate for HR professionals
- Include practical examples and real-world scenarios
- Structure content with clear learning objectives
- Create assessments that test understanding, not memorization
- Keep content actionable and immediately applicable

Always respond with valid JSON when asked for structured data. Do not include markdown code fences around JSON output.`;

function buildPrompt(request: CourseGenerationRequest): string {
  switch (request.type) {
    case 'outline':
      return `Create a complete course outline for the topic: "${request.topic}"
Difficulty level: ${request.difficulty || 'intermediate'}

Return a JSON object with this exact structure:
{
  "title": "Course Title",
  "description": "2-3 sentence course description",
  "category": "category name",
  "tags": ["tag1", "tag2", "tag3"],
  "estimatedDuration": "X hours",
  "modules": [
    {
      "id": "${generateId()}",
      "title": "Module Title",
      "description": "Module description",
      "order": 1,
      "lessons": [
        {
          "id": "${generateId()}",
          "title": "Lesson Title",
          "content": "",
          "type": "text",
          "order": 1,
          "duration": "15 min"
        }
      ]
    }
  ]
}

Create 3-5 modules with 2-4 lessons each. Include at least one quiz lesson per module (type: "quiz").`;

    case 'lesson':
      return `Write detailed lesson content for:
Module: "${request.moduleTitle}"
Lesson: "${request.lessonTitle}"
Course context: ${request.context || 'HR professional development'}
Difficulty: ${request.difficulty || 'intermediate'}

Write comprehensive educational content in HTML format (using <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <blockquote> tags). Include:
- A brief introduction
- Key concepts with explanations
- Practical examples or scenarios
- Key takeaways or action items

Return the content as a JSON object:
{
  "content": "<h2>Lesson title</h2><p>Content here...</p>"
}`;

    case 'quiz':
      return `Create a quiz for the module: "${request.moduleTitle}"
Context: ${request.context || 'HR topics'}
Difficulty: ${request.difficulty || 'intermediate'}

Return a JSON object:
{
  "quiz": {
    "id": "${generateId()}",
    "title": "Quiz: ${request.moduleTitle}",
    "passingScore": 70,
    "questions": [
      {
        "id": "${generateId()}",
        "text": "Question text",
        "type": "multiple-choice",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Option A",
        "explanation": "Brief explanation of why this is correct"
      }
    ]
  }
}

Create 5 questions: 3 multiple-choice, 1 true-false (options: ["True", "False"]), and 1 short-answer (options: []).`;

    case 'improve':
      return `Review and improve this course content:

${request.existingContent}

Provide specific suggestions to improve:
1. Clarity and readability
2. Engagement and interactivity
3. Learning objective alignment
4. Missing topics or gaps
5. Assessment quality

Return a JSON object:
{
  "suggestions": [
    {
      "area": "Area of improvement",
      "current": "What exists now",
      "suggested": "What to change",
      "priority": "high|medium|low"
    }
  ],
  "improvedContent": "The improved version of the content if applicable"
}`;

    case 'general':
    default:
      return request.context || 'Help me with my course.';
  }
}

export async function callClaude(
  request: CourseGenerationRequest,
  onStream?: (chunk: string) => void
): Promise<string> {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error('Claude API key not configured. Please add your API key in LMS Settings.');
  }

  const userMessage = buildPrompt(request);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your Claude API key in Settings.');
    }
    throw new Error(error.error?.message || `API error: ${response.status}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text || '';
}

export function parseJsonResponse<T>(raw: string): T {
  const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
  return JSON.parse(cleaned);
}

export function generateCourseFromOutline(
  outline: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    estimatedDuration: string;
    modules: LMSModule[];
  },
  authorId: string,
  authorName: string
): LMSCourse {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    title: outline.title,
    description: outline.description,
    thumbnail: '',
    status: 'draft',
    difficulty: 'intermediate',
    category: outline.category,
    tags: outline.tags,
    estimatedDuration: outline.estimatedDuration,
    modules: outline.modules.map((m, mi) => ({
      ...m,
      id: m.id || generateId(),
      order: mi + 1,
      lessons: m.lessons.map((l, li) => ({
        ...l,
        id: l.id || generateId(),
        order: li + 1,
      })),
    })),
    createdAt: now,
    updatedAt: now,
    authorId,
    authorName,
  };
}
