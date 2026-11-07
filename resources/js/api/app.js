import http from '@/lib/http'

export const appGuestMedias = {
  store: (data) => http.post(`/app/app/guest/medias`, data),
  destroy: (uuid) => http.delete(`/app/app/guest/medias/${uuid}`),
}
