import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "./states/cartState";
import type { Course } from "../module/models/courses";


const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      coursesInCart: [],

      addToCart: (course: Course) => {
        const exists = get().coursesInCart.find(
          (c) => c.id === course.id
        );

        if (exists) return;

        const updated = [...get().coursesInCart, course];

        set({
          coursesInCart: updated,
        });
      },

      removeFromCart: (courseId: number) => {
        const updated = get().coursesInCart.filter(
          (c) => c.id !== courseId
        );

        set({
          coursesInCart: updated,
        });
      },

      clearCart: () =>
        set({
          coursesInCart: [],
        }),
    }),
    {
      name: "cart-state",
    }
  )
);

export default useCart;