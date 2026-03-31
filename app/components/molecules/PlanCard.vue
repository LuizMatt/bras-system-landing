<script setup lang="ts">
import type { Package } from '~/composables/usePackages'

const props = defineProps<{
  plan: Package
}>()

const { planLink } = useWhatsApp()
</script>

<template>
  <div class="bg-[var(--bg-surface)] rounded-xl p-8 flex flex-col items-center text-center">
    <h3 class="text-xl font-bold text-[var(--text-primary)] mb-2">{{ plan.name }}</h3>
    <p class="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">{{ plan.description }}</p>
    <PriceTag :price="Number(plan.price)" class="mb-8" />
    <AppButton variant="primary" :href="planLink(plan.name, Number(plan.price))">
      <AppIcon icon="mdi-whatsapp" />
      Consultar
    </AppButton>
  </div>
</template>
