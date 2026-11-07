import http from '@/lib/http'

export const updateContactCaseInvoke = (params) => http.get('/app/update-contact-case', { params })
