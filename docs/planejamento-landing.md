# 📋 Planejamento — Bras System Landing Page

## Visão Geral

Landing page pública do Bras System. Consome a API do backend (rotas públicas, sem auth).
Conteúdo dinâmico: slider de imagens e planos/pacotes. Restante é estático.

---

## Seções da Página

| # | Seção | Organismo | Fonte dos dados |
|---|---|---|---|
| 1 | Navbar | `AppNavbar.vue` | Estático |
| 2 | Hero / Slider | `HeroSlider.vue` | `GET /api/slider-images/active` |
| 3 | Sobre / Diferenciais | `AboutSection.vue` | Estático |
| 4 | Planos | `PricingSection.vue` | `GET /api/packages/active` |
| 5 | FAQ | `FaqSection.vue` | Estático |
| 6 | Contato / CTA Final | `ContactSection.vue` | Estático |
| 7 | Footer | `AppFooter.vue` | Estático |

---

## Detalhamento por Seção

### 1. Navbar — `AppNavbar.vue`

- Logo: placeholder texto (substituir por imagem depois)
- Links âncora: Início, Sobre, Planos, FAQ, Contato
- CTA: botão "Fale Conosco" → WhatsApp
- Comportamento: fixa no topo (sticky), responsiva com menu hambúrguer no mobile

### 2. Hero / Slider — `HeroSlider.vue`

- Carrossel automático com as imagens do backend
- API: `GET /api/slider-images/active`
- URL da imagem: `{API_BASE_SEM_API}/{image_url}` (ex: `http://localhost:3000/uploads/slider/arquivo.webp`)
- Alt text vem da response
- Transição suave entre slides
- Indicadores (dots) de navegação

**Atoms/Molecules necessários:**
- `SliderDot.vue` (atom) — indicador de slide ativo/inativo
- `SliderSlide.vue` (molecule) — imagem + alt text

### 3. Sobre / Diferenciais — `AboutSection.vue`

- Título + subtítulo
- Grid de cards com ícone MDI + título + descrição curta
- Conteúdo estático (hardcoded)
- Textos placeholder para substituir depois

**Atoms/Molecules necessários:**
- `SectionTitle.vue` (atom) — título + subtítulo reutilizável
- `FeatureCard.vue` (molecule) — ícone + título + texto

### 4. Planos — `PricingSection.vue`

- Cards dos planos vindos do backend
- API: `GET /api/packages/active`
- Cada card mostra: nome, descrição, preço (R$ X,XX/mês)
- Botão "Consultar" → abre WhatsApp com mensagem formatada

**Mensagem WhatsApp:**
```
Olá! Tenho interesse no plano {nome} (R$ {preço}/mês). Gostaria de mais informações.
```

**Link:** `https://wa.me/5583993409288?text={mensagem_encoded}`

**Atoms/Molecules necessários:**
- `PriceTag.vue` (atom) — exibe "R$ 49,90 /mês"
- `PlanCard.vue` (molecule) — nome + descrição + PriceTag + botão

### 5. FAQ — `FaqSection.vue`

- Accordion com perguntas e respostas
- Conteúdo estático (placeholder)
- Expandir/colapsar ao clicar

**Atoms/Molecules necessários:**
- `FaqItem.vue` (molecule) — pergunta clicável + resposta colapsável

### 6. Contato / CTA Final — `ContactSection.vue`

- Chamada final tipo "Pronto para começar?"
- Botão grande → WhatsApp
- Informações de contato (telefone, email — placeholder)

### 7. Footer — `AppFooter.vue`

- Copyright © 2025 Bras System
- Links: Início, Planos, Contato
- Ícones de redes sociais (placeholder)

---

## Mapa de Componentes — Atomic Design

### Atoms (`components/atoms/`)

| Componente | Uso |
|---|---|
| `AppIcon.vue` | Ícone MDI reutilizável |
| `AppButton.vue` | Botão genérico com variantes |
| `SectionTitle.vue` | Título + subtítulo de seção |
| `SliderDot.vue` | Indicador de slide |
| `PriceTag.vue` | Exibição de preço formatado |

### Molecules (`components/molecules/`)

| Componente | Composição |
|---|---|
| `SliderSlide.vue` | Imagem + alt text |
| `FeatureCard.vue` | AppIcon + título + texto |
| `PlanCard.vue` | Nome + descrição + PriceTag + AppButton |
| `FaqItem.vue` | Pergunta + resposta colapsável |
| `NavLink.vue` | Link âncora da navbar |

### Organisms (`components/organisms/`)

| Componente | Composição |
|---|---|
| `AppNavbar.vue` | Logo + NavLinks + AppButton (CTA) |
| `HeroSlider.vue` | SliderSlides + SliderDots |
| `AboutSection.vue` | SectionTitle + FeatureCards |
| `PricingSection.vue` | SectionTitle + PlanCards |
| `FaqSection.vue` | SectionTitle + FaqItems |
| `ContactSection.vue` | SectionTitle + AppButton + info |
| `AppFooter.vue` | Links + ícones + copyright |

---

## Composables

| Composable | Responsabilidade |
|---|---|
| `useSliderImages.ts` | Fetch das imagens ativas do slider |
| `usePackages.ts` | Fetch dos planos/pacotes ativos |
| `useWhatsApp.ts` | Gera link `wa.me` com mensagem formatada |

---

## API — Rotas Consumidas

| Rota | Método | Uso |
|---|---|---|
| `/api/slider-images/active` | GET | Hero slider |
| `/api/packages/active` | GET | Seção de planos |

**Base URL:** `runtimeConfig.public.apiBase` → `http://localhost:3000/api`

**Imagens estáticas:** O backend serve via `express.static` na rota `/uploads`.
URL completa: `http://localhost:3000` + `image_url` (ex: `/uploads/slider/arquivo.webp`).

Criar token `uploadsBase` no runtimeConfig: `http://localhost:3000` (sem `/api`).

---

## WhatsApp

- **Número:** 5583993409288
- **Link base:** `https://wa.me/5583993409288`
- **Mensagem padrão (CTA geral):** `Olá! Gostaria de mais informações sobre os serviços da Bras System.`
- **Mensagem plano:** `Olá! Tenho interesse no plano {nome} (R$ {preço}/mês). Gostaria de mais informações.`

---

## Fases de Desenvolvimento

### Fase 1 — Setup Inicial ⬅️ ATUAL
- [x] Criar projeto Nuxt 4
- [ ] Instalar dependências (tailwindcss module, mdi, vue-sonner)
- [ ] Configurar nuxt.config.ts, tailwind.config.ts, main.css
- [ ] Criar estrutura de pastas (atoms, molecules, organisms, composables, layouts, pages)
- [ ] Criar app.vue, default.vue layout, index.vue placeholder

### Fase 2 — Atoms & Molecules Base
- [ ] AppIcon, AppButton, SectionTitle, SliderDot, PriceTag
- [ ] NavLink, FeatureCard, PlanCard, FaqItem, SliderSlide

### Fase 3 — Organisms & Composables
- [ ] useSliderImages, usePackages, useWhatsApp
- [ ] AppNavbar (desktop + mobile)
- [ ] HeroSlider
- [ ] AboutSection
- [ ] PricingSection
- [ ] FaqSection
- [ ] ContactSection
- [ ] AppFooter

### Fase 4 — Integração & Ajustes
- [ ] Conectar com API real
- [ ] Testar responsividade
- [ ] Ajustar espaçamentos e transições
- [ ] Substituir textos placeholder

### Fase 5 — SEO & Deploy
- [ ] Meta tags, Open Graph, favicon
- [ ] Configurar para VPS Hostinger
- [ ] Build de produção
- [ ] Variáveis de ambiente de produção

---

## Configuração de Produção (VPS Hostinger)

- Build: `nuxt build` (SSR) ou `nuxt generate` (SSG) — definir depois
- `API_BASE` de produção: apontar para domínio real
- CORS no backend: liberar domínio da landing
- Proxy reverso (Nginx) para servir a landing e o backend
