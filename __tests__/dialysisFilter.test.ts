import { sortByDialysisType } from '@/lib/dialysisFilter'
import { PRODUCTS, Product } from '@/lib/products'

const HIGH: Product = {
  ...PRODUCTS[0], id: 'high', name: '고칼륨 과자',
  potassium: 400, sodium: 200, phosphorus: 300,
}
const LOW: Product = {
  ...PRODUCTS[0], id: 'low', name: '저칼륨 과자',
  potassium: 50, sodium: 10, phosphorus: 'low',
}
const MID: Product = {
  ...PRODUCTS[0], id: 'mid', name: '중간 과자',
  potassium: 200, sodium: 100, phosphorus: 150,
}

const SAMPLE = [HIGH, MID, LOW]

describe('sortByDialysisType', () => {
  it('all: 원본 순서 유지', () => {
    const result = sortByDialysisType(SAMPLE, 'all')
    expect(result.map(p => p.id)).toEqual(['high', 'mid', 'low'])
  })

  it('hemodialysis: 칼륨+나트륨+인 합산 낮은 순 정렬', () => {
    const result = sortByDialysisType(SAMPLE, 'hemodialysis')
    expect(result[0].id).toBe('low')
    expect(result[2].id).toBe('high')
  })

  it('peritoneal: 나트륨+인 낮은 순 정렬', () => {
    const result = sortByDialysisType(SAMPLE, 'peritoneal')
    expect(result[0].id).toBe('low')
  })

  it('ckd_conservative: 나트륨 낮은 순 정렬', () => {
    const result = sortByDialysisType(SAMPLE, 'ckd_conservative')
    expect(result[0].sodium).toBeLessThanOrEqual(result[1].sodium)
  })

  it('원본 배열을 변경하지 않음 (부수효과 없음)', () => {
    const original = SAMPLE.map(p => p.id)
    sortByDialysisType(SAMPLE, 'hemodialysis')
    expect(SAMPLE.map(p => p.id)).toEqual(original)
  })
})
