import http from '@/lib/http'

export const contactConfigDocumentTypes = {
  index: (params) => http.get(`/app/contact/config/document-types`, { params }),
  show: (uuid, params) => http.get(`/app/contact/config/document-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/contact/config/document-types`, data),
  update: (uuid, data) => http.put(`/app/contact/config/document-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/contact/config/document-types/${uuid}`),
}
