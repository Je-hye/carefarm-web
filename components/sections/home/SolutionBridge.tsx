import Badge from '@/components/ui/Badge'

const FLOW = [
  { icon: '🍎', label: '못난이 사과' },
  { arrow: true },
  { icon: '🍪', label: '사과 쌀쿠키' },
  { arrow: true },
  { icon: '🫀', label: '신장환자' },
]

export default function SolutionBridge() {
  return (
    <section className="bg-surface-muted py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
          세 개의 공백, 하나의 답
        </h2>
        <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
          {FLOW.map((item, i) =>
            'arrow' in item ? (
              <span key={i} className="text-2xl text-border-line">→</span>
            ) : (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-body text-xs text-text-secondary">{item.label}</span>
              </div>
            )
          )}
        </div>
        <Badge color="coral" className="text-sm px-4 py-2">
          저칼륨 · 저인 · 무염 사과 쌀쿠키
        </Badge>
        <p className="font-body text-sm text-text-secondary mt-4">
          1회 제공량 칼륨 100mg 목표
        </p>
      </div>
    </section>
  )
}
