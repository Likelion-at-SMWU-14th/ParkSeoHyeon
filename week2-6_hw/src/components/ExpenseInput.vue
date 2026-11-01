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
    <div class="field text-field"><label for="expense-text">지출 내용</label>
    <input
      id="expense-text"
      v-model="newText"
      type="text"
      aria-label="지출 내용"
      placeholder="어디에 썼나요?"
      required
    />
    </div><div class="field"><label for="expense-amount">금액</label>
    <input
      id="expense-amount"
      v-model.number="newAmount"
      type="number"
      aria-label="지출 금액"
      placeholder="금액 (원)"
      min="1"
      step="1"
      required
    />
    </div><div class="field"><label for="expense-category">카테고리</label>
    <select id="expense-category" v-model="newCategory" aria-label="카테고리">
      <option value="식비">식비</option>
      <option value="카페">카페</option>
      <option value="교통">교통</option>
      <option value="쇼핑">쇼핑</option>
      <option value="기타">기타</option>
    </select></div>
    <button type="submit">추가</button>
  </form>
</template>

<style scoped>
form { display: grid; grid-template-columns: 1.6fr 1fr 1fr auto; gap: 8px; align-items: end; }
.field { min-width: 0; }
label { display: block; font-size: 11px; color: #777d88; margin-bottom: 8px; }
input, select { width: 100%; height: 42px; padding: 10px 11px; border: 1px solid #e6e8ed; border-radius: 8px; background: white; color: #343640; font-size: 12px; }
input::placeholder { color: #a0a5af; }
button { height: 42px; padding: 0 20px; border: 0; border-radius: 8px; background: #eed6e1; color: #654959; font-weight: 700; font-size: 12px; white-space: nowrap; }
button:hover { background: #e5c0d1; }
@media (max-width: 600px) { form { grid-template-columns: 1fr 1fr; gap: 12px; } .text-field { grid-column: 1 / -1; } button { grid-column: 1 / -1; margin-top: 2px; } }
</style>
