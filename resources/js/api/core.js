import http from '@/lib/http'

export const appSitePosts = {
  index: (params) => http.get(`/app/site/posts`, { params }),
  show: (uuid, params) => http.get(`/app/site/posts/${uuid}`, { params }),
}

export const config = {
  index: (params) => http.get(`/app/config`, { params }),
}

export const configLocales = {
  index: (params) => http.get(`/app/config/locales`, { params }),
  show: (uuid, params) => http.get(`/app/config/locales/${uuid}`, { params }),
  store: (data) => http.post(`/app/config/locales`, data),
  update: (uuid, data) => http.put(`/app/config/locales/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/config/locales/${uuid}`),
}

export const configMailTemplates = {
  index: (params) => http.get(`/app/config/mail-templates`, { params }),
  show: (uuid, params) => http.get(`/app/config/mail-templates/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/config/mail-templates/${uuid}`, data),
}

export const configPushNotificationTemplates = {
  index: (params) => http.get(`/app/config/push-notification-templates`, { params }),
  show: (uuid, params) => http.get(`/app/config/push-notification-templates/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/config/push-notification-templates/${uuid}`, data),
}

export const configSmsTemplates = {
  index: (params) => http.get(`/app/config/sms-templates`, { params }),
  show: (uuid, params) => http.get(`/app/config/sms-templates/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/config/sms-templates/${uuid}`, data),
}

export const configWhatsappTemplates = {
  index: (params) => http.get(`/app/config/whatsapp-templates`, { params }),
  show: (uuid, params) => http.get(`/app/config/whatsapp-templates/${uuid}`, { params }),
  update: (uuid, data) => http.put(`/app/config/whatsapp-templates/${uuid}`, data),
}

export const customFields = {
  index: (params) => http.get(`/app/custom-fields`, { params }),
  show: (uuid, params) => http.get(`/app/custom-fields/${uuid}`, { params }),
  store: (data) => http.post(`/app/custom-fields`, data),
  update: (uuid, data) => http.put(`/app/custom-fields/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/custom-fields/${uuid}`),
}

export const devices = {
  index: (params) => http.get(`/app/devices`, { params }),
  show: (uuid, params) => http.get(`/app/devices/${uuid}`, { params }),
  store: (data) => http.post(`/app/devices`, data),
  update: (uuid, data) => http.put(`/app/devices/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/devices/${uuid}`),
}

export const medias = {
  store: (data) => http.post(`/app/medias`, data),
  destroy: (uuid) => http.delete(`/app/medias/${uuid}`),
}

export const notifications = {
  index: (params) => http.get(`/app/notifications`, { params }),
}

export const options = {
  index: (params) => http.get(`/app/options`, { params }),
  show: (uuid, params) => http.get(`/app/options/${uuid}`, { params }),
  store: (data) => http.post(`/app/options`, data),
  update: (uuid, data) => http.put(`/app/options/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/options/${uuid}`),
}

export const organizations = {
  index: (params) => http.get(`/app/organizations`, { params }),
  show: (uuid, params) => http.get(`/app/organizations/${uuid}`, { params }),
  store: (data) => http.post(`/app/organizations`, data),
  update: (uuid, data) => http.put(`/app/organizations/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/organizations/${uuid}`),
}

export const reminders = {
  index: (params) => http.get(`/app/reminders`, { params }),
  show: (uuid, params) => http.get(`/app/reminders/${uuid}`, { params }),
  store: (data) => http.post(`/app/reminders`, data),
  update: (uuid, data) => http.put(`/app/reminders/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/reminders/${uuid}`),
}

export const teams = {
  index: (params) => http.get(`/app/teams`, { params }),
  show: (uuid, params) => http.get(`/app/teams/${uuid}`, { params }),
}

export const teamsTeamRoles = {
  index: (team, params) => http.get(`/app/teams/${team}/roles`, { params }),
  show: (team, uuid, params) => http.get(`/app/teams/${team}/roles/${uuid}`, { params }),
  store: (team, data) => http.post(`/app/teams/${team}/roles`, data),
  destroy: (team, uuid) => http.delete(`/app/teams/${team}/roles/${uuid}`),
}

export const userProfile = {
  update: (data) => http.post('/app/user/profile', data),
}

export const users = {
  index: (params) => http.get(`/app/users`, { params }),
  show: (uuid, params) => http.get(`/app/users/${uuid}`, { params }),
  store: (data) => http.post(`/app/users`, data),
  update: (uuid, data) => http.put(`/app/users/${uuid}`, data),
  destroy: (uuid) => http.delete(`/app/users/${uuid}`),
}

export const supportToken = (data) => http.post('/app/support/token', data)

export const teamsConfig = (team, params) => http.get(`/app/teams/${team}/config`, params)

export const teamsConfig2 = (team, data) => http.post(`/app/teams/${team}/config`, data)

export const teamsByIdPermissionsPreRequisitePreRequisite = (team, params) => http.get(`/app/teams/${team}/permissions/pre-requisite`, params)

export const teamsByIdPermissionsRoleAssignRoleWiseAssign = (team, data) => http.post(`/app/teams/${team}/permissions/role/assign`, data)

export const teamsByIdPermissionsSearchSearch = (team, params) => http.get(`/app/teams/${team}/permissions/search`, params)

export const teamsByIdPermissionsUserSearchSearchUser = (team, params) => http.get(`/app/teams/${team}/permissions/user/search`, params)

export const teamsByIdPermissionsUserAssignUserWiseAssign = (team, data) => http.post(`/app/teams/${team}/permissions/user/assign`, data)

export const usersPreRequisitePreRequisite = (params) => http.get('/app/users/pre-requisite', { params })

export const usersScopeUpdateScope = (data) => http.post('/app/users/scope', data)

export const usersByIdStatusStatus = (user, data) => http.post(`/app/users/${user}/status`, data)

export const usersByIdToggleForceChangePasswordToggleForceChangePassword = (user, data) => http.post(`/app/users/${user}/toggle-force-change-password`, data)

export const usersByIdImpersonateImpersonate = (user, data) => http.post(`/app/users/${user}/impersonate`, data)

export const usersUnimpersonateUnimpersonate = (data) => http.post('/app/users/unimpersonate', data)

export const userPreferencePreference = (data) => http.post('/app/user/preference', data)

export const userForceChangePasswordInvoke = (data) => http.post('/app/user/force-change-password', data)

export const setupWizardInvoke = (params) => http.get('/app/setup-wizard', { params })

export const failedLoginAttemptsInvoke = (params) => http.get('/app/failed-login-attempts', { params })

export const bulkUploadActionPreRequisitePreRequisite = (params) => http.get('/app/bulk-upload/action/pre-requisite', { params })

export const bulkuploadImport = (data) => http.post('/app/bulk-upload/action', data)

export const attendanceQrCodeFetchQrCode = (data) => http.post('/app/attendance/qr-code', data)

export const attendanceMarkMarkAttendance = (data) => http.post('/app/attendance/mark', data)

export const userPasswordPassword = (data) => http.post('/app/user/password', data)

export const userProfileAccountAccount = (data) => http.post('/app/user/profile/account', data)

export const userProfileVerifyVerify = (data) => http.post('/app/user/profile/verify', data)

export const userProfileAvatarUploadAvatar = (data) => http.post('/app/user/profile/avatar', data)

export const userProfileAvatarRemoveAvatar = () => http.delete('/app/user/profile/avatar')

export const notificationsMarkAsRead = (notification, data) => http.post(`/app/notifications/${notification}/mark-as-read`, data)

export const notificationsMarkAllAsRead = (data) => http.post('/app/notifications/mark-all-as-read', data)

export const searchInvoke = (params) => http.get('/app/search', { params })

export const configModulePreRequisite = (params) => http.get('/app/config/module-pre-requisite', { params })

export const configModuleStoreModule = (data) => http.post('/app/config/module', data)

export const configMailTestTestMailConnection = (params) => http.get('/app/config/mail/test', { params })

export const configSmsTestTestSMS = (params) => http.get('/app/config/sms/test', { params })

export const configWhatstestTestWhatsApp = (params) => http.get('/app/config/whatsapp/test', { params })

export const configPusherTestTestPusherConnection = (params) => http.get('/app/config/pusher/test', { params })

export const configTestTestAppNotification = (params) => http.get('/app/config/app/test', { params })

export const configAssetsUploadAsset = (data) => http.post('/app/config/assets', data)

export const configAssetsRemoveAsset = () => http.delete('/app/config/assets')

export const templatesUpdateStatus = (template, data) => http.post(`/app/config/templates/${template}/status`, data)

export const localesSync = (locale, data) => http.post(`/app/config/locales/${locale}/sync`, data)

export const optionsPreRequisite = (params) => http.get('/app/options/pre-requisite', { params })

export const optionsImportInvoke = (data) => http.post('/app/options/import', data)

export const optionsReorderReorder = (data) => http.post('/app/options/reorder', data)

export const customFieldsPreRequisite = (params) => http.get('/app/custom-fields/pre-requisite', { params })

export const imageUpload = (data) => http.post('/app/images/upload', data)

export const configPreRequisite = (params) => http.get('/config/pre-requisite', { params })

export const sitePageView = (slug, params) => http.get(`/app/pages/${slug}`, params)

export const teamsExportInvoke = (params) => http.get('/app/teams/export', { params })

export const teamsByIdRolesExportInvoke = (team, params) => http.get(`/app/teams/${team}/roles/export`, params)

export const customFieldsExportInvoke = (params) => http.get('/app/custom-fields/export', { params })

export const usersExportInvoke = (params) => http.get('/app/users/export', { params })

export const optionsExportInvoke = (params) => http.get('/app/options/export', { params })
