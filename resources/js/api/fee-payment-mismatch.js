import http from '@/lib/http'

export const feePaymentMismatchInvoke = (params) => http.get('/app/fee-payment-mismatch', { params })
