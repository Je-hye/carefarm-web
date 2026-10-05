import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-base pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
          간식 앞에서<br />
          &apos;먹어도 될까?&apos;를<br />
          묻는 삶이 있습니다.
        </p>
        <p className="font-heading text-2xl font-bold text-text-primary mb-1">
          드디어, 맘 놓고 드세요.
        </p>
        <div className="h-0.5 w-32 bg-coral mx-auto mb-8" />
        <p className="font-body text-sm text-text-secondary mb-10">
          신장질환자를 위한 저칼륨·저인·무염 사과 쌀쿠키
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/product">제품 보러 가기 →</Button>
          <Button href="/impact" variant="outline">우리 이야기</Button>
        </div>
        <div className="mt-16 text-text-secondary animate-bounce text-lg">↓</div>
      </div>
    </section>
  )
}
