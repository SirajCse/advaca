import '../css/app.css'
import './bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Vue3ApexChart from 'vue3-apexcharts'
import Swal from 'sweetalert2'

import App from './views/Layouts/App.vue'
import router from './router'
import { setUnauthorizedHandler } from './lib/http'
import { useAuthStore } from './stores/auth'

import PageHeader from './views/Components/PageHeader.vue'
import PageHeaderAction from './views/Components/PageHeaderAction.vue'
import ListItem from './views/Components/ListItem.vue'
import DataTable from './views/Components/DataTable.vue'
import FormAction from './views/Components/FormAction.vue'
import FormSelect from './views/Components/FormSelect.vue'
import FormRelationSelect from './views/Components/FormRelationSelect.vue'
import FormArrayInput from './views/Components/FormArrayInput.vue'
import ParentTransition from './views/Layouts/ParentTransition.vue'
import ChildTransition from './views/Components/ChildTransition.vue'
import KeySearch from './views/Components/KeySearch.vue'
import ErrorPage from './views/Components/ErrorPage.vue'
import ShowButton from './views/Components/ShowButton.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  // /js/lang exposes { namespace: { key: value } } — treat it as the en locale
  messages: { en: window.i18n || {} },
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Vue3ApexChart)

app.config.globalProperties.$trans = (key, params) => i18n.global.t(key, params)
app.config.globalProperties.$swal = Swal

// keep one broken view from blanking the whole page: log and keep rendering
app.config.errorHandler = (err, instance, info) => {
  // eslint-disable-next-line no-console
  console.error('[advaca-vue]', err, '\nat:', info)
}

app.component('PageHeader', PageHeader)
app.component('PageHeaderAction', PageHeaderAction)
app.component('ListItem', ListItem)
app.component('DataTable', DataTable)
app.component('FormAction', FormAction)
app.component('FormSelect', FormSelect)
app.component('FormRelationSelect', FormRelationSelect)
app.component('FormArrayInput', FormArrayInput)
app.component('ParentTransition', ParentTransition)
app.component('ChildTransition', ChildTransition)
app.component('KeySearch', KeySearch)
app.component('ErrorPage', ErrorPage)
app.component('ShowButton', ShowButton)

const auth = useAuthStore()

setUnauthorizedHandler(() => {
  auth.clear()
  const path = router.currentRoute.value.path
  if (path !== '/login' && !path.startsWith('/login')) {
    router.push({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
  }
})

// warm up auth + config before first navigation
auth.init().then(() => {
  app.mount('#root')
})
