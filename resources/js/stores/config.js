import { defineStore } from 'pinia'
import http from '@/lib/http'

export const useConfigStore = defineStore('config', {
  state: () => ({
    loaded: false,
    data: {},
  }),
  getters: {
    appName: (s) => s.data.general?.app_name || s.data.system?.app_name || 'AdvAca',
    currency: (s) => s.data.currency || {},
    locale: (s) => s.data.locale || 'en',
    period: (s) => s.data.period || null,
    modules: (s) => s.data.modules || {},
  },
  actions: {
    async fetch() {
      try {
        const { data } = await http.get('/config')
        this.data = data || {}
        this.loaded = true
      } catch {
        this.data = {}
      }
      return this.data
    },
  },
})
