import { defineStore } from 'pinia'
import http from '@/lib/http'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const token = localStorage.getItem('advaca-token') || null
    // Re-apply the bearer token on every page load so authenticated
    // requests (e.g. /auth/user during boot) keep working after refresh.
    if (token) {
      http.defaults.headers.common.Authorization = `Bearer ${token}`
    }
    return {
      user: null,
      ready: false,
      promise: null,
      token,
    }
  },
  getters: {
    isLoggedIn: (s) => !!s.user,
    isSuperAdmin: (s) => !!s.user?.is_super_admin,
    roles: (s) => s.user?.roles || [],
    /**
     * The backend UserConfig middleware rejects (422 "choose_period_info")
     * every app request outside its whitelist while the user has no current
     * academic period — expose it so layouts can force the picker.
     */
    currentPeriodId: (s) => s.user?.current_period_id ?? null,
    needsPeriod: (s) => !!s.user && (s.user.current_period_id ?? null) === null,
    can: (s) => (permission) => {
      if (!s.user) return false
      if (s.user.is_super_admin) return true
      return (s.user.permissions || []).includes(permission)
    },
  },
  actions: {
    async init() {
      if (!this.promise) {
        // Without a bearer token there is nothing to restore: skip the
        // /auth/user boot call so a fresh visitor on /login never fires a
        // doomed request (avoids the 401 console noise before login).
        this.promise = (this.token ? this.fetchUser() : Promise.resolve()).catch(() => {})
      }
      await this.promise
      this.ready = true
      return this.user
    },
    async fetchUser() {
      try {
        // refresh_period=true makes AuthUserResource resolve current_period_id
        // against the team's allowed periods (falls back to the default one).
        const { data } = await http.get('/auth/user', { params: { refresh_period: true } })
        this.user = data
      } catch {
        this.user = null
      }
    },
    /**
     * Select the working academic period (mirrors the original UI's
     * PeriodSelection flow): POST /app/academic/periods/{uuid}/select then
     * re-fetch the user so current_period_id updates everywhere.
     */
    async selectPeriod(uuid) {
      await http.post(`/app/academic/periods/${uuid}/select`, {})
      await this.fetchUser()
      return this.user
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
