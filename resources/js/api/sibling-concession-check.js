import http from '@/lib/http'

export const customSiblingConcessionCheck = (params) => http.get('/sibling-concession-check', { baseURL: '' }, { params })
