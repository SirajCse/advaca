import http from '@/lib/http'

export const assetBuildingBlocks = {
  index: (params) => http.get(`/app/asset/building/blocks`, { params }),
  show: (uuid, params) => http.get(`/app/asset/building/blocks/${uuid}`, { params }),
  store: (data) => http.post(`/app/asset/building/blocks`, data),
  update: (uuid, data) => http.put(`/app/asset/building/blocks/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/asset/building/blocks/${uuid}`),
}

export const assetBuildingFloors = {
  index: (params) => http.get(`/app/asset/building/floors`, { params }),
  show: (uuid, params) => http.get(`/app/asset/building/floors/${uuid}`, { params }),
  store: (data) => http.post(`/app/asset/building/floors`, data),
  update: (uuid, data) => http.put(`/app/asset/building/floors/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/asset/building/floors/${uuid}`),
}

export const assetBuildingRooms = {
  index: (params) => http.get(`/app/asset/building/rooms`, { params }),
  show: (uuid, params) => http.get(`/app/asset/building/rooms/${uuid}`, { params }),
  store: (data) => http.post(`/app/asset/building/rooms`, data),
  update: (uuid, data) => http.put(`/app/asset/building/rooms/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/asset/building/rooms/${uuid}`),
}

export const buildingBlocksPreRequisite = (params) => http.get('/app/asset/building/blocks/pre-requisite', { params })

export const buildingFloorsPreRequisite = (params) => http.get('/app/asset/building/floors/pre-requisite', { params })

export const buildingRoomsPreRequisite = (params) => http.get('/app/asset/building/rooms/pre-requisite', { params })
