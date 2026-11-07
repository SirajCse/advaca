import http from '@/lib/http'

export const customDuplicatePrimaryGuardian = (params) => http.get('/app/duplicate-primary-guardian', { params })
