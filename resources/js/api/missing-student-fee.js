import http from '@/lib/http'

export const missingStudentFeeInvoke = (params) => http.get('/app/missing-student-fee', { params })
