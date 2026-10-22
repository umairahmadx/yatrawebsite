import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DESTINATIONS = [
  { id: 'goa', name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', slug: 'goa' },
  { id: 'kerala', name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', slug: 'kerala' },
  { id: 'rajasthan', name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145e9b4ce8?w=800&q=80', slug: 'rajasthan' },
  { id: 'himachal', name: 'Himachal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', slug: 'himachal' },
  { id: 'ladakh', name: 'Ladakh', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80', slug: 'ladakh' },
  { id: 'andaman', name: 'Andaman', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', slug: 'andaman' },
]

export const CARS = [
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    seats: 7,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1606664515524-edb3c1c5b1b4?w=800&q=80',
    features: ['Automatic', 'Diesel', '4x4', 'AC'],
  },
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    category: 'MPV',
    seats: 7,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    features: ['Automatic', 'Diesel', 'AC', 'Spacious'],
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    category: 'MPV',
    seats: 7,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    features: ['Manual', 'Petrol/CNG', 'AC', 'Mileage'],
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    category: 'Hatchback',
    seats: 5,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1553440509-47232b7a0f0c?w=800&q=80',
    features: ['Manual', 'Petrol', 'AC', 'City Friendly'],
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    category: 'SUV',
    seats: 5,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1606664515524-edb3c1c5b1b4?w=800&q=80',
    features: ['Automatic', 'Diesel/Petrol', 'AC', 'Sunroof'],
  },
  {
    id: 'thar',
    name: 'Mahindra Thar',
    category: 'SUV',
    seats: 4,
    price: 4200,
    image: 'https://images.unsplash.com/photo-1520031423400-6e4e8c0a6b5d?w=800&q=80',
    features: ['Manual', 'Diesel/Petrol', '4x4', 'Convertible'],
  },
]

export const MANIFESTO_ITEMS = [
  { number: '01', title: 'Trust First', description: 'Every journey begins with trust. We build relationships, not just transactions.' },
  { number: '02', title: 'Quality Fleet', description: 'Hand-picked vehicles maintained to the highest standards for your peace of mind.' },
  { number: '03', title: 'Local Expertise', description: 'Our captains know every hidden gem and scenic route across the country.' },
  { number: '04', title: 'Transparent Pricing', description: 'No hidden fees, no surprises. What you see is what you pay.' },
  { number: '05', title: '24/7 Support', description: 'Round-the-clock assistance for whatever the road throws your way.' },
  { number: '06', title: 'Memories Over Miles', description: 'We measure success in stories collected, not kilometers covered.' },
]

export const MARQUEE_ITEMS = [
  'Trusted by 10,000+ travelers',
  'Premium fleet across India',
  '24/7 customer support',
  'Transparent pricing',
  'Local expert captains',
  'Flexible booking options',
  'Safety first approach',
  'Unforgettable journeys',
]