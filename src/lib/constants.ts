export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://travel-trusted-5.emergent.host/api'

export const ENDPOINTS = {
  ENQUIRIES: '/enquiries',
  AUTH_LOGIN: '/auth/login',
} as const

export const STORAGE_KEYS = {
  ADMIN_TOKEN: 'yv_admin_token',
} as const

export const ANIMATION_DELAYS = {
  base: 0.25,
  stagger: 0.18,
} as const

export const Z_INDEX = {
  dropdown: 100,
  modal: 200,
  toast: 300,
  tooltip: 400,
} as const