import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";

function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const wished = isWishlisted(product.id);

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>

      <div className="product-info">
        <span className="product-category">{product.categoryLabel}</span>

        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>

        <p className="product-price">{product.price.toLocaleString()}원</p>

        <button
          type="button"
          className={wished ? "wishlist-button active" : "wishlist-button"}
          onClick={handleWishlistClick}
        >
          {wished ? "♥ 찜 완료" : "♡ 위시리스트"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
