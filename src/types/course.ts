export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: string;
  instructor: string;
  topics: string[];
}

export interface CourseSection {
  id: string;
  title: string;
  courses: Course[];
}