import { Link } from 'react-router-dom'
import { Image, MapPin, Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react'

const FOOTER_LINKS = [
  { title: 'Company', items: ['About Us', 'Our Story', 'Careers', 'Press', 'Contact'] },
  { title: 'Services', items: ['Car Rentals', 'Outstation Trips', 'Airport Transfers', 'Corporate Travel', 'Wedding Cars'] },
  { title: 'Support', items: ['Help Center', 'FAQs', 'Booking Policy', 'Cancellation', 'Terms of Service'] },
  { title: 'Legal', items: ['Privacy Policy', 'Cookie Policy', 'Disclaimer', 'Refund Policy'] },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-0" />
      <div className="relative z-10 container-custom">
        <div className="py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-28">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image className="w-6 h-6 text-gold" />
                <span className="font-display text-xl font-bold text-white tracking-tight">YatraVibes</span>
              </div>
              <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs sm:max-w-full">
                Redefining travel across India with premium cars, trusted captains, and unforgettable journeys. Your adventure begins here.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"><Youtube size={18} /></a>
              </div>
            </div>
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}><Link to="#" className="text-sm text-white/50 font-body hover:text-gold transition-colors duration-300">{item}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-12 sm:pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <div className="hidden sm:block"><p className="text-xs font-mono2 tracking-widest uppercase text-white/40">Visit Us</p><p className="text-sm text-white font-body">Mumbai, Maharashtra, India</p></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
              <div className="flex flex-col items-start sm:items-center gap-2"><p className="text-xs font-mono2 tracking-widest uppercase text-white/40">Email</p><a href="mailto:bookings@yatravibes.com" className="text-sm text-white hover:text-gold transition-colors duration-300 font-body">bookings@yatravibes.com</a></div>
              <div className="flex flex-col items-start sm:items-center gap-2"><p className="text-xs font-mono2 tracking-widest uppercase text-white/40">Phone</p><a href="tel:+919876543210" className="text-sm text-white hover:text-gold transition-colors duration-300 font-body">+91 98765 43210</a></div>
              <div className="flex flex-col items-start sm:items-center gap-2"><p className="text-xs font-mono2 tracking-widest uppercase text-white/40">WhatsApp</p><a href="https://wa.me/919876543210" className="text-sm text-white hover:text-gold transition-colors duration-300 font-body">+91 98765 43210</a></div>
            </div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary hidden sm:flex">Book Now <ArrowRight size={16} /></button>
          </div>
          <div className="mt-16 sm:mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/30 font-mono2 tracking-widest">© {new Date().getFullYear()} YatraVibes. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-white/40 font-mono2">
              <a href="#" className="hover:text-gold transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}