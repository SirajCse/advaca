// Central axios instance talking to the untouched Laravel API (/api)
import axios from 'axios'
import Swal from 'sweetalert2'

const http = axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
})

const tokenMeta = document.querySelector('meta[name="csrf-token"]')
if (tokenMeta && tokenMeta.content) {
  http.defaults.headers.common['X-CSRF-TOKEN'] = tokenMeta.content
}

let unauthorizedHandler = null
export function setUnauthorizedHandler(fn) {
  unauthorizedHandler = fn
}

http.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const resp = error.response
    if (resp) {
      if (resp.status === 401) {
        if (unauthorizedHandler) unauthorizedHandler()
      } else if (resp.status === 419) {
        window.location.reload()
      } else if (resp.status === 422) {
        const d = resp.data || {}
        error.fieldErrors = d.errors || {}
        let msg = ''
        if (Array.isArray(d.errors?.message)) {
          msg = d.errors.message[0]
        } else if (typeof d.errors?.message === 'string') {
          msg = d.errors.message
        } else if (d.message && !d.errors) {
          msg = d.message
        } else {
          const first = Object.values(d.errors || {})[0]
          if (first) msg = Array.isArray(first) ? first[0] : String(first)
        }
        error.toastMessage = msg
        if (msg && !error.config?.silent) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: String(msg),
            toast: true,
            position: 'top-end',
            timer: 5000,
            showConfirmButton: false,
          })
        }
      } else if (resp.status === 429) {
        const d = resp.data || {}
        let msg = d.message || 'Too many attempts. Please try again in a minute.'
        if (d.errors) {
          const first = Object.values(d.errors)[0]
          if (first) msg = Array.isArray(first) ? first[0] : String(first)
        }
        error.toastMessage = msg
        Swal.fire({
          icon: 'warning',
          title: 'Slow down',
          text: String(msg),
          toast: true,
          position: 'top-end',
          timer: 6000,
          showConfirmButton: false,
        })
      } else if (resp.status >= 500) {
        Swal.fire({
          icon: 'error',
          title: 'Server error',
          text: 'Something went wrong on the server. Please try again.',
          toast: true,
          position: 'top-end',
          timer: 5000,
          showConfirmButton: false,
        })
      }
    }
    return Promise.reject(error)
  },
)

export default http
