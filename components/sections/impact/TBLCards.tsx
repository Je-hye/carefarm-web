import Card from '@/components/ui/Card'

const TBL = [
  {
    axis: 'Social',
    icon: '🫀',
    accentClass: 'bg-coral',
    stats: ['혈액투석 8.1만 명', '우울 유병률 22.77%'],
    desc: '간식 선택권 확대, 식이 관리 부담 경감',
    source: '대한신장학회(2024) · PMC11228378(2024)',
  },
  {
    axis: 'Economic',
    icon: '🍎',
    accentClass: 'bg-apricot',
    stats: ['못난이 사과 500원/kg', 'D2C → B2B 구조'],
    desc: '농가 추가 판로 창출, 수익 개선',
    source: '시세판닷컴(2026)',
  },
  {
    axis: 'Environmental',
    icon: '🌱',
    accentClass: 'bg-olive',
    stats: ['연간 3.5만 톤 자원 순환'],
    desc: '규격 외 농산물 활용, 폐기 감소',
    source: '통계청 기반 추산(2023)',
  },
]

export default function TBLCards() {
  return (
    <section className="bg-surface-base py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {TBL.map(({ axis, icon, accentClass, stats, desc, source }) => (
          <Card key={axis}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${accentClass} mb-4`}>
              <span>{icon}</span>
              <span className="font-body text-xs font-medium text-text-primary">{axis}</span>
            </div>
            {stats.map(s => (
              <p key={s} className="font-heading font-bold text-lg text-text-primary">{s}</p>
            ))}
            <p className="font-body text-sm text-text-secondary mt-3">{desc}</p>
            <p className="font-body text-xs text-text-secondary mt-3 opacity-60">{source}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
