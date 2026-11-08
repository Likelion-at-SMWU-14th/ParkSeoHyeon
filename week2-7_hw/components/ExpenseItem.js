const categoryClasses = { 카페: "cafe", 쇼핑: "shopping", 교통: "transport" };

export default function ExpenseItem({ expense, onRemove }) {
  return (
    <li className="expense-item">
      <span className="item-title">{expense.text}</span>
      <span className={`category ${categoryClasses[expense.category] || ""}`}>{expense.category}</span>
      <strong>{expense.amount.toLocaleString("ko-KR")}원</strong>
      <button type="button" aria-label={`${expense.text} 지출 삭제`} onClick={() => onRemove(expense.id)}>×</button>
    </li>
  );
}
