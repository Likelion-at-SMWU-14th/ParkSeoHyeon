import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">MOBY SHOP COLLECTION</span>

          <h1>
            Find your
            <br />
            blue moment
          </h1>

          <p>일상에 특별한 순간을 더해줄 상품을 만나보세요.</p>
        </div>

        <div className="hero-whale" aria-hidden="true">
          🐳
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR PRODUCTS</span>
            <h2>오늘의 추천 상품</h2>
          </div>

          <p>{products.length}개의 상품</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
