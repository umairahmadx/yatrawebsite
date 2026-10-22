import { MARQUEE_ITEMS } from '../../lib/utils'

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-bg-secondary border-y border-white/5">
      <div className="relative z-10 container-custom">
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee duration-[30s] linear infinite">
            {doubled.map((item, i) => (
              <span key={i} className="font-display text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-transparent bg-clip-text text-gradient-gold">
                {item}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-[150px] bg-gradient-to-r from-bg-secondary via-transparent" />
          <div className="absolute inset-y-0 right-0 w-[150px] bg-gradient-to-l from-bg-secondary via-transparent" />
        </div>
      </div>
    </section>
  )
}