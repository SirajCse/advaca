import http from '@/lib/http'

export const cancelPromotionCancel = (params) => http.get('/app/cancel-promotion', { params })
