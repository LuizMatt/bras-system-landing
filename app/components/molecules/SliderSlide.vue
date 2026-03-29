<script setup lang="ts">
defineProps<{
  src: string
  mobileSrc?: string | null
  alt: string
}>()
</script>

<template>
  <picture class="absolute inset-0">
    <source v-if="mobileSrc" :srcset="mobileSrc" media="(max-width: 767px)" />
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
    />
  </picture>
</template>
