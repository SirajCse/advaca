import http from '@/lib/http'

export const activityTrips = {
  index: (params) => http.get(`/app/activity/trips`, { params }),
  show: (uuid, params) => http.get(`/app/activity/trips/${uuid}`, { params }),
  store: (data) => http.post(`/app/activity/trips`, data),
  update: (uuid, data) => http.put(`/app/activity/trips/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/activity/trips/${uuid}`),
}

export const activityTripsTripParticipants = {
  index: (trip, params) => http.get(`/app/activity/trips/${trip}/participants`, { params }),
  show: (trip, uuid, params) => http.get(`/app/activity/trips/${trip}/participants/${uuid}`, { params }),
  store: (trip, data) => http.post(`/app/activity/trips/${trip}/participants`, data),
  update: (trip, uuid, data) => http.put(`/app/activity/trips/${trip}/participants/${uuid}`, data),
  destroy: (trip, uuid) => http.delete(`/app/activity/trips/${trip}/participants/${uuid}`),
}

export const activity = (params) => http.get('/app/activity/trips/pre-requisite', { params })

export const activityTripsUploadAsset = (trip, type, data) => http.post(`/app/activity/trips/${trip}/assets/${type}`, data)

export const activityTripsRemoveAsset = (trip, type) => http.delete(`/app/activity/trips/${trip}/assets/${type}`, )

export const activityTripsUploadMedia = (trip, data) => http.post(`/app/activity/trips/${trip}/media`, data)

export const activityTripsRemoveMedia = (trip, uuid) => http.delete(`/app/activity/trips/${trip}/media/${uuid}`, )
