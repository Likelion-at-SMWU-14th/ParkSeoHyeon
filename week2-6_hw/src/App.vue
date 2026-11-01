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
    <h1>나의 가계부</h1>
    <p v-if="storageError" class="exceeded" role="alert">{{ storageError }}</p>

    <section class="summary" aria-label="예산과 지출 요약">
      <label for="budget">예산 (원)</label>
      <input
        id="budget"
        v-model.number="budget"
        type="number"
        min="0"
        step="1"
      />
      <p>총지출: <strong>{{ totalExpense.toLocaleString() }}원</strong></p>
      <p :class="{ exceeded: remainingBudget < 0 }">
        남은 예산: <strong>{{ remainingBudget.toLocaleString() }}원</strong>
      </p>
      <p v-if="remainingBudget < 0" class="exceeded">
        예산을 {{ Math.abs(remainingBudget).toLocaleString() }}원 초과했어요.
      </p>
    </section>

    <ExpenseInput @add="addExpense" />

    <div class="filter">
      <label for="category-filter">카테고리</label>
      <select id="category-filter" v-model="selectedCategory">
        <option value="전체">전체</option>
        <option value="식비">식비</option>
        <option value="카페">카페</option>
        <option value="교통">교통</option>
        <option value="쇼핑">쇼핑</option>
        <option value="기타">기타</option>
      </select>
      <span>{{ filteredExpenses.length }}건</span>
    </div>

    <p v-if="expenses.length === 0" class="empty-message">
      아직 지출 내역이 없어요. 첫 지출을 기록해보세요!
    </p>
    <p v-else-if="filteredExpenses.length === 0" class="empty-message">
      {{ selectedCategory }} 카테고리에 지출 내역이 없어요.
    </p>
    <ul v-else>
      <ExpenseItem
        v-for="expense in filteredExpenses"
        :key="expense.id"
        :expense="expense"
        @remove="removeExpense"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 60px auto;
  padding: 24px;
}

ul {
  padding: 0;
  list-style: none;
}

.summary {
  padding: 20px;
  margin-bottom: 24px;
  background: #f5f5f5;
  border-radius: 12px;
}

.summary input {
  width: 140px;
  padding: 10px;
  margin-left: 8px;
}

.exceeded {
  color: #b42318;
}

.filter {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.filter select {
  padding: 10px;
}

.empty-message {
  padding: 24px 0;
  color: #666;
  text-align: center;
}
</style>
