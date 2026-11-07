import http from '@/lib/http'

export const customFixAdditionalFeeMismatch = (uuid, params) => http.get(`/fix-additional-fee-mismatch/${uuid}`, { baseURL: '' }, params)
