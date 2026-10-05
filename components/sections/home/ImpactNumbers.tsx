import Link from 'next/link'

const STATS = [
  { value: '8.1만 명', label: '혈액투석 환자', source: '대한신장학회, 2024' },
  { value: '3.5만 톤', label: '자원 순환 사과', source: '통계청 기반 추산, 2023' },
  { value: '312%', label: '신장환자 식단 시장 성장', source: '푸드투데이, 2026' },
]

export default function ImpactNumbers() {
  return (
    <section className="bg-surface-card py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-line">
          {STATS.map(({ value, label, source }) => (
            <div key={label} className="py-8 md:py-0 md:px-8 text-center">
              <p className="font-heading font-bold text-4xl text-coral">{value}</p>
              <p className="font-body text-sm text-text-primary mt-2">{label}</p>
              <p className="font-body text-xs text-text-secondary mt-1 opacity-60">{source}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/impact" className="font-body text-sm text-text-secondary underline hover:text-text-primary transition-colors">
            임팩트 전체 보기 →
          </Link>
        </p>
      </div>
    </section>
  )
}
