import http from '@/lib/http'

export const calculationMismatchInvoke = (params) => http.get('/app/calculation-mismatch', { params })
