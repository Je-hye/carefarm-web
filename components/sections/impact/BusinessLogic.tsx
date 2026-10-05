const STEPS = [
  { label: '문제 발견', sub: '투석 환자 간식 전무' },
  { label: '공백 확인', sub: '국내 전용 고체 간식 시장 없음' },
  { label: '원료 연결', sub: '경북 못난이 사과 활용' },
  { label: '제품 개발', sub: '저칼륨 사과 쌀쿠키' },
]

export default function BusinessLogic() {
  return (
    <section className="bg-surface-muted py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-10 text-center">
          왜 지금, 왜 케어팜인가
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {STEPS.map(({ label, sub }, i) => (
            <div key={label} className="flex items-center gap-4 flex-1">
              <div className="bg-surface-card border border-border-line rounded-xl p-4 text-center flex-1">
                <p className="font-heading font-bold text-base text-text-primary">{label}</p>
                <p className="font-body text-xs text-text-secondary mt-1">{sub}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-border-line text-xl hidden md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
