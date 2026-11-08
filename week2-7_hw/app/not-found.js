import Link from "next/link";

export default function NotFound() {
  return (
    <section className="dashboard feedback">
      <h1>지출 내역을 찾을 수 없어요.</h1>
      <p>삭제되었거나 존재하지 않는 주소예요.</p>
      <Link href="/" className="back-link">가계부로 돌아가기</Link>
    </section>
  );
}
