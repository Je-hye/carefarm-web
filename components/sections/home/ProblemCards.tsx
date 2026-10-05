import Card from '@/components/ui/Card'

const PROBLEMS = [
  {
    icon: '🫀',
    stat: '8.1만 명',
    label: '혈액투석 환자',
    desc: '국내 시판 전용 고체 간식 전무',
    source: '대한신장학회 팩트시트, 2024',
  },
  {
    icon: '🍎',
    stat: '14.1%',
    label: '경북 사과',
    desc: '규격 외로 폐기 위기',
    source: '농림축산식품부 의뢰 조사, 2020',
  },
  {
    icon: '🌱',
    stat: '3.5만 톤',
    label: '연간 폐기 추정',
    desc: '자원으로 순환되지 못하는 못난이 사과',
    source: '통계청 기반 추산, 2023',
  },
]

export default function ProblemCards() {
  return (
    <section className="bg-surface-base py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary text-center mb-12">
          세 가지 공백이 있었습니다
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map(({ icon, stat, label, desc, source }) => (
            <Card key={label}>
              <p className="text-3xl mb-4">{icon}</p>
              <p className="font-heading font-bold text-3xl text-text-primary">{stat}</p>
              <p className="font-body text-sm font-medium text-text-primary mt-1">{label}</p>
              <p className="font-body text-sm text-text-secondary mt-2">{desc}</p>
              <p className="font-body text-xs text-text-secondary mt-3 opacity-60">{source}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
