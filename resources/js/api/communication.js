import http from '@/lib/http'

export const communicationAnnouncements = {
  index: (params) => http.get(`/app/communication/announcements`, { params }),
  show: (uuid, params) => http.get(`/app/communication/announcements/${uuid}`, { params }),
  store: (data) => http.post(`/app/communication/announcements`, data),
  update: (uuid, data) => http.put(`/app/communication/announcements/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/communication/announcements/${uuid}`),
}

export const communicationEmails = {
  index: (params) => http.get(`/app/communication/emails`, { params }),
  show: (uuid, params) => http.get(`/app/communication/emails/${uuid}`, { params }),
  store: (data) => http.post(`/app/communication/emails`, data),
}

export const communicationPushMessages = {
  index: (params) => http.get(`/app/communication/push-messages`, { params }),
  show: (uuid, params) => http.get(`/app/communication/push-messages/${uuid}`, { params }),
  store: (data) => http.post(`/app/communication/push-messages`, data),
}

export const communicationSms = {
  index: (params) => http.get(`/app/communication/sms`, { params }),
  show: (uuid, params) => http.get(`/app/communication/sms/${uuid}`, { params }),
  store: (data) => http.post(`/app/communication/sms`, data),
}

export const communicationWhatsapp = {
  index: (params) => http.get(`/app/communication/whatsapp`, { params }),
  show: (uuid, params) => http.get(`/app/communication/whatsapp/${uuid}`, { params }),
  store: (data) => http.post(`/app/communication/whatsapp`, data),
}

export const communicationAnnouncementsPreRequisite = (params) => http.get('/app/communication/announcements/pre-requisite', { params })

export const communicationAnnouncementsPin = (announcement, data) => http.post(`/app/communication/announcements/${announcement}/pin`, data)

export const communicationAnnouncementsUnpin = (announcement, data) => http.post(`/app/communication/announcements/${announcement}/unpin`, data)

export const communicationAnnouncementsToggleShowAsPopup = (announcement, data) => http.post(`/app/communication/announcements/${announcement}/show-as-popup`, data)

export const communicationEmailsPreRequisite = (params) => http.get('/app/communication/emails/pre-requisite', { params })

export const communicationSmsPreRequisite = (params) => http.get('/app/communication/sms/pre-requisite', { params })

export const communicationWhatsappPreRequisite = (params) => http.get('/app/communication/whatsapp/pre-requisite', { params })

export const communicationPushMessagesPreRequisite = (params) => http.get('/app/communication/push-messages/pre-requisite', { params })

export const communicationPushMessagesSendTestNotification = (data) => http.post('/app/communication/push-messages/send-test-notification', data)
