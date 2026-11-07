import http from '@/lib/http'

export const transactionUserTransferInvoke = (params) => http.get('/transaction-user-transfer', { baseURL: '' }, { params })
