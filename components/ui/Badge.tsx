interface BadgeProps {
  color?: 'coral' | 'olive' | 'apricot'
  children: React.ReactNode
  className?: string
}

const COLOR_MAP = {
  coral:   'bg-coral text-text-primary',
  olive:   'bg-olive text-text-primary',
  apricot: 'bg-apricot text-text-primary',
}

export default function Badge({ color = 'coral', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full font-body text-xs ${COLOR_MAP[color]} ${className}`}>
      {children}
    </span>
  )
}
