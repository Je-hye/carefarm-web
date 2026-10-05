import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const base = 'inline-block px-6 py-3 rounded-full font-body text-sm font-medium transition-opacity hover:opacity-80'
  const styles = {
    primary: 'bg-coral text-text-primary',
    outline: 'border border-text-primary text-text-primary bg-transparent',
  }
  const cls = `${base} ${styles[variant]} ${className}`

  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button onClick={onClick} className={cls}>{children}</button>
}
