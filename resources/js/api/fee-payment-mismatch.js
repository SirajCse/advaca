import http from '@/lib/http'

export const feePaymentMismatchInvoke = (params) => http.get('/fee-payment-mismatch', { baseURL: '' }, { params })
