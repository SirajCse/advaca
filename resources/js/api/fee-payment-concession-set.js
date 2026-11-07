import http from '@/lib/http'

export const feePaymentConcessionSetInvoke = (params) => http.get('/app/fee-payment-concession-set', { params })
