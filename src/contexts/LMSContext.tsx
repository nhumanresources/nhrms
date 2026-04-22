import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { LMSCourse, LMSEnrollment } from '@/types/lms';

const COURSES_KEY = 'lms_courses';
const ENROLLMENTS_KEY = 'lms_enrollments';

interface LMSContextType {
  courses: LMSCourse[];
  enrollments: LMSEnrollment[];
  addCourse: (course: LMSCourse) => void;
  updateCourse: (course: LMSCourse) => void;
  deleteCourse: (courseId: string) => void;
  getCourse: (courseId: string) => LMSCourse | undefined;
  enrollInCourse: (courseId: string, userId: string) => void;
  markLessonComplete: (courseId: string, userId: string, lessonId: string) => void;
  saveQuizScore: (courseId: string, userId: string, quizId: string, score: number) => void;
  getEnrollment: (courseId: string, userId: string) => LMSEnrollment | undefined;
  getPublishedCourses: () => LMSCourse[];
  getMyCourses: (authorId: string) => LMSCourse[];
}

const LMSContext = createContext<LMSContextType | undefined>(undefined);

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function LMSProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<LMSCourse[]>(() => loadFromStorage(COURSES_KEY, []));
  const [enrollments, setEnrollments] = useState<LMSEnrollment[]>(() => loadFromStorage(ENROLLMENTS_KEY, []));

  useEffect(() => { saveToStorage(COURSES_KEY, courses); }, [courses]);
  useEffect(() => { saveToStorage(ENROLLMENTS_KEY, enrollments); }, [enrollments]);

  const addCourse = useCallback((course: LMSCourse) => {
    setCourses(prev => [...prev, course]);
  }, []);

  const updateCourse = useCallback((course: LMSCourse) => {
    setCourses(prev => prev.map(c => c.id === course.id ? { ...course, updatedAt: new Date().toISOString() } : c));
  }, []);

  const deleteCourse = useCallback((courseId: string) => {
    setCourses(prev => prev.filter(c => c.id !== courseId));
    setEnrollments(prev => prev.filter(e => e.courseId !== courseId));
  }, []);

  const getCourse = useCallback((courseId: string) => {
    return courses.find(c => c.id === courseId);
  }, [courses]);

  const enrollInCourse = useCallback((courseId: string, userId: string) => {
    const existing = enrollments.find(e => e.courseId === courseId && e.userId === userId);
    if (existing) return;

    setEnrollments(prev => [...prev, {
      courseId,
      userId,
      enrolledAt: new Date().toISOString(),
      completedLessons: [],
      quizScores: {},
      progress: 0,
    }]);
  }, [enrollments]);

  const markLessonComplete = useCallback((courseId: string, userId: string, lessonId: string) => {
    setEnrollments(prev => prev.map(e => {
      if (e.courseId !== courseId || e.userId !== userId) return e;
      if (e.completedLessons.includes(lessonId)) return e;

      const completed = [...e.completedLessons, lessonId];
      const course = courses.find(c => c.id === courseId);
      const totalLessons = course?.modules.reduce((sum, m) => sum + m.lessons.length, 0) || 1;
      const progress = Math.round((completed.length / totalLessons) * 100);

      return { ...e, completedLessons: completed, progress };
    }));
  }, [courses]);

  const saveQuizScore = useCallback((courseId: string, userId: string, quizId: string, score: number) => {
    setEnrollments(prev => prev.map(e => {
      if (e.courseId !== courseId || e.userId !== userId) return e;
      return { ...e, quizScores: { ...e.quizScores, [quizId]: score } };
    }));
  }, []);

  const getEnrollment = useCallback((courseId: string, userId: string) => {
    return enrollments.find(e => e.courseId === courseId && e.userId === userId);
  }, [enrollments]);

  const getPublishedCourses = useCallback(() => {
    return courses.filter(c => c.status === 'published');
  }, [courses]);

  const getMyCourses = useCallback((authorId: string) => {
    return courses.filter(c => c.authorId === authorId);
  }, [courses]);

  return (
    <LMSContext.Provider value={{
      courses, enrollments, addCourse, updateCourse, deleteCourse, getCourse,
      enrollInCourse, markLessonComplete, saveQuizScore, getEnrollment,
      getPublishedCourses, getMyCourses,
    }}>
      {children}
    </LMSContext.Provider>
  );
}

export function useLMS() {
  const context = useContext(LMSContext);
  if (!context) throw new Error('useLMS must be used within an LMSProvider');
  return context;
}
