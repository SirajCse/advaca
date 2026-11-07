import http from '@/lib/http'

export const customFixAdditionalFeeMismatch = (uuid, params) => http.get(`/app/fix-additional-fee-mismatch/${uuid}`, params)
