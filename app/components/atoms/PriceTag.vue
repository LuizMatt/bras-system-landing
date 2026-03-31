<script setup lang="ts">
const props = defineProps<{
  price: number
}>()

const formatted = computed(() =>
  props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
)
</script>

<template>
  <div class="flex items-baseline gap-1">
    <span class="text-sm font-medium text-[var(--text-muted)]">R$</span>
    <span class="text-4xl font-bold text-[var(--text-primary)]">{{ formatted }}</span>
    <span class="text-sm font-medium text-[var(--text-muted)]">/mês</span>
  </div>
</template>
