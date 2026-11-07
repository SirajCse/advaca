import http from '@/lib/http'

export const rolesAndPermissionsInvoke = (params) => http.get('/roles-and-permissions', { baseURL: '', params })
