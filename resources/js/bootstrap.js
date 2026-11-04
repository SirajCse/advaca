// resources/js/bootstrap.js -- Laravel axios + CSRF setup
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const token = document.querySelector('meta[name="csrf-token"]')
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.warn('CSRF token meta tag missing.')
}

axios.defaults.baseURL = window.location.origin

axios.interceptors.response.use(
  (resp) => resp,
  (err) => {
    if (err.response && err.response.status === 401) window.location.href = '/login'
    if (err.response && err.response.status === 419) window.location.reload()
    return Promise.reject(err)
  }
)

window.axios = axios
