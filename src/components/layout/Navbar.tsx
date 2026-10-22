import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Image, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Explore Cars', href: '#cars' },
  { name: 'Trusted & Reliable', href: '#about' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(href)
    }
  }

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-xl border-b border-white/10">
      <div className="container-custom h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl hover:bg-white/10 transition-colors duration-300 group">
            <Image className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
            <span className="font-display text-xl font-bold text-white tracking-tight">YatraVibes</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.href)} className={cn('text-sm font-mono2 tracking-widest uppercase transition-colors duration-300', isActive(link.href) ? 'text-gold' : 'text-white/70 hover:text-gold')}>
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="#cars" className="hidden sm:flex btn-ghost">
            Explore Cars <ArrowRight size={16} />
          </Link>
          <button onClick={() => scrollTo('#contact')} className="sm:hidden md:flex btn-primary">Book Now</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden md:hidden md:flex p-2 text-white/70 hover:text-gold transition-colors duration-300" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-bg-secondary border-t border-white/10 backdrop-blur-xl p-4">
          <div className="flex flex-col gap-2 py-4">
            {NAV_LINKS.map((link) => (
              <button key={link.name} onClick={() => scrollTo(link.href)} className="px-4 py-3 text-left font-mono2 tracking-widest uppercase text-white/70 hover:text-gold hover:bg-bg-card rounded-lg transition-colors duration-300">{link.name}</button>
            ))}
            <button onClick={() => scrollTo('#contact')} className="mt-4 btn-primary w-full">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  )
}