import http from '@/lib/http'

export const employees = {
  index: (params) => http.get(`/app/employees`, { params }),
  show: (uuid, params) => http.get(`/app/employees/${uuid}`, { params }),
  store: (data) => http.post(`/app/employees`, data),
  update: (uuid, data) => http.put(`/app/employees/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employees/${uuid}`),
}

export const employeesEmployeeAccounts = {
  index: (employee, params) => http.get(`/app/employees/${employee}/accounts`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/accounts/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/accounts`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/accounts/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/accounts/${uuid}`),
}

export const employeesEmployeeDialogues = {
  index: (employee, params) => http.get(`/app/employees/${employee}/dialogues`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/dialogues/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/dialogues`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/dialogues/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/dialogues/${uuid}`),
}

export const employeesEmployeeDocuments = {
  index: (employee, params) => http.get(`/app/employees/${employee}/documents`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/documents/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/documents`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/documents/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/documents/${uuid}`),
}

export const employeesEmployeeEditRequests = {
  index: (employee, params) => http.get(`/app/employees/${employee}/edit-requests`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/edit-requests/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/edit-requests`, data),
}

export const employeesEmployeeExperiences = {
  index: (employee, params) => http.get(`/app/employees/${employee}/experiences`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/experiences/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/experiences`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/experiences/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/experiences/${uuid}`),
}

export const employeesEmployeeIncharges = {
  index: (employee, params) => http.get(`/app/employees/${employee}/incharges`, { params }),
}

export const employeesEmployeeQualifications = {
  index: (employee, params) => http.get(`/app/employees/${employee}/qualifications`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/qualifications/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/qualifications`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/qualifications/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/qualifications/${uuid}`),
}

export const employeesEmployeeRecords = {
  index: (employee, params) => http.get(`/app/employees/${employee}/records`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/records/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/records`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/records/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/records/${uuid}`),
}

export const employeesEmployeeUser = {
  index: (employee, params) => http.get(`/app/employees/${employee}/user`, { params }),
  update: (employee, data) => http.patch(`/app/employees/${employee}/user`, data),
}

export const employeesEmployeeWorkShifts = {
  index: (employee, params) => http.get(`/app/employees/${employee}/work-shifts`, { params }),
  show: (employee, uuid, params) => http.get(`/app/employees/${employee}/work-shifts/${uuid}`, { params }),
  store: (employee, data) => http.post(`/app/employees/${employee}/work-shifts`, data),
  update: (employee, uuid, data) => http.put(`/app/employees/${employee}/work-shifts/${uuid}`, data),
  destroy: (employee, uuid) => http.delete(`/app/employees/${employee}/work-shifts/${uuid}`),
}

export const employeesConfirmUser = (employee, data) => http.post(`/app/employees/${employee}/user/confirm`, data)

export const employeesCreateUser = (employee, data) => http.post(`/app/employees/${employee}/user`, data)

export const employeesUpdateCurrentPeriod = (employee, data) => http.post(`/app/employees/${employee}/period`, data)

export const employeesByIdPhotoUpload = (employee, data) => http.post(`/app/employees/${employee}/photo`, data)

export const employeesByIdPhotoRemove = (employee) => http.delete(`/app/employees/${employee}/photo`, )

export const employeesRecordsPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/records/pre-requisite`, params)

export const employeesWorkShiftsPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/work-shifts/pre-requisite`, params)

export const employeesQualificationsPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/qualifications/pre-requisite`, params)

export const employeesByIdQualificationsByIdActionAction = (employee, qualification, data) => http.post(`/app/employees/${employee}/qualifications/${qualification}/action`, data)

export const employeesDialoguesPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/dialogues/pre-requisite`, params)

export const employeesAccountsPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/accounts/pre-requisite`, params)

export const employeesByIdAccountsByIdActionAction = (employee, account, data) => http.post(`/app/employees/${employee}/accounts/${account}/action`, data)

export const employeesAccountsMakePrimary = (employee, account, data) => http.post(`/app/employees/${employee}/accounts/${account}/make-primary`, data)

export const employeesDocumentsPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/documents/pre-requisite`, params)

export const employeesByIdDocumentsByIdActionAction = (employee, document, data) => http.post(`/app/employees/${employee}/documents/${document}/action`, data)

export const employeesExperiencesPreRequisite = (employee, params) => http.get(`/app/employees/${employee}/experiences/pre-requisite`, params)

export const employeesByIdExperiencesByIdActionAction = (employee, experience, data) => http.post(`/app/employees/${employee}/experiences/${experience}/action`, data)

export const employeesTags = (employee, data) => http.post(`/app/employees/${employee}/tags`, data)

export const employeesPreRequisite = (params) => http.get('/app/employees/pre-requisite', { params })

export const employeesList = (params) => http.get('/app/employees/list', { params })

export const employeesImport = (data) => http.post('/app/employees/import', data)

export const employeesUpdateBulkTags = (data) => http.post('/app/employees/tags', data)

export const employeesUpdateBulkGroups = (data) => http.post('/app/employees/groups', data)
