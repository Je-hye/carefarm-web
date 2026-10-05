import Card from '@/components/ui/Card'

const CHANNELS = [
  {
    step: '1단계',
    title: 'D2C 직판',
    desc: '온라인 스토어를 통한 직접 배송',
    status: '준비 중',
  },
  {
    step: '2단계',
    title: 'B2B 납품',
    desc: '투석센터 · 요양시설 정기 납품',
    status: '준비 중',
  },
]

export default function ChannelCards() {
  return (
    <section className="bg-surface-base py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-8 text-center">
          판매 채널
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHANNELS.map(({ step, title, desc, status }) => (
            <Card key={step}>
              <span className="font-body text-xs text-coral">{step}</span>
              <h3 className="font-heading font-bold text-lg text-text-primary mt-1">{title}</h3>
              <p className="font-body text-sm text-text-secondary mt-2">{desc}</p>
              <span className="inline-block mt-4 px-3 py-1 rounded-full bg-surface-muted font-body text-xs text-text-secondary">
                {status}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
