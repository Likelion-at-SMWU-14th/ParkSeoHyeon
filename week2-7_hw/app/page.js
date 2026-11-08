import { connection } from "next/server";
import ExpenseDashboard from "@/components/ExpenseDashboard";
import { getBudget, getExpenses } from "@/lib/server/expenses";

export default async function Home() {
  await connection();
  const expenses = getExpenses();
  const budget = getBudget();

  return <ExpenseDashboard expenses={expenses} initialBudget={budget} />;
}
