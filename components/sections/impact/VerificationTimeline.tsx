const TIMELINE = [
  { status: 'done',    label: '문제 정의 · 시장 조사' },
  { status: 'done',    label: '환자 인터뷰 · 설문 설계' },
  { status: 'active',  label: '레시피 개발 (경북대 식품공학부 협력)' },
  { status: 'pending', label: '전문가 자문 · 성분 검증' },
  { status: 'pending', label: '시제품 생산 · 파일럿 판매' },
]

const STATUS_STYLE = {
  done:    { dot: 'bg-olive', text: '완료' },
  active:  { dot: 'bg-coral', text: '진행 중' },
  pending: { dot: 'bg-border-line', text: '예정' },
}

export default function VerificationTimeline() {
  return (
    <section className="bg-surface-card py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-10 text-center">
          검증 현황
        </h2>
        <ol className="relative border-l border-border-line ml-4">
          {TIMELINE.map(({ status, label }) => {
            const { dot, text } = STATUS_STYLE[status as keyof typeof STATUS_STYLE]
            return (
              <li key={label} className="mb-8 ml-6">
                <span className={`absolute -left-2 w-4 h-4 rounded-full border-2 border-surface-card ${dot}`} />
                <p className="font-body text-sm text-text-primary">{label}</p>
                <span className="font-body text-xs text-text-secondary">{text}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
