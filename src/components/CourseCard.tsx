import { Star, Heart, ShoppingCart } from "lucide-react";
import type { Course } from "../module/models/courses";
import useCart from "../store/useCart";
import useWishList from "../store/useWishList";
import useAuth from "../store/useAuth";

type Props = {
  course: Course;
};

const CourseCard = ({ course }: Props) => {
  const { addToCart, coursesInCart } = useCart();
  const { isLoggedIn } = useAuth();
  const { addToWishList, removeFromWishList, coursesInWishList } =
    useWishList();

  const isWishlisted = coursesInWishList.some((item) => item.id === course.id);

  const toggleWishList = () => {
      if (!isLoggedIn) {
        alert("Please log in to add to your wishlist.");
        return;
      }
    if (isWishlisted) {
      removeFromWishList(course.id);
    } else {
      addToWishList(course);
    }
  };

  const onHandleAddToCart = () => {
    console.log("Add to cart clicked");
    if (!isLoggedIn) {
      alert("Please log in to add courses to your cart.");
      return;
    }
    addToCart(course);
    console.log("Carts", coursesInCart);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition group">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-40 w-full object-cover"
        />

        <button
          onClick={toggleWishList}
          className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
        >
          <Heart
            size={16}
            className={`${
              isWishlisted
                ? "text-red-500 cursor-pointer fill-red-500"
                : "text-gray-700 cursor-pointer"
            } transition`}
          />
        </button>
      </div>

      <div className="p-3 space-y-2">
        <h2 className="font-semibold text-sm line-clamp-2">{course.title}</h2>

        <p className="text-xs text-gray-500">{course.instructor}</p>

        <p className="text-xs text-gray-400">{course.category}</p>

        <div className="flex items-center gap-1 text-xs">
          <span className="text-orange-600 font-semibold">{course.rating}</span>
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-gray-500">({course.students})</span>
        </div>

        <p className="font-bold text-sm">
          {course.price === 0 ? "Free" : `${course.price} ETB`}
        </p>

        <div className="flex gap-2 pt-2">
          <button
            onClick={toggleWishList}
            className="flex-1 flex items-center justify-center gap-2 py-2 border rounded text-sm hover:bg-gray-100 transition"
          >
            <Heart size={16} />
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </button>

          {course.price === 0 ? (
            <div></div>
          ) : (
            <button
              onClick={onHandleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-orange-600 text-white rounded text-sm hover:bg-orange-700 transition"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
