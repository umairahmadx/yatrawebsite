import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; error?: string }
export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, ...props }, ref) => {
  const inputId = id || props.name
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="input-label">{label}</label>}
      <input ref={ref} id={inputId} className={cn('input-field', error && 'border-red-500/60 focus:border-red-500 focus:ring-red-500', className)} {...props} />
      {error && <p className="mt-2 text-xs text-red-400 font-mono2">{error}</p>}
    </div>
  )
})
Input.displayName = 'Input'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { label?: string; error?: string; options: { value: string; label: string }[]; placeholder?: string }
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, label, error, options, placeholder, id, ...props }, ref) => {
  const selectId = id || props.name
  return (
    <div className="w-full">
      {label && <label htmlFor={selectId} className="input-label">{label}</label>}
      <div className="relative">
        <select ref={ref} id={selectId} className={cn('input-field appearance-none pr-10 cursor-pointer', error && 'border-red-500/60 focus:border-red-500 focus:ring-red-500', className)} {...props}>
          {placeholder && <option value="" disabled className="bg-bg-secondary">{placeholder}</option>}
          {options.map((opt) => <option key={opt.value} value={opt.value} className="bg-bg-secondary">{opt.label}</option>)}
        </select>
        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
      </div>
      {error && <p className="mt-2 text-xs text-red-400 font-mono2">{error}</p>}
    </div>
  )
})
Select.displayName = 'Select'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; error?: string }
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, error, id, ...props }, ref) => {
  const textareaId = id || props.name
  return (
    <div className="w-full">
      {label && <label htmlFor={textareaId} className="input-label">{label}</label>}
      <textarea ref={ref} id={textareaId} className={cn('input-field resize-none min-h-[120px]', error && 'border-red-500/60 focus:border-red-500 focus:ring-red-500', className)} {...props} />
      {error && <p className="mt-2 text-xs text-red-400 font-mono2">{error}</p>}
    </div>
  )
})
Textarea.displayName = 'Textarea'