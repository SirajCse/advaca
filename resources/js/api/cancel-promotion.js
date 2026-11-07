import http from '@/lib/http'

export const cancelPromotionCancel = (params) => http.get('/cancel-promotion', { baseURL: '' }, { params })
