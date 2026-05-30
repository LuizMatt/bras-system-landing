<script setup lang="ts">
const links = [
  { to: '#inicio', label: 'Início' },
  { to: '#planos', label: 'Planos' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#faq', label: 'FAQ' },
  { to: '#contato', label: 'Contato' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

const { defaultLink: whatsappLink } = useWhatsApp()
const { appLink, isMobile } = useAppDownload()

const CLIENT_LOGIN_URL = 'https://family.systemsatx.com.br/Login/'

const clientLink = computed(() => isMobile.value ? appLink.value : CLIENT_LOGIN_URL)

function scrollTo(hash: string) {
  mobileOpen.value = false
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
    :class="scrolled 
      ? 'bg-[#0d1b2e]/95 border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.25),0_1px_0_rgba(26,125,196,0.15)]' 
      : 'bg-[#0d1b2e]/80 border-transparent'"
  >
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center justify-between h-16">
        <div class="flex-1 flex justify-start">
          <a href="#inicio" @click.prevent="scrollTo('#inicio')" class="flex-shrink-0">
            <img src="~/assets/images/bs-logo.png" alt="Brasystem" class="h-10" />
          </a>
        </div>

        <div class="hidden md:flex items-center justify-center gap-6 flex-shrink-0">
          <NavLink
            v-for="link in links"
            :key="link.to"
            v-bind="link"
            @click.prevent="scrollTo(link.to)"
          />
        </div>

        <div class="hidden md:flex flex-1 justify-end items-center gap-3">
          <a
            :href="clientLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-[var(--text-primary)] border border-[var(--border)] rounded-lg transition-all duration-300 whitespace-nowrap hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(26,125,196,0.08)]"
          >
            <AppIcon icon="mdi-login" size="text-base" />
            Rastreie seu veículo!
          </a>

          <AppButton variant="primary" :href="whatsappLink" class="relative !overflow-visible">
            <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
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

    <Transition
      enter-active-class="transition duration-300 ease-out origin-top"
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in origin-top"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[var(--bg-base)]/95 backdrop-blur-md border-t border-[var(--border)]"
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
            Rastreie seu veículo!
          </AppButton>
          <AppButton variant="primary" :href="whatsappLink">
            <AppIcon icon="mdi-whatsapp" />
            Fale Conosco
          </AppButton>
        </div>
      </div>
    </Transition>
  </nav>
</template>
