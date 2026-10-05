import { Product, DialysisType } from './products'

function phosphorusScore(p: Product): number {
  return p.phosphorus === 'low' ? 0 : p.phosphorus
}

export function sortByDialysisType(products: Product[], type: DialysisType): Product[] {
  if (type === 'all') return [...products]

  return [...products].sort((a, b) => {
    if (type === 'hemodialysis') {
      return (a.potassium + a.sodium + phosphorusScore(a)) -
             (b.potassium + b.sodium + phosphorusScore(b))
    }
    if (type === 'peritoneal') {
      return (a.sodium + phosphorusScore(a)) - (b.sodium + phosphorusScore(b))
    }
    if (type === 'ckd_conservative') {
      return a.sodium - b.sodium
    }
    return 0
  })
}
