import "server-only";
import { defaultExpenses } from "@/lib/expenses";

// 실습용 메모리 저장소라 서버를 다시 시작하면 초기화된다.
const store = globalThis.pocketStore ??= {
  expenses: structuredClone(defaultExpenses),
  budget: 300000,
};

export function getExpenses() {
  return structuredClone(store.expenses);
}

export function getExpense(id) {
  return store.expenses.find((expense) => expense.id === id);
}

export function addExpense(data) {
  const expense = { id: crypto.randomUUID(), ...data };
  store.expenses.unshift(expense);
  return expense;
}

export function deleteExpense(id) {
  const index = store.expenses.findIndex((expense) => expense.id === id);
  if (index === -1) return false;
  store.expenses.splice(index, 1);
  return true;
}

export function getBudget() {
  return store.budget;
}

export function updateBudget(amount) {
  store.budget = amount;
}
