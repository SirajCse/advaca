import http from '@/lib/http'

export const customSyncGuardian = (params) => http.get('/app/sync-guardian', { params })
