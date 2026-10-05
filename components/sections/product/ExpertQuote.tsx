export default function ExpertQuote() {
  return (
    <section className="bg-surface-card py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="font-body text-xs text-text-secondary uppercase tracking-widest opacity-60">전문가 자문</span>
          <h2 className="font-heading font-bold text-2xl text-text-primary mt-2">어떻게 맛을 검증하나요?</h2>
        </div>
        <blockquote className="bg-surface-base rounded-2xl px-8 py-6 border border-border-line">
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            개발 단계에서는 사과 향, 이취(異臭), 바삭함·촉촉함, 입안의 까슬함 등 구체적 특성을 평가하고,
            최종 소비자 평가에서는 외관·향미·맛·식감·전반적 기호도를 7점 척도로 측정합니다.
          </p>
          <footer className="mt-4 font-body text-xs text-text-secondary opacity-70">
            — 노준희 교수 · 경북대학교 식품영양학과, 관능평가 방법론 자문 (2025)
          </footer>
        </blockquote>
        <p className="font-body text-xs text-text-secondary mt-4 text-center opacity-60">
          경북대학교 식품영양학과 실험실 관능평가 → 한국식품과학연구원 영양분 분석 순으로 검증합니다.
        </p>
      </div>
    </section>
  )
}
