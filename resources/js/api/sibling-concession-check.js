import http from '@/lib/http'

export const customSiblingConcessionCheck = (params) => http.get('/app/sibling-concession-check', { params })
