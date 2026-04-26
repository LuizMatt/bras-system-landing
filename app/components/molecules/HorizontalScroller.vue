<script setup lang="ts">
const container = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

function updateArrows() {
  const el = container.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function scroll(direction: 'left' | 'right') {
  const el = container.value
  if (!el) return
  const amount = el.clientWidth * 0.8
  el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
}

onMounted(() => {
  container.value?.addEventListener('scroll', updateArrows, { passive: true })
  updateArrows()
})

onUnmounted(() => {
  container.value?.removeEventListener('scroll', updateArrows)
})
</script>

<template>
  <div class="relative sm:hidden">
    <div
      ref="container"
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
    >
      <slot />
    </div>

    <button
      v-show="canScrollLeft"
      class="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow"
      @click="scroll('left')"
    >
      <AppIcon icon="mdi-chevron-left" size="text-xl" />
    </button>

    <button
      v-show="canScrollRight"
      class="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow"
      @click="scroll('right')"
    >
      <AppIcon icon="mdi-chevron-right" size="text-xl" />
    </button>
  </div>
</template>
