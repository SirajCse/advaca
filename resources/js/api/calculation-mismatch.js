import http from '@/lib/http'

export const calculationMismatchInvoke = (params) => http.get('/calculation-mismatch', { baseURL: '' }, { params })
