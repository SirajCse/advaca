import http from '@/lib/http'

export const disciplineIncidents = {
  index: (params) => http.get(`/app/discipline/incidents`, { params }),
  show: (uuid, params) => http.get(`/app/discipline/incidents/${uuid}`, { params }),
  store: (data) => http.post(`/app/discipline/incidents`, data),
  update: (uuid, data) => http.put(`/app/discipline/incidents/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/discipline/incidents/${uuid}`),
}

export const discipline = (params) => http.get('/app/discipline/incidents/pre-requisite', { params })

export const disciplineCreate = (params) => http.get('/app/discipline/incidents/create', { params })

export const disciplineEdit = (uuid, params) => http.get(`/app/discipline/incidents/${uuid}/edit`, params)
