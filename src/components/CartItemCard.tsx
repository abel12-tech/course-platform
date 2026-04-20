import { Trash2 } from "lucide-react";

import type { Course } from "../module/models/courses";
import useCart from "../store/useCart";


type Props = {
  course: Course;
};

const CartItemCard = ({ course }: Props) => {
    const {removeFromCart} = useCart()
  return (
    <div className="flex gap-4 border">
      <img src={course.thumbnail} />
      <div className="flex-1">
        <h2 className="font-semibold text-sm">{course.title}</h2>
        <p className="text-xs text-gray-500">{course.instructor}</p>
        <p className="text-xs text-gray-400">{course.category}</p>
      </div>
      <p className="font-bold text-sm">
        {course.price === 0 ? "Free" : `${course.price} ETB`}
      </p>
      <button onClick={() => removeFromCart(course.id)} className="text-red-500 hover:text-red-600 transition">
        <Trash2  size={18} />
      </button>
    </div>
  );
};

export default CartItemCard;
