import http from '@/lib/http'

export const siteBlocks = {
  index: (params) => http.get(`/app/site/blocks`, { params }),
  show: (uuid, params) => http.get(`/app/site/blocks/${uuid}`, { params }),
  store: (data) => http.post(`/app/site/blocks`, data),
  update: (uuid, data) => http.put(`/app/site/blocks/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/site/blocks/${uuid}`),
}

export const siteMenus = {
  index: (params) => http.get(`/app/site/menus`, { params }),
  show: (uuid, params) => http.get(`/app/site/menus/${uuid}`, { params }),
  store: (data) => http.post(`/app/site/menus`, data),
  update: (uuid, data) => http.put(`/app/site/menus/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/site/menus/${uuid}`),
}

export const sitePages = {
  index: (params) => http.get(`/app/site/pages`, { params }),
  show: (uuid, params) => http.get(`/app/site/pages/${uuid}`, { params }),
  store: (data) => http.post(`/app/site/pages`, data),
  update: (uuid, data) => http.put(`/app/site/pages/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/site/pages/${uuid}`),
}

export const sitePagesPreRequisite = (params) => http.get('/app/site/pages/pre-requisite', { params })

export const sitePagesUploadAsset = (page, type, data) => http.post(`/app/site/pages/${page}/assets/${type}`, data)

export const sitePagesRemoveAsset = (page, type) => http.delete(`/app/site/pages/${page}/assets/${type}`, )

export const sitePagesUpdateBlocks = (page, data) => http.post(`/app/site/pages/${page}/blocks`, data)

export const sitePagesUpdateSlider = (page, data) => http.post(`/app/site/pages/${page}/slider`, data)

export const sitePagesUpdateCTA = (page, data) => http.post(`/app/site/pages/${page}/cta`, data)

export const sitePagesUpdateMeta = (page, data) => http.post(`/app/site/pages/${page}/meta`, data)

export const siteMenusPreRequisite = (params) => http.get('/app/site/menus/pre-requisite', { params })

export const siteMenusReorder = (data) => http.post('/app/site/menus/reorder', data)

export const siteMenusReorderSubMenu = (data) => http.post('/app/site/menus/reorder-sub-menu', data)

export const siteBlocksPreRequisite = (params) => http.get('/app/site/blocks/pre-requisite', { params })

export const siteBlocksReorder = (data) => http.post('/app/site/blocks/reorder', data)

export const siteBlocksUploadAsset = (block, type, data) => http.post(`/app/site/blocks/${block}/assets/${type}`, data)

export const siteBlocksRemoveAsset = (block, type) => http.delete(`/app/site/blocks/${block}/assets/${type}`, )

export const siteBlocksUploadSliderImage = (block, data) => http.post(`/app/site/blocks/${block}/slider-images`, data)

export const siteBlocksDeleteSliderImage = (block, image) => http.delete(`/app/site/blocks/${block}/slider-images/${image}`, )
