<script setup lang="ts">
const props = defineProps<{
  price: number
}>()

const formatted = computed(() => {
  const hasCents = props.price % 1 !== 0
  return props.price.toLocaleString('pt-BR', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2
  })
})
</script>

<template>
  <div class="flex items-baseline gap-1">
    <span class="text-base font-bold text-[var(--text-dark)]">R$</span>
    <span class="text-4xl font-bold text-[var(--text-dark)]">{{ formatted }}</span>
    <span class="text-sm font-medium text-[var(--text-subtle)]">/mês</span>
  </div>
</template>
