import http from '@/lib/http'

export const tasks = {
  index: (params) => http.get(`/app/tasks`, { params }),
  show: (uuid, params) => http.get(`/app/tasks/${uuid}`, { params }),
  store: (data) => http.post(`/app/tasks`, data),
  update: (uuid, data) => http.put(`/app/tasks/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/tasks/${uuid}`),
}

export const tasksTaskChecklists = {
  index: (task, params) => http.get(`/app/tasks/${task}/checklists`, { params }),
  show: (task, uuid, params) => http.get(`/app/tasks/${task}/checklists/${uuid}`, { params }),
  store: (task, data) => http.post(`/app/tasks/${task}/checklists`, data),
  update: (task, uuid, data) => http.put(`/app/tasks/${task}/checklists/${uuid}`, data),
  destroy: (task, uuid) => http.delete(`/app/tasks/${task}/checklists/${uuid}`),
}

export const tasksTaskMembers = {
  index: (task, params) => http.get(`/app/tasks/${task}/members`, { params }),
  show: (task, uuid, params) => http.get(`/app/tasks/${task}/members/${uuid}`, { params }),
  store: (task, data) => http.post(`/app/tasks/${task}/members`, data),
  update: (task, uuid, data) => http.put(`/app/tasks/${task}/members/${uuid}`, data),
  destroy: (task, uuid) => http.delete(`/app/tasks/${task}/members/${uuid}`),
}

export const tasksTags = (task, data) => http.post(`/app/tasks/${task}/tags`, data)

export const tasksFavorite = (task, data) => http.post(`/app/tasks/${task}/favorite`, data)

export const tasksStatus = (task, data) => http.post(`/app/tasks/${task}/status`, data)

export const tasksUploadMedia = (task, data) => http.post(`/app/tasks/${task}/media`, data)

export const tasksRemoveMedia = (task, uuid) => http.delete(`/app/tasks/${task}/media/${uuid}`, )

export const tasksRepeatPreRequisite = (task, params) => http.get(`/app/tasks/${task}/repeat/pre-requisite`, params)

export const tasksUpdateRepeatation = (task, data) => http.post(`/app/tasks/${task}/repeat`, data)

export const tasksReorder = (data) => http.post('/app/tasks/reorder', data)

export const tasksMoveList = (data) => http.post('/app/tasks/lists/move', data)

export const tasksPreRequisite = (params) => http.get('/app/tasks/pre-requisite', { params })

export const tasksByIdChecklistsByIdStatusToggleStatus = (task, checklist, data) => http.post(`/app/tasks/${task}/checklists/${checklist}/status`, data)

export const tasksDashboardStat = (params) => http.get('/app/tasks/dashboard/stat', { params })

export const tasksDashboardFavorite = (params) => http.get('/app/tasks/dashboard/favorite', { params })

export const tasksDashboardChart = (params) => http.get('/app/tasks/dashboard/chart', { params })

export const tasksDashboardRecord = (params) => http.get('/app/tasks/dashboard/record', { params })
