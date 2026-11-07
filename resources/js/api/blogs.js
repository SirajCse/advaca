import http from '@/lib/http'

export const blogs = {
  index: (params) => http.get(`/app/blogs`, { params }),
  show: (uuid, params) => http.get(`/app/blogs/${uuid}`, { params }),
  store: (data) => http.post(`/app/blogs`, data),
  update: (uuid, data) => http.put(`/app/blogs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/blogs/${uuid}`),
}

export const blogsPreRequisite = (params) => http.get('/app/blogs/pre-requisite', { params })

export const blogsUploadAsset = (blog, type, data) => http.post(`/app/blogs/${blog}/assets/${type}`, data)

export const blogsRemoveAsset = (blog, type) => http.delete(`/app/blogs/${blog}/assets/${type}`, )

export const blogsUpdateMeta = (blog, data) => http.post(`/app/blogs/${blog}/meta`, data)

export const blogsArchive = (blog, data) => http.post(`/app/blogs/${blog}/archive`, data)

export const blogsUnarchive = (blog, data) => http.post(`/app/blogs/${blog}/unarchive`, data)

export const blogsPin = (blog, data) => http.post(`/app/blogs/${blog}/pin`, data)

export const blogsUnpin = (blog, data) => http.post(`/app/blogs/${blog}/unpin`, data)

export const blogsArchiveMultiple = (data) => http.post('/app/blogs/archive', data)

export const blogsUnarchiveMultiple = (data) => http.post('/app/blogs/unarchive', data)

export const blogsDestroyMultiple = (data) => http.post('/app/blogs/delete', data)
