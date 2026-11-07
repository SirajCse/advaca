import http from '@/lib/http'

export const contacts = {
  index: (params) => http.get(`/app/contacts`, { params }),
  show: (uuid, params) => http.get(`/app/contacts/${uuid}`, { params }),
  store: (data) => http.post(`/app/contacts`, data),
  update: (uuid, data) => http.put(`/app/contacts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/contacts/${uuid}`),
}

export const contactsContactUser = {
  index: (contact, params) => http.get(`/app/contacts/${contact}/user`, { params }),
  update: (contact, data) => http.patch(`/app/contacts/${contact}/user`, data),
}

export const contactsConfirmUser = (contact, data) => http.post(`/app/contacts/${contact}/user/confirm`, data)

export const contactsCreateUser = (contact, data) => http.post(`/app/contacts/${contact}/user`, data)

export const contactsByIdPhotoUpload = (contact, data) => http.post(`/app/contacts/${contact}/photo`, data)

export const contactsByIdPhotoRemove = (contact) => http.delete(`/app/contacts/${contact}/photo`, )

export const contactsPreRequisite = (params) => http.get('/app/contacts/pre-requisite', { params })
