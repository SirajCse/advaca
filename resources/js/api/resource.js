import http from '@/lib/http'

export const resourceAssignments = {
  index: (params) => http.get(`/app/resource/assignments`, { params }),
  show: (uuid, params) => http.get(`/app/resource/assignments/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/assignments`, data),
  update: (uuid, data) => http.put(`/app/resource/assignments/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/assignments/${uuid}`),
}

export const resourceAssignmentsAssignmentEvaluate = {
  store: (assignment, data) => http.post(`/app/resource/assignments/${assignment}/evaluate`, data),
}

export const resourceAssignmentsAssignmentSubmissions = {
  index: (assignment, params) => http.get(`/app/resource/assignments/${assignment}/submissions`, { params }),
  store: (assignment, data) => http.post(`/app/resource/assignments/${assignment}/submissions`, data),
}

export const resourceDiaries = {
  index: (params) => http.get(`/app/resource/diaries`, { params }),
  show: (uuid, params) => http.get(`/app/resource/diaries/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/diaries`, data),
  update: (uuid, data) => http.put(`/app/resource/diaries/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/diaries/${uuid}`),
}

export const resourceDownloads = {
  index: (params) => http.get(`/app/resource/downloads`, { params }),
  show: (uuid, params) => http.get(`/app/resource/downloads/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/downloads`, data),
  update: (uuid, data) => http.put(`/app/resource/downloads/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/downloads/${uuid}`),
}

export const resourceLearningMaterials = {
  index: (params) => http.get(`/app/resource/learning-materials`, { params }),
  show: (uuid, params) => http.get(`/app/resource/learning-materials/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/learning-materials`, data),
  update: (uuid, data) => http.put(`/app/resource/learning-materials/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/learning-materials/${uuid}`),
}

export const resourceLessonPlans = {
  index: (params) => http.get(`/app/resource/lesson-plans`, { params }),
  show: (uuid, params) => http.get(`/app/resource/lesson-plans/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/lesson-plans`, data),
  update: (uuid, data) => http.put(`/app/resource/lesson-plans/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/lesson-plans/${uuid}`),
}

export const resourceOnlineClasses = {
  index: (params) => http.get(`/app/resource/online-classes`, { params }),
  show: (uuid, params) => http.get(`/app/resource/online-classes/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/online-classes`, data),
  update: (uuid, data) => http.put(`/app/resource/online-classes/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/online-classes/${uuid}`),
}

export const resourceSyllabuses = {
  index: (params) => http.get(`/app/resource/syllabuses`, { params }),
  show: (uuid, params) => http.get(`/app/resource/syllabuses/${uuid}`, { params }),
  store: (data) => http.post(`/app/resource/syllabuses`, data),
  update: (uuid, data) => http.put(`/app/resource/syllabuses/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/resource/syllabuses/${uuid}`),
}

export const resourceBookListsPreRequisite = (params) => http.get('/app/resource/book-lists/pre-requisite', { params })

export const resourceOnlineClassesPreRequisite = (params) => http.get('/app/resource/online-classes/pre-requisite', { params })

export const resourceAssignmentsPreRequisite = (params) => http.get('/app/resource/assignments/pre-requisite', { params })

export const resourceLessonPlansPreRequisite = (params) => http.get('/app/resource/lesson-plans/pre-requisite', { params })

export const resourceSyllabusesPreRequisite = (params) => http.get('/app/resource/syllabuses/pre-requisite', { params })

export const resourceLearningMaterialsPreRequisite = (params) => http.get('/app/resource/learning-materials/pre-requisite', { params })

export const resourceDiariesPreRequisite = (params) => http.get('/app/resource/diaries/pre-requisite', { params })

export const resource = (params) => http.get('/app/resource/diaries/preview', { params })

export const resourceDownloadsPreRequisite = (params) => http.get('/app/resource/downloads/pre-requisite', { params })

export const dateWiseStudentDiaryPreRequisite = (params) => http.get('/app/resource/reports/date-wise-student-diary/pre-requisite', { params })

export const dateWiseStudentDiaryFetch = (params) => http.get('/app/resource/reports/date-wise-student-diary', { params })

export const dateWiseAssignmentPreRequisite = (params) => http.get('/app/resource/reports/date-wise-assignment/pre-requisite', { params })

export const dateWiseAssignmentFetch = (params) => http.get('/app/resource/reports/date-wise-assignment', { params })

export const dateWiseLearningMaterialPreRequisite = (params) => http.get('/app/resource/reports/date-wise-learning-material/pre-requisite', { params })

export const dateWiseLearningMaterialFetch = (params) => http.get('/app/resource/reports/date-wise-learning-material', { params })
