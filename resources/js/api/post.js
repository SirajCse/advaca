import http from '@/lib/http'

export const postImages = {
  store: (data) => http.post(`/app/post/images`, data),
  destroy: (uuid) => http.delete(`/app/post/images/${uuid}`),
}
