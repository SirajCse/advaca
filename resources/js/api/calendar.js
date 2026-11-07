import http from '@/lib/http'

export const calendarCelebrations = {
  index: (params) => http.get(`/app/calendar/celebrations`, { params }),
}

export const calendarEvents = {
  index: (params) => http.get(`/app/calendar/events`, { params }),
  show: (uuid, params) => http.get(`/app/calendar/events/${uuid}`, { params }),
  store: (data) => http.post(`/app/calendar/events`, data),
  update: (uuid, data) => http.put(`/app/calendar/events/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/calendar/events/${uuid}`),
}

export const calendarHolidays = {
  index: (params) => http.get(`/app/calendar/holidays`, { params }),
  show: (uuid, params) => http.get(`/app/calendar/holidays/${uuid}`, { params }),
  store: (data) => http.post(`/app/calendar/holidays`, data),
  update: (uuid, data) => http.put(`/app/calendar/holidays/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/calendar/holidays/${uuid}`),
}

export const calendarHolidaysPreRequisite = (params) => http.get('/app/calendar/holidays/pre-requisite', { params })

export const calendar = (params) => http.get('/app/calendar/celebrations/pre-requisite', { params })

export const calendar2 = (params) => http.get('/app/calendar/events/pre-requisite', { params })

export const calendarEventsUploadAsset = (event, type, data) => http.post(`/app/calendar/events/${event}/assets/${type}`, data)

export const calendarEventsRemoveAsset = (event, type) => http.delete(`/app/calendar/events/${event}/assets/${type}`, )

export const calendarEventsPin = (event, data) => http.post(`/app/calendar/events/${event}/pin`, data)

export const calendarEventsUnpin = (event, data) => http.post(`/app/calendar/events/${event}/unpin`, data)
