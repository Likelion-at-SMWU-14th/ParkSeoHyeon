"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteExpenseButton({ id, text, detail = false }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    if (pending) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch(`/api/expenses/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      if (detail) router.replace("/");
      router.refresh();
    } catch (error) {
      setError(error.message || "삭제하지 못했어요.");
      setPending(false);
    }
  }

  return (
    <span className="delete-control">
      <button type="button" disabled={pending} aria-label={`${text} 지출 삭제`} onClick={handleDelete}>
        {pending ? "…" : detail ? "지출 삭제" : "×"}
      </button>
      {error && <span className="error" role="alert">{error}</span>}
    </span>
  );
}
