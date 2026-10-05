'use client'
import { useState } from 'react'
import { DialysisType, PRODUCTS } from '@/lib/products'
import { sortByDialysisType } from '@/lib/dialysisFilter'
import ProductCard from './ProductCard'

const TABS: { key: DialysisType; label: string }[] = [
  { key: 'all',              label: '전체' },
  { key: 'hemodialysis',     label: '혈액투석' },
  { key: 'peritoneal',       label: '복막투석' },
  { key: 'ckd_conservative', label: 'CKD 보존기' },
]

const DESCRIPTIONS: Record<DialysisType, string> = {
  all:              '',
  hemodialysis:     '칼륨·인·나트륨 세 가지 모두 엄격히 제한해야 합니다.',
  peritoneal:       '복막투석은 칼륨 제한이 상대적으로 완화됩니다.',
  ckd_conservative: '단계와 상태에 따라 제한 기준이 다릅니다. 담당 의료진과 확인하세요.',
}

export default function DialysisFilter() {
  const [selected, setSelected] = useState<DialysisType>('all')
  const sorted = sortByDialysisType(PRODUCTS, selected)

  return (
    <section className="bg-surface-base py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
          나에게 맞는 간식 찾기
        </h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                selected === key
                  ? 'bg-coral text-text-primary'
                  : 'bg-surface-card text-text-secondary border border-border-line hover:border-text-secondary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {DESCRIPTIONS[selected] && (
          <p className="font-body text-sm text-text-secondary mb-8 bg-surface-card px-4 py-3 rounded-xl border border-border-line">
            💡 {DESCRIPTIONS[selected]}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
