import { calcBarWidth } from '@/lib/nutrientUtils'

describe('calcBarWidth', () => {
  it('정상 범위: value가 dailyLimit의 절반이면 50 반환', () => {
    expect(calcBarWidth(1000, 2000)).toBe(50)
  })

  it('상한 적용: value가 dailyLimit 초과 시 100 반환', () => {
    expect(calcBarWidth(3000, 2000)).toBe(100)
  })

  it('0값: value가 0이면 0 반환', () => {
    expect(calcBarWidth(0, 2000)).toBe(0)
  })

  it('안전 처리: dailyLimit이 0이면 0 반환 (나눗셈 오류 방지)', () => {
    expect(calcBarWidth(100, 0)).toBe(0)
  })

  it('정확한 100%: value와 dailyLimit이 같으면 100 반환', () => {
    expect(calcBarWidth(2000, 2000)).toBe(100)
  })
})
