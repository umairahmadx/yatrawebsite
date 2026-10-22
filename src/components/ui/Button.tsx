import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-mono2 tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'
    const variants = {
      primary: 'bg-gold text-white hover:bg-gold-hover hover:shadow-[0_0_30px_-5px_rgba(226,168,85,0.5)]',
      secondary: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold',
      ghost: 'bg-transparent text-white/70 hover:text-gold',
    }
    const sizes = { sm: 'px-5 py-2.5 text-xs', md: 'px-8 py-4 text-sm', lg: 'px-10 py-5 text-base' }
    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} disabled={disabled || isLoading} {...props}>
        {isLoading && <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>}
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)
Button.displayName = 'Button'