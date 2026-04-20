import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search } from "lucide-react";
import useCart from "../../store/useCart";
import useWishList from "../../store/useWishList";

const Navbar = () => {
  const {coursesInCart} = useCart()
  const {coursesInWishList} = useWishList()

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold text-orange-600">
          EduPlatform
        </Link>

        <div className="hidden md:block cursor-pointer text-sm hover:text-orange-600">
          Categories
        </div>
      </div>

      <div className="flex-1 mx-6 hidden md:flex items-center border rounded-full px-4 py-2">
        <Search size={18} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full text-sm focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Link to="/wishlist" className="text-gray-600 hover:text-orange-600 relative">
          <Heart size={20} />
          {coursesInWishList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {coursesInWishList.length}
            </span>
          )}
        </Link>

        <Link to="/carts" className="text-gray-600 hover:text-orange-600">
        <span>{coursesInCart.length}</span>
          <ShoppingCart size={20} />
        </Link>

        <>
          <Link
            to="/login"
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="text-sm bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700"
          >
            Sign up
          </Link>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
