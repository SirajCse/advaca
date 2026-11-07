import http from '@/lib/http'

export const suggestionsInstitutes = (params) => http.get('/app/suggestions/institutes', { params })

export const suggestionsAffiliationBodies = (params) => http.get('/app/suggestions/affiliation-bodies', { params })

export const suggestionsUnits = (params) => http.get('/app/suggestions/units', { params })

export const suggestionsLibraryBooks = (params) => http.get('/app/suggestions/library/books', { params })
