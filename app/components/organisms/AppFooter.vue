<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  { to: '#inicio', label: 'Início' },
  { to: '#sobre', label: 'Sobre' },
  { to: '#planos', label: 'Planos' },
  { to: '#contato', label: 'Contato' },
]

const socials = [
  { label: 'Instagram', icon: 'mdi-instagram', href: '#' },
  { label: 'Contato WhatsApp', icon: 'mdi-whatsapp', href: 'https://wa.me/5583993409288' },
]

function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-[var(--bg-footer)] pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Colunas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        <!-- Marca -->
        <div>
          <h4 class="text-[var(--text-primary)] font-bold mb-3">Bras System</h4>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">
            Rastreamento e recuperação veicular com tecnologia e agilidade desde 2025.
          </p>
        </div>

        <!-- Links úteis -->
        <div>
          <h4 class="text-[var(--text-primary)] font-bold mb-3">Links úteis</h4>
          <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                @click.prevent="scrollTo(link.to)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div>
          <h4 class="text-[var(--text-primary)] font-bold mb-3">Redes sociais</h4>
          <ul class="flex flex-col gap-2">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {{ s.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div>
          <h4 class="text-[var(--text-primary)] font-bold mb-3">Informações para contato</h4>
          <ul class="flex flex-col gap-3 text-sm text-[var(--text-muted)]">
            <li class="flex items-center gap-2">
              <AppIcon icon="mdi-phone" class="text-[var(--accent)]" />
              (83) 99340-9288
            </li>
            <li class="flex items-center gap-2">
              <AppIcon icon="mdi-email-outline" class="text-[var(--accent)]" />
              contato@brassystem.com.br
            </li>
            <li class="flex items-center gap-2">
              <AppIcon icon="mdi-map-marker-outline" class="text-[var(--accent)]" />
              Campina Grande - PB
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider + Copyright -->
      <div class="border-t border-[var(--border)] pt-6 text-center">
        <p class="text-xs text-[var(--text-muted)]">
          &copy; {{ year }} Bras System. Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
</template>
