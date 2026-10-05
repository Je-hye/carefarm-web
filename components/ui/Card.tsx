interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface-card border border-border-line rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
