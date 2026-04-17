import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search } from "lucide-react";

const Navbar = () => {
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
        <Link to="/wishlist" className="text-gray-600 hover:text-orange-600">
          <Heart size={20} />
        </Link>

        <Link to="/cart" className="text-gray-600 hover:text-orange-600">
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
