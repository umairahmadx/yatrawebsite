import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CARS } from '../../lib/utils'

const heroData = {
  eyebrow: 'Trusted & Reliable',
  title: 'Where every journey begins with a smile.',
  description: 'Premium car rental and travel experiences across India. From luxury SUVs to comfortable hatchbacks, we provide the perfect vehicle for your adventure.',
  primaryBtn: 'Book Now',
  secondaryBtn: 'Explore Cars',
}

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } } }

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-transparent z-0" />
      <div className="absolute inset-0 bg-hero-gradient z-0 pointer-events-none" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 container-custom">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto text-center pt-20 sm:pt-32 lg:pt-40 pb-12">
          <motion.span variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-mono2 tracking-widest uppercase text-gold backdrop-blur-sm block">{heroData.eyebrow}</motion.span>
          <motion.h1 variants={itemVariants} className="font-display text-[4rem] sm:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-bold text-white tracking-tighter leading-tight mb-6 text-balance">{heroData.title}</motion.h1>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-white/60 font-body max-w-2xl mx-auto mb-10 leading-relaxed">{heroData.description}</motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button variants={itemVariants} onClick={() => { const el = document.getElementById('cars'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary group">
              <span>{heroData.primaryBtn}</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button variants={itemVariants} onClick={() => { const el = document.getElementById('cars'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary group"><span>{heroData.secondaryBtn}</span></motion.button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 } } }} className="relative z-10 flex justify-center items-end px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-end">
                {CARS.slice(0, 3).map((car: { id: string; name: string; category: string; seats: number; price: number; image: string }, i: number) => (
                  <motion.div key={car.id} initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 2 + i * 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} className="relative h-full max-h-[560px] flex flex-col items-end gap-3">
                    <div className="relative w-48 sm:w-64 aspect-square rounded-2xl overflow-hidden border border-white/10 image-zoom group">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6"><div><span className="text-[10px] font-mono2 tracking-widest uppercase text-gold">{car.category}</span><span className="block font-display text-xl font-bold text-white mt-1">{car.name}</span><span className="text-xs text-white/50 mt-1">{car.seats} Seats</span></div></div>
                    </div>
                    <div className="text-right mt-2"><span className="text-xs font-mono2 tracking-widest uppercase text-white/50">Starting at</span><span className="font-display text-lg font-bold text-white">₹{car.price}</span><span className="text-xs text-white/40 font-mono2">/day</span></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}