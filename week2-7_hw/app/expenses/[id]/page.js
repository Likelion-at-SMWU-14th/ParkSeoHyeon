import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import DeleteExpenseButton from "@/components/DeleteExpenseButton";
import { getExpense } from "@/lib/server/expenses";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const expense = getExpense(id);
  return { title: expense ? `${expense.text} | pocket.` : "없는 지출 | pocket." };
}

export default async function ExpenseDetailPage({ params }) {
  await connection();
  const { id } = await params;
  const expense = getExpense(id);
  if (!expense) notFound();

  return (
    <section className="dashboard detail">
      <Link href="/" className="back-link">← 가계부로 돌아가기</Link>
      <h1>{expense.text}</h1>
      <p className="detail-description">기록한 지출을 확인해보세요.</p>
      <dl>
        <div><dt>카테고리</dt><dd>{expense.category}</dd></div>
        <div><dt>금액</dt><dd>{expense.amount.toLocaleString("ko-KR")}원</dd></div>
      </dl>
      <DeleteExpenseButton id={expense.id} text={expense.text} detail />
    </section>
  );
}
