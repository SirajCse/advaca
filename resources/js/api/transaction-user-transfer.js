import http from '@/lib/http'

export const transactionUserTransferInvoke = (params) => http.get('/app/transaction-user-transfer', { params })
