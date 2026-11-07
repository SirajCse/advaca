import http from '@/lib/http'

export const postImages = {
  store: (data) => http.post(`/app/post/images`, data),
  destroy: (image) => http.delete('/app/post/images', { params: { image } }),
}
