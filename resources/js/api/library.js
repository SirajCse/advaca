import http from '@/lib/http'

export const libraryLibraryBookAdditions = {
  index: (params) => http.get(`/app/library/book-additions`, { params }),
  show: (uuid, params) => http.get(`/app/library/book-additions/${uuid}`, { params }),
  store: (data) => http.post(`/app/library/book-additions`, data),
  update: (uuid, data) => http.put(`/app/library/book-additions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/library/book-additions/${uuid}`),
}

export const libraryLibraryBookWiseTransactions = {
  index: (params) => http.get(`/app/library/book-wise-transactions`, { params }),
  show: (uuid, params) => http.get(`/app/library/book-wise-transactions/${uuid}`, { params }),
  store: (data) => http.post(`/app/library/book-wise-transactions`, data),
  update: (uuid, data) => http.put(`/app/library/book-wise-transactions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/library/book-wise-transactions/${uuid}`),
}

export const libraryLibraryBookCopies = {
  index: (params) => http.get(`/app/library/book/copies`, { params }),
}

export const libraryLibraryBooks = {
  index: (params) => http.get(`/app/library/books`, { params }),
  show: (uuid, params) => http.get(`/app/library/books/${uuid}`, { params }),
  store: (data) => http.post(`/app/library/books`, data),
  update: (uuid, data) => http.put(`/app/library/books/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/library/books/${uuid}`),
}

export const libraryLibraryTransactions = {
  index: (params) => http.get(`/app/library/transactions`, { params }),
  show: (uuid, params) => http.get(`/app/library/transactions/${uuid}`, { params }),
  store: (data) => http.post(`/app/library/transactions`, data),
  update: (uuid, data) => http.put(`/app/library/transactions/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/library/transactions/${uuid}`),
}

export const library = (params) => http.get('/app/library/books/pre-requisite', { params })

export const library2 = (data) => http.post('/app/library/books/import', data)

export const book = (params) => http.get('/app/library/book/copies/pre-requisite', { params })

export const book2 = (data) => http.post('/app/library/book/copies/condition', data)

export const book3 = (data) => http.post('/app/library/book/copies/status', data)

export const book4 = (data) => http.post('/app/library/book/copies/location', data)

export const book5 = (data) => http.post('/app/library/book/copies/import', data)

export const bookLabelsPreRequisite = (params) => http.get('/app/library/book/labels/pre-requisite', { params })

export const bookLabelsPrint = (params) => http.get('/app/library/book/labels', { params })

export const library3 = (params) => http.get('/app/library/book-additions/pre-requisite', { params })

export const library4 = (params) => http.get('/app/library/book-wise-transactions/pre-requisite', { params })

export const library5 = (params) => http.get('/app/library/transactions/pre-requisite', { params })

export const library6 = (params) => http.get('/app/library/transactions/action-pre-requisite', { params })

export const libraryTransactionsReturnBook = (book_issue, data) => http.post(`/app/library/transactions/${book_issue}/return`, data)

export const reportsTopBorrowerPreRequisite = (params) => http.get('/app/library/reports/top-borrower/pre-requisite', { params })

export const reportsTopBorrowerFetch = (params) => http.get('/app/library/reports/top-borrower', { params })

export const reportsTopBorrowedBookPreRequisite = (params) => http.get('/app/library/reports/top-borrowed-book/pre-requisite', { params })

export const reportsTopBorrowedBookFetch = (params) => http.get('/app/library/reports/top-borrowed-book', { params })
