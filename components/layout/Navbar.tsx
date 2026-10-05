'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/',        label: '홈' },
  { href: '/product', label: '제품' },
  { href: '/impact',  label: '임팩트' },
  { href: '/order',   label: '주문' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 bg-surface-base ${
      scrolled ? 'border-b border-border-line shadow-sm' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/branding/logo_anim.webp"
            alt="케어팜 로고"
            width={200}
            height={100}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* 데스크톱 링크 */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-text-primary p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴 열기"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <ul className="md:hidden bg-surface-card border-t border-border-line px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-body text-sm text-text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
