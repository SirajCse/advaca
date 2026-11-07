import http from '@/lib/http'

export const appGuestMedias = {
  store: (data) => http.post(`/app/guest/medias`, data),
  destroy: (uuid) => http.delete(`/app/guest/medias/${uuid}`),
}
