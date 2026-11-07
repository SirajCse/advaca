import http from '@/lib/http'

export const customSyncGuardian = (params) => http.get('/sync-guardian', { baseURL: '' }, { params })
