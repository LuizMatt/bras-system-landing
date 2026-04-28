<script setup lang="ts">
const links = [
  { to: '#inicio', label: 'Início' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#planos', label: 'Planos' },
  { to: '#faq', label: 'FAQ' },
  { to: '#contato', label: 'Contato' },
]

const mobileOpen = ref(false)

const { defaultLink: whatsappLink } = useWhatsApp()
const { appLink } = useAppDownload()

function scrollTo(hash: string) {
  mobileOpen.value = false
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-base)] shadow-lg"
  >
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center justify-between h-16">
        <a href="#inicio" @click.prevent="scrollTo('#inicio')">
          <img src="~/assets/images/bs-logo.png" alt="Brasystem" class="h-10" />
        </a>

        <div class="hidden md:flex flex-1 items-center justify-center gap-6">
          <NavLink
            v-for="link in links"
            :key="link.to"
            v-bind="link"
            @click.prevent="scrollTo(link.to)"
          />
          <a
            :href="appLink"
            target="_blank"
            rel="noopener noreferrer"
            title="Baixar aplicativo"
            class="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
          >
            Já é cliente?
          </a>
        </div>

        <div class="hidden md:flex items-center">
          <AppButton variant="primary" :href="whatsappLink">
            <AppIcon icon="mdi-whatsapp" />
            Fale Conosco
          </AppButton>
        </div>

        <button
          class="md:hidden text-[var(--text-primary)]"
          @click="mobileOpen = !mobileOpen"
        >
          <AppIcon :icon="mobileOpen ? 'mdi-close' : 'mdi-menu'" size="text-2xl" />
        </button>
      </div>
    </div>

    <div
      v-if="mobileOpen"
      class="md:hidden bg-[var(--bg-base)] border-t border-[var(--border)]"
    >
      <div class="flex flex-col gap-4 px-4 py-6">
        <NavLink
          v-for="link in links"
          :key="link.to"
          v-bind="link"
          @click.prevent="scrollTo(link.to)"
        />
        <AppButton variant="outline" :href="appLink">
          <AppIcon icon="mdi-cellphone-arrow-down" />
          Já é cliente? Baixar App
        </AppButton>
        <AppButton variant="outline" :href="whatsappLink">
          <AppIcon icon="mdi-whatsapp" />
          Fale Conosco
        </AppButton>
      </div>
    </div>
  </nav>
</template>
