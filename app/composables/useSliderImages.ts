export interface SliderImage {
  id: string
  image_url: string
  mobile_image_url: string | null
  alt_text: string
  display_order: number
  is_active: boolean
}

export function useSliderImages() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase as string
  const uploadsBase = config.public.uploadsBase as string

  const images = ref<SliderImage[]>([])
  const loading = ref(false)

  function getImageUrl(path: string) {
    return `${uploadsBase}${path}`
  }

  async function fetchActive() {
    loading.value = true
    try {
      images.value = await $fetch<SliderImage[]>(`${apiBase}/slider-images/active`)
    } finally {
      loading.value = false
    }
  }

  return { images, loading, fetchActive, getImageUrl }
}
