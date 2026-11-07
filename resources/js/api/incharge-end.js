import http from '@/lib/http'

export const inchargeEndInvoke = (params) => http.get('/incharge-end', { baseURL: '' }, { params })
