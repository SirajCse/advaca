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
  // registration work). A failing config endpoint must NEVER block
  // navigation — the app degrades gracefully instead of blanking out.
  if (!config.loaded) {
    try {
      await config.fetch()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[advaca-vue] config fetch failed, continuing with defaults', e?.message)
    }
  }

  if (!auth.ready) {
    try {
      await auth.init()
    } catch (e) {
      // auth.init resolves its own errors; this guard is belt & braces so a
      // thrown bootstrap error can never abort the whole router.
      // eslint-disable-next-line no-console
      console.warn('[advaca-vue] auth init failed, continuing as guest', e?.message)
    }
  }

  if (to.meta.guest && auth.isLoggedIn) {
    return { path: '/dashboard' }
  }
  if (!to.meta.guest && !auth.isLoggedIn) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  // unknown URL for a signed-in user must never dead-end on the 404 page —
  // land on the dashboard instead (the intended path travels in ?nf= so the
  // dashboard can show a "page not found" notice). Guests are already sent
  // to /login above.
  if (to.name === 'NotFound' && auth.isLoggedIn) {
    return { path: '/dashboard', query: { nf: to.fullPath } }
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
