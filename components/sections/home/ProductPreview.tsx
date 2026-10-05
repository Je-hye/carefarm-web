import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { PRODUCTS } from '@/lib/products'

export default function ProductPreview() {
  const product = PRODUCTS[0]
  return (
    <section className="bg-surface-base py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`w-full md:w-80 h-64 rounded-2xl bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} flex items-center justify-center shrink-0`}>
            <span className="font-heading font-bold text-xl text-text-primary opacity-60">
              제품 사진 준비 중
            </span>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-2">
              {product.name}
            </h2>
            <p className="font-body text-sm text-text-secondary mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge color="coral">칼륨 {product.potassium}mg</Badge>
              <Badge color="olive">무염</Badge>
              <Badge color="apricot">저인</Badge>
            </div>
            <Button href="/product">상세 보기 →</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
