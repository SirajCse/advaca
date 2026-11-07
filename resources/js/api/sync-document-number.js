import http from '@/lib/http'

export const syncDocumentNumberInvoke = (params) => http.get('/app/sync-document-number', { params })
