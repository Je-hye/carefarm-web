import type { Metadata } from 'next'
import { Gowun_Batang, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-gowun',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '케어팜 — 드디어, 맘 놓고 드세요',
  description: '신장질환자를 위한 저칼륨·저인·무염 사과 쌀쿠키',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={`${gowunBatang.variable} ${notoSansKR.variable}`}>
      <body className="bg-surface-base text-text-primary font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
