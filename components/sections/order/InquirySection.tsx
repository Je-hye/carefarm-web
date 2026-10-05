import Button from '@/components/ui/Button'

export default function InquirySection() {
  return (
    <section className="bg-surface-muted py-16 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-heading font-bold text-xl text-text-primary mb-3">
          기관 · 병원 납품 문의
        </h2>
        <p className="font-body text-sm text-text-secondary mb-8">
          투석센터, 요양시설 등 B2B 납품을 원하시면 문의 주세요
        </p>
        <Button href="mailto:mgs10204@gmail.com?subject=케어팜 납품 문의">
          이메일로 문의하기
        </Button>
      </div>
    </section>
  )
}
