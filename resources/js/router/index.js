import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!(window.Laravel && window.Laravel.user)
  if (to.meta.requiresAuth && !isLoggedIn && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

router.afterEach((to) => {
  const title = to.meta.title || to.name
  document.title = title ? title + ' - Advaca' : 'Advaca'
})

export default router
