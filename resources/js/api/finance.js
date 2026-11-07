import http from '@/lib/http'

export const financeDayClosures = {
  index: (params) => http.get(`/app/finance/day-closures`, { params }),
  show: (uuid, params) => http.get(`/app/finance/day-closures/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/day-closures`, data),
  update: (uuid, data) => http.put(`/app/finance/day-closures/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/day-closures/${uuid}`),
}

export const financeFeeComponents = {
  index: (params) => http.get(`/app/finance/fee-components`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-components/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-components`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-components/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-components/${uuid}`),
}

export const financeFeeConcessions = {
  index: (params) => http.get(`/app/finance/fee-concessions`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-concessions/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-concessions`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-concessions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-concessions/${uuid}`),
}

export const financeFeeGroups = {
  index: (params) => http.get(`/app/finance/fee-groups`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-groups/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-groups`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-groups/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-groups/${uuid}`),
}

export const financeFeeHeads = {
  index: (params) => http.get(`/app/finance/fee-heads`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-heads/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-heads`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-heads/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-heads/${uuid}`),
}

export const financeFeeStructureComponents = {
  index: (params) => http.get(`/app/finance/fee-structure-components`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-structure-components/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-structure-components`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-structure-components/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-structure-components/${uuid}`),
}

export const financeFeeStructures = {
  index: (params) => http.get(`/app/finance/fee-structures`, { params }),
  show: (uuid, params) => http.get(`/app/finance/fee-structures/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/fee-structures`, data),
  update: (uuid, data) => http.put(`/app/finance/fee-structures/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/fee-structures/${uuid}`),
}

export const financeFeeStructuresFeeStructureInstallments = {
  show: (fee_structure, uuid, params) => http.get(`/app/finance/fee-structures/${fee_structure}/installments/${uuid}`, { params }),
  update: (fee_structure, uuid, data) => http.put(`/app/finance/fee-structures/${fee_structure}/installments/${uuid}`, data),
  destroy: (fee_structure, uuid) => http.delete(`/app/finance/fee-structures/${fee_structure}/installments/${uuid}`),
}

export const financeLedgerTypes = {
  index: (params) => http.get(`/app/finance/ledger-types`, { params }),
  show: (uuid, params) => http.get(`/app/finance/ledger-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/ledger-types`, data),
  update: (uuid, data) => http.put(`/app/finance/ledger-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/ledger-types/${uuid}`),
}

export const financeLedgers = {
  index: (params) => http.get(`/app/finance/ledgers`, { params }),
  show: (uuid, params) => http.get(`/app/finance/ledgers/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/ledgers`, data),
  update: (uuid, data) => http.put(`/app/finance/ledgers/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/ledgers/${uuid}`),
}

export const financePaymentMethods = {
  index: (params) => http.get(`/app/finance/payment-methods`, { params }),
  show: (uuid, params) => http.get(`/app/finance/payment-methods/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/payment-methods`, data),
  update: (uuid, data) => http.put(`/app/finance/payment-methods/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/payment-methods/${uuid}`),
}

export const financeReceipts = {
  index: (params) => http.get(`/app/finance/receipts`, { params }),
  show: (uuid, params) => http.get(`/app/finance/receipts/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/receipts`, data),
  update: (uuid, data) => http.put(`/app/finance/receipts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/receipts/${uuid}`),
}

export const financeTaxes = {
  index: (params) => http.get(`/app/finance/taxes`, { params }),
  show: (uuid, params) => http.get(`/app/finance/taxes/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/taxes`, data),
  update: (uuid, data) => http.put(`/app/finance/taxes/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/taxes/${uuid}`),
}

export const financeTransactions = {
  index: (params) => http.get(`/app/finance/transactions`, { params }),
  show: (uuid, params) => http.get(`/app/finance/transactions/${uuid}`, { params }),
  store: (data) => http.post(`/app/finance/transactions`, data),
  update: (uuid, data) => http.put(`/app/finance/transactions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/finance/transactions/${uuid}`),
}

export const financePaymentMethodsPreRequisitePreRequisite = (params) => http.get('/app/finance/payment-methods/pre-requisite', { params })

export const financeLedgerTypesPreRequisite = (params) => http.get('/app/finance/ledger-types/pre-requisite', { params })

export const financeTaxesPreRequisite = (params) => http.get('/app/finance/taxes/pre-requisite', { params })

export const financeLedgersPreRequisite = (params) => http.get('/app/finance/ledgers/pre-requisite', { params })

export const financeTransactionsPreRequisite = (params) => http.get('/app/finance/transactions/pre-requisite', { params })

export const financeTransactionsUpdateClearingDate = (transaction, data) => http.post(`/app/finance/transactions/${transaction}/clearing-date`, data)

export const finance = (data) => http.post('/app/finance/transactions/import', data)

export const financeReceiptsPreRequisite = (params) => http.get('/app/finance/receipts/pre-requisite', { params })

export const financeDayClosure = (data) => http.post('/app/finance/day-closure', data)

export const financeDayClosuresPreRequisite = (params) => http.get('/app/finance/day-closures/pre-requisite', { params })

export const financeDayClosuresGetDateWiseCollection = (data) => http.post('/app/finance/day-closures/date-wise-collection', data)

export const financeFeeGroupsPreRequisite = (params) => http.get('/app/finance/fee-groups/pre-requisite', { params })

export const financeFeeComponentsPreRequisite = (params) => http.get('/app/finance/fee-components/pre-requisite', { params })

export const financeFeeHeadsPreRequisite = (params) => http.get('/app/finance/fee-heads/pre-requisite', { params })

export const financeFeeConcessionsPreRequisite = (params) => http.get('/app/finance/fee-concessions/pre-requisite', { params })

export const financeFeeStructuresPreRequisite = (params) => http.get('/app/finance/fee-structures/pre-requisite', { params })

export const finance2 = (fee_structure, data) => http.post(`/app/finance/fee-structures/${fee_structure}/allocation`, data)

export const finance3 = (fee_structure, allocation) => http.delete(`/app/finance/fee-structures/${fee_structure}/allocations/${allocation}`, )

export const finance4 = (fee_structure, data) => http.post(`/app/finance/fee-structures/${fee_structure}/installments`, data)

export const financeFeeStructuresGetOptionalFeeHeads = (fee_structure, params) => http.get(`/app/finance/fee-structures/${fee_structure}/optional-fee-heads`, params)

export const financeFeeStructureComponentsPreRequisite = (params) => http.get('/app/finance/fee-structure-components/pre-requisite', { params })

export const reportsDayBookPreRequisite = (params) => http.get('/app/finance/reports/day-book/pre-requisite', { params })

export const reportsDayBookFetch = (params) => http.get('/app/finance/reports/day-book', { params })

export const reportsFeePaymentPreRequisite = (params) => http.get('/app/finance/reports/fee-payment/pre-requisite', { params })

export const reportsFeePaymentFetch = (params) => http.get('/app/finance/reports/fee-payment', { params })

export const reportsOnlineFeePaymentPreRequisite = (params) => http.get('/app/finance/reports/online-fee-payment/pre-requisite', { params })

export const reportsOnlineFeePaymentFetch = (params) => http.get('/app/finance/reports/online-fee-payment', { params })

export const reportsBankTransferPreRequisite = (params) => http.get('/app/finance/reports/bank-transfer/pre-requisite', { params })

export const reportsBankTransferFetch = (params) => http.get('/app/finance/reports/bank-transfer', { params })

export const reportsFeeRefundPreRequisite = (params) => http.get('/app/finance/reports/fee-refund/pre-requisite', { params })

export const reportsFeeRefundFetch = (params) => http.get('/app/finance/reports/fee-refund', { params })

export const reportsFeeSummaryPreRequisite = (params) => http.get('/app/finance/reports/fee-summary/pre-requisite', { params })

export const reportsFeeSummaryFetch = (params) => http.get('/app/finance/reports/fee-summary', { params })

export const reportsFeeConcessionPreRequisite = (params) => http.get('/app/finance/reports/fee-concession/pre-requisite', { params })

export const reportsFeeConcessionFetch = (params) => http.get('/app/finance/reports/fee-concession', { params })

export const reportsFeeConcessionSummaryPreRequisite = (params) => http.get('/app/finance/reports/fee-concession-summary/pre-requisite', { params })

export const reportsFeeConcessionSummaryFetch = (params) => http.get('/app/finance/reports/fee-concession-summary', { params })

export const reportsInstallmentWiseFeeDuePreRequisite = (params) => http.get('/app/finance/reports/installment-wise-fee-due/pre-requisite', { params })

export const reportsInstallmentWiseFeeDueFetch = (params) => http.get('/app/finance/reports/installment-wise-fee-due', { params })

export const reportsFeeDuePreRequisite = (params) => http.get('/app/finance/reports/fee-due/pre-requisite', { params })

export const reportsFeeDueFetch = (params) => http.get('/app/finance/reports/fee-due', { params })

export const reportsFeeHeadPreRequisite = (params) => http.get('/app/finance/reports/fee-head/pre-requisite', { params })

export const reportsFeeHeadFetch = (params) => http.get('/app/finance/reports/fee-head', { params })

export const reportsHeadWiseFeePaymentPreRequisite = (params) => http.get('/app/finance/reports/head-wise-fee-payment/pre-requisite', { params })

export const reportsHeadWiseFeePaymentFetch = (params) => http.get('/app/finance/reports/head-wise-fee-payment', { params })

export const reportsPaymentMethodWiseFeePaymentPreRequisite = (params) => http.get('/app/finance/reports/payment-method-wise-fee-payment/pre-requisite', { params })

export const reportsPaymentMethodWiseFeePaymentFetch = (params) => http.get('/app/finance/reports/payment-method-wise-fee-payment', { params })
