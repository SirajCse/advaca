import http from '@/lib/http'

export const chat = {
  index: (params) => http.get(`/app/chat`, { params }),
  store: (data) => http.post(`/app/chat`, data),
}

export const chatChatMessages = {
  index: (chat, params) => http.get(`/app/chat//${chat}/messages`, { params }),
  store: (chat, data) => http.post(`/app/chat//${chat}/messages`, data),
}

export const chatUsers = (params) => http.get('/app/chat//users', { params })

export const chatShow = (chat, params) => http.get(`/app/chat//${chat}`, params)

export const chatMarkAsRead = (chat, data) => http.post(`/app/chat//${chat}/read`, data)

export const chatDestroy = (chat) => http.delete(`/app/chat//${chat}`, )
