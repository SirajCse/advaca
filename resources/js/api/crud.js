// Generic CRUD API factory driven by the generated entity specs.
// Endpoint paths are relative to the axios base (/api/v1) and mirror the
// untouched Laravel backend exactly (e.g. 'academic/departments').
import http from '@/lib/http'

function clean(path) {
  return String(path || '').replace(/^\/+|\/+$/g, '').replace(/\/{2,}/g, '/')
}

export function createCrudApi(endpoints) {
  const eps = endpoints || {}
  return {
    async list(params = {}) {
      const { data } = await http.get(clean(eps.index), { params })
      return data
    },
    async show(uuid) {
      const { data } = await http.get(clean(eps.show).replace('{uuid}', encodeURIComponent(uuid)))
      return data
    },
    async store(form) {
      const { data } = await http.post(clean(eps.store), form)
      return data
    },
    async update(uuid, form) {
      const { data } = await http.put(clean(eps.update).replace('{uuid}', encodeURIComponent(uuid)), form)
      return data
    },
    async destroy(uuid) {
      const { data } = await http.delete(clean(eps.destroy).replace('{uuid}', encodeURIComponent(uuid)))
      return data
    },
    async preRequisite(params = {}) {
      if (!eps.preRequisite) return {}
      const { data } = await http.get(clean(eps.preRequisite), { params })
      return data
    },
    paths: eps,
  }
}

// Central registry so pages can share pre-requisite caches
const registry = new Map()
export function registerCrud(key, api) {
  registry.set(key, api)
  return api
}
export function getCrud(key) {
  return registry.get(key)
}

// Normalized list response helpers.
// The backend list services return { data: [...], meta: {...}, links: {...} }
export function normalizeList(resp) {
  if (!resp) return { rows: [], meta: {} }
  if (Array.isArray(resp.data)) {
    return { rows: resp.data, meta: resp.meta || {} }
  }
  if (Array.isArray(resp)) return { rows: resp, meta: {} }
  return { rows: resp.data?.data || [], meta: resp.data?.meta || {} }
}

export default createCrudApi
