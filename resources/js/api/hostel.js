import http from '@/lib/http'

export const hostelBlockIncharges = {
  index: (params) => http.get(`/app/hostel/block-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/hostel/block-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/hostel/block-incharges`, data),
  update: (uuid, data) => http.put(`/app/hostel/block-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/hostel/block-incharges/${uuid}`),
}

export const hostelBlocks = {
  index: (params) => http.get(`/app/hostel/blocks`, { params }),
  show: (uuid, params) => http.get(`/app/hostel/blocks/${uuid}`, { params }),
  store: (data) => http.post(`/app/hostel/blocks`, data),
  update: (uuid, data) => http.put(`/app/hostel/blocks/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/hostel/blocks/${uuid}`),
}

export const hostelFloors = {
  index: (params) => http.get(`/app/hostel/floors`, { params }),
  show: (uuid, params) => http.get(`/app/hostel/floors/${uuid}`, { params }),
  store: (data) => http.post(`/app/hostel/floors`, data),
  update: (uuid, data) => http.put(`/app/hostel/floors/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/hostel/floors/${uuid}`),
}

export const hostelRoomAllocations = {
  index: (params) => http.get(`/app/hostel/room-allocations`, { params }),
  show: (uuid, params) => http.get(`/app/hostel/room-allocations/${uuid}`, { params }),
  store: (data) => http.post(`/app/hostel/room-allocations`, data),
  update: (uuid, data) => http.put(`/app/hostel/room-allocations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/hostel/room-allocations/${uuid}`),
}

export const hostelRooms = {
  index: (params) => http.get(`/app/hostel/rooms`, { params }),
  show: (uuid, params) => http.get(`/app/hostel/rooms/${uuid}`, { params }),
  store: (data) => http.post(`/app/hostel/rooms`, data),
  update: (uuid, data) => http.put(`/app/hostel/rooms/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/hostel/rooms/${uuid}`),
}

export const hostelBlocksPreRequisite = (params) => http.get('/app/hostel/blocks/pre-requisite', { params })

export const hostelBlockInchargesPreRequisite = (params) => http.get('/app/hostel/block-incharges/pre-requisite', { params })

export const hostelFloorsPreRequisite = (params) => http.get('/app/hostel/floors/pre-requisite', { params })

export const hostelRoomsPreRequisite = (params) => http.get('/app/hostel/rooms/pre-requisite', { params })

export const hostelRoomAllocationsPreRequisite = (params) => http.get('/app/hostel/room-allocations/pre-requisite', { params })
