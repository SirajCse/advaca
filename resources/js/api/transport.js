import http from '@/lib/http'

export const transportCircles = {
  index: (params) => http.get(`/app/transport/circles`, { params }),
  show: (uuid, params) => http.get(`/app/transport/circles/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/circles`, data),
  update: (uuid, data) => http.put(`/app/transport/circles/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/circles/${uuid}`),
}

export const transportFees = {
  index: (params) => http.get(`/app/transport/fees`, { params }),
  show: (uuid, params) => http.get(`/app/transport/fees/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/fees`, data),
  update: (uuid, data) => http.put(`/app/transport/fees/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/fees/${uuid}`),
}

export const transportRoutes = {
  index: (params) => http.get(`/app/transport/routes`, { params }),
  show: (uuid, params) => http.get(`/app/transport/routes/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/routes`, data),
  update: (uuid, data) => http.put(`/app/transport/routes/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/routes/${uuid}`),
}

export const transportStoppages = {
  index: (params) => http.get(`/app/transport/stoppages`, { params }),
  show: (uuid, params) => http.get(`/app/transport/stoppages/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/stoppages`, data),
  update: (uuid, data) => http.put(`/app/transport/stoppages/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/stoppages/${uuid}`),
}

export const transportVehicleCaseRecords = {
  index: (params) => http.get(`/app/transport/vehicle/case-records`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/case-records/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/case-records`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/case-records/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/case-records/${uuid}`),
}

export const transportVehicleConfigDocumentTypes = {
  index: (params) => http.get(`/app/transport/vehicle/config/document-types`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/config/document-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/config/document-types`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/config/document-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/config/document-types/${uuid}`),
}

export const transportVehicleConfigExpenseTypes = {
  index: (params) => http.get(`/app/transport/vehicle/config/expense-types`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/config/expense-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/config/expense-types`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/config/expense-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/config/expense-types/${uuid}`),
}

export const transportVehicleDocuments = {
  index: (params) => http.get(`/app/transport/vehicle/documents`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/documents/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/documents`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/documents/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/documents/${uuid}`),
}

export const transportVehicleExpenseRecords = {
  index: (params) => http.get(`/app/transport/vehicle/expense-records`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/expense-records/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/expense-records`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/expense-records/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/expense-records/${uuid}`),
}

export const transportVehicleFuelRecords = {
  index: (params) => http.get(`/app/transport/vehicle/fuel-records`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/fuel-records/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/fuel-records`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/fuel-records/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/fuel-records/${uuid}`),
}

export const transportVehicleIncharges = {
  index: (params) => http.get(`/app/transport/vehicle/incharges`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/incharges`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/incharges/${uuid}`),
}

export const transportVehicleServiceRecords = {
  index: (params) => http.get(`/app/transport/vehicle/service-records`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/service-records/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/service-records`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/service-records/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/service-records/${uuid}`),
}

export const transportVehicleTripRecords = {
  index: (params) => http.get(`/app/transport/vehicle/trip-records`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicle/trip-records/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicle/trip-records`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicle/trip-records/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicle/trip-records/${uuid}`),
}

export const transportVehicles = {
  index: (params) => http.get(`/app/transport/vehicles`, { params }),
  show: (uuid, params) => http.get(`/app/transport/vehicles/${uuid}`, { params }),
  store: (data) => http.post(`/app/transport/vehicles`, data),
  update: (uuid, data) => http.put(`/app/transport/vehicles/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/transport/vehicles/${uuid}`),
}

export const transportStoppagesPreRequisite = (params) => http.get('/app/transport/stoppages/pre-requisite', { params })

export const transport = (data) => http.post('/app/transport/stoppages/import', data)

export const transportRoutesPreRequisite = (params) => http.get('/app/transport/routes/pre-requisite', { params })

export const transportRoutesRemovePassenger = (route, passenger) => http.delete(`/app/transport/routes/${route}/passengers/${passenger}`, )

export const transportRoutesAddStudent = (route, data) => http.post(`/app/transport/routes/${route}/students`, data)

export const transportRoutesAddEmployee = (route, data) => http.post(`/app/transport/routes/${route}/employees`, data)

export const transportCirclesPreRequisite = (params) => http.get('/app/transport/circles/pre-requisite', { params })

export const transportFeesPreRequisite = (params) => http.get('/app/transport/fees/pre-requisite', { params })

export const transportVehiclesPreRequisite = (params) => http.get('/app/transport/vehicles/pre-requisite', { params })

export const transport2 = (data) => http.post('/app/transport/vehicles/import', data)

export const reportsBatchWiseRoutePreRequisite = (params) => http.get('/app/transport/reports/batch-wise-route/pre-requisite', { params })

export const reportsBatchWiseRouteFetch = (params) => http.get('/app/transport/reports/batch-wise-route', { params })

export const reportsRouteWiseStudentPreRequisite = (params) => http.get('/app/transport/reports/route-wise-student/pre-requisite', { params })

export const reportsRouteWiseStudentFetch = (params) => http.get('/app/transport/reports/route-wise-student', { params })

export const transportVehicleInchargesPreRequisite = (params) => http.get('/app/transport/vehicle/incharges/pre-requisite', { params })

export const transportVehicle = (data) => http.post('/app/transport/vehicle/incharges/import', data)

export const transportVehicleDocumentsPreRequisite = (params) => http.get('/app/transport/vehicle/documents/pre-requisite', { params })

export const transportVehicleDocumentsImport = (data) => http.post('/app/transport/vehicle/documents/import', data)

export const transportVehicleFuelRecordsPreRequisite = (params) => http.get('/app/transport/vehicle/fuel-records/pre-requisite', { params })

export const transportVehicleFuelRecordsGetPreviousLog = (data) => http.post('/app/transport/vehicle/fuel-records/previous-log', data)

export const transportVehicleTripRecordsPreRequisite = (params) => http.get('/app/transport/vehicle/trip-records/pre-requisite', { params })

export const transportVehicleServiceRecordsPreRequisite = (params) => http.get('/app/transport/vehicle/service-records/pre-requisite', { params })

export const transportVehicleCaseRecordsPreRequisite = (params) => http.get('/app/transport/vehicle/case-records/pre-requisite', { params })

export const transportVehicleExpenseRecordsPreRequisite = (params) => http.get('/app/transport/vehicle/expense-records/pre-requisite', { params })

export const transportVehicleExpenseRecordsImport = (data) => http.post('/app/transport/vehicle/expense-records/import', data)
