import http from '@/lib/http'

export const rolesAndPermissionsInvoke = (params) => http.get('/app/roles-and-permissions', { params })
