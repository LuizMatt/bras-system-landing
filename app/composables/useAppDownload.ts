const IOS_URL = 'https://apps.apple.com/br/app/ssx-mobile/id1556904614'
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.systemsatx.ssabordo'

export function useAppDownload() {
  const appLink = computed(() => {
    if (import.meta.server) return IOS_URL
    const ua = navigator.userAgent
    if (/android/i.test(ua)) return ANDROID_URL
    return IOS_URL
  })

  return { appLink }
}
