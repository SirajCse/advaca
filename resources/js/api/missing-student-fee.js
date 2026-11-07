import http from '@/lib/http'

export const missingStudentFeeInvoke = (params) => http.get('/missing-student-fee', { baseURL: '' }, { params })
