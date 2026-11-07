import http from '@/lib/http'

export const tags = {
  index: (params) => http.get(`/app/tags`, { params }),
}
