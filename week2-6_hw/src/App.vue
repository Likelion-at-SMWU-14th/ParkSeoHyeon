<script setup>
import { computed, ref, watch } from "vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import ExpenseItem from "./components/ExpenseItem.vue";

const STORAGE_KEY = "expense-tracker-data";
const defaultExpenses = [
  { id: 1, text: "점심", amount: 9000, category: "식비" },
  { id: 2, text: "아이스 아메리카노", amount: 4500, category: "카페" },
  { id: 3, text: "버스", amount: 1500, category: "교통" },
];

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (
      saved &&
      Number.isFinite(saved.budget) && saved.budget >= 0 &&
      Array.isArray(saved.expenses) &&
      saved.expenses.every((expense) =>
        expense &&
        (typeof expense.id === "string" || typeof expense.id === "number") &&
        typeof expense.text === "string" &&
        typeof expense.category === "string" &&
        Number.isFinite(expense.amount) && expense.amount > 0,
      )
    ) {
      return saved;
    }
  } catch {
    // 저장된 데이터가 없거나 읽을 수 없으면 기본값으로 시작해요.
  }

  return { expenses: defaultExpenses, budget: 300000 };
}

const savedData = loadData();
const expenses = ref(savedData.expenses);
const budget = ref(savedData.budget);
const storageError = ref("");

const selectedCategory = ref("전체");

watch(
  [expenses, budget],
  () => {
    const amount = Number(budget.value);
    const validBudget = Number.isFinite(amount) && amount >= 0 ? amount : 0;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        expenses: expenses.value,
        budget: validBudget,
      }));
      storageError.value = "";
    } catch {
      storageError.value = "기록을 저장하지 못했어요. 브라우저의 저장 공간 설정을 확인해주세요.";
    }
  },
  { deep: true },
);

const filteredExpenses = computed(() => {
  if (selectedCategory.value === "전체") {
    return expenses.value;
  }

  return expenses.value.filter(
    (expense) => expense.category === selectedCategory.value,
  );
});

const totalExpense = computed(() =>
  expenses.value.reduce((total, expense) => total + expense.amount, 0),
);

const remainingBudget = computed(() => {
  const amount = Number(budget.value);
  const validBudget = Number.isFinite(amount) && amount >= 0 ? amount : 0;
  return validBudget - totalExpense.value;
});

function addExpense(expense) {
  expenses.value.push({
    id: crypto.randomUUID(),
    ...expense,
  });
}

function removeExpense(id) {
  expenses.value = expenses.value.filter((expense) => expense.id !== id);
}
</script>

<template>
  <main>
    <header class="topbar">
      <a href="#" class="brand">pocket<span>.</span></a>
      <span class="save-status"><span class="save-dot"></span>브라우저 자동 저장</span>
    </header>

    <div class="dashboard">
      <header class="intro">
        <div><h1>나의 가계부</h1><p>지출부터 남은 예산까지, 한눈에.</p></div>
        <img src="/characters/heart.png" alt="하트를 안고 있는 배드바츠마루" class="hero-character" />
      </header>
      <p v-if="storageError" class="error" role="alert">{{ storageError }}</p>

      <section class="summary" aria-label="예산과 지출 요약">
        <div class="budget-card">
          <label for="budget">예산 <span class="edit-hint">수정</span></label>
          <div class="budget-field"><input id="budget" v-model.number="budget" aria-label="예산" type="number" min="0" step="1" /><span>원</span></div>
        </div>
        <div class="spent-card"><span class="card-label">총지출</span><p class="money">{{ totalExpense.toLocaleString() }}<span>원</span></p></div>
        <div class="remaining-card" :class="{ 'over-budget': remainingBudget < 0 }"><span class="card-label">남은 예산</span><p class="money">{{ remainingBudget.toLocaleString() }}<span>원</span></p></div>
      </section>
      <p v-if="remainingBudget < 0" class="budget-alert" role="status">예산을 {{ Math.abs(remainingBudget).toLocaleString() }}원 초과했어요.</p>

      <section class="input-panel">
        <h2>지출 추가</h2>
        <ExpenseInput @add="addExpense" />
      </section>

      <section class="history-panel">
        <div class="section-title"><h2>지출 내역 <span class="count">{{ filteredExpenses.length }}</span></h2>
          <select v-model="selectedCategory" aria-label="카테고리 필터"><option value="전체">전체 카테고리</option><option value="식비">식비</option><option value="카페">카페</option><option value="교통">교통</option><option value="쇼핑">쇼핑</option><option value="기타">기타</option></select>
        </div>
        <div v-if="expenses.length === 0" class="empty-message"><p>아직 기록한 지출이 없어요</p><small>위에서 첫 지출을 추가해보세요.</small></div>
        <div v-else-if="filteredExpenses.length === 0" class="empty-message"><p>{{ selectedCategory }} 지출이 없어요</p><small>다른 카테고리를 선택해보세요.</small></div>
        <ul v-else><ExpenseItem v-for="expense in filteredExpenses" :key="expense.id" :expense="expense" @remove="removeExpense" /></ul>
      </section>
    </div>
    <footer>내 소비를 기록하는 가장 작은 습관.</footer>
  </main>
</template>

<style>
* { box-sizing: border-box; }
body { margin: 0; color: #222329; background: #f5f6f8; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "맑은 고딕", sans-serif; -webkit-font-smoothing: antialiased; }
button, input, select { font: inherit; }
button, select { cursor: pointer; }
input, select { min-width: 0; }
input:focus-visible, select:focus-visible, button:focus-visible, a:focus-visible { outline: 3px solid #d4a8bd; outline-offset: 3px; }
button { transition: background .15s, transform .15s; }
button:active { transform: translateY(1px); }
::selection { background: #f5dce7; }
@media (prefers-reduced-motion: reduce) { button { transition: none; } }
</style>

<style scoped>
main { max-width: 808px; margin: 0 auto; padding: 0 24px 24px; }
.topbar { height: 82px; display: flex; align-items: center; justify-content: space-between; padding: 0 3px; }
.brand { font-size: 27px; font-weight: 850; letter-spacing: -1.5px; color: #24252b; text-decoration: none; }
.brand span { color: #d998b4; }
.save-status { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #777d88; }
.save-dot { width: 5px; height: 5px; border-radius: 50%; background: #99ad9d; }
.dashboard { padding: 26px 30px 12px; background: white; border: 1px solid #eceef2; border-radius: 20px; }
.intro { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
h1 { margin: 0 0 8px; font-size: 25px; line-height: 1.3; letter-spacing: -1px; }
.intro p { margin: 0; font-size: 12px; color: #828692; }
.hero-character { width: 70px; height: 70px; object-fit: contain; }
.summary { display: grid; grid-template-columns: 1fr 1fr 1.14fr; gap: 10px; }
.summary > div { min-width: 0; padding: 19px 16px; border-radius: 12px; background: #f5f6f8; }
.summary label, .card-label { font-size: 12px; font-weight: 500; color: #747985; }
.edit-hint { margin-left: 4px; font-size: 9px; padding-bottom: 1px; border-bottom: 1px solid #b4b8c0; color: #8d929c; }
.money, .budget-field { display: flex; align-items: baseline; gap: 3px; margin: 14px 0 0; font-size: clamp(20px, 3vw, 26px); font-weight: 750; letter-spacing: -1px; font-variant-numeric: tabular-nums; }
.money span, .budget-field > span { font-size: 12px; font-weight: 400; letter-spacing: 0; }
.budget-field input { width: 100%; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; letter-spacing: inherit; }
.summary .remaining-card { background: #282932; color: #fff; }
.remaining-card .card-label { color: #d4d5dd; }
.summary .over-budget { background: #fbeaf0; color: #a63e62; }
.over-budget .card-label { color: #a63e62; }
.budget-alert { margin: 12px 0 0; color: #a63e62; font-size: 12px; }
.input-panel { margin-top: 28px; padding: 22px 0 26px; border-top: 1px solid #f0f1f4; border-bottom: 1px solid #f0f1f4; }
h2 { font-size: 15px; font-weight: 700; margin: 0; letter-spacing: -.4px; }
.input-panel h2 { margin-bottom: 16px; }
.history-panel { padding-top: 23px; }
.section-title { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
.section-title select { padding: 8px 10px; border: 1px solid #e9ebef; border-radius: 8px; background: #fff; color: #707581; font-size: 11px; }
.count { margin-left: 4px; color: #969ba5; font-size: 12px; font-weight: 500; }
ul { margin: 0; padding: 0; list-style: none; }
.empty-message { padding: 42px 0; text-align: center; }
.empty-message p { font-size: 13px; color: #707581; margin: 0 0 8px; }
.empty-message small { font-size: 11px; color: #9196a0; }
.error { color: #a63e62; font-size: 12px; }
footer { text-align: center; padding: 20px 0; font-size: 10px; color: #9499a3; }
@media (max-width: 600px) { main { padding: 0 14px 12px; } .topbar { height: 68px; } .dashboard { padding: 22px 18px 8px; border-radius: 16px; } h1 { font-size: 23px; } .hero-character { width: 58px; height: 58px; } .summary { grid-template-columns: 1fr 1fr; gap: 8px; } .summary > div { padding: 17px 14px; } .summary .remaining-card { grid-column: 1 / -1; display: flex; align-items: baseline; justify-content: space-between; } .remaining-card .money { margin: 0; } .money, .budget-field { font-size: 24px; } .input-panel { margin-top: 22px; } }
</style>
