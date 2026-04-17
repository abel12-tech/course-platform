import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "./states/cartState";
import type { Course } from "../module/models/courses";
const calculateTotal = (courses: Course[]) => {
  return courses.reduce((total, course) => total + course.price, 0);
};

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      coursesInCart: [],
      total: 0,

      addToCart: (course: Course) => {
        const exists = get().coursesInCart.find(
          (c) => c.id === course.id
        );

        if (exists) return;

        const updated = [...get().coursesInCart, course];

        set({
          coursesInCart: updated,
          total: calculateTotal(updated),
        });
      },

      removeFromCart: (courseId: number) => {
        const updated = get().coursesInCart.filter(
          (c) => c.id !== courseId
        );

        set({
          coursesInCart: updated,
          total: calculateTotal(updated),
        });
      },

      clearCart: () =>
        set({
          coursesInCart: [],
          total: 0,
        }),
    }),
    {
      name: "cart-state",
    }
  )
);

export default useCart;