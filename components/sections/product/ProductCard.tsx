import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import NutrientBar from '@/components/ui/NutrientBar'
import { Product } from '@/lib/products'

const DAILY_LIMIT_POTASSIUM  = 2000
const DAILY_LIMIT_SODIUM     = 2400
const DAILY_LIMIT_PHOSPHORUS = 1000

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <div className={`h-36 rounded-xl bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} flex items-center justify-center mb-4`}>
        <span className="font-body text-xs text-text-primary opacity-50">사진 준비 중</span>
      </div>

      <div className="flex items-start justify-between mb-2">
        <h3 className="font-heading font-bold text-lg text-text-primary">{product.name}</h3>
        <span className="font-body text-xs text-text-secondary">{product.weight}</span>
      </div>

      <p className="font-body text-sm text-text-secondary mb-4">{product.description}</p>

      <div className="mb-4">
        <NutrientBar
          nutrient="칼륨"
          value={product.potassium}
          unit="mg"
          dailyLimit={DAILY_LIMIT_POTASSIUM}
          compareValue={400}
          compareLabel="일반 과자"
        />
        <NutrientBar
          nutrient="나트륨"
          value={product.sodium}
          unit="mg"
          dailyLimit={DAILY_LIMIT_SODIUM}
          compareValue={200}
        />
        {typeof product.phosphorus === 'number' ? (
          <NutrientBar
            nutrient="인"
            value={product.phosphorus}
            unit="mg"
            dailyLimit={DAILY_LIMIT_PHOSPHORUS}
            compareValue={80}
          />
        ) : (
          <div className="flex items-center gap-3">
            <span className="font-body text-xs text-text-secondary w-12 shrink-0">인</span>
            <Badge color="olive" className="text-xs">저함유</Badge>
          </div>
        )}
      </div>

      <Button href="/order" className="w-full text-center">주문하기</Button>
    </Card>
  )
}
