<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'outline'
  href?: string
  tag?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : tag ?? 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
    :class="[
      variant === 'outline'
        ? 'border border-[var(--btn-border)] text-[var(--btn-border)] hover:bg-[var(--btn-bg)] hover:text-[var(--btn-text)]'
        : 'bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90'
    ]"
  >
    <slot />
  </component>
</template>
