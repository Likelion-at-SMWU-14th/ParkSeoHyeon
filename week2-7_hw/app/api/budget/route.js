import { getBudget, updateBudget } from "@/lib/server/expenses";

export async function GET() {
  return Response.json({ budget: getBudget() });
}

export async function PUT(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "요청 형식이 올바르지 않아요." }, { status: 400 });
  }
  if (!body || !Number.isSafeInteger(body.budget) || body.budget < 0) {
    return Response.json({ message: "예산은 0 이상의 정수로 입력해주세요." }, { status: 400 });
  }
  updateBudget(body.budget);
  return Response.json({ budget: getBudget() });
}
