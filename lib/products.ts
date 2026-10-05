export type DialysisType = 'all' | 'hemodialysis' | 'peritoneal' | 'ckd_conservative'

export interface Product {
  id: string
  name: string
  weight: string
  potassium: number
  sodium: number
  phosphorus: number | 'low'
  description: string
  gradientFrom: string
  gradientTo: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'apple-rice-cookie-basic',
    name: '사과 쌀쿠키 (기본)',
    weight: '30g',
    potassium: 100,
    sodium: 0,
    phosphorus: 'low',
    description: '경북 못난이 사과로 만든 저칼륨·무염·저인 쌀쿠키. 상온 유통.',
    gradientFrom: 'from-apricot',
    gradientTo: 'to-coral',
  },
]
