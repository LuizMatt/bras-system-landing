<script setup lang="ts">
const faqs = [
  {
    question: 'Como funciona o rastreamento veicular?',
    answer: 'Instalamos um dispositivo discreto no seu veículo que envia a localização em tempo real para nossa central e para o seu celular, 24 horas por dia.',
  },
  {
    question: 'O que acontece se meu veículo for roubado?',
    answer: 'Você aciona nossa central 24h imediatamente. Realizamos o bloqueio remoto do veículo e nossa equipe de recuperação entra em ação para localizá-lo e devolvê-lo a você.',
  },
  {
    question: 'O rastreador funciona em qualquer veículo?',
    answer: 'Sim! Nosso sistema é compatível com carros, motos, caminhões e veículos de frota em geral.',
  },
  {
    question: 'Consigo acompanhar pelo celular?',
    answer: 'Sim, você acompanha a localização do seu veículo em tempo real direto pelo aplicativo ou navegador, de qualquer lugar.',
  },
  {
    question: 'Qual o prazo de instalação?',
    answer: 'A instalação é rápida e pode ser agendada conforme sua disponibilidade. Em média, o processo leva menos de 1 hora.',
  },
]
</script>

<template>
  <section id="faq" class="py-20 bg-[var(--bg-page)]">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre nosso serviço de rastreamento."
      />
      <div class="flex flex-col gap-4">
        <FaqItem v-for="faq in faqs" :key="faq.question" v-bind="faq" />
      </div>
    </div>
  </section>
</template>
