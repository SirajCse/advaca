import http from '@/lib/http'

export const forms = {
  index: (params) => http.get(`/app/forms`, { params }),
  show: (uuid, params) => http.get(`/app/forms/${uuid}`, { params }),
  store: (data) => http.post(`/app/forms`, data),
  update: (uuid, data) => http.put(`/app/forms/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/forms/${uuid}`),
}

export const formsFormSubmissions = {
  index: (form, params) => http.get(`/app/forms/${form}/submissions`, { params }),
  show: (form, uuid, params) => http.get(`/app/forms/${form}/submissions/${uuid}`, { params }),
  destroy: (form, uuid) => http.delete(`/app/forms/${form}/submissions/${uuid}`),
}

export const formsPreRequisite = (params) => http.get('/app/forms/pre-requisite', { params })

export const formsUpdateStatus = (form, data) => http.post(`/app/forms/${form}/status`, data)

export const formsDetail = (form, params) => http.get(`/app/forms/${form}/detail`, params)

export const formsSubmit = (form, data) => http.post(`/app/forms/${form}/submit`, data)
