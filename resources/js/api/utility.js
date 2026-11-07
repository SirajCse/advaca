import http from '@/lib/http'

export const utilityActivityLogs = {
  index: (params) => http.get(`/app/utility/activity-logs`, { params }),
  destroy: (uuid) => http.delete(`/app/utility/activity-logs/${uuid}`),
}

export const utilityBackups = {
  index: (params) => http.get(`/app/utility/backups`, { params }),
  destroy: (uuid) => http.delete(`/app/utility/backups/${uuid}`),
}

export const utilityTodos = {
  index: (params) => http.get(`/app/utility/todos`, { params }),
  show: (uuid, params) => http.get(`/app/utility/todos/${uuid}`, { params }),
  store: (data) => http.post(`/app/utility/todos`, data),
  update: (uuid, data) => http.put(`/app/utility/todos/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/utility/todos/${uuid}`),
}

export const todosPreRequisite = (params) => http.get('/app/utility/todos/pre-requisite', { params })

export const todosStatus = (todo, data) => http.post(`/app/utility/todos/${todo}/status`, data)

export const todosArchive = (todo, data) => http.post(`/app/utility/todos/${todo}/archive`, data)

export const todosUnarchive = (todo, data) => http.post(`/app/utility/todos/${todo}/unarchive`, data)

export const todosReorder = (data) => http.post('/app/utility/todos/reorder', data)

export const todosMoveList = (data) => http.post('/app/utility/todos/lists/move', data)

export const utilityTodosDeleteDestroyMultiple = (data) => http.post('/app/utility/todos/delete', data)

export const utilityBackupsGenerate = (data) => http.post('/app/utility/backups', data)

export const utilityTodosExportInvoke = (params) => http.get('/app/utility/todos/export', { params })

export const utilityActivityLogsExportInvoke = (params) => http.get('/app/utility/activity-logs/export', { params })

export const utilityBackupsExportInvoke = (params) => http.get('/app/utility/backups/export', { params })
