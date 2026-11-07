import http from '@/lib/http'

export const updateContactCaseInvoke = (params) => http.get('/update-contact-case', { baseURL: '' }, { params })
