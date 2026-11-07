import http from '@/lib/http'

export const approvalRequests = {
  index: (params) => http.get(`/app/approval/requests`, { params }),
  show: (uuid, params) => http.get(`/app/approval/requests/${uuid}`, { params }),
  store: (data) => http.post(`/app/approval/requests`, data),
  update: (uuid, data) => http.put(`/app/approval/requests/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/approval/requests/${uuid}`),
}

export const approvalTypes = {
  index: (params) => http.get(`/app/approval/types`, { params }),
  show: (uuid, params) => http.get(`/app/approval/types/${uuid}`, { params }),
  store: (data) => http.post(`/app/approval/types`, data),
  update: (uuid, data) => http.put(`/app/approval/types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/approval/types/${uuid}`),
}

export const approvalTypesPreRequisite = (params) => http.get('/app/approval/types/pre-requisite', { params })

export const approvalRequestsPreRequisite = (params) => http.get('/app/approval/requests/pre-requisite', { params })

export const approvalRequestsActionPreRequisite = (approval_request, params) => http.get(`/app/approval/requests/${approval_request}/action/pre-requisite`, params)

export const approvalRequestsAction = (approval_request, data) => http.post(`/app/approval/requests/${approval_request}/status`, data)

export const approvalRequestsCancel = (approval_request, data) => http.post(`/app/approval/requests/${approval_request}/cancel`, data)

export const approvalRequestsUploadMedia = (approval_request, data) => http.post(`/app/approval/requests/${approval_request}/media`, data)

export const approvalRequestsRemoveMedia = (approval_request, uuid) => http.delete(`/app/approval/requests/${approval_request}/media/${uuid}`, )

export const reportsRequestSummaryPreRequisite = (params) => http.get('/app/approval/reports/request-summary/pre-requisite', { params })

export const reportsRequestSummaryFetch = (params) => http.get('/app/approval/reports/request-summary', { params })
