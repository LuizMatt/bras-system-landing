<script setup lang="ts">
defineProps<{
  icon: string
  size?: string
}>()
</script>

<template>
  <span :class="['mdi', icon, size ?? 'text-xl']" />
</template>
