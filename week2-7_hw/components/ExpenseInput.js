"use client";

import { useState } from "react";
import { categories } from "@/lib/expenses";

export default function ExpenseInput({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("식비");

  function handleSubmit(event) {
    event.preventDefault();
    const value = Number(amount);
    if (!text.trim() || !Number.isSafeInteger(value) || value <= 0) return;
    onAdd({ id: crypto.randomUUID(), text: text.trim(), amount: value, category });
    setText("");
    setAmount("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="field text-field">
        <label htmlFor="expense-text">지출 내용</label>
        <input id="expense-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="어디에 썼나요?" required />
      </div>
      <div className="field">
        <label htmlFor="expense-amount">금액</label>
        <input id="expense-amount" type="number" min="1" max={Number.MAX_SAFE_INTEGER} step="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="금액 (원)" required />
      </div>
      <div className="field">
        <label htmlFor="expense-category">카테고리</label>
        <select id="expense-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}
