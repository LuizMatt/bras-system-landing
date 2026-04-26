<script setup lang="ts">
import type { Package } from '~/composables/usePackages'

const props = defineProps<{
  plan: Package
}>()

const { planLink } = useWhatsApp()
</script>

<template>
  <div
    class="relative rounded-xl p-8 flex flex-col transition-all duration-300"
    :class="plan.is_featured
      ? 'border-[1.5px] border-[var(--accent)] bg-[var(--bg-card)] shadow-[0_0_20px_rgba(26,125,196,0.15)]'
      : 'border border-[var(--border-light)] bg-[var(--bg-card)]'"
  >
    <!-- Badge destaque -->
    <span
      v-if="plan.is_featured"
      class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
    >
      Mais Popular
    </span>

    <!-- Header -->
    <h3 class="text-lg font-bold text-[var(--text-dark)]">{{ plan.name }}</h3>
    <p class="text-sm text-[var(--text-subtle)] mt-1">{{ plan.subtitle }}</p>

    <!-- Preço -->
    <PriceTag :price="Number(plan.price)" class="mt-4 mb-6" />

    <!-- Features -->
    <ul v-if="plan.features?.length" class="flex flex-col gap-2.5 mb-8 flex-1">
      <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-sm text-[var(--text-subtle)]">
        <span class="text-[var(--accent)] mt-0.5">•</span>
        {{ feature }}
      </li>
    </ul>

    <!-- CTA -->
    <AppButton
      :variant="plan.is_featured ? 'primary' : 'outline'"
      :href="planLink(plan.name, Number(plan.price))"
      class="w-full justify-center"
    >
      Consultar
    </AppButton>
  </div>
</template>
