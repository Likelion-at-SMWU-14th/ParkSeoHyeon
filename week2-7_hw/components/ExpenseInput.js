"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/expenses";

export default function ExpenseInput() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("식비");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim(), amount: Number(amount), category }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      setText("");
      setAmount("");
      router.refresh();
    } catch (error) {
      setError(error.message || "지출을 추가하지 못했어요.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="field text-field">
          <label htmlFor="expense-text">지출 내용</label>
          <input id="expense-text" value={text} onChange={(e) => setText(e.target.value)} maxLength={100} placeholder="어디에 썼나요?" required />
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
        <button type="submit" disabled={pending}>{pending ? "추가 중…" : "추가"}</button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
    </>
  );
}
