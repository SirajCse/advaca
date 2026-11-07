import http from '@/lib/http'

export const headWiseFeeSummaryInvoke = (params) => http.get('/app/head-wise-fee-summary', { params })
