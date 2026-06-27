import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2.5 text-foreground',
        className,
      )}
      aria-label="Nexara Digital home"
    >
      <span
        aria-hidden
        className="inline-block size-4 rotate-45 rounded-[3px] bg-violet shadow-[0_0_14px_rgba(124,58,237,0.6)] transition-transform duration-300 group-hover:scale-110"
      />
      <span className="font-display text-lg font-bold tracking-tight">
        Nexara <span className="text-muted-foreground font-semibold">Digital</span>
      </span>
    </Link>
  )
}
