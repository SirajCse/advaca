import http from '@/lib/http'

export const news = {
  index: (params) => http.get(`/app/news`, { params }),
  show: (uuid, params) => http.get(`/app/news/${uuid}`, { params }),
  store: (data) => http.post(`/app/news`, data),
  update: (uuid, data) => http.put(`/app/news/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/news/${uuid}`),
}

export const newsPreRequisite = (params) => http.get('/app/news/pre-requisite', { params })

export const newsUploadAsset = (news, type, data) => http.post(`/app/news/${news}/assets/${type}`, data)

export const newsRemoveAsset = (news, type) => http.delete(`/app/news/${news}/assets/${type}`, )

export const newsUpdateMeta = (news, data) => http.post(`/app/news/${news}/meta`, data)

export const newsArchive = (news, data) => http.post(`/app/news/${news}/archive`, data)

export const newsUnarchive = (news, data) => http.post(`/app/news/${news}/unarchive`, data)

export const newsPin = (news, data) => http.post(`/app/news/${news}/pin`, data)

export const newsUnpin = (news, data) => http.post(`/app/news/${news}/unpin`, data)

export const newsArchiveMultiple = (data) => http.post('/app/news/archive', data)

export const newsUnarchiveMultiple = (data) => http.post('/app/news/unarchive', data)

export const newsDestroyMultiple = (data) => http.post('/app/news/delete', data)
