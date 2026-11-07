import http from '@/lib/http'

export const getConfig = (params) => http.get('/config', { params })
export const getAppConfig = (params) => http.get('/app/config', { params })
export const storeAppConfig = (payload) => http.post('/app/config', payload)
export const getConfigPreRequisite = (params) => http.get('/config/pre-requisite', { params })
export const searchRecords = (params) => http.get('/app/search', { params })
export const downloadFormats = () => http.get('/download/formats', { baseURL: '' })
