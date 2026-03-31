<script setup lang="ts">
const features = [
  {
    icon: 'mdi-crosshairs-gps',
    title: 'Rastreamento em Tempo Real',
    description: 'Acompanhe a localização exata do seu veículo 24 horas por dia, direto do seu celular.',
  },
  {
    icon: 'mdi-car-search',
    title: 'Recuperação de Veículos',
    description: 'Equipe especializada na busca e recuperação do seu veículo em caso de furto ou roubo.',
  },
  {
    icon: 'mdi-shield-car',
    title: 'Proteção Total',
    description: 'Sistema de bloqueio remoto e alertas instantâneos para manter seu veículo sempre seguro.',
  },
  {
    icon: 'mdi-headset',
    title: 'Central 24h',
    description: 'Suporte e monitoramento ininterrupto com atendimento rápido quando você mais precisa.',
  },
]
</script>

<template>
  <section id="sobre" class="py-20 bg-[var(--bg-page)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Por que escolher a Bras System?"
        subtitle="Tecnologia e agilidade para proteger o que é seu."
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard v-for="f in features" :key="f.title" v-bind="f" />
      </div>
    </div>
  </section>
</template>
