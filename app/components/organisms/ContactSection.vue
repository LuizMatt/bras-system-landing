<script setup lang="ts">
const { defaultLink } = useWhatsApp()
</script>

<template>
  <section id="contato" class="py-20 bg-[var(--bg-base)]">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionTitle
        title="Pronto para proteger seu veículo?"
        subtitle="Fale com a gente e tenha rastreamento e recuperação 24 horas."
        light
      />
      <AppButton variant="primary" :href="defaultLink" class="text-base px-8 py-3">
        <AppIcon icon="mdi-whatsapp" size="text-2xl" />
        Fale Conosco
      </AppButton>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[var(--text-muted)] text-sm">
        <span class="flex items-center gap-2">
          <AppIcon icon="mdi-phone" />
          (83) 99340-9288
        </span>
        <span class="flex items-center gap-2">
          <AppIcon icon="mdi-email-outline" />
          contato@brassystem.com.br
        </span>
      </div>
    </div>
  </section>
</template>
