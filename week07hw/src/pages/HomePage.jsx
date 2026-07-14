import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = [
  { value: "all", label: "전체" },
  { value: "clothes", label: "의류" },
  { value: "shoes", label: "신발" },
  { value: "accessories", label: "액세서리" },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearchTerm) ||
        product.description.toLowerCase().includes(normalizedSearchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

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

          <p>{filteredProducts.length}개의 상품</p>
        </div>

        <div className="product-controls">
          <input
            type="search"
            className="product-search"
            placeholder="상품을 검색하세요"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={
                  selectedCategory === category.value
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="empty-products">
            <span aria-hidden="true">🐋</span>
            <h3>조건에 맞는 상품이 없어요</h3>
            <p>다른 검색어나 카테고리를 선택해보세요.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
