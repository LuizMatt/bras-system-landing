<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <a
    :href="to"
    class="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
  >
    {{ label }}
  </a>
</template>
