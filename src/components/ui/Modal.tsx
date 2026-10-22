import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ModalProps { isOpen: boolean; onClose: () => void; title?: string; subtitle?: string; children: ReactNode; className?: string }

const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
const panelVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Modal({ isOpen, onClose, title, subtitle, children, className }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = prev }
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={onClose} className="absolute inset-0 bg-[#08090C]/85 backdrop-blur-md" />
          <motion.div variants={panelVariants} initial="hidden" animate="visible" exit="exit" className={cn('relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-bg-secondary border border-white/10 rounded-3xl shadow-2xl', className)}>
            <div className="sticky top-0 z-10 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/10 px-6 sm:px-8 py-6 flex items-start justify-between gap-4 rounded-t-3xl">
              <div>
                {title && <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{title}</h2>}
                {subtitle && <p className="mt-2 text-sm text-white/50 font-body">{subtitle}</p>}
              </div>
              <button type="button" onClick={onClose} aria-label="Close modal" className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-gold hover:border-gold/40 transition-colors duration-300"><X size={18} /></button>
            </div>
            <div className="px-6 sm:px-8 py-7">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}