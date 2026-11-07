import http from '@/lib/http'

export const exams = {
  index: (params) => http.get(`/app/exams`, { params }),
  show: (uuid, params) => http.get(`/app/exams/${uuid}`, { params }),
  store: (data) => http.post(`/app/exams`, data),
  update: (uuid, data) => http.put(`/app/exams/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exams/${uuid}`),
}

export const examsPreRequisite = (params) => http.get('/app/exams/pre-requisite', { params })

export const examsStoreConfig = (exam, data) => http.post(`/app/exams/${exam}/config`, data)

export const examsReorder = (data) => http.post('/app/exams/reorder', data)

export const examsUploadSignature = (exam, type, data) => http.post(`/app/exams/${exam}/signatures/${type}`, data)

export const examsRemoveSignature = (exam, type) => http.delete(`/app/exams/${exam}/signatures/${type}`, )
