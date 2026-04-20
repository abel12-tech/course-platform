import WishListItemCard from "../../components/WishListItemCard";
import PageWrapper from "../../components/PageWrapper";
import useWishList from "../../store/useWishList";

const WishListPage = () => {
  const { coursesInWishList } = useWishList();

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              {coursesInWishList.length > 0
                ? `${coursesInWishList.length} Courses in wishlist`
                : "No courses in Wishlist"}
            </h2>

            <div className="space-y-4">
              {coursesInWishList.map((course) => (
                <WishListItemCard key={course.id} course={course} />
              ))}
            </div>

            {coursesInWishList.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                <p className="text-sm text-gray-400">
                  Add courses you're interested in to keep track of them here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WishListPage;