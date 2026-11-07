import http from '@/lib/http'

export const headWiseFeeSummaryInvoke = (params) => http.get('/head-wise-fee-summary', { baseURL: '' }, { params })
