<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()

const open = ref(false)
</script>

<template>
  <div class="border border-[var(--border-light)] rounded-lg overflow-hidden">
    <button
      class="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
      @click="open = !open"
    >
      <span class="font-medium text-[var(--text-dark)]">{{ question }}</span>
      <AppIcon
        :icon="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        class="text-[var(--accent)] shrink-0 ml-4"
      />
    </button>
    <div
      v-show="open"
      class="px-6 pb-4 text-sm text-[var(--text-subtle)] leading-relaxed"
    >
      {{ answer }}
    </div>
  </div>
</template>
