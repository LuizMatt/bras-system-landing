<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  light?: boolean
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2
      class="text-3xl md:text-4xl font-bold"
      :class="light ? 'text-[var(--text-primary)]' : 'text-[var(--text-dark)]'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-3 text-lg"
      :class="light ? 'text-[var(--text-muted)]' : 'text-[var(--text-subtle)]'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
