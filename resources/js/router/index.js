import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { detectAppBase } from '@/lib/base'
import { useAuthStore } from '@/stores/auth'
import { useConfigStore } from '@/stores/config'

const router = createRouter({
  // "/app" at a domain root, "/advaca/public/app" inside a sub folder —
  // resolved from the URL the blade was served on, so both WAMP and vhost
  // setups work with the same build.
  history: createWebHistory(detectAppBase()),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  const config = useConfigStore()

  // bootstrap app config once (public GET /config — same as the original UI,
  // which loads it before the auth guard so login-page toggles like OTP
  // registration work)
  if (!config.loaded) await config.fetch()

  if (!auth.ready) await auth.init()

  if (to.meta.guest && auth.isLoggedIn) {
    return { path: '/dashboard' }
  }
  if (!to.meta.guest && !auth.isLoggedIn) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  // route permission guard (mirrors the original router's meta.permissions
  // check; super admins bypass)
  const permission = to.meta.permission || to.matched.reduce(
    (acc, r) => r.meta.permission || acc, null,
  )
  if (permission && !auth.can(permission)) {
    return { name: 'Error403' }
  }

  return true
})

router.afterEach((to) => {
  const title = to.meta.title || (typeof to.name === 'string' ? to.name.replace(/\./g, ' ') : '')
  document.title = title ? title + ' - AdvAca' : 'AdvAca'
})

export default router
