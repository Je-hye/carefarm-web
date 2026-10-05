import TBLCards from '@/components/sections/impact/TBLCards'
import BusinessLogic from '@/components/sections/impact/BusinessLogic'
import PositioningMap from '@/components/sections/impact/PositioningMap'
import VerificationTimeline from '@/components/sections/impact/VerificationTimeline'

export default function ImpactPage() {
  return (
    <>
      <section className="bg-surface-base pt-28 pb-12 text-center">
        <h1 className="font-heading font-bold text-4xl text-text-primary">
          세 개의 공백, 하나의 답
        </h1>
        <p className="font-heading text-xl text-text-secondary mt-3">
          사람 · 지구 · 번영
        </p>
      </section>
      <TBLCards />
      <BusinessLogic />
      <PositioningMap />
      <VerificationTimeline />
    </>
  )
}
