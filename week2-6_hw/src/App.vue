<script setup>
import { ref } from "vue";

const expenses = ref([
  { id: 1, text: "점심", amount: 9000, category: "식비" },
  { id: 2, text: "아이스 아메리카노", amount: 4500, category: "카페" },
  { id: 3, text: "버스", amount: 1500, category: "교통" },
]);
</script>

<template>
  <main>
    <h1>나의 가계부</h1>

    <ul>
      <li v-for="expense in expenses" :key="expense.id">
        <span>{{ expense.text }}</span>
        <span>{{ expense.category }}</span>
        <strong>{{ expense.amount.toLocaleString() }}원</strong>
      </li>
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

li {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
}

strong {
  margin-left: auto;
}
</style>
