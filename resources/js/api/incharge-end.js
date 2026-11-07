import http from '@/lib/http'

export const inchargeEndInvoke = (params) => http.get('/app/incharge-end', { params })
