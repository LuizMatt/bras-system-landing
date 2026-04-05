export interface Package {
  id: string
  name: string
  subtitle: string
  price: number
  features: string[]
  is_featured: boolean
  is_active: boolean
  display_order: number
}

export function usePackages() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase as string

  const packages = ref<Package[]>([])
  const loading = ref(false)

  async function fetchActive() {
    loading.value = true
    try {
      packages.value = await $fetch<Package[]>(`${apiBase}/packages/active`)
    } finally {
      loading.value = false
    }
  }

  return { packages, loading, fetchActive }
}
