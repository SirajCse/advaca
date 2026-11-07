import http from '@/lib/http'

export const posts = {
  index: (params) => http.get(`/app/posts`, { params }),
  show: (uuid, params) => http.get(`/app/posts/${uuid}`, { params }),
  store: (data) => http.post(`/app/posts`, data),
  update: (uuid, data) => http.put(`/app/posts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/posts/${uuid}`),
}

export const postsPin = (post, data) => http.post(`/app/posts/${post}/pin`, data)

export const postsUnpin = (post, data) => http.post(`/app/posts/${post}/unpin`, data)

export const postsPreRequisitePreRequisite = (params) => http.get('/app/posts/pre-requisite', { params })
