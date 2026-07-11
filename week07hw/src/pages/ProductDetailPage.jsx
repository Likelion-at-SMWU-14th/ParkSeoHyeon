import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <section>
      <h1>상품 상세 페이지</h1>
      <p>현재 상품 번호: {productId}</p>
    </section>
  );
}

export default ProductDetailPage;
