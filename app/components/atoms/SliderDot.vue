<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    class="w-3 h-3 rounded-full transition-colors"
    :class="active ? 'bg-[var(--accent)]' : 'bg-[var(--text-muted)]'"
  />
</template>
