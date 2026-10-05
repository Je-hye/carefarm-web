const STEPS = [
  { icon: '🧪', label: '레시피 설계', sub: '베이킹 파우더·염분 무첨가 원칙' },
  { icon: '🔬', label: '실험실 관능평가', sub: '경북대 식품영양학과 실험실' },
  { icon: '📋', label: '영양분 분석', sub: '한국식품과학연구원 공인 실측' },
  { icon: '✅', label: '레시피 확정', sub: '성분 수치 전면 표기' },
]

const LEGAL_NOTE =
  '일반식품으로 출시하므로 "신장에 좋다", "투석환자용" 등 효능·효과 주장은 법적으로 표기할 수 없습니다. 대신 칼륨·인·나트륨 함량을 1회 제공량 기준으로 직접 표기해 환자와 보호자가 직접 판단할 수 있도록 합니다.'

export default function RecipeVerification() {
  return (
    <section className="bg-surface-base py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="font-body text-xs text-text-secondary uppercase tracking-widest opacity-60">검증 프로세스</span>
          <h2 className="font-heading font-bold text-2xl text-text-primary mt-2">어떻게 만드나요?</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 mb-10">
          {STEPS.map(({ icon, label, sub }, i) => (
            <div key={label} className="flex items-start gap-3 flex-1">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-surface-card border border-border-line flex items-center justify-center text-lg shrink-0">
                  {icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block w-px flex-1 bg-border-line mt-2" />
                )}
              </div>
              <div className="pt-1">
                <p className="font-body text-sm font-medium text-text-primary">{label}</p>
                <p className="font-body text-xs text-text-secondary mt-0.5">{sub}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="hidden md:block text-border-line text-lg mt-2 ml-2">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-surface-muted rounded-xl px-5 py-4 border border-border-line">
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            <span className="font-medium text-text-primary">표기 방침 · </span>
            {LEGAL_NOTE}
          </p>
        </div>
      </div>
    </section>
  )
}
