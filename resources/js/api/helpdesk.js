import http from '@/lib/http'

export const helpdeskFaqs = {
  index: (params) => http.get(`/app/helpdesk/faqs`, { params }),
  show: (uuid, params) => http.get(`/app/helpdesk/faqs/${uuid}`, { params }),
  store: (data) => http.post(`/app/helpdesk/faqs`, data),
  update: (uuid, data) => http.put(`/app/helpdesk/faqs/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/helpdesk/faqs/${uuid}`),
}

export const helpdeskTickets = {
  index: (params) => http.get(`/app/helpdesk/tickets`, { params }),
  show: (uuid, params) => http.get(`/app/helpdesk/tickets/${uuid}`, { params }),
  store: (data) => http.post(`/app/helpdesk/tickets`, data),
  update: (uuid, data) => http.put(`/app/helpdesk/tickets/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/helpdesk/tickets/${uuid}`),
}

export const faqsPreRequisite = (params) => http.get('/app/helpdesk/faqs/pre-requisite', { params })

export const faqsDestroyMultiple = (data) => http.post('/app/helpdesk/faqs/delete', data)

export const ticketsPreRequisite = (params) => http.get('/app/helpdesk/tickets/pre-requisite', { params })

export const ticketsDestroyMultiple = (data) => http.post('/app/helpdesk/tickets/delete', data)

export const helpdeskTicketsByIdAssignAssign = (ticket, data) => http.post(`/app/helpdesk/tickets/${ticket}/assign`, data)

export const helpdeskTicketsByIdUnassignByIdUnassign = (ticket, employee, data) => http.post(`/app/helpdesk/tickets/${ticket}/unassign/${employee}`, data)

export const ticketsUpdateBulkAssignTo = (data) => http.post('/app/helpdesk/tickets/assign', data)

export const ticketsUpdateBulkCategory = (data) => http.post('/app/helpdesk/tickets/category', data)

export const ticketsUpdateBulkPriority = (data) => http.post('/app/helpdesk/tickets/priority', data)

export const helpdeskTicketsByIdMessagesAddMessage = (ticket, data) => http.post(`/app/helpdesk/tickets/${ticket}/messages`, data)

export const helpdeskTicketsByIdMessagesByIdRemoveMessage = (ticket, message, data) => http.post(`/app/helpdesk/tickets/${ticket}/messages/${message}`, data)
