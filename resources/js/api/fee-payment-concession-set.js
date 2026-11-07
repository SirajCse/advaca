import http from '@/lib/http'

export const feePaymentConcessionSetInvoke = (params) => http.get('/fee-payment-concession-set', { baseURL: '' }, { params })
