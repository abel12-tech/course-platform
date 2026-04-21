import {create} from "zustand"
import { persist } from "zustand/middleware"
import type { WishListState } from "./states/wishlistState"
import type { Course } from "../module/models/courses"
import useCart from "./useCart"

const useWishList = create<WishListState>()(
  persist(
    (set, get) => ({
      coursesInWishList: [],

      addToWishList: (course: Course) => {
        const exists = get().coursesInWishList.find((c) => c.id === course.id);
        if (exists) return;
        const updated = [...get().coursesInWishList, course];
        set({
          coursesInWishList: updated,
        });
      },

      removeFromWishList: (courseId: number) => {
        const updated = get().coursesInWishList.filter((c) => c.id !== courseId);

        set({
          coursesInWishList: updated,
        });
      },

      moveToCart: (course: Course) => {
        get().removeFromWishList(course.id);
        useCart.getState().addToCart(course);
      },
      clearWishList: () =>
        set({
          coursesInWishList: [],
        }),
    }),
    {
      name: "wishlist-state",
    }
  )
)

export default useWishList