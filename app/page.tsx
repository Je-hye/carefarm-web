import HeroSection    from '@/components/sections/home/HeroSection'
import ProblemCards   from '@/components/sections/home/ProblemCards'
import SolutionBridge from '@/components/sections/home/SolutionBridge'
import ProductPreview from '@/components/sections/home/ProductPreview'
import ImpactNumbers  from '@/components/sections/home/ImpactNumbers'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemCards />
      <SolutionBridge />
      <ProductPreview />
      <ImpactNumbers />
    </>
  )
}
