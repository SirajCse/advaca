import http from '@/lib/http'

export const inventories = {
  index: (params) => http.get(`/app/inventories`, { params }),
  show: (uuid, params) => http.get(`/app/inventories/${uuid}`, { params }),
  store: (data) => http.post(`/app/inventories`, data),
  update: (uuid, data) => http.put(`/app/inventories/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/inventories/${uuid}`),
}

export const inventoriesPreRequisitePreRequisite = (params) => http.get('/app/inventories/pre-requisite', { params })
