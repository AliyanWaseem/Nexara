const ITEMS = [
  'Web Development',
  'AI Automation',
  'Agentic AI',
  'Digital Marketing',
  'SEO',
  'n8n Workflows',
  'Custom Chatbots',
  'Lead Generation',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 px-4" aria-hidden>
      {ITEMS.map((item) => (
        <div key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-display text-lg font-medium text-muted-foreground">
            {item}
          </span>
          <span className="inline-block size-1.5 rotate-45 bg-violet" aria-hidden />
        </div>
      ))}
    </div>
  )
}

export function MarqueeBar() {
  return (
    <div className="relative flex w-full overflow-hidden border-y border-border bg-bg-subtle py-5">
      <div className="flex animate-[marquee_28s_linear_infinite] items-center">
        <Track />
        <Track />
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_28s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
