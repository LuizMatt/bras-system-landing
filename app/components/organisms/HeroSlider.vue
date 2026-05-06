<script setup lang="ts">
const { images, loading, fetchActive, getImageUrl } = useSliderImages()

const current = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

function startAutoplay() {
  stopAutoplay()
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.value.length
  }, 5000)
}

function stopAutoplay() {
  if (interval) clearInterval(interval)
}

function goTo(index: number) {
  current.value = index
  startAutoplay()
}

onMounted(async () => {
  await fetchActive()
  if (images.value.length) startAutoplay()
})

onUnmounted(() => stopAutoplay())
</script>

<template>
  <section id="inicio" class="relative h-[60vh] md:h-[80vh] bg-[var(--bg-base)] overflow-hidden">
    <template v-if="!loading && images.length">
      <div
        v-for="(img, i) in images"
        :key="img.id"
        class="absolute inset-0 transition-opacity duration-700"
        :class="i === current ? 'opacity-100' : 'opacity-0'"
      >
        <SliderSlide
          :src="getImageUrl(img.image_url)"
          :mobile-src="img.mobile_image_url ? getImageUrl(img.mobile_image_url) : null"
          :alt="img.alt_text"
        />
      </div>

      <!-- Dots -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <SliderDot
          v-for="(img, i) in images"
          :key="img.id"
          :active="i === current"
          @click="goTo(i)"
        />
      </div>
    </template>
  </section>
</template>
