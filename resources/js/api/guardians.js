import http from '@/lib/http'

export const guardians = {
  index: (params) => http.get(`/app/guardians`, { params }),
  show: (uuid, params) => http.get(`/app/guardians/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/guardians/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/guardians/${uuid}`),
}

export const guardiansGuardianUser = {
  index: (guardian, params) => http.get(`/app/guardians/${guardian}/user`, { params }),
  update: (guardian, uuid, data) => http.put(`/app/guardians/${guardian}/user/${uuid}`, data),
}

export const guardiansConfirmUser = (guardian, data) => http.post(`/app/guardians/${guardian}/user/confirm`, data)

export const guardiansCreateUser = (guardian, data) => http.post(`/app/guardians/${guardian}/user`, data)

export const guardiansUpdateCurrentPeriod = (guardian, data) => http.post(`/app/guardians/${guardian}/period`, data)

export const guardiansByIdPhotoUpload = (guardian, data) => http.post(`/app/guardians/${guardian}/photo`, data)

export const guardiansByIdPhotoRemove = (guardian) => http.delete(`/app/guardians/${guardian}/photo`, )

export const guardiansPreRequisite = (params) => http.get('/app/guardians/pre-requisite', { params })

export const guardiansImportInvoke = (data) => http.post('/app/guardians/import', data)
