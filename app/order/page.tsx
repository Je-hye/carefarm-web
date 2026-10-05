import NotifyForm from '@/components/sections/order/NotifyForm'
import ChannelCards from '@/components/sections/order/ChannelCards'
import InquirySection from '@/components/sections/order/InquirySection'

export default function OrderPage() {
  return (
    <>
      <section className="bg-surface-base pt-28 pb-12 text-center">
        <h1 className="font-heading font-bold text-4xl text-text-primary">
          드디어, 맘 놓고 드세요
        </h1>
        <p className="font-body text-sm text-text-secondary mt-3">
          현재 파일럿 판매를 준비 중입니다
        </p>
      </section>
      <NotifyForm />
      <ChannelCards />
      <InquirySection />
    </>
  )
}
