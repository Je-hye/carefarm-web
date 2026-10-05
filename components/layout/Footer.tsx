import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-card border-t border-border-line mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-heading font-bold text-lg text-text-primary">
            케어<span className="text-coral">팜</span>
          </p>
          <p className="font-body text-sm text-text-secondary mt-1">
            규격 외 사과로 만듭니다
          </p>
        </div>
        <ul className="flex gap-6 font-body text-sm text-text-secondary">
          <li><Link href="/product" className="hover:text-text-primary transition-colors">제품</Link></li>
          <li><Link href="/impact"  className="hover:text-text-primary transition-colors">임팩트</Link></li>
          <li><Link href="/order"   className="hover:text-text-primary transition-colors">주문</Link></li>
        </ul>
      </div>
      <div className="border-t border-border-line text-center py-4">
        <p className="font-body text-xs text-text-secondary">© 2026 CareFarm. ENACTUS KNU</p>
      </div>
    </footer>
  )
}
