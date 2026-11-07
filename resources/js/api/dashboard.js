import http from '@/lib/http'

export const dashboardStat = (params) => http.get('/app/dashboard/stat', { params })

export const dashboardStudentChartData = (params) => http.get('/app/dashboard/student-chart-data', { params })

export const dashboardTransactionChartData = (params) => http.get('/app/dashboard/transaction-chart-data', { params })

export const dashboardGetEmployeeAttendanceSummary = (params) => http.get('/app/dashboard/employee-attendance-summary', { params })

export const dashboardSchedule = (params) => http.get('/app/dashboard/schedule', { params })

export const dashboardTimetable = (params) => http.get('/app/dashboard/timetable', { params })

export const dashboardListStudent = (params) => http.get('/app/dashboard/student', { params })

export const dashboardGetTransportRoute = (params) => http.get('/app/dashboard/transport-route', { params })

export const dashboardGetMessSchedule = (params) => http.get('/app/dashboard/mess-schedule', { params })

export const dashboardGetInstituteInfo = (params) => http.get('/app/dashboard/institute-info', { params })

export const dashboardGetFormList = (params) => http.get('/app/dashboard/form-list', { params })

export const dashboardListGallery = (params) => http.get('/app/dashboard/gallery', { params })

export const dashboardGetCelebration = (params) => http.get('/app/dashboard/celebration', { params })
