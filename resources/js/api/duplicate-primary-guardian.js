import http from '@/lib/http'

export const customDuplicatePrimaryGuardian = (params) => http.get('/duplicate-primary-guardian', { baseURL: '' }, { params })
