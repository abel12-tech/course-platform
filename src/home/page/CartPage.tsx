import CartItemCard from "../../components/CartItemCard";
import PageWrapper from "../../components/PageWrapper";
import useCart from "../../store/useCart";
import useWishList from "../../store/useWishList";

const CartPage = () => {
  const { coursesInCart } = useCart();
  const { coursesInWishList, moveToCart, removeFromWishList } = useWishList();

  const totalPrice = coursesInCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              {coursesInCart.length > 0 ? `${coursesInCart.length} Courses in cart`: "No courses in Cart"} 
            </h2>

            <div className="space-y-4">
              {coursesInCart.map((course) => (
                <CartItemCard key={course.id} course={course} />
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Recently Wishlist
              </h2>

              <div className="space-y-4">
                {coursesInWishList.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center gap-4 border p-3 rounded"
                  >
                    <img
                      src={course.thumbnail}
                      className="w-28 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{course.title}</h3>
                      <p className="text-xs text-gray-500">
                        {course.instructor}
                      </p>
                    </div>

                    <button 
                      onClick={() => moveToCart(course)}
                      className="text-sm text-orange-600 hover:text-orange-700"
                    >
                      Move to Cart
                    </button>

                    <button 
                      onClick={() => removeFromWishList(course.id)}
                      className="text-sm text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-5 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Total</h2>

            <p className="text-3xl font-bold text-gray-900">{totalPrice} ETB</p>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              You won’t be charged yet
            </p>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CartPage;
