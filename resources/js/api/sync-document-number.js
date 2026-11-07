import http from '@/lib/http'

export const syncDocumentNumberInvoke = (params) => http.get('/sync-document-number', { baseURL: '' }, { params })
