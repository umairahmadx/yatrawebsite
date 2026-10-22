import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '../../lib/utils'

interface DestItem { id: string; name: string; image: string; slug: string }

export function DestinationsSection() {
  return (
    <section id="destinations" className="section-padding relative">
      <div className="absolute inset-0 bg-bg-secondary/40 z-0" />
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 sm:mb-20 lg:mb-28 items-start">
          <div className="lg:w-1/3 flex-shrink-0">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }} className="flex flex-col gap-4">
              <span className="text-[10px] font-mono2 tracking-widest uppercase text-gold">Explore India</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">Destinations<br /><span className="text-gradient-gold">that inspire wanderlust</span></h2>
              <p className="text-white/50 text-lg font-body leading-relaxed mt-4">From the serene backwaters of Kerala to the golden sands of Goa, experience India's most breathtaking destinations in comfort and style.</p>
            </motion.div>
          </div>
          <div className="lg:w-2/3 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {DESTINATIONS.map((dest: DestItem, i: number) => (
                <motion.div key={dest.id} initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 0.35 + 0.18 * i, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }} className="spotlight-card group aspect-[4/3] overflow-hidden relative cursor-pointer">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3"><MapPin className="w-4 h-4 text-gold" /><span className="text-[11px] font-mono2 tracking-widest uppercase text-gold">{dest.name}</span></div>
                    <span className="text-sm font-body text-white/70">Book your journey</span>
                    <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}