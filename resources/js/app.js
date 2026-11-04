import { RouterLink, RouterView } from 'vue-router'
import './bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Vue3ApexChart from 'vue3-apexcharts'
import Swal from 'sweetalert2'
import { ZiggyVue } from 'ziggy-js'

import App from './views/Layouts/App.vue'
import router from './router'

import PageHeader from './views/Components/PageHeader.vue'
import PageHeaderAction from './views/Components/PageHeaderAction.vue'
import ListItem from './views/Components/ListItem.vue'
import DataTable from './views/Components/DataTable.vue'
import FormAction from './views/Components/FormAction.vue'
import ParentTransition from './views/Layouts/ParentTransition.vue'

const i18n = createI18n({
  legacy: true,
  locale: (window.Laravel && window.Laravel.locale) || 'en',
  fallbackLocale: 'en',
  messages: (window.Laravel && window.Laravel.i18n) || { en: {} },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ZiggyVue)
app.use(Vue3ApexChart)

app.config.globalProperties.$trans = (key, params) => i18n.global.t(key, params)
app.config.globalProperties.$swal = Swal

app.component('PageHeader', PageHeader)
app.component('PageHeaderAction', PageHeaderAction)
app.component('ListItem', ListItem)
app.component('DataTable', DataTable)
app.component('FormAction', FormAction)
app.component('ParentTransition', ParentTransition)

app.component('Link', RouterLink)
app.component('Head', { inheritAttrs: false, template: '<slot />' })
app.component('RouterView', RouterView)
app.mount('#app')

