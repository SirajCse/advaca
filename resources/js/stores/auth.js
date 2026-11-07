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
      // the backend's User::user_permission accessor returns ['*'] for every
      // user with the admin role — treat the wildcard as "all permissions"
      const permissions = s.user.permissions || []
      if (permissions.includes('*')) return true
      return permissions.includes(permission)
    },
  },
  actions: {
    async init() {
      if (!this.promise) {
        // Without a bearer token there is nothing to restore: skip the
        // /auth/user boot call so a fresh visitor on /login never fires a
        // doomed request (avoids the 401 console noise before login).
        this.promise = (this.token ? this.fetchUser({ silent: true }) : Promise.resolve()).catch(() => {})
      }
      await this.promise
      this.ready = true
      return this.user
    },
    async fetchUser(opts = {}) {
      try {
        // refresh_period=true makes AuthUserResource resolve current_period_id
        // against the team's allowed periods (falls back to the default one).
        // silent=true during boot: a rejected token must not fire the global
        // 401 redirect — the router guard owns that decision.
        const { data } = await http.get('/auth/user', {
          params: { refresh_period: true },
          silent: !!opts.silent,
        })
        this.user = data
      } catch (e) {
        this.user = null
        // a rejected stored token is dead — drop it so the next boot skips
        // the probe and the guard sends the visitor to /login cleanly
        if (e?.response?.status === 401 && this.token) this.clear()
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
      localStorage.removeItem('advaca-period-name')
      delete http.defaults.headers.common.Authorization
      this.user = null
    },
    clear() {
      localStorage.removeItem('advaca-token')
      localStorage.removeItem('advaca-period-name')
      delete http.defaults.headers.common.Authorization
      this.user = null
    },
  },
})
