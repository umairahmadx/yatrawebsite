import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { CarsSection } from '../components/sections/Cars'
import { DestinationsSection } from '../components/sections/Destinations'
import { ManifestoSection } from '../components/sections/Manifesto'
import { MarqueeSection } from '../components/sections/Marquee'
import { EnquiryModal } from '../components/forms/EnquiryModal'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'

export function Home() {
  const location = useLocation()
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <div className="bg-bg-primary min-h-screen selection:bg-gold/30 selection:text-white">
      <Navbar />
      <Toaster
        position="top-right"
        richColors
        className="z-[50]"
        toastOptions={{
          style: {
            borderRadius: '16px',
            background: '#111319',
            color: '#fff',
            border: '1px solid #2a2f3e',
          },
        }}
      />
      <main className="relative overflow-hidden">
        <Hero />
        <CarsSection />
        <DestinationsSection />
        <ManifestoSection />
        <MarqueeSection />
        <footer>
          <Footer />
        </footer>
      </main>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      <AnimatePresence>
        {location.hash === '#contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute top-4 right-4 bg-bg-card border border-white/10 rounded-2xl px-6 py-4 shadow-2xl pointer-events-auto">
              <p className="text-sm text-gold font-mono2 font-bold">Contact section</p>
              <p className="text-xs text-white/50 mt-1">Reach out via email, phone or WhatsApp above.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}