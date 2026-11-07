import http from '@/lib/http'

export const customSiblingGuardian = (params) => http.get('/sibling-guardian', { baseURL: '' }, { params })
