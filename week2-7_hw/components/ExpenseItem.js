import Link from "next/link";
import DeleteExpenseButton from "./DeleteExpenseButton";

const categoryClasses = { 카페: "cafe", 쇼핑: "shopping", 교통: "transport" };

export default function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <Link href={`/expenses/${expense.id}`} className="item-title">{expense.text}</Link>
      <span className={`category ${categoryClasses[expense.category] || ""}`}>{expense.category}</span>
      <strong>{expense.amount.toLocaleString("ko-KR")}원</strong>
      <DeleteExpenseButton id={expense.id} text={expense.text} />
    </li>
  );
}
