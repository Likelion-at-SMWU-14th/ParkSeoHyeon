import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useWishlist from "../hooks/useWishlist";

function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <section className="wishlist-page">
      <div className="wishlist-heading">
        <div>
          <span className="section-label">MY COLLECTION</span>

          <h1>My Wishlist</h1>

          <p>마음에 드는 상품 {wishlist.length}개를 담았어요.</p>
        </div>

        {wishlist.length > 0 && (
          <button
            type="button"
            className="clear-button"
            onClick={clearWishlist}
          >
            전체 삭제
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-whale" aria-hidden="true">
            🐳
          </div>

          <h2>아직 찜한 상품이 없어요</h2>

          <p>마음에 드는 상품을 위시리스트에 담아보세요.</p>

          <Link to="/" className="shop-link-button">
            상품 보러 가기
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistPage;
