import { Trash2, ShoppingCart } from "lucide-react";

import type { Course } from "../module/models/courses";
import useWishList from "../store/useWishList";

type Props = {
  course: Course;
};

const WishListItemCard = ({ course }: Props) => {
  const { moveToCart, removeFromWishList } = useWishList();

  return (
    <div className="flex gap-4 border p-4 rounded-lg">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-24 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-sm">{course.title}</h2>
        <p className="text-xs text-gray-500">{course.instructor}</p>
        <p className="text-xs text-gray-400">{course.category}</p>
        <p className="font-bold text-sm text-green-600 mt-1">
          {course.price === 0 ? "Free" : `${course.price} ETB`}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => moveToCart(course)}
          className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 transition"
        >
          <ShoppingCart size={16} />
          Move to Cart
        </button>
        <button
          onClick={() => removeFromWishList(course.id)}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 transition"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishListItemCard;