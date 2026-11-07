import http from '@/lib/http'

export const commentsStore = (data) => http.post('/app/comments', data)
