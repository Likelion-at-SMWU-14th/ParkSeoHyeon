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
    <span class="item-title">{{ expense.text }}</span>
    <span class="category" :class="{ cafe: expense.category === '카페', shopping: expense.category === '쇼핑', transport: expense.category === '교통' }">{{ expense.category }}</span>
    <strong>{{ expense.amount.toLocaleString() }}원</strong>
    <button type="button" :aria-label="`${expense.text} 지출 삭제`" @click="emit('remove', expense.id)">×</button>
  </li>
</template>

<style scoped>
li { display: flex; align-items: center; gap: 14px; padding: 17px 0; border-bottom: 1px solid #f0f1f4; }
li:last-child { border-bottom: 0; }
.item-title { font-size: 13px; font-weight: 500; overflow-wrap: anywhere; min-width: 0; }
.category { flex-shrink: 0; font-size: 10px; color: #7c795f; background: #f6f3e7; padding: 4px 7px; border-radius: 5px; }
.cafe { background: #f5ece6; color: #92735d; } .shopping { background: #f1eaf5; color: #8a7399; } .transport { background: #eaf0f7; color: #6b83a0; }
strong { margin-left: auto; font-size: 14px; font-weight: 650; white-space: nowrap; letter-spacing: -.3px; font-variant-numeric: tabular-nums; }
button { width: 30px; height: 30px; flex-shrink: 0; padding: 0; border: 0; border-radius: 6px; background: transparent; color: #b3b8c1; font-size: 19px; }
button:hover { color: #a95676; background: #fceff4; }
@media (max-width: 400px) { li { gap: 8px; } .item-title { font-size: 12px; } strong { font-size: 12px; } }
</style>
