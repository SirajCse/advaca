import http from '@/lib/http'

export const studentAccounts = {
  index: (params) => http.get(`/app/student/accounts`, { params }),
  show: (uuid, params) => http.get(`/app/student/accounts/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/accounts`, data),
  update: (uuid, data) => http.put(`/app/student/accounts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/accounts/${uuid}`),
}

export const studentAttendance = {
  store: (data) => http.post(`/app/student/attendance`, data),
}

export const studentConfigAttendanceTypes = {
  index: (params) => http.get(`/app/student/config/attendance-types`, { params }),
  show: (uuid, params) => http.get(`/app/student/config/attendance-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/config/attendance-types`, data),
  update: (uuid, data) => http.put(`/app/student/config/attendance-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/config/attendance-types/${uuid}`),
}

export const studentConfigDocumentTypes = {
  index: (params) => http.get(`/app/student/config/document-types`, { params }),
  show: (uuid, params) => http.get(`/app/student/config/document-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/config/document-types`, data),
  update: (uuid, data) => http.put(`/app/student/config/document-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/config/document-types/${uuid}`),
}

export const studentDocuments = {
  index: (params) => http.get(`/app/student/documents`, { params }),
  show: (uuid, params) => http.get(`/app/student/documents/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/documents`, data),
  update: (uuid, data) => http.put(`/app/student/documents/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/documents/${uuid}`),
}

export const studentEditRequests = {
  index: (params) => http.get(`/app/student/edit-requests`, { params }),
  show: (uuid, params) => http.get(`/app/student/edit-requests/${uuid}`, { params }),
}

export const studentHealthRecord = {
  store: (data) => http.post(`/app/student/health-record`, data),
}

export const studentLeaveRequests = {
  index: (params) => http.get(`/app/student/leave-requests`, { params }),
  show: (uuid, params) => http.get(`/app/student/leave-requests/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/leave-requests`, data),
  update: (uuid, data) => http.put(`/app/student/leave-requests/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/leave-requests/${uuid}`),
}

export const studentPromotion = {
  store: (data) => http.post(`/app/student/promotion`, data),
}

export const studentQualifications = {
  index: (params) => http.get(`/app/student/qualifications`, { params }),
  show: (uuid, params) => http.get(`/app/student/qualifications/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/qualifications`, data),
  update: (uuid, data) => http.put(`/app/student/qualifications/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/qualifications/${uuid}`),
}

export const studentRegistrations = {
  index: (params) => http.get(`/app/student/registrations`, { params }),
  show: (uuid, params) => http.get(`/app/student/registrations/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/registrations`, data),
  update: (uuid, data) => http.put(`/app/student/registrations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/registrations/${uuid}`),
}

export const studentRegistrationsRegistrationDocuments = {
  show: (registration, uuid, params) => http.get(`/app/student/registrations/${registration}/documents/${uuid}`, { params }),
  store: (registration, data) => http.post(`/app/student/registrations/${registration}/documents`, data),
  update: (registration, uuid, data) => http.put(`/app/student/registrations/${registration}/documents/${uuid}`, data),
  destroy: (registration, uuid) => http.delete(`/app/student/registrations/${registration}/documents/${uuid}`),
}

export const studentRegistrationsRegistrationQualifications = {
  show: (registration, uuid, params) => http.get(`/app/student/registrations/${registration}/qualifications/${uuid}`, { params }),
  store: (registration, data) => http.post(`/app/student/registrations/${registration}/qualifications`, data),
  update: (registration, uuid, data) => http.put(`/app/student/registrations/${registration}/qualifications/${uuid}`, data),
  destroy: (registration, uuid) => http.delete(`/app/student/registrations/${registration}/qualifications/${uuid}`),
}

export const studentRollNumber = {
  store: (data) => http.post(`/app/student/roll-number`, data),
}

export const studentServiceRequests = {
  index: (params) => http.get(`/app/student/service-requests`, { params }),
  show: (uuid, params) => http.get(`/app/student/service-requests/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/service-requests`, data),
  update: (uuid, data) => http.put(`/app/student/service-requests/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/service-requests/${uuid}`),
}

export const studentSubject = {
  store: (data) => http.post(`/app/student/subject`, data),
}

export const studentTimesheetBatch = {
  store: (data) => http.post(`/app/student/timesheet/batch`, data),
}

export const studentTimesheets = {
  index: (params) => http.get(`/app/student/timesheets`, { params }),
  show: (uuid, params) => http.get(`/app/student/timesheets/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/timesheets`, data),
  update: (uuid, data) => http.put(`/app/student/timesheets/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/timesheets/${uuid}`),
}

export const studentTransferRequests = {
  index: (params) => http.get(`/app/student/transfer-requests`, { params }),
  show: (uuid, params) => http.get(`/app/student/transfer-requests/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/transfer-requests`, data),
  update: (uuid, data) => http.put(`/app/student/transfer-requests/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/transfer-requests/${uuid}`),
}

export const studentTransferApprovalRequests = {
  index: (params) => http.get(`/app/student/transfer/approval-requests`, { params }),
}

export const studentTransfers = {
  index: (params) => http.get(`/app/student/transfers`, { params }),
  show: (uuid, params) => http.get(`/app/student/transfers/${uuid}`, { params }),
  store: (data) => http.post(`/app/student/transfers`, data),
  update: (uuid, data) => http.put(`/app/student/transfers/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/student/transfers/${uuid}`),
}

export const studentTransfersTransferMedia = {
  store: (transfer, data) => http.post(`/app/student/transfers/${transfer}/media`, data),
}

export const configAttendanceTypesPreRequisite = (params) => http.get('/app/student/config/attendance-types/pre-requisite', { params })

export const studentRegistrationsPaymentPreRequisite = (registration, params) => http.get(`/app/student/registrations/${registration}/payment/pre-requisite`, params)

export const studentRegistrationsSkipPayment = (registration, data) => http.post(`/app/student/registrations/${registration}/skip-payment`, data)

export const studentRegistrationsPayment = (registration, data) => http.post(`/app/student/registrations/${registration}/payment`, data)

export const studentRegistrationsCancelPayment = (registration, uuid) => http.delete(`/app/student/registrations/${registration}/payment/${uuid}`, )

export const studentRegistrationsStoreTempPayment = (registration, data) => http.post(`/app/student/registrations/${registration}/payment/initiate`, data)

export const studentRegistrationsAssignFeePreRequisite = (registration, params) => http.get(`/app/student/registrations/${registration}/assign-fee/pre-requisite`, params)

export const studentRegistrationsAssignFee = (registration, data) => http.post(`/app/student/registrations/${registration}/assign-fee`, data)

export const studentRegistrationsVerify = (registration, data) => http.post(`/app/student/registrations/${registration}/verify`, data)

export const studentRegistrationsActionPreRequisite = (registration, params) => http.get(`/app/student/registrations/${registration}/action/pre-requisite`, params)

export const studentRegistrationsAction = (registration, data) => http.post(`/app/student/registrations/${registration}/action`, data)

export const studentRegistrationsUndoReject = (registration, data) => http.post(`/app/student/registrations/${registration}/undo-reject`, data)

export const studentRegistrationsQualificationsPreRequisite = (registration, params) => http.get(`/app/student/registrations/${registration}/qualifications/pre-requisite`, params)

export const studentRegistrationsDocumentsPreRequisite = (registration, params) => http.get(`/app/student/registrations/${registration}/documents/pre-requisite`, params)

export const studentRegistrationsUploadPhoto = (registration, data) => http.post(`/app/student/registrations/${registration}/photo`, data)

export const studentRegistrationsRemovePhoto = (registration) => http.delete(`/app/student/registrations/${registration}/photo`, )

export const studentRegistrationsPreRequisite = (params) => http.get('/app/student/registrations/pre-requisite', { params })

export const student = (data) => http.post('/app/student/registrations/delete', data)

export const studentRegistrationsUpdateBulkAssignTo = (data) => http.post('/app/student/registrations/assign', data)

export const studentRegistrationsUpdateBulkStage = (data) => http.post('/app/student/registrations/stage', data)

export const studentRegistrationsUpdateDetail = (registration, data) => http.post(`/app/student/registrations/${registration}/detail`, data)

export const studentRegistrationsShowGuardians = (registration, params) => http.get(`/app/student/registrations/${registration}/guardians`, params)

export const studentRegistrationsShowQualifications = (registration, params) => http.get(`/app/student/registrations/${registration}/qualifications`, params)

export const studentRegistrationsShowDocuments = (registration, params) => http.get(`/app/student/registrations/${registration}/documents`, params)

export const studentRollNumberPreRequisite = (params) => http.get('/app/student/roll-number/pre-requisite', { params })

export const studentRollNumberFetch = (params) => http.get('/app/student/roll-number/fetch', { params })

export const studentPhotoPreRequisite = (params) => http.get('/app/student/photo/pre-requisite', { params })

export const studentPhotoFetch = (params) => http.get('/app/student/photo/fetch', { params })

export const studentHealthRecordPreRequisite = (params) => http.get('/app/student/health-record/pre-requisite', { params })

export const studentHealthRecordFetch = (params) => http.get('/app/student/health-record/fetch', { params })

export const studentFeeAllocationPreRequisite = (params) => http.get('/app/student/fee-allocation/pre-requisite', { params })

export const studentFeeAllocationFetch = (params) => http.get('/app/student/fee-allocation/fetch', { params })

export const studentFeeAllocationAllocate = (data) => http.post('/app/student/fee-allocation', data)

export const studentFeeAllocationAllocateFeeConcession = (data) => http.post('/app/student/fee-allocation/fee-concession', data)

export const studentFeeAllocationRemove = (data) => http.post('/app/student/fee-allocation/remove', data)

export const studentServiceAllocationPreRequisite = (params) => http.get('/app/student/service-allocation/pre-requisite', { params })

export const studentServiceAllocationFetch = (params) => http.get('/app/student/service-allocation/fetch', { params })

export const studentServiceAllocationAllocate = (data) => http.post('/app/student/service-allocation', data)

export const studentServiceAllocationRemove = (data) => http.post('/app/student/service-allocation/remove', data)

export const studentPromotionPreRequisite = (params) => http.get('/app/student/promotion/pre-requisite', { params })

export const studentPromotionFetch = (params) => http.get('/app/student/promotion/fetch', { params })

export const studentEditRequestsPreRequisite = (params) => http.get('/app/student/edit-requests/pre-requisite', { params })

export const student2 = (edit_request, data) => http.post(`/app/student/edit-requests/${edit_request}/action`, data)

export const studentServiceRequestsPreRequisite = (params) => http.get('/app/student/service-requests/pre-requisite', { params })

export const student3 = (service_request, data) => http.post(`/app/student/service-requests/${service_request}/status`, data)

export const studentLeaveRequestsPreRequisite = (params) => http.get('/app/student/leave-requests/pre-requisite', { params })

export const studentTransferRequestsPreRequisite = (params) => http.get('/app/student/transfer-requests/pre-requisite', { params })

export const student4 = (transfer_request, data) => http.post(`/app/student/transfer-requests/${transfer_request}/action`, data)

export const studentTransfersApprovalRequestsPreRequisite = (params) => http.get('/app/student/transfer/approval-requests/pre-requisite', { params })

export const studentTransfersPreRequisite = (params) => http.get('/app/student/transfers/pre-requisite', { params })

export const studentAttendanceAbsenteePreRequisite = (params) => http.get('/app/student/attendance/absentees/pre-requisite', { params })

export const studentAttendanceAbsenteeFetch = (params) => http.get('/app/student/attendance/absentees', { params })

export const studentAttendancePreRequisite = (params) => http.get('/app/student/attendance/pre-requisite', { params })

export const studentAttendanceFetch = (params) => http.get('/app/student/attendance/fetch', { params })

export const studentAttendanceRemove = (data) => http.post('/app/student/attendance/remove', data)

export const studentAttendanceMigrate = (data) => http.post('/app/student/attendance/migrate', data)

export const studentAttendanceSendNotification = (data) => http.post('/app/student/attendance/send-notification', data)

export const studentCheckTimesheet = (params) => http.get('/app/student/timesheet/check', { params })

export const student5 = (data) => http.post('/app/student/timesheet/clock', data)

export const studentTimesheetBatchPreRequisite = (params) => http.get('/app/student/timesheet/batch/pre-requisite', { params })

export const studentTimesheetBatchFetch = (params) => http.get('/app/student/timesheet/batch/fetch', { params })

export const studentSubjectPreRequisite = (params) => http.get('/app/student/subject/pre-requisite', { params })

export const studentSubjectFetch = (params) => http.get('/app/student/subject/fetch', { params })

export const studentDocumentsPreRequisite = (params) => http.get('/app/student/documents/pre-requisite', { params })

export const studentDocumentsImport = (data) => http.post('/app/student/documents/import', data)

export const studentAccountsPreRequisite = (params) => http.get('/app/student/accounts/pre-requisite', { params })

export const studentAccountsImport = (data) => http.post('/app/student/accounts/import', data)

export const studentQualificationsPreRequisite = (params) => http.get('/app/student/qualifications/pre-requisite', { params })

export const studentQualificationsImport = (data) => http.post('/app/student/qualifications/import', data)

export const dateWiseAttendancePreRequisite = (params) => http.get('/app/student/reports/date-wise-attendance/pre-requisite', { params })

export const dateWiseAttendanceFetch = (params) => http.get('/app/student/reports/date-wise-attendance', { params })

export const batchWiseAttendancePreRequisite = (params) => http.get('/app/student/reports/batch-wise-attendance/pre-requisite', { params })

export const batchWiseAttendanceFetch = (params) => http.get('/app/student/reports/batch-wise-attendance', { params })

export const subjectWiseAttendancePreRequisite = (params) => http.get('/app/student/reports/subject-wise-attendance/pre-requisite', { params })

export const subjectWiseAttendanceFetch = (params) => http.get('/app/student/reports/subject-wise-attendance', { params })

export const subjectWiseStudentPreRequisite = (params) => http.get('/app/student/reports/subject-wise-student/pre-requisite', { params })

export const dailyAccessReportPreRequisite = (params) => http.get('/app/student/reports/daily-access-report/pre-requisite', { params })

export const dailyAccessReportFetch = (params) => http.get('/app/student/reports/daily-access-report', { params })
