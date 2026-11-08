"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ExpenseInput from "./ExpenseInput";
import ExpenseItem from "./ExpenseItem";
import { categories } from "@/lib/expenses";

export default function ExpenseDashboard({ expenses, initialBudget }) {
  const router = useRouter();
  const [budget, setBudget] = useState(String(initialBudget));
  const [category, setCategory] = useState("전체");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = initialBudget - total;
  const filtered = category === "전체" ? expenses : expenses.filter((expense) => expense.category === category);

  async function handleBudgetSubmit(event) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/budget", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ budget: Number(budget) }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      router.refresh();
    } catch (error) {
      setError(error.message || "예산을 저장하지 못했어요.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="dashboard">
      <header className="intro">
        <div><h1>나의 가계부</h1><p>지출부터 남은 예산까지, 한눈에.</p></div>
        <Image src="/characters/heart.png" alt="하트를 안고 있는 배드바츠마루" width={70} height={70} className="hero-character" />
      </header>
      <section className="summary" aria-label="예산과 지출 요약">
        <div className="budget-card">
          <form onSubmit={handleBudgetSubmit}>
            <label htmlFor="budget">예산 <button className="edit-hint" disabled={pending}>{pending ? "저장 중" : "저장"}</button></label>
            <div className="budget-field"><input id="budget" aria-label="예산" type="number" min="0" max={Number.MAX_SAFE_INTEGER} step="1" required value={budget} onChange={(e) => setBudget(e.target.value)} /><span>원</span></div>
          </form>
        </div>
        <div className="spent-card"><span className="card-label">총지출</span><p className="money">{total.toLocaleString("ko-KR")}<span>원</span></p></div>
        <div className={`remaining-card ${remaining < 0 ? "over-budget" : ""}`}><span className="card-label">남은 예산</span><p className="money">{remaining.toLocaleString("ko-KR")}<span>원</span></p></div>
      </section>
      {error && <p className="error" role="alert">{error}</p>}
      {remaining < 0 && <p className="budget-alert" role="status">예산을 {Math.abs(remaining).toLocaleString("ko-KR")}원 초과했어요.</p>}
      <section className="input-panel">
        <h2>지출 추가</h2>
        <ExpenseInput />
      </section>
      <section className="history-panel">
        <div className="section-title">
          <h2>지출 내역 <span className="count">{filtered.length}</span></h2>
          <select aria-label="카테고리 필터" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="전체">전체 카테고리</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        {filtered.length ? (
          <ul>{filtered.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}</ul>
        ) : (
          <div className="empty-message"><p>{expenses.length ? `${category} 지출이 없어요` : "아직 기록한 지출이 없어요"}</p><small>{expenses.length ? "다른 카테고리를 선택해보세요." : "위에서 첫 지출을 추가해보세요."}</small></div>
        )}
      </section>
    </div>
  );
}
