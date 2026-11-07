import http from '@/lib/http'

export const employeeAccounts = {
  index: (params) => http.get(`/app/employee/accounts`, { params }),
  show: (uuid, params) => http.get(`/app/employee/accounts/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/accounts`, data),
  update: (uuid, data) => http.put(`/app/employee/accounts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/accounts/${uuid}`),
}

export const employeeAttendanceTimesheets = {
  index: (params) => http.get(`/app/employee/attendance/timesheets`, { params }),
  show: (uuid, params) => http.get(`/app/employee/attendance/timesheets/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/attendance/timesheets`, data),
  update: (uuid, data) => http.put(`/app/employee/attendance/timesheets/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/attendance/timesheets/${uuid}`),
}

export const employeeAttendanceTypes = {
  index: (params) => http.get(`/app/employee/attendance/types`, { params }),
  show: (uuid, params) => http.get(`/app/employee/attendance/types/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/attendance/types`, data),
  update: (uuid, data) => http.put(`/app/employee/attendance/types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/attendance/types/${uuid}`),
}

export const employeeAttendanceWorkShifts = {
  index: (params) => http.get(`/app/employee/attendance/work-shifts`, { params }),
  show: (uuid, params) => http.get(`/app/employee/attendance/work-shifts/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/attendance/work-shifts`, data),
  update: (uuid, data) => http.put(`/app/employee/attendance/work-shifts/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/attendance/work-shifts/${uuid}`),
}

export const employeeConfigDocumentTypes = {
  index: (params) => http.get(`/app/employee/config/document-types`, { params }),
  show: (uuid, params) => http.get(`/app/employee/config/document-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/config/document-types`, data),
  update: (uuid, data) => http.put(`/app/employee/config/document-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/config/document-types/${uuid}`),
}

export const employeeDepartments = {
  index: (params) => http.get(`/app/employee/departments`, { params }),
  show: (uuid, params) => http.get(`/app/employee/departments/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/departments`, data),
  update: (uuid, data) => http.put(`/app/employee/departments/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/departments/${uuid}`),
}

export const employeeDesignations = {
  index: (params) => http.get(`/app/employee/designations`, { params }),
  show: (uuid, params) => http.get(`/app/employee/designations/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/designations`, data),
  update: (uuid, data) => http.put(`/app/employee/designations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/designations/${uuid}`),
}

export const employeeDocuments = {
  index: (params) => http.get(`/app/employee/documents`, { params }),
  show: (uuid, params) => http.get(`/app/employee/documents/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/documents`, data),
  update: (uuid, data) => http.put(`/app/employee/documents/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/documents/${uuid}`),
}

export const employeeEditRequests = {
  index: (params) => http.get(`/app/employee/edit-requests`, { params }),
  show: (uuid, params) => http.get(`/app/employee/edit-requests/${uuid}`, { params }),
}

export const employeeExperiences = {
  index: (params) => http.get(`/app/employee/experiences`, { params }),
  show: (uuid, params) => http.get(`/app/employee/experiences/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/experiences`, data),
  update: (uuid, data) => http.put(`/app/employee/experiences/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/experiences/${uuid}`),
}

export const employeeLeaveAllocations = {
  index: (params) => http.get(`/app/employee/leave/allocations`, { params }),
  show: (uuid, params) => http.get(`/app/employee/leave/allocations/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/leave/allocations`, data),
  update: (uuid, data) => http.put(`/app/employee/leave/allocations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/leave/allocations/${uuid}`),
}

export const employeeLeaveRequests = {
  index: (params) => http.get(`/app/employee/leave/requests`, { params }),
  show: (uuid, params) => http.get(`/app/employee/leave/requests/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/leave/requests`, data),
  update: (uuid, data) => http.put(`/app/employee/leave/requests/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/leave/requests/${uuid}`),
}

export const employeeLeaveTypes = {
  index: (params) => http.get(`/app/employee/leave/types`, { params }),
  show: (uuid, params) => http.get(`/app/employee/leave/types/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/leave/types`, data),
  update: (uuid, data) => http.put(`/app/employee/leave/types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/leave/types/${uuid}`),
}

export const employeePayrollPayHeads = {
  index: (params) => http.get(`/app/employee/payroll/pay-heads`, { params }),
  show: (uuid, params) => http.get(`/app/employee/payroll/pay-heads/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/payroll/pay-heads`, data),
  update: (uuid, data) => http.put(`/app/employee/payroll/pay-heads/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/payroll/pay-heads/${uuid}`),
}

export const employeePayrollSalaryStructures = {
  index: (params) => http.get(`/app/employee/payroll/salary-structures`, { params }),
  show: (uuid, params) => http.get(`/app/employee/payroll/salary-structures/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/payroll/salary-structures`, data),
  update: (uuid, data) => http.put(`/app/employee/payroll/salary-structures/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/payroll/salary-structures/${uuid}`),
}

export const employeePayrollSalaryTemplates = {
  index: (params) => http.get(`/app/employee/payroll/salary-templates`, { params }),
  show: (uuid, params) => http.get(`/app/employee/payroll/salary-templates/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/payroll/salary-templates`, data),
  update: (uuid, data) => http.put(`/app/employee/payroll/salary-templates/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/payroll/salary-templates/${uuid}`),
}

export const employeePayrolls = {
  index: (params) => http.get(`/app/employee/payrolls`, { params }),
  show: (uuid, params) => http.get(`/app/employee/payrolls/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/payrolls`, data),
  update: (uuid, data) => http.put(`/app/employee/payrolls/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/payrolls/${uuid}`),
}

export const employeeQualifications = {
  index: (params) => http.get(`/app/employee/qualifications`, { params }),
  show: (uuid, params) => http.get(`/app/employee/qualifications/${uuid}`, { params }),
  store: (data) => http.post(`/app/employee/qualifications`, data),
  update: (uuid, data) => http.put(`/app/employee/qualifications/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/employee/qualifications/${uuid}`),
}

export const employeePayrollSalaryTemplatesByIdRecalculateRecalculate = (salary_template, params) => http.get(`/employee/payroll/salary-templates/${salary_template}/recalculate`, { baseURL: '', params })

export const employeeDepartmentsPreRequisite = (params) => http.get('/app/employee/departments/pre-requisite', { params })

export const employee = (data) => http.post('/app/employee/departments/import', data)

export const employeeDesignationsPreRequisite = (params) => http.get('/app/employee/designations/pre-requisite', { params })

export const employee2 = (data) => http.post('/app/employee/designations/import', data)

export const leaveTypesPreRequisite = (params) => http.get('/app/employee/leave/types/pre-requisite', { params })

export const leaveAllocationsPreRequisite = (params) => http.get('/app/employee/leave/allocations/pre-requisite', { params })

export const leaveAllocationsFetchLeaveRequests = (leave_allocation, params) => http.get(`/app/employee/leave/allocations/${leave_allocation}/leave-requests`, params)

export const leave = (leave_request, data) => http.post(`/app/employee/leave/requests/${leave_request}/undo`, data)

export const leave2 = (leave_request, data) => http.post(`/app/employee/leave/requests/${leave_request}/status`, data)

export const leaveRequestsPreRequisite = (params) => http.get('/app/employee/leave/requests/pre-requisite', { params })

export const attendancetypesPreRequisite = (params) => http.get('/app/employee/attendance/types/pre-requisite', { params })

export const attendancesPreRequisite = (params) => http.get('/app/employee/attendance/pre-requisite', { params })

export const attendancesList = (params) => http.get('/app/employee/attendance/list', { params })

export const attendancesFetch = (params) => http.get('/app/employee/attendance/fetch', { params })

export const attendancesMark = (data) => http.post('/app/employee/attendance/mark', data)

export const attendancesFetchProduction = (params) => http.get('/app/employee/attendance/production', { params })

export const attendancesMarkProduction = (data) => http.post('/app/employee/attendance/production', data)

export const attendancesCheckTimesheet = (params) => http.get('/app/employee/attendance/timesheet/check', { params })

export const employeeAttendanceTimesheetClockClock = (data) => http.post('/app/employee/attendance/timesheet/clock', data)

export const employeeAttendanceTimesheetSyncSync = (data) => http.post('/app/employee/attendance/timesheet/sync', data)

export const employeeAttendanceTimesheetsImportInvoke = (data) => http.post('/app/employee/attendance/timesheets/import', data)

export const workshiftsAssignPreRequisite = (params) => http.get('/app/employee/attendance/work-shift/assign/pre-requisite', { params })

export const workshiftsAssignFetch = (params) => http.get('/app/employee/attendance/work-shift/assign/fetch', { params })

export const workshiftsAssign = (data) => http.post('/app/employee/attendance/work-shift/assign', data)

export const workshiftsPreRequisite = (params) => http.get('/app/employee/attendance/work-shifts/pre-requisite', { params })

export const payrollPayHeadsPreRequisite = (params) => http.get('/app/employee/payroll/pay-heads/pre-requisite', { params })

export const payrollPayHeadsReorder = (data) => http.post('/app/employee/payroll/pay-heads/reorder', data)

export const payrollSalaryTemplatesPreRequisite = (params) => http.get('/app/employee/payroll/salary-templates/pre-requisite', { params })

export const payrollSalaryStructuresPreRequisite = (params) => http.get('/app/employee/payroll/salary-structures/pre-requisite', { params })

export const employeePayrollsFetch = (params) => http.get('/app/employee/payrolls/fetch', { params })

export const employeePayrollsBulkProcess = (data) => http.post('/app/employee/payrolls/process', data)

export const employeePayrollsProcess = (payroll, data) => http.post(`/app/employee/payrolls/${payroll}/process`, data)

export const employeePayrollsPreRequisite = (params) => http.get('/app/employee/payrolls/pre-requisite', { params })

export const employee3 = (data) => http.post('/app/employee/payrolls/delete', data)

export const employeeEditRequestsPreRequisite = (params) => http.get('/app/employee/edit-requests/pre-requisite', { params })

export const employee4 = (edit_request, data) => http.post(`/app/employee/edit-requests/${edit_request}/action`, data)

export const employeeDocumentsPreRequisite = (params) => http.get('/app/employee/documents/pre-requisite', { params })

export const employeeDocumentsImport = (data) => http.post('/app/employee/documents/import', data)

export const employeeAccountsPreRequisite = (params) => http.get('/app/employee/accounts/pre-requisite', { params })

export const employeeAccountsImport = (data) => http.post('/app/employee/accounts/import', data)

export const employeeQualificationsPreRequisite = (params) => http.get('/app/employee/qualifications/pre-requisite', { params })

export const employeeQualificationsImport = (data) => http.post('/app/employee/qualifications/import', data)

export const employeeExperiencesPreRequisite = (params) => http.get('/app/employee/experiences/pre-requisite', { params })

export const employeeExperiencesImport = (data) => http.post('/app/employee/experiences/import', data)
