import http from '@/lib/http'

export const receptionCallLogs = {
  index: (params) => http.get(`/app/reception/call-logs`, { params }),
  show: (uuid, params) => http.get(`/app/reception/call-logs/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/call-logs`, data),
  update: (uuid, data) => http.put(`/app/reception/call-logs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/call-logs/${uuid}`),
}

export const receptionComplaints = {
  index: (params) => http.get(`/app/reception/complaints`, { params }),
  show: (uuid, params) => http.get(`/app/reception/complaints/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/complaints`, data),
  update: (uuid, data) => http.put(`/app/reception/complaints/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/complaints/${uuid}`),
}

export const receptionCorrespondences = {
  index: (params) => http.get(`/app/reception/correspondences`, { params }),
  show: (uuid, params) => http.get(`/app/reception/correspondences/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/correspondences`, data),
  update: (uuid, data) => http.put(`/app/reception/correspondences/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/correspondences/${uuid}`),
}

export const receptionEnquiries = {
  index: (params) => http.get(`/app/reception/enquiries`, { params }),
  show: (uuid, params) => http.get(`/app/reception/enquiries/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/enquiries`, data),
  update: (uuid, data) => http.put(`/app/reception/enquiries/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/enquiries/${uuid}`),
}

export const receptionEnquiriesEnquirieDocuments = {
  show: (enquirie, uuid, params) => http.get(`/app/reception/enquiries/${enquirie}/documents/${uuid}`, { params }),
  store: (enquirie, data) => http.post(`/app/reception/enquiries/${enquirie}/documents`, data),
  update: (enquirie, uuid, data) => http.put(`/app/reception/enquiries/${enquirie}/documents/${uuid}`, data),
  destroy: (enquirie, uuid) => http.delete(`/app/reception/enquiries/${enquirie}/documents/${uuid}`),
}

export const receptionEnquiriesEnquirieFollowUps = {
  store: (enquirie, data) => http.post(`/app/reception/enquiries/${enquirie}/follow-ups`, data),
  destroy: (enquirie, uuid) => http.delete(`/app/reception/enquiries/${enquirie}/follow-ups/${uuid}`),
}

export const receptionEnquiriesEnquirieQualifications = {
  show: (enquirie, uuid, params) => http.get(`/app/reception/enquiries/${enquirie}/qualifications/${uuid}`, { params }),
  store: (enquirie, data) => http.post(`/app/reception/enquiries/${enquirie}/qualifications`, data),
  update: (enquirie, uuid, data) => http.put(`/app/reception/enquiries/${enquirie}/qualifications/${uuid}`, data),
  destroy: (enquirie, uuid) => http.delete(`/app/reception/enquiries/${enquirie}/qualifications/${uuid}`),
}

export const receptionGatePasses = {
  index: (params) => http.get(`/app/reception/gate-passes`, { params }),
  show: (uuid, params) => http.get(`/app/reception/gate-passes/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/gate-passes`, data),
  update: (uuid, data) => http.put(`/app/reception/gate-passes/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/gate-passes/${uuid}`),
}

export const receptionQueries = {
  index: (params) => http.get(`/app/reception/queries`, { params }),
  show: (uuid, params) => http.get(`/app/reception/queries/${uuid}`, { params }),
  destroy: (uuid) => http.delete(`/app/reception/queries/${uuid}`),
}

export const receptionVisitorLogs = {
  index: (params) => http.get(`/app/reception/visitor-logs`, { params }),
  show: (uuid, params) => http.get(`/app/reception/visitor-logs/${uuid}`, { params }),
  store: (data) => http.post(`/app/reception/visitor-logs`, data),
  update: (uuid, data) => http.put(`/app/reception/visitor-logs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reception/visitor-logs/${uuid}`),
}

export const receptionEnquiriesPreRequisite = (params) => http.get('/app/reception/enquiries/pre-requisite', { params })

export const reception = (data) => http.post('/app/reception/enquiries/import', data)

export const receptionEnquiriesDocumentsPreRequisite = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/documents/pre-requisite`, params)

export const receptionEnquiriesQualificationsPreRequisite = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/qualifications/pre-requisite`, params)

export const receptionEnquiriesFollowUpsPreRequisite = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/follow-ups/pre-requisite`, params)

export const receptionEnquiriesUploadPhoto = (enquiry, data) => http.post(`/app/reception/enquiries/${enquiry}/photo`, data)

export const receptionEnquiriesRemovePhoto = (enquiry) => http.delete(`/app/reception/enquiries/${enquiry}/photo`, )

export const receptionEnquiriesConvertToRegistration = (enquiry, data) => http.post(`/app/reception/enquiries/${enquiry}/registration`, data)

export const receptionEnquiriesBulkConvertToRegistration = (data) => http.post('/app/reception/enquiries/registration', data)

export const receptionEnquiriesUpdateBulkAssignTo = (data) => http.post('/app/reception/enquiries/assign', data)

export const receptionEnquiriesUpdateBulkStage = (data) => http.post('/app/reception/enquiries/stage', data)

export const receptionEnquiriesUpdateBulkType = (data) => http.post('/app/reception/enquiries/type', data)

export const receptionEnquiriesUpdateBulkSource = (data) => http.post('/app/reception/enquiries/source', data)

export const reception2 = (data) => http.post('/app/reception/enquiries/delete', data)

export const receptionEnquiriesUpdateDetail = (enquiry, data) => http.post(`/app/reception/enquiries/${enquiry}/detail`, data)

export const receptionEnquiriesShowGuardians = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/guardians`, params)

export const receptionEnquiriesShowDocuments = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/documents`, params)

export const receptionEnquiriesShowQualifications = (enquiry, params) => http.get(`/app/reception/enquiries/${enquiry}/qualifications`, params)

export const receptionVisitorLogsPreRequisite = (params) => http.get('/app/reception/visitor-logs/pre-requisite', { params })

export const receptionVisitorLogsMarkExit = (visitor_log, data) => http.post(`/app/reception/visitor-logs/${visitor_log}/exit`, data)

export const receptionGatePassesPreRequisite = (params) => http.get('/app/reception/gate-passes/pre-requisite', { params })

export const receptionComplaintsPreRequisite = (params) => http.get('/app/reception/complaints/pre-requisite', { params })

export const reception3 = (complaint, data) => http.post(`/app/reception/complaints/${complaint}/assign`, data)

export const reception4 = (complaint, employee, data) => http.post(`/app/reception/complaints/${complaint}/unassign/${employee}`, data)

export const reception5 = (complaint, data) => http.post(`/app/reception/complaints/${complaint}/logs`, data)

export const reception6 = (complaint, log, data) => http.post(`/app/reception/complaints/${complaint}/logs/${log}`, data)

export const receptionCallLogsPreRequisite = (params) => http.get('/app/reception/call-logs/pre-requisite', { params })

export const receptionCorrespondencesPreRequisite = (params) => http.get('/app/reception/correspondences/pre-requisite', { params })

export const receptionQueriesPreRequisite = (params) => http.get('/app/reception/queries/pre-requisite', { params })

export const reception7 = (query, data) => http.post(`/app/reception/queries/${query}/action`, data)
