'use client'
import { useState } from 'react'

export default function NotifyForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:mgs10204@gmail.com?subject=케어팜 출시 알림 신청&body=신청 이메일: ${email}`
  }

  return (
    <section className="bg-surface-card py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">
          출시 알림 받기
        </h2>
        <p className="font-body text-sm text-text-secondary mb-8">
          출시 시 가장 먼저 알려드립니다
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
          <input
            type="email"
            required
            placeholder="이메일 주소"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-border-line bg-surface-base font-body text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-text-secondary"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-coral text-text-primary font-body text-sm hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            신청하기
          </button>
        </form>
      </div>
    </section>
  )
}
