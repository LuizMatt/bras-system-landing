<script setup lang="ts">
const { packages, loading, fetchActive } = usePackages()

onMounted(() => fetchActive())
</script>

<template>
  <section id="planos" class="py-20 bg-[var(--bg-base)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Nossos Planos"
        subtitle="Escolha o plano ideal para a segurança do seu veículo."
        light
      />
      <div
        v-if="!loading && packages.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <PlanCard v-for="plan in packages" :key="plan.id" :plan="plan" />
      </div>
    </div>
  </section>
</template>
