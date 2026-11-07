import http from '@/lib/http'

export const inventoryIncharges = {
  index: (params) => http.get(`/app/inventory/incharges`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/incharges`, data),
  update: (uuid, data) => http.put(`/app/inventory/incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/incharges/${uuid}`),
}

export const inventoryInventoryStockAdjustments = {
  index: (params) => http.get(`/app/inventory/stock-adjustments`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-adjustments/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-adjustments`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-adjustments/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-adjustments/${uuid}`),
}

export const inventoryInventoryStockCategories = {
  index: (params) => http.get(`/app/inventory/stock-categories`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-categories/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-categories`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-categories/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-categories/${uuid}`),
}

export const inventoryInventoryStockItemCopies = {
  index: (params) => http.get(`/app/inventory/stock-item/copies`, { params }),
}

export const inventoryInventoryStockItems = {
  index: (params) => http.get(`/app/inventory/stock-items`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-items/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-items`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-items/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-items/${uuid}`),
}

export const inventoryInventoryStockItemsWithCopies = {
  index: (params) => http.get(`/app/inventory/stock-items-with-copies`, { params }),
}

export const inventoryInventoryStockPurchases = {
  index: (params) => http.get(`/app/inventory/stock-purchases`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-purchases/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-purchases`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-purchases/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-purchases/${uuid}`),
}

export const inventoryInventoryStockRequisitions = {
  index: (params) => http.get(`/app/inventory/stock-requisitions`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-requisitions/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-requisitions`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-requisitions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-requisitions/${uuid}`),
}

export const inventoryInventoryStockReturns = {
  index: (params) => http.get(`/app/inventory/stock-returns`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-returns/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-returns`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-returns/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-returns/${uuid}`),
}

export const inventoryInventoryStockTransfers = {
  index: (params) => http.get(`/app/inventory/stock-transfers`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/stock-transfers/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/stock-transfers`, data),
  update: (uuid, data) => http.put(`/app/inventory/stock-transfers/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/stock-transfers/${uuid}`),
}

export const inventoryInventoryVendors = {
  index: (params) => http.get(`/app/inventory/vendors`, { params }),
  show: (uuid, params) => http.get(`/app/inventory/vendors/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventory/vendors`, data),
  update: (uuid, data) => http.put(`/app/inventory/vendors/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventory/vendors/${uuid}`),
}

export const inventoryInchargesPreRequisite = (params) => http.get('/app/inventory/incharges/pre-requisite', { params })

export const inventory = (params) => http.get('/app/inventory/vendors/pre-requisite', { params })

export const inventoryVendorsStatement = (vendor, params) => http.get(`/app/inventory/vendors/${vendor}/statement`, params)

export const inventory2 = (data) => http.post('/app/inventory/vendors/import', data)

export const inventory3 = (params) => http.get('/app/inventory/stock-categories/pre-requisite', { params })

export const inventory4 = (data) => http.post('/app/inventory/stock-categories/import', data)

export const inventory5 = (params) => http.get('/app/inventory/stock-items/pre-requisite', { params })

export const inventory6 = (data) => http.post('/app/inventory/stock-items/import', data)

export const inventory7 = (stockItem, data) => http.post(`/app/inventory/stock-items/${stockItem}/quantity`, data)

export const inventory8 = (data) => http.post('/app/inventory/stock-items/tags', data)

export const stockItem = (params) => http.get('/app/inventory/stock-item/copies/pre-requisite', { params })

export const stockItem2 = (data) => http.post('/app/inventory/stock-item/copies/condition', data)

export const stockItem3 = (data) => http.post('/app/inventory/stock-item/copies/status', data)

export const stockItem4 = (data) => http.post('/app/inventory/stock-item/copies/tags', data)

export const stockItemLabelsPreRequisite = (params) => http.get('/app/inventory/stock-item/labels/pre-requisite', { params })

export const stockItemLabelsPrint = (params) => http.get('/app/inventory/stock-item/labels', { params })

export const inventory9 = (params) => http.get('/app/inventory/stock-requisitions/pre-requisite', { params })

export const inventory10 = (params) => http.get('/app/inventory/stock-purchases/pre-requisite', { params })

export const inventory11 = (params) => http.get('/app/inventory/stock-returns/pre-requisite', { params })

export const inventory12 = (params) => http.get('/app/inventory/stock-transfers/pre-requisite', { params })

export const inventory13 = (params) => http.get('/app/inventory/stock-adjustments/pre-requisite', { params })

export const reportsItemSummaryPreRequisite = (params) => http.get('/app/inventory/reports/item-summary/pre-requisite', { params })

export const reportsItemSummaryFetch = (params) => http.get('/app/inventory/reports/item-summary', { params })
