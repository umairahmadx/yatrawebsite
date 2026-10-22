import { motion } from 'framer-motion'
import { MANIFESTO_ITEMS } from '../../lib/utils'

interface ManifestoItem { number: string; title: string; description: string }

export function ManifestoSection() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/40 z-0" />
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 sm:mb-20 lg:mb-28">
          <div className="lg:w-1/3 flex-shrink-0">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }} className="flex flex-col gap-6">
              <span className="text-[10px] font-mono2 tracking-widest uppercase text-gold">Our Promise</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">Built on<br /><span className="text-gradient-gold">trust & transparency</span></h2>
              <p className="text-white/50 text-lg font-body leading-relaxed">Every value we uphold shapes the experience you have on the road. From the moment you book to the moment you return the keys, we're committed to making every journey memorable.</p>
            </motion.div>
          </div>
          <div className="lg:w-2/3 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {MANIFESTO_ITEMS.map((item: ManifestoItem, i: number) => (
                <motion.div key={item.number} initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 0.45 + 0.18 * i, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }} className="spotlight-card group p-8">
                  <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-bg-primary group-hover:border-gold transition-colors duration-300"><span className="font-mono2 text-sm font-bold text-white">{item.number}</span></div><h3 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors duration-300">{item.title}</h3></div><p className="text-white/50 font-body text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}