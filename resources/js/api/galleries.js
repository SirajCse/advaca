import http from '@/lib/http'

export const galleries = {
  index: (params) => http.get(`/app/galleries`, { params }),
  show: (uuid, params) => http.get(`/app/galleries/${uuid}`, { params }),
  store: (data) => http.post(`/app/galleries`, data),
  update: (uuid, data) => http.put(`/app/galleries/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/galleries/${uuid}`),
}

export const galleriesPreRequisite = (params) => http.get('/app/galleries/pre-requisite', { params })

export const galleriesUpload = (gallery, data) => http.post(`/app/galleries/${gallery}/upload`, data)

export const galleriesMakeCover = (gallery, image, data) => http.post(`/app/galleries/${gallery}/images/${image}/cover`, data)

export const galleriesDeleteImage = (gallery, image) => http.delete(`/app/galleries/${gallery}/images/${image}`, )
