import http from '@/lib/http'

export const students = {
  index: (params) => http.get(`/app/students`, { params }),
  show: (uuid, params) => http.get(`/app/students/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/students/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/students/${uuid}`),
}

export const studentsImportHistory = {
  index: (params) => http.get(`/app/students/import/history`, { params }),
  destroy: (uuid) => http.delete(`/app/students/import/history/${uuid}`),
}

export const studentsStudentAccounts = {
  index: (student, params) => http.get(`/app/students/${student}/accounts`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/accounts/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/accounts`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/accounts/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/accounts/${uuid}`),
}

export const studentsStudentCustomFees = {
  index: (student, params) => http.get(`/app/students/${student}/custom-fees`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/custom-fees/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/custom-fees`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/custom-fees/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/custom-fees/${uuid}`),
}

export const studentsStudentDialogues = {
  index: (student, params) => http.get(`/app/students/${student}/dialogues`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/dialogues/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/dialogues`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/dialogues/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/dialogues/${uuid}`),
}

export const studentsStudentDocuments = {
  index: (student, params) => http.get(`/app/students/${student}/documents`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/documents/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/documents`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/documents/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/documents/${uuid}`),
}

export const studentsStudentEditRequests = {
  index: (student, params) => http.get(`/app/students/${student}/edit-requests`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/edit-requests/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/edit-requests`, data),
}

export const studentsStudentFeeRefunds = {
  index: (student, params) => http.get(`/app/students/${student}/fee-refunds`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/fee-refunds/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/fee-refunds`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/fee-refunds/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/fee-refunds/${uuid}`),
}

export const studentsStudentGuardians = {
  index: (student, params) => http.get(`/app/students/${student}/guardians`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/guardians/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/guardians`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/guardians/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/guardians/${uuid}`),
}

export const studentsStudentQualifications = {
  index: (student, params) => http.get(`/app/students/${student}/qualifications`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/qualifications/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/qualifications`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/qualifications/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/qualifications/${uuid}`),
}

export const studentsStudentRecords = {
  index: (student, params) => http.get(`/app/students/${student}/records`, { params }),
  show: (student, uuid, params) => http.get(`/app/students/${student}/records/${uuid}`, { params }),
  store: (student, data) => http.post(`/app/students/${student}/records`, data),
  update: (student, uuid, data) => http.put(`/app/students/${student}/records/${uuid}`, data),
  destroy: (student, uuid) => http.delete(`/app/students/${student}/records/${uuid}`),
}

export const studentsStudentSiblings = {
  index: (student, params) => http.get(`/app/students/${student}/siblings`, { params }),
}

export const studentsStudentSubject = {
  update: (student, uuid, data) => http.put(`/app/students/${student}/subject/${uuid}`, data),
}

export const studentsStudentUser = {
  index: (student, params) => http.get(`/app/students/${student}/user`, { params }),
  update: (student, uuid, data) => http.put(`/app/students/${student}/user/${uuid}`, data),
}

export const studentsConfirmUser = (student, data) => http.post(`/app/students/${student}/user/confirm`, data)

export const studentsCreateUser = (student, data) => http.post(`/app/students/${student}/user`, data)

export const studentsUpdateCurrentPeriod = (student, data) => http.post(`/app/students/${student}/period`, data)

export const studentsByIdPhotoUpload = (student, data) => http.post(`/app/students/${student}/photo`, data)

export const studentsByIdPhotoRemove = (student) => http.delete(`/app/students/${student}/photo`, )

export const studentsByIdAdmissionCancelAdmission = (student) => http.delete(`/app/students/${student}/admission`, )

export const studentsByIdPromotionCancelPromotion = (student) => http.delete(`/app/students/${student}/promotion`, )

export const studentsByIdAlumniCancelAlumni = (student) => http.delete(`/app/students/${student}/alumni`, )

export const studentsSetDefaultPeriod = (student, data) => http.post(`/app/students/${student}/default-period`, data)

export const studentsGuardiansPreRequisite = (student, params) => http.get(`/app/students/${student}/guardians/pre-requisite`, params)

export const studentsGuardiansMakePrimary = (student, guardian, data) => http.post(`/app/students/${student}/guardians/${guardian}/make-primary`, data)

export const studentsSiblingsPreRequisite = (student, params) => http.get(`/app/students/${student}/siblings/pre-requisite`, params)

export const studentsRecordsPreRequisite = (student, params) => http.get(`/app/students/${student}/records/pre-requisite`, params)

export const studentsFeePreRequisite = (student, params) => http.get(`/app/students/${student}/fee/pre-requisite`, params)

export const studentsFetchFee = (student, params) => http.get(`/app/students/${student}/fee`, params)

export const studentsGetSiblingFees = (student, params) => http.get(`/app/students/${student}/sibling-fees`, params)

export const studentsListFee = (student, params) => http.get(`/app/students/${student}/fee/list`, params)

export const studentsGetFeeSummary = (student, params) => http.get(`/app/students/${student}/fee/summary`, params)

export const studentsGetStudentFees = (student, params) => http.get(`/app/students/${student}/fees`, params)

export const studentsSetFee = (student, data) => http.post(`/app/students/${student}/fee`, data)

export const studentsUpdateFee = (student, data) => http.patch(`/app/students/${student}/fee`, data)

export const studentsResetFee = (student) => http.delete(`/app/students/${student}/fee`, )

export const studentsLockUnlockFee = (student, data) => http.post(`/app/students/${student}/fee/lock-unlock`, data)

export const studentsSetCustomConcession = (student, data) => http.post(`/app/students/${student}/fee/custom-concession`, data)

export const studentsAttendanceFetch = (student, params) => http.get(`/app/students/${student}/attendance`, params)

export const studentsExamReportFetch = (student, params) => http.get(`/app/students/${student}/exam-report`, params)

export const studentsSubjectFetch = (student, params) => http.get(`/app/students/${student}/subject`, params)

export const studentsFeePaymentPreRequisite = (student, params) => http.get(`/app/students/${student}/payment/pre-requisite`, params)

export const studentsMakeHeadWisePayment = (student, data) => http.post(`/app/students/${student}/head-wise-payment`, data)

export const studentsMakeMultiHeadWisePayment = (student, data) => http.post(`/app/students/${student}/multi-head-wise-payment`, data)

export const studentsBankTransfer = (student, data) => http.post(`/app/students/${student}/bank-transfer`, data)

export const studentsBankTransferAction = (student, uuid, data) => http.post(`/app/students/${student}/bank-transfers/${uuid}/action`, data)

export const studentsMakePayment = (student, data) => http.post(`/app/students/${student}/payment`, data)

export const studentsStoreTempPayment = (student, data) => http.post(`/app/students/${student}/payment/initiate`, data)

export const studentsGetPayment = (student, uuid, params) => http.get(`/app/students/${student}/payment/${uuid}`, params)

export const studentsUpdatePayment = (student, uuid, data) => http.patch(`/app/students/${student}/payment/${uuid}`, data)

export const studentsCancelPayment = (student, uuid, data) => http.post(`/app/students/${student}/cancel-payment/${uuid}`, data)

export const studentsInitiatePayment = (student, data) => http.post(`/app/students/${student}/online-payment/initiate`, data)

export const studentsCompletePayment = (student, data) => http.post(`/app/students/${student}/online-payment/complete`, data)

export const studentsFailPayment = (student, data) => http.post(`/app/students/${student}/online-payment/fail`, data)

export const studentsUpdatePaymentStatus = (student, uuid, data) => http.post(`/app/students/${student}/online-payment/${uuid}/status`, data)

export const studentsRefreshSelfPayment = (student, uuid, data) => http.post(`/app/students/${student}/online-payment/${uuid}/refresh-self-payment`, data)

export const studentsCustomFeesPreRequisite = (student, params) => http.get(`/app/students/${student}/custom-fees/pre-requisite`, params)

export const studentsFeeRefundsPreRequisite = (student, params) => http.get(`/app/students/${student}/fee-refunds/pre-requisite`, params)

export const studentsFeeRefundsCancel = (student, uuid, data) => http.post(`/app/students/${student}/fee-refunds/${uuid}/cancel`, data)

export const studentsDialoguesPreRequisite = (student, params) => http.get(`/app/students/${student}/dialogues/pre-requisite`, params)

export const studentsAccountsPreRequisite = (student, params) => http.get(`/app/students/${student}/accounts/pre-requisite`, params)

export const studentsDocumentsPreRequisite = (student, params) => http.get(`/app/students/${student}/documents/pre-requisite`, params)

export const studentsQualificationsPreRequisite = (student, params) => http.get(`/app/students/${student}/qualifications/pre-requisite`, params)

export const studentsTags = (student, data) => http.post(`/app/students/${student}/tags`, data)

export const studentsPreRequisite = (params) => http.get('/app/students/pre-requisite', { params })

export const studentsList = (params) => http.get('/app/students/list', { params })

export const studentsListAll = (params) => http.get('/app/students/list-all', { params })

export const studentsImport = (data) => http.post('/app/students/import', data)

export const studentsCustomFeeImport = (data) => http.post('/app/students/custom-fee-import', data)

export const studentsSummary = (params) => http.get('/app/students/summary', { params })

export const studentsUpdateBulkTags = (data) => http.post('/app/students/tags', data)

export const studentsUpdateBulkMentor = (data) => http.post('/app/students/mentor', data)

export const studentsUpdateBulkEnrollmentType = (data) => http.post('/app/students/enrollment-type', data)

export const studentsUpdateBulkEnrollmentStatus = (data) => http.post('/app/students/enrollment-status', data)

export const studentsUpdateBulkGroups = (data) => http.post('/app/students/groups', data)
