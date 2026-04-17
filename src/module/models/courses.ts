export type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
};

export type Section = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  price: number;
  rating: number;
  students: number;
  thumbnail: string;
  description: string;
  sections: Section[];
};