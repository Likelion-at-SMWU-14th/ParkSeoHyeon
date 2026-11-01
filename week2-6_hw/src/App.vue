<script setup>
import { ref } from "vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import ExpenseItem from "./components/ExpenseItem.vue";

const expenses = ref([
  { id: 1, text: "점심", amount: 9000, category: "식비" },
  { id: 2, text: "아이스 아메리카노", amount: 4500, category: "카페" },
  { id: 3, text: "버스", amount: 1500, category: "교통" },
]);

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
</style>
