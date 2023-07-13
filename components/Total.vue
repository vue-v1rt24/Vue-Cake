<script setup lang="ts">
defineProps<{
  total: number;
}>();
</script>

<template>
  <div class="total">
    <span class="total__price">{{ total }} ₽</span>
    <button>Заказать</button>
  </div>
</template>

<style lang="css" scoped>
.total {
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding: 30px;
}

.total__price {
  font-size: 24px;
}
</style>
