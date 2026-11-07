import http from '@/lib/http'

export const customSiblingGuardian = (params) => http.get('/app/sibling-guardian', { params })
