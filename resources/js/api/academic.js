import http from '@/lib/http'

export const academicBatchIncharges = {
  index: (params) => http.get(`/app/academic/batch-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/batch-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/batch-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/batch-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/batch-incharges/${uuid}`),
}

export const academicBatches = {
  index: (params) => http.get(`/app/academic/batches`, { params }),
  show: (uuid, params) => http.get(`/app/academic/batches/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/batches`, data),
  update: (uuid, data) => http.put(`/app/academic/batches/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/batches/${uuid}`),
}

export const academicBookLists = {
  index: (params) => http.get(`/app/academic/book-lists`, { params }),
  show: (uuid, params) => http.get(`/app/academic/book-lists/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/book-lists`, data),
  update: (uuid, data) => http.put(`/app/academic/book-lists/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/book-lists/${uuid}`),
}

export const academicCertificateTemplates = {
  index: (params) => http.get(`/app/academic/certificate-templates`, { params }),
  show: (uuid, params) => http.get(`/app/academic/certificate-templates/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/certificate-templates`, data),
  update: (uuid, data) => http.put(`/app/academic/certificate-templates/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/certificate-templates/${uuid}`),
}

export const academicCertificates = {
  index: (params) => http.get(`/app/academic/certificates`, { params }),
  show: (uuid, params) => http.get(`/app/academic/certificates/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/certificates`, data),
  update: (uuid, data) => http.put(`/app/academic/certificates/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/certificates/${uuid}`),
}

export const academicClassTimings = {
  index: (params) => http.get(`/app/academic/class-timings`, { params }),
  show: (uuid, params) => http.get(`/app/academic/class-timings/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/class-timings`, data),
  update: (uuid, data) => http.put(`/app/academic/class-timings/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/class-timings/${uuid}`),
}

export const academicCourseIncharges = {
  index: (params) => http.get(`/app/academic/course-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/course-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/course-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/course-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/course-incharges/${uuid}`),
}

export const academicCourses = {
  index: (params) => http.get(`/app/academic/courses`, { params }),
  show: (uuid, params) => http.get(`/app/academic/courses/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/courses`, data),
  update: (uuid, data) => http.put(`/app/academic/courses/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/courses/${uuid}`),
}

export const academicDepartmentIncharges = {
  index: (params) => http.get(`/app/academic/department-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/department-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/department-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/department-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/department-incharges/${uuid}`),
}

export const academicDepartments = {
  index: (params) => http.get(`/app/academic/departments`, { params }),
  show: (uuid, params) => http.get(`/app/academic/departments/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/departments`, data),
  update: (uuid, data) => http.put(`/app/academic/departments/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/departments/${uuid}`),
}

export const academicDivisionIncharges = {
  index: (params) => http.get(`/app/academic/division-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/division-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/division-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/division-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/division-incharges/${uuid}`),
}

export const academicDivisions = {
  index: (params) => http.get(`/app/academic/divisions`, { params }),
  show: (uuid, params) => http.get(`/app/academic/divisions/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/divisions`, data),
  update: (uuid, data) => http.put(`/app/academic/divisions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/divisions/${uuid}`),
}

export const academicEnrollmentSeats = {
  index: (params) => http.get(`/app/academic/enrollment-seats`, { params }),
  show: (uuid, params) => http.get(`/app/academic/enrollment-seats/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/enrollment-seats`, data),
  update: (uuid, data) => http.put(`/app/academic/enrollment-seats/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/enrollment-seats/${uuid}`),
}

export const academicIdCardTemplates = {
  index: (params) => http.get(`/app/academic/id-card-templates`, { params }),
  show: (uuid, params) => http.get(`/app/academic/id-card-templates/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/id-card-templates`, data),
  update: (uuid, data) => http.put(`/app/academic/id-card-templates/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/id-card-templates/${uuid}`),
}

export const academicPeriods = {
  index: (params) => http.get(`/app/academic/periods`, { params }),
  show: (uuid, params) => http.get(`/app/academic/periods/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/periods`, data),
  update: (uuid, data) => http.put(`/app/academic/periods/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/periods/${uuid}`),
}

export const academicProgramIncharges = {
  index: (params) => http.get(`/app/academic/program-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/program-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/program-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/program-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/program-incharges/${uuid}`),
}

export const academicProgramTypes = {
  index: (params) => http.get(`/app/academic/program-types`, { params }),
  show: (uuid, params) => http.get(`/app/academic/program-types/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/program-types`, data),
  update: (uuid, data) => http.put(`/app/academic/program-types/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/program-types/${uuid}`),
}

export const academicPrograms = {
  index: (params) => http.get(`/app/academic/programs`, { params }),
  show: (uuid, params) => http.get(`/app/academic/programs/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/programs`, data),
  update: (uuid, data) => http.put(`/app/academic/programs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/programs/${uuid}`),
}

export const academicSessions = {
  index: (params) => http.get(`/app/academic/sessions`, { params }),
  show: (uuid, params) => http.get(`/app/academic/sessions/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/sessions`, data),
  update: (uuid, data) => http.put(`/app/academic/sessions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/sessions/${uuid}`),
}

export const academicSubjectIncharges = {
  index: (params) => http.get(`/app/academic/subject-incharges`, { params }),
  show: (uuid, params) => http.get(`/app/academic/subject-incharges/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/subject-incharges`, data),
  update: (uuid, data) => http.put(`/app/academic/subject-incharges/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/subject-incharges/${uuid}`),
}

export const academicSubjects = {
  index: (params) => http.get(`/app/academic/subjects`, { params }),
  show: (uuid, params) => http.get(`/app/academic/subjects/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/subjects`, data),
  update: (uuid, data) => http.put(`/app/academic/subjects/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/subjects/${uuid}`),
}

export const academicSubjectsSubjectRecords = {
  index: (subject, params) => http.get(`/app/academic/subjects/${subject}/records`, { params }),
  show: (subject, uuid, params) => http.get(`/app/academic/subjects/${subject}/records/${uuid}`, { params }),
  store: (subject, data) => http.post(`/app/academic/subjects/${subject}/records`, data),
  update: (subject, uuid, data) => http.put(`/app/academic/subjects/${subject}/records/${uuid}`, data),
  destroy: (subject, uuid) => http.delete(`/app/academic/subjects/${subject}/records/${uuid}`),
}

export const academicTimetables = {
  index: (params) => http.get(`/app/academic/timetables`, { params }),
  show: (uuid, params) => http.get(`/app/academic/timetables/${uuid}`, { params }),
  store: (data) => http.post(`/app/academic/timetables`, data),
  update: (uuid, data) => http.put(`/app/academic/timetables/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/academic/timetables/${uuid}`),
}

export const departmentsPreRequisite = (params) => http.get('/app/academic/departments/pre-requisite', { params })

export const departmentsReorder = (data) => http.post('/app/academic/departments/reorder', data)

export const departmentInchargesPreRequisite = (params) => http.get('/app/academic/department-incharges/pre-requisite', { params })

export const programTypesPreRequisite = (params) => http.get('/app/academic/program-types/pre-requisite', { params })

export const programsPreRequisite = (params) => http.get('/app/academic/programs/pre-requisite', { params })

export const programsReorder = (data) => http.post('/app/academic/programs/reorder', data)

export const programInchargesPreRequisite = (params) => http.get('/app/academic/program-incharges/pre-requisite', { params })

export const sessionsPreRequisite = (params) => http.get('/app/academic/sessions/pre-requisite', { params })

export const academicPeriodsPreRequisite = (params) => http.get('/app/academic/periods/pre-requisite', { params })

export const academicPeriodsSelect = (period, data) => http.post(`/app/academic/periods/${period}/select`, data)

export const academicPeriodsDefault = (period, data) => http.post(`/app/academic/periods/${period}/default`, data)

export const academicPeriodsArchive = (period, data) => http.post(`/app/academic/periods/${period}/archive`, data)

export const academicPeriodsUnarchive = (period, data) => http.post(`/app/academic/periods/${period}/unarchive`, data)

export const academicPeriodsImport = (period, data) => http.post(`/app/academic/periods/${period}/import`, data)

export const academicDivisionsPreRequisite = (params) => http.get('/app/academic/divisions/pre-requisite', { params })

export const academicDivisionsReorder = (data) => http.post('/app/academic/divisions/reorder', data)

export const academicDivisionsUpdateConfig = (division, data) => http.post(`/app/academic/divisions/${division}/config`, data)

export const academicDivisionsUpdateCurrentPeriod = (division, data) => http.post(`/app/academic/divisions/${division}/period`, data)

export const academicDivisionInchargesPreRequisite = (params) => http.get('/app/academic/division-incharges/pre-requisite', { params })

export const academicCoursesPreRequisite = (params) => http.get('/app/academic/courses/pre-requisite', { params })

export const academicCoursesAddBatches = (course, data) => http.post(`/app/academic/courses/${course}/batches`, data)

export const academicCoursesReorder = (data) => http.post('/app/academic/courses/reorder', data)

export const academicCoursesReorderBatch = (data) => http.post('/app/academic/courses/reorder-batch', data)

export const academicCoursesUpdateEnrollmentSeat = (course, data) => http.post(`/app/academic/courses/${course}/enrollment-seat`, data)

export const academicCoursesUpdateConfig = (course, data) => http.post(`/app/academic/courses/${course}/config`, data)

export const academicCoursesUpdateCurrentPeriod = (course, data) => http.post(`/app/academic/courses/${course}/period`, data)

export const academic = (data) => http.post('/app/academic/courses/import', data)

export const academicCourseInchargesPreRequisite = (params) => http.get('/app/academic/course-incharges/pre-requisite', { params })

export const academicEnrollmentSeatsPreRequisite = (params) => http.get('/app/academic/enrollment-seats/pre-requisite', { params })

export const academicBatchesPreRequisite = (params) => http.get('/app/academic/batches/pre-requisite', { params })

export const academicBatchesSubjects = (batch, params) => http.get(`/app/academic/batches/${batch}/subjects`, params)

export const academicBatchesUpdateConfig = (batch, data) => http.post(`/app/academic/batches/${batch}/config`, data)

export const academicBatchesUpdateCurrentPeriod = (batch, data) => http.post(`/app/academic/batches/${batch}/period`, data)

export const academic2 = (data) => http.post('/app/academic/batches/import', data)

export const academicBatchesGetOptionalFeeHeads = (batch, params) => http.get(`/app/academic/batches/${batch}/optional-fee-heads`, params)

export const academicBatchInchargesPreRequisite = (params) => http.get('/app/academic/batch-incharges/pre-requisite', { params })

export const academicSubjectsPreRequisite = (params) => http.get('/app/academic/subjects/pre-requisite', { params })

export const academicSubjectsReorder = (data) => http.post('/app/academic/subjects/reorder', data)

export const academicSubjectsUpdateFee = (subject, data) => http.post(`/app/academic/subjects/${subject}/fee`, data)

export const academicBookListsPreRequisite = (params) => http.get('/app/academic/book-lists/pre-requisite', { params })

export const academic3 = (data) => http.post('/app/academic/book-lists/import', data)

export const academicSubjectInchargesPreRequisite = (params) => http.get('/app/academic/subject-incharges/pre-requisite', { params })

export const academic4 = (data) => http.post('/app/academic/subject-incharges/import', data)

export const academicCertificateTemplatesPreRequisite = (params) => http.get('/app/academic/certificate-templates/pre-requisite', { params })

export const academicCertificatesPreRequisite = (params) => http.get('/app/academic/certificates/pre-requisite', { params })

export const academicIdCardTemplatesPreRequisite = (params) => http.get('/app/academic/id-card-templates/pre-requisite', { params })

export const academicIdCardsPreRequisite = (params) => http.get('/app/academic/id-cards/pre-requisite', { params })

export const academicIdCardsPrint = (params) => http.get('/app/academic/id-cards', { params })

export const academicClassTimingsPreRequisite = (params) => http.get('/app/academic/class-timings/pre-requisite', { params })

export const academicTimetablesPreRequisite = (params) => http.get('/app/academic/timetables/pre-requisite', { params })

export const academicTimetablesAllocationPreRequisite = (timetable, params) => http.get(`/app/academic/timetables/${timetable}/allocation/pre-requisite`, params)

export const academicTimetablesAllocation = (timetable, data) => http.post(`/app/academic/timetables/${timetable}/allocation`, data)
