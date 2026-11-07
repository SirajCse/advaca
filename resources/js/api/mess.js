import http from '@/lib/http'

export const messMessMealLogs = {
  index: (params) => http.get(`/app/mess/meal-logs`, { params }),
  show: (uuid, params) => http.get(`/app/mess/meal-logs/${uuid}`, { params }),
  store: (data) => http.post(`/app/mess/meal-logs`, data),
  update: (uuid, data) => http.put(`/app/mess/meal-logs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/mess/meal-logs/${uuid}`),
}

export const messMessMeals = {
  index: (params) => http.get(`/app/mess/meals`, { params }),
  show: (uuid, params) => http.get(`/app/mess/meals/${uuid}`, { params }),
  store: (data) => http.post(`/app/mess/meals`, data),
  update: (uuid, data) => http.put(`/app/mess/meals/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/mess/meals/${uuid}`),
}

export const messMessMenuItems = {
  index: (params) => http.get(`/app/mess/menu-items`, { params }),
  show: (uuid, params) => http.get(`/app/mess/menu-items/${uuid}`, { params }),
  store: (data) => http.post(`/app/mess/menu-items`, data),
  update: (uuid, data) => http.put(`/app/mess/menu-items/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/mess/menu-items/${uuid}`),
}

export const messMessMenuItemsPreRequisitePreRequisite = (params) => http.get('/app/mess/menu-items/pre-requisite', { params })

export const messMessMealsPreRequisitePreRequisite = (params) => http.get('/app/mess/meals/pre-requisite', { params })

export const mess = (params) => http.get('/app/mess/meal-logs/pre-requisite', { params })
