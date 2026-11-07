import http from '@/lib/http'

export const examAssessments = {
  index: (params) => http.get(`/app/exam/assessments`, { params }),
  show: (uuid, params) => http.get(`/app/exam/assessments/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/assessments`, data),
  update: (uuid, data) => http.put(`/app/exam/assessments/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/assessments/${uuid}`),
}

export const examAttendance = {
  store: (data) => http.post(`/app/exam/attendance`, data),
}

export const examComment = {
  store: (data) => http.post(`/app/exam/comment`, data),
}

export const examCompetencies = {
  index: (params) => http.get(`/app/exam/competencies`, { params }),
  show: (uuid, params) => http.get(`/app/exam/competencies/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/competencies`, data),
  update: (uuid, data) => http.put(`/app/exam/competencies/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/competencies/${uuid}`),
}

export const examCompetencyEvaluation = {
  store: (data) => http.post(`/app/exam/competency-evaluation`, data),
}

export const examForms = {
  index: (params) => http.get(`/app/exam/forms`, { params }),
  show: (uuid, params) => http.get(`/app/exam/forms/${uuid}`, { params }),
  destroy: (uuid) => http.delete(`/app/exam/forms/${uuid}`),
}

export const examGrades = {
  index: (params) => http.get(`/app/exam/grades`, { params }),
  show: (uuid, params) => http.get(`/app/exam/grades/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/grades`, data),
  update: (uuid, data) => http.put(`/app/exam/grades/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/grades/${uuid}`),
}

export const examMark = {
  store: (data) => http.post(`/app/exam/mark`, data),
}

export const examObservationMark = {
  store: (data) => http.post(`/app/exam/observation-mark`, data),
}

export const examObservations = {
  index: (params) => http.get(`/app/exam/observations`, { params }),
  show: (uuid, params) => http.get(`/app/exam/observations/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/observations`, data),
  update: (uuid, data) => http.put(`/app/exam/observations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/observations/${uuid}`),
}

export const examOnlineExams = {
  index: (params) => http.get(`/app/exam/online-exams`, { params }),
  show: (uuid, params) => http.get(`/app/exam/online-exams/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/online-exams`, data),
  update: (uuid, data) => http.put(`/app/exam/online-exams/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/online-exams/${uuid}`),
}

export const examOnlineExamsOnlineExamQuestions = {
  index: (online_exam, params) => http.get(`/app/exam/online-exams/${online_exam}/questions`, { params }),
  show: (online_exam, uuid, params) => http.get(`/app/exam/online-exams/${online_exam}/questions/${uuid}`, { params }),
  store: (online_exam, data) => http.post(`/app/exam/online-exams/${online_exam}/questions`, data),
  update: (online_exam, uuid, data) => http.put(`/app/exam/online-exams/${online_exam}/questions/${uuid}`, data),
  destroy: (online_exam, uuid) => http.delete(`/app/exam/online-exams/${online_exam}/questions/${uuid}`),
}

export const examOnlineExamsOnlineExamSubmissions = {
  index: (online_exam, params) => http.get(`/app/exam/online-exams/${online_exam}/submissions`, { params }),
  destroy: (online_exam, uuid) => http.delete(`/app/exam/online-exams/${online_exam}/submissions/${uuid}`),
}

export const examSchedules = {
  index: (params) => http.get(`/app/exam/schedules`, { params }),
  show: (uuid, params) => http.get(`/app/exam/schedules/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/schedules`, data),
  update: (uuid, data) => http.put(`/app/exam/schedules/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/schedules/${uuid}`),
}

export const examTerms = {
  index: (params) => http.get(`/app/exam/terms`, { params }),
  show: (uuid, params) => http.get(`/app/exam/terms/${uuid}`, { params }),
  store: (data) => http.post(`/app/exam/terms`, data),
  update: (uuid, data) => http.put(`/app/exam/terms/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/exam/terms/${uuid}`),
}

export const examGradesPreRequisite = (params) => http.get('/app/exam/grades/pre-requisite', { params })

export const examAssessmentsPreRequisite = (params) => http.get('/app/exam/assessments/pre-requisite', { params })

export const examObservationsPreRequisite = (params) => http.get('/app/exam/observations/pre-requisite', { params })

export const examCompetenciesPreRequisite = (params) => http.get('/app/exam/competencies/pre-requisite', { params })

export const examTermsPreRequisite = (params) => http.get('/app/exam/terms/pre-requisite', { params })

export const examTermsReorder = (data) => http.post('/app/exam/terms/reorder', data)

export const examSchedulesPreRequisite = (params) => http.get('/app/exam/schedules/pre-requisite', { params })

export const examExamsTogglePublishAdmitCard = (schedule, data) => http.patch(`/app/exam/schedules/${schedule}/toggle-publish-admit-card`, data)

export const examSchedulesUpdateForm = (schedule, data) => http.patch(`/app/exam/schedules/${schedule}/form`, data)

export const examSchedulesConfirmForm = (schedule, data) => http.post(`/app/exam/schedules/${schedule}/form/confirm`, data)

export const examSchedulesSubmitForm = (schedule, data) => http.post(`/app/exam/schedules/${schedule}/form`, data)

export const examSchedulesCopyToCourse = (schedule, data) => http.post(`/app/exam/schedules/${schedule}/copy`, data)

export const examSchedulesStoreConfig = (schedule, data) => http.post(`/app/exam/schedules/${schedule}/config`, data)

export const examSchedulesUnlockRecordTemporarily = (schedule, uuid, data) => http.post(`/app/exam/schedules/${schedule}/unlock-temporarily/${uuid}`, data)

export const examSchedulesUnlockTemporarily = (schedule, data) => http.post(`/app/exam/schedules/${schedule}/unlock-temporarily`, data)

export const examOnlineExamsPreRequisite = (params) => http.get('/app/exam/online-exams/pre-requisite', { params })

export const examOnlineExamsQuestionsPreRequisite = (onlineExam, params) => http.get(`/app/exam/online-exams/${onlineExam}/questions/pre-requisite`, params)

export const examOnlineExamsQuestionsReorder = (onlineExam, data) => http.post(`/app/exam/online-exams/${onlineExam}/questions/reorder`, data)

export const examOnlineExamsSubmissionsGetQuestions = (onlineExam, submission, params) => http.get(`/app/exam/online-exams/${onlineExam}/submissions/${submission}/questions`, params)

export const examOnlineExamsSubmissionsEvaluate = (onlineExam, submission, data) => http.post(`/app/exam/online-exams/${onlineExam}/submissions/${submission}/evaluate`, data)

export const examOnlineExamsSubmitGetQuestions = (onlineExam, params) => http.get(`/app/exam/online-exams/${onlineExam}/live-questions`, params)

export const examOnlineExamsSubmitStart = (onlineExam, data) => http.post(`/app/exam/online-exams/${onlineExam}/start`, data)

export const examOnlineExamsSubmit = (onlineExam, data) => http.post(`/app/exam/online-exams/${onlineExam}/submit`, data)

export const examOnlineExamsSubmitFinish = (onlineExam, data) => http.post(`/app/exam/online-exams/${onlineExam}/finish-submit`, data)

export const examOnlineExamsUpdateStatus = (onlineExam, data) => http.post(`/app/exam/online-exams/${onlineExam}/status`, data)

export const examFormsPreRequisite = (params) => http.get('/app/exam/forms/pre-requisite', { params })

export const examFormsUpdateStatus = (form, data) => http.post(`/app/exam/forms/${form}/status`, data)

export const examFormsPrint = (form, params) => http.get(`/app/exam/forms/${form}/print`, params)

export const examFormsPrintAdmitCard = (form, params) => http.get(`/app/exam/forms/${form}/print-admit-card`, params)

export const examMarkPreRequisite = (params) => http.get('/app/exam/mark/pre-requisite', { params })

export const examMarkFetch = (params) => http.get('/app/exam/mark/fetch', { params })

export const examMarkRemove = () => http.delete('/app/exam/mark')

export const examObservationMarkPreRequisite = (params) => http.get('/app/exam/observation-mark/pre-requisite', { params })

export const examObservationMarkFetch = (params) => http.get('/app/exam/observation-mark/fetch', { params })

export const examObservationMarkRemove = () => http.delete('/app/exam/observation-mark')

export const examCompetencyEvaluationPreRequisite = (params) => http.get('/app/exam/competency-evaluation/pre-requisite', { params })

export const examCompetencyEvaluationFetch = (params) => http.get('/app/exam/competency-evaluation/fetch', { params })

export const examCompetencyEvaluationRemove = () => http.delete('/app/exam/competency-evaluation')

export const examCommentPreRequisite = (params) => http.get('/app/exam/comment/pre-requisite', { params })

export const examCommentFetch = (params) => http.get('/app/exam/comment/fetch', { params })

export const examCommentRemove = () => http.delete('/app/exam/comment')

export const examAttendancePreRequisite = (params) => http.get('/app/exam/attendance/pre-requisite', { params })

export const examAttendanceFetch = (params) => http.get('/app/exam/attendance/fetch', { params })

export const examAttendanceRemove = () => http.delete('/app/exam/attendance')

export const admitCardPreRequisite = (params) => http.get('/app/exam/admit-card/pre-requisite', { params })

export const admitCardFetchReport = (params) => http.get('/app/exam/admit-card', { params })

export const marksheetPreRequisite = (params) => http.get('/app/exam/marksheet/pre-requisite', { params })

export const marksheetFetchReport = (params) => http.get('/app/exam/marksheet', { params })

export const marksheetProcessPreRequisite = (params) => http.get('/app/exam/marksheet/process/pre-requisite', { params })

export const marksheetProcess = (params) => http.get('/app/exam/marksheet/process', { params })

export const marksheetPrintPreRequisite = (params) => http.get('/app/exam/marksheet/print/pre-requisite', { params })

export const marksheetPrint = (params) => http.get('/app/exam/marksheet/print', { params })

export const reportsMarkSummaryPreRequisite = (params) => http.get('/app/exam/reports/mark-summary/pre-requisite', { params })

export const reportsMarkSummaryFetchReport = (params) => http.get('/app/exam/reports/mark-summary', { params })

export const reportsExamSummaryPreRequisite = (params) => http.get('/app/exam/reports/exam-summary/pre-requisite', { params })

export const reportsExamSummaryFetchReport = (params) => http.get('/app/exam/reports/exam-summary', { params })
