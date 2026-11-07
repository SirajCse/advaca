import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory('/app'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  if (!auth.ready) await auth.init()

  if (to.meta.guest && auth.isLoggedIn) {
    return { path: '/dashboard' }
  }
  if (!to.meta.guest && !auth.isLoggedIn) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
  return true
})

router.afterEach((to) => {
  const title = to.meta.title || (typeof to.name === 'string' ? to.name.replace(/\./g, ' ') : '')
  document.title = title ? title + ' - AdvAca' : 'AdvAca'
})

export default router
