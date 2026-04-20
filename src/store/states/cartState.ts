import type { Course } from "../../module/models/courses";
export interface CartState {
  coursesInCart: Course[];

  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
}