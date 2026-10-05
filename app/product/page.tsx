import DialysisFilter from '@/components/sections/product/DialysisFilter'
import NutritionTable from '@/components/sections/product/NutritionTable'
import RecipeVerification from '@/components/sections/product/RecipeVerification'
import OriginStory from '@/components/sections/product/OriginStory'
import ExpertQuote from '@/components/sections/product/ExpertQuote'
import Button from '@/components/ui/Button'

export default function ProductPage() {
  return (
    <>
      <section className="bg-surface-base pt-28 pb-12 text-center">
        <h1 className="font-heading font-bold text-4xl text-text-primary">
          칼륨 걱정 없이, 맛은 그대로
        </h1>
        <p className="font-body text-sm text-text-secondary mt-3">
          투석 환자를 위해 설계된 사과 쌀쿠키
        </p>
      </section>
      <DialysisFilter />
      <NutritionTable />
      <RecipeVerification />
      <OriginStory />
      <ExpertQuote />
      <section className="bg-surface-base py-16 text-center">
        <Button href="/order">지금 주문하기 →</Button>
      </section>
    </>
  )
}
