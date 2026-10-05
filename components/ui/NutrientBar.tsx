'use client'
import { useState } from 'react'
import { calcBarWidth } from '@/lib/nutrientUtils'

interface NutrientBarProps {
  nutrient: string
  value: number
  unit: string
  dailyLimit: number
  compareValue?: number
  compareLabel?: string
}

export default function NutrientBar({
  nutrient,
  value,
  unit,
  dailyLimit,
  compareValue,
  compareLabel = '일반 과자',
}: NutrientBarProps) {
  const [showCompare, setShowCompare] = useState(false)
  const width = calcBarWidth(value, dailyLimit)
  const compareWidth = compareValue != null ? calcBarWidth(compareValue, dailyLimit) : 0

  return (
    <div className="mb-3">
      <div className="flex items-center gap-3">
        <span className="font-body text-xs text-text-secondary w-12 shrink-0">{nutrient}</span>
        <div className="flex-1 bg-surface-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-coral rounded-full transition-all duration-300"
            style={{ width: `${width}%` }}
          />
        </div>
        <span className="font-body text-xs text-text-primary w-24 text-right shrink-0">
          {value}{unit} / {dailyLimit}{unit}
        </span>
      </div>

      {compareValue != null && (
        <>
          <button
            className="font-body text-xs text-text-secondary underline mt-1 ml-15"
            onClick={() => setShowCompare(v => !v)}
          >
            {showCompare ? '비교 숨기기' : `${compareLabel} 비교`}
          </button>
          {showCompare && (
            <div className="flex items-center gap-3 mt-1">
              <span className="font-body text-xs text-text-secondary w-12 shrink-0">{compareLabel}</span>
              <div className="flex-1 bg-surface-muted rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-border-line rounded-full"
                  style={{ width: `${compareWidth}%` }}
                />
              </div>
              <span className="font-body text-xs text-text-secondary w-24 text-right shrink-0">
                {compareValue}{unit}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}
