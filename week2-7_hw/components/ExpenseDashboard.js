"use client";

import Image from "next/image";
import { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseItem from "./ExpenseItem";
import { categories, defaultExpenses } from "@/lib/expenses";

export default function ExpenseDashboard() {
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [budget, setBudget] = useState(300000);
  const [category, setCategory] = useState("전체");
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = (Number(budget) || 0) - total;
  const filtered = category === "전체" ? expenses : expenses.filter((expense) => expense.category === category);

  return (
    <div className="dashboard">
      <header className="intro">
        <div><h1>나의 가계부</h1><p>지출부터 남은 예산까지, 한눈에.</p></div>
        <Image src="/characters/heart.png" alt="하트를 안고 있는 배드바츠마루" width={70} height={70} className="hero-character" />
      </header>
      <section className="summary" aria-label="예산과 지출 요약">
        <div className="budget-card">
          <label htmlFor="budget">예산 <span className="edit-hint">수정</span></label>
          <div className="budget-field"><input id="budget" aria-label="예산" type="number" min="0" step="1" value={budget} onChange={(e) => setBudget(e.target.value)} /><span>원</span></div>
        </div>
        <div className="spent-card"><span className="card-label">총지출</span><p className="money">{total.toLocaleString("ko-KR")}<span>원</span></p></div>
        <div className={`remaining-card ${remaining < 0 ? "over-budget" : ""}`}><span className="card-label">남은 예산</span><p className="money">{remaining.toLocaleString("ko-KR")}<span>원</span></p></div>
      </section>
      {remaining < 0 && <p className="budget-alert" role="status">예산을 {Math.abs(remaining).toLocaleString("ko-KR")}원 초과했어요.</p>}
      <section className="input-panel">
        <h2>지출 추가</h2>
        <ExpenseInput onAdd={(expense) => setExpenses((current) => [...current, expense])} />
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
          <ul>{filtered.map((expense) => <ExpenseItem key={expense.id} expense={expense} onRemove={(id) => setExpenses((current) => current.filter((item) => item.id !== id))} />)}</ul>
        ) : (
          <div className="empty-message"><p>{expenses.length ? `${category} 지출이 없어요` : "아직 기록한 지출이 없어요"}</p><small>{expenses.length ? "다른 카테고리를 선택해보세요." : "위에서 첫 지출을 추가해보세요."}</small></div>
        )}
      </section>
    </div>
  );
}
