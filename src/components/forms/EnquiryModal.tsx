import { useState } from 'react'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Input, Select, Textarea } from '../ui/Input'
import { Button } from '../ui/Button'
import { api } from '../../lib/api'
import { DESTINATIONS, CARS } from '../../lib/utils'

interface FormData { name: string; phone: string; date: string; destination: string; car: string; passengers: string; message: string }

const initialForm: FormData = { name: '', phone: '', date: '', destination: '', car: '', passengers: '', message: '' }

export function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) newErrors.phone = 'Enter a valid 10-digit number'
    if (!form.date) newErrors.date = 'Please select a date'
    if (!form.destination) newErrors.destination = 'Select a destination'
    if (!form.car) newErrors.car = 'Select a car'
    if (!form.passengers) newErrors.passengers = 'Number of passengers is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => { const next = { ...prev }; delete next[key]; return next })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      await api.submitEnquiry({
        name: form.name.trim(), phone: form.phone.trim(), date: form.date,
        destination: form.destination, car: form.car, passengers: parseInt(form.passengers, 10), message: form.message.trim(),
      })
      toast.success('Enquiry submitted successfully! Our team will contact you shortly.')
      setForm(initialForm)
      setErrors({})
      onClose()
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally { setIsSubmitting(false) }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Car" subtitle="Tell us about your journey and we'll get back to you.">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div><label className="input-label">Full Name</label><Input name="name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} error={errors.name} placeholder="John Doe" /></div>
          <div><label className="input-label">Phone Number</label><Input name="phone" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} error={errors.phone} placeholder="+91 98765 43210" maxLength={15} /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div><label className="input-label">Travel Date</label><Input name="date" type="date" value={form.date} onChange={(e) => handleChange('date', e.target.value)} error={errors.date} /></div>
          <div><label className="input-label">Destination</label><Select name="destination" value={form.destination} onChange={(e) => handleChange('destination', e.target.value)} error={errors.destination} options={DESTINATIONS.map((d: { name: string }) => ({ value: d.name, label: d.name }))} placeholder="Select destination" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div><label className="input-label">Car Preference</label><Select name="car" value={form.car} onChange={(e) => handleChange('car', e.target.value)} error={errors.car} options={CARS.map((c: { name: string }) => ({ value: c.name, label: c.name }))} placeholder="Select car" /></div>
          <div><label className="input-label">Passengers</label><Select name="passengers" value={form.passengers} onChange={(e) => handleChange('passengers', e.target.value)} error={errors.passengers} options={[1, 2, 3, 4, 5, 6, 7].map((n) => ({ value: String(n), label: `${n} Passenger${n > 1 ? 's' : ''}` }))} placeholder="Number of people" /></div>
        </div>
        <div><label className="input-label">Special Requests</label><Textarea name="message" value={form.message} onChange={(e) => handleChange('message', e.target.value)} error={errors.message} placeholder="Anything we should know?" rows={4} /></div>
        <Button type="submit" variant="primary" isLoading={isSubmitting} className="w-full">Submit Enquiry <ArrowRight size={16} /></Button>
      </form>
    </Modal>
  )
}