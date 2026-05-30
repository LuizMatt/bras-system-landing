const IOS_URL = 'https://apps.apple.com/br/app/ssx-mobile/id1556904614'
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=br.com.systemsat.ssxmobile'

export function useAppDownload() {
  const isMobile = computed(() => {
    if (import.meta.server) return false
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent)
  })

  const appLink = computed(() => {
    if (import.meta.server) return IOS_URL
    const ua = navigator.userAgent
    if (/android/i.test(ua)) return ANDROID_URL
    return IOS_URL
  })

  return {
    isMobile,
    appLink
  }
}
