<script setup>
import { computed, ref } from "vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import ExpenseItem from "./components/ExpenseItem.vue";

const expenses = ref([
  { id: 1, text: "점심", amount: 9000, category: "식비" },
  { id: 2, text: "아이스 아메리카노", amount: 4500, category: "카페" },
  { id: 3, text: "버스", amount: 1500, category: "교통" },
]);

const budget = ref(300000);

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

    <ul>
      <ExpenseItem
        v-for="expense in expenses"
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
</style>
