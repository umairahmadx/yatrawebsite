import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL, ENDPOINTS, STORAGE_KEYS } from './constants'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
      timeout: 30000,
    })

    this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const adminToken = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN)
      if (adminToken && config.headers) config.headers.Authorization = `Bearer ${adminToken}`
      return config
    })

    this.client.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    )
  }

  async submitEnquiry(data: EnquiryData) {
    return this.client.post(ENDPOINTS.ENQUIRIES, data)
  }
}

export interface EnquiryData {
  name: string
  phone: string
  date: string
  destination: string
  car: string
  passengers: number
  message?: string
}

export const api = new ApiClient()