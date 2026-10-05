const ROWS = [
  { nutrient: '칼륨', carefarm: '100mg', general: '400mg 이상', limit: '2,000mg/일' },
  { nutrient: '나트륨', carefarm: '0mg', general: '200mg 이상', limit: '기준 개인 상이' },
  { nutrient: '인', carefarm: '저함유', general: '고함유', limit: '기준 개인 상이' },
]

export default function NutritionTable() {
  return (
    <section className="bg-surface-muted py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-8">
          1회 제공량 기준 성분 비교
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="border-b border-border-line">
                <th className="text-left py-3 pr-4 text-text-secondary font-medium">성분</th>
                <th className="text-left py-3 pr-4 text-text-primary font-medium">케어팜</th>
                <th className="text-left py-3 pr-4 text-text-secondary font-medium">일반 과자</th>
                <th className="text-left py-3 text-text-secondary font-medium">투석 한도</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ nutrient, carefarm, general, limit }) => (
                <tr key={nutrient} className="border-b border-border-line">
                  <td className="py-3 pr-4 text-text-secondary">{nutrient}</td>
                  <td className="py-3 pr-4 text-text-primary font-medium">{carefarm}</td>
                  <td className="py-3 pr-4 text-text-secondary">{general}</td>
                  <td className="py-3 text-text-secondary">{limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-xs text-text-secondary mt-4 opacity-70">
          * 케어팜 수치는 개발 목표 기준이며 성분 검증 완료 후 확정됩니다.
          &nbsp;출처: 투석 한도 — 질병관리청
        </p>
      </div>
    </section>
  )
}
