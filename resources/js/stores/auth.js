import { defineStore } from 'pinia'
import http from '@/lib/http'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    ready: false,
    promise: null,
    token: localStorage.getItem('advaca-token') || null,
  }),
  getters: {
    isLoggedIn: (s) => !!s.user,
    isSuperAdmin: (s) => !!s.user?.is_super_admin,
    roles: (s) => s.user?.roles || [],
    can: (s) => (permission) => {
      if (!s.user) return false
      if (s.user.is_super_admin) return true
      return (s.user.permissions || []).includes(permission)
    },
  },
  actions: {
    async init() {
      if (!this.promise) {
        this.promise = this.fetchUser().catch(() => {})
      }
      await this.promise
      this.ready = true
      return this.user
    },
    async fetchUser() {
      try {
        const { data } = await http.get('/auth/user')
        this.user = data
      } catch {
        this.user = null
      }
    },
    async login(payload) {
      const { data } = await http.post('/auth/login', payload)
      if (data.token) {
        this.token = data.token
        localStorage.setItem('advaca-token', data.token)
        http.defaults.headers.common.Authorization = `Bearer ${data.token}`
      }
      await this.fetchUser()
      return data
    },
    async logout() {
      try {
        await http.post('/auth/logout', {})
      } catch {
        // ignore
      }
      localStorage.removeItem('advaca-token')
      delete http.defaults.headers.common.Authorization
      this.user = null
    },
    clear() {
      localStorage.removeItem('advaca-token')
      delete http.defaults.headers.common.Authorization
      this.user = null
    },
  },
})
