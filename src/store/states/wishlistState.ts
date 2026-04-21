import type { Course } from "../../module/models/courses";

export interface WishListState {
  coursesInWishList: Course[];
  addToWishList: (course: Course) => void;
  removeFromWishList: (courseId: number) => void;
  moveToCart: (course: Course) => void;
  clearWishList: () => void;
}
