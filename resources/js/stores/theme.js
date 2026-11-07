import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: localStorage.getItem('advaca-theme') === 'dark' ||
      (!localStorage.getItem('advaca-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches),
    sidebarOpen: window.innerWidth >= 1024,
  }),
  actions: {
    apply() {
      document.documentElement.classList.toggle('dark', this.dark)
    },
    toggle() {
      this.dark = !this.dark
      localStorage.setItem('advaca-theme', this.dark ? 'dark' : 'light')
      this.apply()
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    closeSidebarOnMobile() {
      if (window.innerWidth < 1024) this.sidebarOpen = false
    },
  },
})
