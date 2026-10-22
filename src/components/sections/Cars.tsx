import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CARS } from '../../lib/utils'

interface CarItem { id: string; name: string; category: string; seats: number; price: number; image: string; features: string[] }

export function CarsSection() {
  return (
    <section id="cars" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50 z-0" />
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row gap-8 mb-16 sm:mb-20 lg:mb-28">
          <div className="lg:w-1/3 flex-shrink-0">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }} className="flex flex-col gap-4">
              <span className="text-[10px] font-mono2 tracking-widest uppercase text-gold">Our Fleet</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">Curated<br /><span className="text-gradient-gold">for every journey</span></h2>
              <p className="text-white/50 text-lg font-body leading-relaxed mt-4">
                From rugged SUVs for mountain trails to premium sedans for city drives, our hand-picked fleet ensures comfort, safety, and style on every kilometer.
              </p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 btn-ghost flex items-center gap-2">Book Your Car <ArrowRight size={16} /></button>
            </motion.div>
          </div>
          <div className="lg:w-2/3 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {CARS.map((car: CarItem, i: number) => (
                <motion.div key={car.id} initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 0.25 + 0.18 * i, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }} className="spotlight-card group p-6 sm:p-8 aspect-[4/5]">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 mb-6 image-zoom group">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10"><span className="text-[10px] font-mono2 tracking-widest uppercase text-white">{car.category}</span></div>
                    <div className="absolute bottom-4 left-4 bg-gold px-3 py-1.5 rounded-lg"><span className="text-xs font-bold text-white">₹{car.price}</span><span className="text-[10px] text-white/90 font-mono2">/day</span></div>
                  </div>
                  <div className="flex flex-col gap-2"><h3 className="font-display text-xl font-bold text-white">{car.name}</h3><div className="flex items-center gap-3 text-xs font-mono2 text-white/50 uppercase tracking-widest"><span>{car.seats} Seats</span><span>•</span><span>{car.category}</span></div><div className="flex flex-wrap gap-2 mt-4">{car.features.map((feat: string) => <span key={feat} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/60 font-mono2">{feat}</span>)}</div><button className="mt-6 w-full btn-ghost flex items-center justify-center gap-2">Select Car <ArrowRight size={14} /></button></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}