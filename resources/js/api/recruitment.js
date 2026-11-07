import http from '@/lib/http'

export const recruitmentApplications = {
  index: (params) => http.get(`/app/recruitment/applications`, { params }),
  show: (uuid, params) => http.get(`/app/recruitment/applications/${uuid}`, { params }),
  store: (data) => http.post(`/app/recruitment/applications`, data),
  update: (uuid, data) => http.put(`/app/recruitment/applications/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/recruitment/applications/${uuid}`),
}

export const recruitmentVacancies = {
  index: (params) => http.get(`/app/recruitment/vacancies`, { params }),
  show: (uuid, params) => http.get(`/app/recruitment/vacancies/${uuid}`, { params }),
  store: (data) => http.post(`/app/recruitment/vacancies`, data),
  update: (uuid, data) => http.put(`/app/recruitment/vacancies/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/recruitment/vacancies/${uuid}`),
}

export const recruitmentVacanciesPreRequisite = (params) => http.get('/app/recruitment/vacancies/pre-requisite', { params })

export const recruitmentApplicationsPreRequisite = (params) => http.get('/app/recruitment/applications/pre-requisite', { params })
