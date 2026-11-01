<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);

const newText = ref("");
const newAmount = ref("");
const newCategory = ref("식비");

function submitExpense() {
  const text = newText.value.trim();
  const amount = Number(newAmount.value);

  if (!text || !Number.isFinite(amount) || amount <= 0) {
    return;
  }

  emit("add", {
    text,
    amount,
    category: newCategory.value,
  });

  newText.value = "";
  newAmount.value = "";
}
</script>

<template>
  <form @submit.prevent="submitExpense">
    <input
      v-model="newText"
      type="text"
      aria-label="지출 내용"
      placeholder="어디에 썼나요?"
      required
    />
    <input
      v-model.number="newAmount"
      type="number"
      aria-label="지출 금액"
      placeholder="금액"
      min="1"
      step="1"
      required
    />
    <select v-model="newCategory" aria-label="카테고리">
      <option value="식비">식비</option>
      <option value="카페">카페</option>
      <option value="교통">교통</option>
      <option value="쇼핑">쇼핑</option>
      <option value="기타">기타</option>
    </select>
    <button type="submit">추가</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

input,
select,
button {
  padding: 10px;
}

button {
  cursor: pointer;
}
</style>
