import { deleteExpense, getExpense } from "@/lib/server/expenses";

export async function GET(request, { params }) {
  const { id } = await params;
  const expense = getExpense(id);
  if (!expense) {
    return Response.json({ message: "지출 내역을 찾을 수 없어요." }, { status: 404 });
  }
  return Response.json(expense);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (!deleteExpense(id)) {
    return Response.json({ message: "이미 삭제되었거나 없는 지출이에요." }, { status: 404 });
  }
  return new Response(null, { status: 204 });
}
