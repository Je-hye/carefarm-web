const PLAYERS = [
  { name: '병원 처방식', x: 15, y: 85, highlight: false },
  { name: '해외 전용식품', x: 55, y: 75, highlight: false },
  { name: '일반 과자', x: 80, y: 25, highlight: false },
  { name: '케어팜 ★', x: 82, y: 85, highlight: true },
]

export default function PositioningMap() {
  return (
    <section className="bg-surface-base py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-8 text-center">
          케어팜은 아직 없는 자리에 있습니다
        </h2>
        <div className="relative w-full aspect-square max-w-sm mx-auto border border-border-line rounded-2xl bg-surface-card overflow-hidden">
          <span className="absolute top-3 left-1/2 -translate-x-1/2 font-body text-xs text-text-secondary">신장환자 안전성 ↑</span>
          <span className="absolute bottom-3 right-3 font-body text-xs text-text-secondary">간식 만족도 →</span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-border-line opacity-50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-px bg-border-line opacity-50" />
          </div>
          {PLAYERS.map(({ name, x, y, highlight }) => (
            <div
              key={name}
              className="absolute flex flex-col items-center"
              style={{ left: `${x}%`, top: `${100 - y}%`, transform: 'translate(-50%,-50%)' }}
            >
              <div className={`w-3 h-3 rounded-full ${highlight ? 'bg-coral' : 'bg-border-line'}`} />
              <span className={`font-body text-xs mt-1 whitespace-nowrap ${highlight ? 'text-coral font-bold' : 'text-text-secondary'}`}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
