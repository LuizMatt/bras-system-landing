<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm text-center">
    <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
      <AppIcon :icon="icon" size="text-3xl" class="text-[var(--accent)]" />
    </div>
    <h3 class="text-lg font-semibold text-[var(--text-dark)] mb-2">{{ title }}</h3>
    <p class="text-sm text-[var(--text-subtle)] leading-relaxed">{{ description }}</p>
  </div>
</template>
