import { categories } from "@/lib/expenses";
import { addExpense, getExpenses } from "@/lib/server/expenses";

export async function GET() {
  return Response.json(getExpenses());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "요청 형식이 올바르지 않아요." }, { status: 400 });
  }

  if (
    !body ||
    typeof body.text !== "string" ||
    !body.text.trim() ||
    body.text.trim().length > 100 ||
    !Number.isSafeInteger(body.amount) ||
    body.amount <= 0 ||
    !categories.includes(body.category)
  ) {
    return Response.json({ message: "내용, 금액, 카테고리를 확인해주세요." }, { status: 400 });
  }

  const expense = addExpense({
    text: body.text.trim(),
    amount: body.amount,
    category: body.category,
  });
  return Response.json(expense, { status: 201 });
}
