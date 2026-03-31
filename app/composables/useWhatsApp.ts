const PHONE = '5583993409288'
const BASE = `https://wa.me/${PHONE}?text=`

export function useWhatsApp() {
  const defaultLink = `${BASE}${encodeURIComponent('Olá! Gostaria de mais informações sobre o rastreamento veicular da Bras System.')}`

  function planLink(name: string, price: number) {
    const formatted = price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const msg = `Olá! Tenho interesse no plano ${name} (R$ ${formatted}/mês). Gostaria de mais informações.`
    return `${BASE}${encodeURIComponent(msg)}`
  }

  return { defaultLink, planLink }
}
