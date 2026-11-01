<script setup>
defineProps({
  expense: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove"]);
</script>

<template>
  <li>
    <span>{{ expense.text }}</span>
    <span>{{ expense.category }}</span>
    <strong>{{ expense.amount.toLocaleString() }}원</strong>
    <button type="button" @click="emit('remove', expense.id)">삭제</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
}

strong {
  margin-left: auto;
}

button {
  padding: 10px;
  cursor: pointer;
}
</style>
