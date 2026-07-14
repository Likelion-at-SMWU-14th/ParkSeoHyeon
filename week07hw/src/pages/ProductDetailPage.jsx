import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import useWishlist from "../hooks/useWishlist";

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { isWishlisted, toggleWishlist } = useWishlist();

  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <section className="not-found-page">
        <div className="not-found-whale" aria-hidden="true">
          🐳
        </div>

        <h1>상품을 찾을 수 없어요</h1>

        <p>존재하지 않거나 삭제된 상품입니다.</p>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate("/")}
        >
          상품 목록으로 이동
        </button>
      </section>
    );
  }

  const wished = isWishlisted(product.id);

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="product-detail-page">
      <button type="button" className="back-button" onClick={handleGoBack}>
        ← 이전으로
      </button>

      <div className="product-detail-card">
        <div className="detail-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
          />
        </div>

        <div className="detail-info">
          <span className="product-category">{product.categoryLabel}</span>

          <h1>{product.name}</h1>

          <p className="detail-price">{product.price.toLocaleString()}원</p>

          <div className="detail-divider" />

          <p className="detail-description">{product.description}</p>

          <div className="detail-actions">
            <button
              type="button"
              className={
                wished
                  ? "detail-wishlist-button active"
                  : "detail-wishlist-button"
              }
              onClick={handleWishlistClick}
            >
              {wished ? "♥ 위시리스트에서 제거" : "♡ 위시리스트에 담기"}
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate("/wishlist")}
            >
              위시리스트 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
