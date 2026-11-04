// Route tree reconstructed 1:1 from the compiled bundle (public/build/assets/app-*.js).
// All paths, names, metas and lazy component mappings match the original build.
import { RouterView } from 'vue-router';

export default [
{
    path: "/",
    name: "Guest",
    redirect: { name: "Login" },
    meta: { "isNotNav": true, "belongsTo": "guest" },
    component: () => import('@/views/Layouts/Guest.vue'),
    children: [
{
    path: "login",
    name: "Login",
    meta: { "title": "auth.login.page_title", "description": "auth.login.page_description" },
    component: () => import('@/views/Pages/Auth/Login.vue'),
},
{
    path: "email-otp-login",
    name: "EmailOtpLogin",
    meta: { "title": "auth.login.page_title", "description": "auth.login.page_description" },
    component: () => import('@/views/Pages/Auth/EmailOtp.vue'),
},
{
    path: "sms-otp-login",
    name: "SmsOtpLogin",
    meta: { "title": "auth.login.page_title", "description": "auth.login.page_description" },
    component: () => import('@/views/Pages/Auth/SMSOtp.vue'),
},
{
    path: "register",
    name: "Register",
    meta: { "title": "auth.register.page_title", "description": "auth.register.page_description" },
    component: () => import('@/views/Pages/Auth/Register.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "register/email",
    name: "EmailRequest",
    meta: { "title": "auth.register.page_title", "description": "auth.register.page_description" },
    component: () => import('@/views/Pages/Auth/EmailRequest.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "register/verify/:token",
    name: "EmailVerification",
    meta: { "title": "auth.register.page_title", "description": "auth.register.page_description" },
    component: () => import('@/views/Pages/Auth/EmailVerification.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "password",
    name: "Password",
    meta: { "title": "auth.password.page_title", "description": "auth.password.page_description" },
    component: () => import('@/views/Pages/Auth/Password.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
}
],
},
{
    path: "/",
    name: "Blank",
    meta: { "isNotNav": true, "belongsTo": "blank" },
    component: () => import('@/views/Layouts/Blank.vue'),
    children: [
{
    path: "pages/:slug",
    name: "SitePageView",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Site/Page/View.vue'),
},
{
    path: "site/posts",
    name: "SitePost",
    meta: { "hideCard": true, "showLogo": false },
    component: () => import('@/views/Pages/Site/Post/Index.vue'),
},
{
    path: "site/posts/:uuid",
    name: "SitePostView",
    meta: { "hideCard": true, "showLogo": false },
    component: () => import('@/views/Pages/Site/Post/View.vue'),
},
{
    path: "job/vacancies",
    name: "JobVacancies",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Recruitment/Job/Vacancy.vue'),
},
{
    path: "job/vacancies/:slug",
    name: "JobVacancyDetail",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Recruitment/Job/VacancyDetail.vue'),
},
{
    path: "job/vacancies/:slug/application",
    name: "JobVacancyApplication",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Recruitment/Job/Application.vue'),
},
{
    path: "online-enquiry",
    name: "OnlineEnquiry",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Reception/OnlineEnquiry/Index.vue'),
},
{
    path: "online-registration",
    name: "OnlineRegistration",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/OnlineRegistration/Index.vue'),
},
{
    path: "online-registration/verify",
    name: "OnlineRegistrationVerify",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/OnlineRegistration/Verify.vue'),
},
{
    path: "online-registration/form/:number",
    name: "OnlineRegistrationForm",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/OnlineRegistration/Form.vue'),
},
{
    path: "payment",
    name: "GuestPayment",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/GuestPayment/Index.vue'),
},
{
    path: "payments/:uuid",
    name: "AnonymousGuestPayment",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/GuestPayment/Anonymous.vue'),
},
{
    path: "transfer-certificate",
    name: "TransferCertificate",
    meta: { "showLogo": false },
    component: () => import('@/views/Pages/Student/TransferCertificate/Index.vue'),
}
],
},
{
    path: "/",
    name: "Empty",
    meta: { "isNotNav": true, "belongsTo": "auth" },
    component: () => import('@/views/Layouts/Empty.vue'),
},
{
    path: "/",
    name: "App",
    redirect: { name: "Dashboard" },
    meta: { "belongsTo": "auth" },
    component: () => import('@/views/Layouts/App.vue'),
    children: [
{
    path: "home",
    name: "Home",
    meta: { "isNotNav": true, "noPadding": true, "label": "home.home", "icon": "fas fa-home", "permissions": ["post:read"], "keySearch": true },
    component: () => import('@/views/Pages/Post/Index.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "dashboard",
    name: "Dashboard",
    meta: { "noPadding": true, "label": "dashboard.dashboard", "icon": "fas fa-home", "keySearch": true },
    component: () => import('@/views/Pages/Dashboard/Index.vue'),
},
{
    path: "notifications",
    name: "Notification",
    meta: { "isNotNav": true, "noPadding": true, "label": "notification.notifications", "icon": "fas fa-bell", "keySearch": true },
    component: () => import('@/views/Pages/Notification/Index.vue'),
},
{
    path: "organizations",
    name: "Organization",
    redirect: { name: "OrganizationList" },
    meta: { "label": "organization.organization", "icon": "fas fa-building", "isNotNav": true, "hideChildren": true, "permissions": ["organization:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "OrganizationList",
    meta: { "trans": "global.list", "label": "organization.organization" },
    component: () => import('@/views/Pages/Organization/Index.vue'),
},
{
    path: "create",
    name: "OrganizationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "organization.organization" },
    component: () => import('@/views/Pages/Organization/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "OrganizationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "organization.organization" },
    component: () => import('@/views/Pages/Organization/Action.vue'),
},
{
    path: ":uuid",
    name: "OrganizationShow",
    meta: { "trans": "global.detail", "label": "organization.organization" },
    component: () => import('@/views/Pages/Organization/Show.vue'),
}
],
},
{
    path: "teams",
    name: "Team",
    redirect: { name: "TeamList" },
    meta: { "label": "team.team", "icon": "fas fa-user-friends", "isNotNav": true, "hideChildren": true, "permissions": ["team:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "TeamList",
    meta: { "trans": "global.list", "label": "team.team" },
    component: () => import('@/views/Pages/Team/Index.vue'),
},
{
    path: ":uuid",
    name: "TeamShow",
    meta: { "trans": "global.detail", "label": "team.team" },
    component: () => import('@/views/Pages/Team/Show.vue'),
},
{
    path: ":uuid/config",
    name: "TeamConfig",
    redirect: { name: "TeamConfigRole" },
    meta: { "label": "team.team", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["team:manage"] },
    component: () => import('@/views/Pages/Team/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "TeamConfigGeneral",
    meta: { "label": "team.config.general.general", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Team/Config/General/Index.vue'),
},
{
    path: "role",
    name: "TeamConfigRole",
    redirect: { name: "TeamConfigRoleList" },
    meta: { "label": "team.config.role.role", "icon": "fas fa-user-tag", "hideChildren": true, "key": "role" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TeamConfigRoleList",
    meta: { "trans": "global.list", "label": "team.config.role.role" },
    component: () => import('@/views/Pages/Team/Config/Role/Index.vue'),
},
{
    path: "create",
    name: "TeamConfigRoleCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "team.config.role.role" },
    component: () => import('@/views/Pages/Team/Config/Role/Action.vue'),
}
],
},
{
    path: "permission",
    name: "TeamConfigPermission",
    redirect: { name: "TeamConfigPermissionAssign" },
    meta: { "label": "team.config.permission.permission", "icon": "fas fa-key", "key": "permission" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TeamConfigPermissionAssign",
    meta: { "trans": "global.assign", "label": "team.config.permission.permission" },
    component: () => import('@/views/Pages/Team/Config/Permission/Index.vue'),
},
{
    path: ":module",
    name: "TeamConfigPermissionAssignModule",
    meta: { "trans": "global.assign", "label": "team.config.permission.permission" },
    component: () => import('@/views/Pages/Team/Config/Permission/Index.vue'),
}
],
},
{
    path: "user-permission",
    name: "TeamConfigUserPermission",
    meta: { "isNotNav": true, "label": "team.config.permission.user_permission", "icon": "fas fa-key", "key": "user-permission" },
    component: () => import('@/views/Pages/Team/Config/Permission/User.vue'),
}
],
}
],
},
{
    path: "reception",
    name: "Reception",
    redirect: { name: "ReceptionCorrespondence" },
    meta: { "moduleName": "reception", "label": "reception.reception", "icon": "fas fa-couch", "permissions": ["reception:config", "enquiry:read", "visitor-log:read", "gate-pass:read", "complaint:read", "call-log:read", "correspondence:read", "query:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ReceptionConfig",
    redirect: { name: "ReceptionConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["reception:config"] },
    component: () => import('@/views/Pages/Reception/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ReceptionConfigGeneral",
    meta: { "label": "reception.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Reception/Config/General.vue'),
},
{
    path: "enquiry-stage",
    name: "ReceptionConfigEnquiryStage",
    redirect: { name: "ReceptionConfigEnquiryStageList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigEnquiryStageList",
    meta: { "trans": "global.list", "label": "reception.enquiry.stage.stage", "queryType": "enquiry_stage", "keySearch": true, "prefix": "ReceptionConfigEnquiryStage" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigEnquiryStageCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.enquiry.stage.stage", "queryType": "enquiry_stage", "prefix": "ReceptionConfigEnquiryStage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigEnquiryStageEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.enquiry.stage.stage", "queryType": "enquiry_stage", "prefix": "ReceptionConfigEnquiryStage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "enquiry-type",
    name: "ReceptionConfigEnquiryType",
    redirect: { name: "ReceptionConfigEnquiryTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigEnquiryTypeList",
    meta: { "trans": "global.list", "label": "reception.enquiry.type.type", "queryType": "enquiry_type", "keySearch": true, "prefix": "ReceptionConfigEnquiryType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigEnquiryTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.enquiry.type.type", "queryType": "enquiry_type", "prefix": "ReceptionConfigEnquiryType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigEnquiryTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.enquiry.type.type", "queryType": "enquiry_type", "prefix": "ReceptionConfigEnquiryType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "enquiry-source",
    name: "ReceptionConfigEnquirySource",
    redirect: { name: "ReceptionConfigEnquirySourceList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigEnquirySourceList",
    meta: { "trans": "global.list", "label": "reception.enquiry.source.source", "queryType": "enquiry_source", "keySearch": true, "prefix": "ReceptionConfigEnquirySource" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigEnquirySourceCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.enquiry.source.source", "queryType": "enquiry_source", "prefix": "ReceptionConfigEnquirySource" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigEnquirySourceEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.enquiry.source.source", "queryType": "enquiry_source", "prefix": "ReceptionConfigEnquirySource" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "visiting-purpose",
    name: "ReceptionConfigVisitingPurpose",
    redirect: { name: "ReceptionConfigVisitingPurposeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigVisitingPurposeList",
    meta: { "trans": "global.list", "label": "reception.visitor_log.purpose.purpose", "queryType": "visiting_purpose", "keySearch": true, "prefix": "ReceptionConfigVisitingPurpose" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigVisitingPurposeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.visitor_log.purpose.purpose", "queryType": "visiting_purpose", "prefix": "ReceptionConfigVisitingPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigVisitingPurposeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.visitor_log.purpose.purpose", "queryType": "visiting_purpose", "prefix": "ReceptionConfigVisitingPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "gate-pass-purpose",
    name: "ReceptionConfigGatePassPurpose",
    redirect: { name: "ReceptionConfigGatePassPurposeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigGatePassPurposeList",
    meta: { "trans": "global.list", "label": "reception.gate_pass.purpose.purpose", "queryType": "gate_pass_purpose", "keySearch": true, "prefix": "ReceptionConfigGatePassPurpose" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigGatePassPurposeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.gate_pass.purpose.purpose", "queryType": "gate_pass_purpose", "prefix": "ReceptionConfigGatePassPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigGatePassPurposeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.gate_pass.purpose.purpose", "queryType": "gate_pass_purpose", "prefix": "ReceptionConfigGatePassPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "complaint-type",
    name: "ReceptionConfigComplaintType",
    redirect: { name: "ReceptionConfigComplaintTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigComplaintTypeList",
    meta: { "trans": "global.list", "label": "reception.complaint.type.type", "queryType": "complaint_type", "keySearch": true, "prefix": "ReceptionConfigComplaintType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigComplaintTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.complaint.type.type", "queryType": "complaint_type", "prefix": "ReceptionConfigComplaintType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigComplaintTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.complaint.type.type", "queryType": "complaint_type", "prefix": "ReceptionConfigComplaintType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "calling-purpose",
    name: "ReceptionConfigCallingPurpose",
    redirect: { name: "ReceptionConfigCallingPurposeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionConfigCallingPurposeList",
    meta: { "trans": "global.list", "label": "reception.call_log.purpose.purpose", "queryType": "calling_purpose", "keySearch": true, "prefix": "ReceptionConfigCallingPurpose" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ReceptionConfigCallingPurposeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.call_log.purpose.purpose", "queryType": "calling_purpose", "prefix": "ReceptionConfigCallingPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionConfigCallingPurposeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.call_log.purpose.purpose", "queryType": "calling_purpose", "prefix": "ReceptionConfigCallingPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "enquiries",
    name: "ReceptionEnquiry",
    redirect: { name: "ReceptionEnquiryList" },
    meta: { "label": "reception.enquiry.enquiry", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["enquiry:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionEnquiryList",
    meta: { "trans": "global.list", "label": "reception.enquiry.enquiries" },
    component: () => import('@/views/Pages/Reception/Enquiry/Index.vue'),
},
{
    path: "create",
    name: "ReceptionEnquiryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.enquiry.enquiry", "permissions": ["enquiry:create"] },
    component: () => import('@/views/Pages/Reception/Enquiry/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionEnquiryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.enquiry.enquiry", "permissions": ["enquiry:edit"] },
    component: () => import('@/views/Pages/Reception/Enquiry/Action.vue'),
},
{
    path: ":uuid/wizard",
    name: "ReceptionEnquiryWizard",
    meta: { "type": "wizard", "action": "update", "trans": "global.edit", "label": "reception.enquiry.enquiry", "permissions": ["enquiry:edit"] },
    component: () => import('@/views/Pages/Reception/Enquiry/Wizard.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionEnquiryDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.enquiry.enquiry", "permissions": ["enquiry:create"] },
    component: () => import('@/views/Pages/Reception/Enquiry/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionEnquiryShow",
    meta: { "trans": "global.detail", "label": "reception.enquiry.enquiry" },
    component: () => import('@/views/Pages/Reception/Enquiry/Show.vue'),
}
],
},
{
    path: "visitor-logs",
    name: "ReceptionVisitorLog",
    redirect: { name: "ReceptionVisitorLogList" },
    meta: { "label": "reception.visitor_log.visitor_log", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["visitor-log:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionVisitorLogList",
    meta: { "trans": "global.list", "label": "reception.visitor_log.visitor_logs" },
    component: () => import('@/views/Pages/Reception/VisitorLog/Index.vue'),
},
{
    path: "create",
    name: "ReceptionVisitorLogCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.visitor_log.visitor_log", "permissions": ["visitor-log:create"] },
    component: () => import('@/views/Pages/Reception/VisitorLog/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionVisitorLogEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.visitor_log.visitor_log", "permissions": ["visitor-log:edit"] },
    component: () => import('@/views/Pages/Reception/VisitorLog/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionVisitorLogDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.visitor_log.visitor_log", "permissions": ["visitor-log:create"] },
    component: () => import('@/views/Pages/Reception/VisitorLog/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionVisitorLogShow",
    meta: { "trans": "global.detail", "label": "reception.visitor_log.visitor_log" },
    component: () => import('@/views/Pages/Reception/VisitorLog/Show.vue'),
}
],
},
{
    path: "gate-passes",
    name: "ReceptionGatePass",
    redirect: { name: "ReceptionGatePassList" },
    meta: { "label": "reception.gate_pass.gate_pass", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["gate-pass:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionGatePassList",
    meta: { "trans": "global.list", "label": "reception.gate_pass.gate_passes" },
    component: () => import('@/views/Pages/Reception/GatePass/Index.vue'),
},
{
    path: "create",
    name: "ReceptionGatePassCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.gate_pass.gate_pass", "permissions": ["gate-pass:create"] },
    component: () => import('@/views/Pages/Reception/GatePass/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionGatePassEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.gate_pass.gate_pass", "permissions": ["gate-pass:edit"] },
    component: () => import('@/views/Pages/Reception/GatePass/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionGatePassDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.gate_pass.gate_pass", "permissions": ["gate-pass:create"] },
    component: () => import('@/views/Pages/Reception/GatePass/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionGatePassShow",
    meta: { "trans": "global.detail", "label": "reception.gate_pass.gate_pass" },
    component: () => import('@/views/Pages/Reception/GatePass/Show.vue'),
}
],
},
{
    path: "complaints",
    name: "ReceptionComplaint",
    redirect: { name: "ReceptionComplaintList" },
    meta: { "label": "reception.complaint.complaint", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["complaint:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionComplaintList",
    meta: { "trans": "global.list", "label": "reception.complaint.complaints" },
    component: () => import('@/views/Pages/Reception/Complaint/Index.vue'),
},
{
    path: "create",
    name: "ReceptionComplaintCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.complaint.complaint", "permissions": ["complaint:create"] },
    component: () => import('@/views/Pages/Reception/Complaint/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionComplaintEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.complaint.complaint", "permissions": ["complaint:edit"] },
    component: () => import('@/views/Pages/Reception/Complaint/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionComplaintDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.complaint.complaint", "permissions": ["complaint:create"] },
    component: () => import('@/views/Pages/Reception/Complaint/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionComplaintShow",
    meta: { "trans": "global.detail", "label": "reception.complaint.complaint" },
    component: () => import('@/views/Pages/Reception/Complaint/Show.vue'),
}
],
},
{
    path: "call-logs",
    name: "ReceptionCallLog",
    redirect: { name: "ReceptionCallLogList" },
    meta: { "label": "reception.call_log.call_log", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["call-log:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionCallLogList",
    meta: { "trans": "global.list", "label": "reception.call_log.call_logs" },
    component: () => import('@/views/Pages/Reception/CallLog/Index.vue'),
},
{
    path: "create",
    name: "ReceptionCallLogCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.call_log.call_log", "permissions": ["call-log:create"] },
    component: () => import('@/views/Pages/Reception/CallLog/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionCallLogEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.call_log.call_log", "permissions": ["call-log:edit"] },
    component: () => import('@/views/Pages/Reception/CallLog/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionCallLogDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.call_log.call_log", "permissions": ["call-log:create"] },
    component: () => import('@/views/Pages/Reception/CallLog/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionCallLogShow",
    meta: { "trans": "global.detail", "label": "reception.call_log.call_log" },
    component: () => import('@/views/Pages/Reception/CallLog/Show.vue'),
}
],
},
{
    path: "correspondences",
    name: "ReceptionCorrespondence",
    redirect: { name: "ReceptionCorrespondenceList" },
    meta: { "label": "reception.correspondence.correspondence", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["correspondence:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionCorrespondenceList",
    meta: { "trans": "global.list", "label": "reception.correspondence.correspondences" },
    component: () => import('@/views/Pages/Reception/Correspondence/Index.vue'),
},
{
    path: "create",
    name: "ReceptionCorrespondenceCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reception.correspondence.correspondence", "permissions": ["correspondence:create"] },
    component: () => import('@/views/Pages/Reception/Correspondence/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReceptionCorrespondenceEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reception.correspondence.correspondence", "permissions": ["correspondence:edit"] },
    component: () => import('@/views/Pages/Reception/Correspondence/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReceptionCorrespondenceDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reception.correspondence.correspondence", "permissions": ["correspondence:create"] },
    component: () => import('@/views/Pages/Reception/Correspondence/Action.vue'),
},
{
    path: ":uuid",
    name: "ReceptionCorrespondenceShow",
    meta: { "trans": "global.detail", "label": "reception.correspondence.correspondence" },
    component: () => import('@/views/Pages/Reception/Correspondence/Show.vue'),
}
],
},
{
    path: "queries",
    name: "ReceptionQuery",
    redirect: { name: "ReceptionQueryList" },
    meta: { "label": "reception.query.query", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["query:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReceptionQueryList",
    meta: { "trans": "global.list", "label": "reception.query.queries" },
    component: () => import('@/views/Pages/Reception/Query/Index.vue'),
},
{
    path: ":uuid",
    name: "ReceptionQueryShow",
    meta: { "trans": "global.detail", "label": "reception.query.query" },
    component: () => import('@/views/Pages/Reception/Query/Show.vue'),
}
],
}
],
},
{
    path: "academic",
    name: "Academic",
    redirect: { name: "AcademicPeriod" },
    meta: { "moduleName": "academic", "label": "academic.academic", "icon": "fas fa-building-columns", "permissions": ["academic-department:manage", "program:manage", "session:manage", "period:read", "division:read", "division-incharge:read", "course:read", "course-incharge:read", "batch:read", "batch-incharge:read", "subject:read", "subject-incharge:read", "book-list:manage", "certificate:read", "id-card:manage", "book-list:manage", "timetable:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "AcademicConfig",
    redirect: { name: "AcademicConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["academic:config"] },
    component: () => import('@/views/Pages/Academic/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "AcademicConfigGeneral",
    meta: { "label": "academic.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Academic/Config/General.vue'),
},
{
    path: "subject-type",
    name: "AcademicConfigSubjectType",
    redirect: { name: "AcademicConfigSubjectTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicConfigSubjectTypeList",
    meta: { "trans": "global.list", "label": "academic.subject.type.type", "queryType": "subject_type", "keySearch": true, "prefix": "AcademicConfigSubjectType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "AcademicConfigSubjectTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.subject.type.type", "queryType": "subject_type", "prefix": "AcademicConfigSubjectType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicConfigSubjectTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.subject.type.type", "queryType": "subject_type", "prefix": "AcademicConfigSubjectType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "departments",
    name: "AcademicDepartment",
    redirect: { name: "AcademicDepartmentList" },
    meta: { "label": "academic.department.department", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "keySearchLabel": "academic.department.academic_department", "permissions": ["academic-department:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicDepartmentList",
    meta: { "trans": "global.list", "label": "academic.department.departments" },
    component: () => import('@/views/Pages/Academic/Department/Index.vue'),
},
{
    path: "create",
    name: "AcademicDepartmentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.department.department" },
    component: () => import('@/views/Pages/Academic/Department/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicDepartmentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.department.department" },
    component: () => import('@/views/Pages/Academic/Department/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicDepartmentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.department.department" },
    component: () => import('@/views/Pages/Academic/Department/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicDepartmentShow",
    meta: { "trans": "global.detail", "label": "academic.department.department" },
    component: () => import('@/views/Pages/Academic/Department/Show.vue'),
}
],
},
{
    path: "department-incharges",
    name: "AcademicDepartmentIncharge",
    redirect: { name: "AcademicDepartmentInchargeList" },
    meta: { "isNotNav": true, "label": "academic.department_incharge.department_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["academic-department:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicDepartmentInchargeList",
    meta: { "trans": "global.list", "label": "academic.department_incharge.department_incharges" },
    component: () => import('@/views/Pages/Academic/DepartmentIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicDepartmentInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.department_incharge.department_incharge", "permissions": ["department-incharge:create"] },
    component: () => import('@/views/Pages/Academic/DepartmentIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicDepartmentInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.department_incharge.department_incharge", "permissions": ["department-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/DepartmentIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicDepartmentInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.department_incharge.department_incharge", "permissions": ["department-incharge:create"] },
    component: () => import('@/views/Pages/Academic/DepartmentIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicDepartmentInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.department_incharge.department_incharge" },
    component: () => import('@/views/Pages/Academic/DepartmentIncharge/Show.vue'),
}
],
},
{
    path: "program-types",
    name: "AcademicProgramType",
    redirect: { name: "AcademicProgramTypeList" },
    meta: { "isNotNav": true, "label": "academic.program_type.program_type", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["program:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicProgramTypeList",
    meta: { "trans": "global.list", "label": "academic.program_type.program_types" },
    component: () => import('@/views/Pages/Academic/ProgramType/Index.vue'),
},
{
    path: "create",
    name: "AcademicProgramTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.program_type.program_type" },
    component: () => import('@/views/Pages/Academic/ProgramType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicProgramTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.program_type.program_type" },
    component: () => import('@/views/Pages/Academic/ProgramType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicSessionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.program_type.program_type" },
    component: () => import('@/views/Pages/Academic/ProgramType/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicProgramTypeShow",
    meta: { "trans": "global.detail", "label": "academic.program_type.program_type" },
    component: () => import('@/views/Pages/Academic/ProgramType/Show.vue'),
}
],
},
{
    path: "programs",
    name: "AcademicProgram",
    redirect: { name: "AcademicProgramList" },
    meta: { "label": "academic.program.program", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["program:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicProgramList",
    meta: { "trans": "global.list", "label": "academic.program.programs" },
    component: () => import('@/views/Pages/Academic/Program/Index.vue'),
},
{
    path: "create",
    name: "AcademicProgramCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.program.program" },
    component: () => import('@/views/Pages/Academic/Program/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicProgramEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.program.program" },
    component: () => import('@/views/Pages/Academic/Program/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicProgramDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.program.program" },
    component: () => import('@/views/Pages/Academic/Program/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicProgramShow",
    meta: { "trans": "global.detail", "label": "academic.program.program" },
    component: () => import('@/views/Pages/Academic/Program/Show.vue'),
}
],
},
{
    path: "program-incharges",
    name: "AcademicProgramIncharge",
    redirect: { name: "AcademicProgramInchargeList" },
    meta: { "isNotNav": true, "label": "academic.program_incharge.program_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["program:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicProgramInchargeList",
    meta: { "trans": "global.list", "label": "academic.program_incharge.program_incharges" },
    component: () => import('@/views/Pages/Academic/ProgramIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicProgramInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.program_incharge.program_incharge", "permissions": ["program-incharge:create"] },
    component: () => import('@/views/Pages/Academic/ProgramIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicProgramInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.program_incharge.program_incharge", "permissions": ["program-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/ProgramIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicProgramInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.program_incharge.program_incharge", "permissions": ["program-incharge:create"] },
    component: () => import('@/views/Pages/Academic/ProgramIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicProgramInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.program_incharge.program_incharge" },
    component: () => import('@/views/Pages/Academic/ProgramIncharge/Show.vue'),
}
],
},
{
    path: "sessions",
    name: "AcademicSession",
    redirect: { name: "AcademicSessionList" },
    meta: { "label": "academic.session.session", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["session:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicSessionList",
    meta: { "trans": "global.list", "label": "academic.session.sessions" },
    component: () => import('@/views/Pages/Academic/Session/Index.vue'),
},
{
    path: "create",
    name: "AcademicSessionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.session.session" },
    component: () => import('@/views/Pages/Academic/Session/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicSessionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.session.session" },
    component: () => import('@/views/Pages/Academic/Session/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicSessionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.session.session" },
    component: () => import('@/views/Pages/Academic/Session/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicSessionShow",
    meta: { "trans": "global.detail", "label": "academic.session.session" },
    component: () => import('@/views/Pages/Academic/Session/Show.vue'),
}
],
},
{
    path: "periods",
    name: "AcademicPeriod",
    redirect: { name: "AcademicPeriodList" },
    meta: { "label": "academic.period.period", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["period:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicPeriodList",
    meta: { "trans": "global.list", "label": "academic.period.periods" },
    component: () => import('@/views/Pages/Academic/Period/Index.vue'),
},
{
    path: "create",
    name: "AcademicPeriodCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.period.period", "permissions": ["period:create"] },
    component: () => import('@/views/Pages/Academic/Period/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicPeriodEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.period.period", "permissions": ["period:edit"] },
    component: () => import('@/views/Pages/Academic/Period/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicPeriodDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.period.period", "permissions": ["period:create"] },
    component: () => import('@/views/Pages/Academic/Period/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicPeriodShow",
    meta: { "trans": "global.detail", "label": "academic.period.period" },
    component: () => import('@/views/Pages/Academic/Period/Show.vue'),
}
],
},
{
    path: "divisions",
    name: "AcademicDivision",
    redirect: { name: "AcademicDivisionList" },
    meta: { "label": "academic.division.division", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["division:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicDivisionList",
    meta: { "trans": "global.list", "label": "academic.division.divisions" },
    component: () => import('@/views/Pages/Academic/Division/Index.vue'),
},
{
    path: "create",
    name: "AcademicDivisionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.division.division", "permissions": ["division:create"] },
    component: () => import('@/views/Pages/Academic/Division/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicDivisionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.division.division", "permissions": ["division:edit"] },
    component: () => import('@/views/Pages/Academic/Division/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicDivisionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.division.division", "permissions": ["division:create"] },
    component: () => import('@/views/Pages/Academic/Division/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicDivisionShow",
    meta: { "trans": "global.detail", "label": "academic.division.division" },
    component: () => import('@/views/Pages/Academic/Division/Show.vue'),
}
],
},
{
    path: "division-incharges",
    name: "AcademicDivisionIncharge",
    redirect: { name: "AcademicDivisionInchargeList" },
    meta: { "isNotNav": true, "label": "academic.division_incharge.division_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["division-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicDivisionInchargeList",
    meta: { "trans": "global.list", "label": "academic.division_incharge.division_incharges" },
    component: () => import('@/views/Pages/Academic/DivisionIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicDivisionInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.division_incharge.division_incharge", "permissions": ["division-incharge:create"] },
    component: () => import('@/views/Pages/Academic/DivisionIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicDivisionInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.division_incharge.division_incharge", "permissions": ["division-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/DivisionIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicDivisionInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.division_incharge.division_incharge", "permissions": ["division-incharge:create"] },
    component: () => import('@/views/Pages/Academic/DivisionIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicDivisionInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.division_incharge.division_incharge" },
    component: () => import('@/views/Pages/Academic/DivisionIncharge/Show.vue'),
}
],
},
{
    path: "courses",
    name: "AcademicCourse",
    redirect: { name: "AcademicCourseList" },
    meta: { "label": "academic.course.course", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["course:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicCourseList",
    meta: { "trans": "global.list", "label": "academic.course.courses" },
    component: () => import('@/views/Pages/Academic/Course/Index.vue'),
},
{
    path: "create",
    name: "AcademicCourseCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.course.course", "permissions": ["course:create"] },
    component: () => import('@/views/Pages/Academic/Course/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicCourseEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.course.course", "permissions": ["course:edit"] },
    component: () => import('@/views/Pages/Academic/Course/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicCourseDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.course.course", "permissions": ["course:create"] },
    component: () => import('@/views/Pages/Academic/Course/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicCourseShow",
    meta: { "trans": "global.detail", "label": "academic.course.course" },
    component: () => import('@/views/Pages/Academic/Course/Show.vue'),
}
],
},
{
    path: "course-incharges",
    name: "AcademicCourseIncharge",
    redirect: { name: "AcademicCourseInchargeList" },
    meta: { "isNotNav": true, "label": "academic.course_incharge.course_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["course-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicCourseInchargeList",
    meta: { "trans": "global.list", "label": "academic.course_incharge.course_incharges" },
    component: () => import('@/views/Pages/Academic/CourseIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicCourseInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.course_incharge.course_incharge", "permissions": ["course-incharge:create"] },
    component: () => import('@/views/Pages/Academic/CourseIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicCourseInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.course_incharge.course_incharge", "permissions": ["course-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/CourseIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicCourseInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.course_incharge.course_incharge", "permissions": ["course-incharge:create"] },
    component: () => import('@/views/Pages/Academic/CourseIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicCourseInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.course_incharge.course_incharge" },
    component: () => import('@/views/Pages/Academic/CourseIncharge/Show.vue'),
}
],
},
{
    path: "enrollment-seats",
    name: "AcademicEnrollmentSeat",
    redirect: { name: "AcademicEnrollmentSeatList" },
    meta: { "isNotNav": true, "label": "academic.enrollment_seat.enrollment_seat", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["course:read", "course:create", "course:edit"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicEnrollmentSeatList",
    meta: { "trans": "global.list", "label": "academic.enrollment_seat.enrollment_seats" },
    component: () => import('@/views/Pages/Academic/EnrollmentSeat/Index.vue'),
},
{
    path: "create",
    name: "AcademicEnrollmentSeatCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.enrollment_seat.enrollment_seat", "permissions": ["course:edit"] },
    component: () => import('@/views/Pages/Academic/EnrollmentSeat/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicEnrollmentSeatEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.enrollment_seat.enrollment_seat", "permissions": ["course:edit"] },
    component: () => import('@/views/Pages/Academic/EnrollmentSeat/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicEnrollmentSeatDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.enrollment_seat.enrollment_seat", "permissions": ["course:edit"] },
    component: () => import('@/views/Pages/Academic/EnrollmentSeat/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicEnrollmentSeatShow",
    meta: { "trans": "global.detail", "label": "academic.enrollment_seat.enrollment_seat" },
    component: () => import('@/views/Pages/Academic/EnrollmentSeat/Show.vue'),
}
],
},
{
    path: "batches",
    name: "AcademicBatch",
    redirect: { name: "AcademicBatchList" },
    meta: { "label": "academic.batch.batch", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["batch:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicBatchList",
    meta: { "trans": "global.list", "label": "academic.batch.batches" },
    component: () => import('@/views/Pages/Academic/Batch/Index.vue'),
},
{
    path: "create",
    name: "AcademicBatchCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.batch.batch", "permissions": ["batch:create"] },
    component: () => import('@/views/Pages/Academic/Batch/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicBatchEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.batch.batch", "permissions": ["batch:edit"] },
    component: () => import('@/views/Pages/Academic/Batch/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicBatchDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.batch.batch", "permissions": ["batch:create"] },
    component: () => import('@/views/Pages/Academic/Batch/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicBatchShow",
    meta: { "trans": "global.detail", "label": "academic.batch.batch" },
    component: () => import('@/views/Pages/Academic/Batch/Show.vue'),
}
],
},
{
    path: "batch-incharges",
    name: "AcademicBatchIncharge",
    redirect: { name: "AcademicBatchInchargeList" },
    meta: { "isNotNav": true, "label": "academic.batch_incharge.batch_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["batch-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicBatchInchargeList",
    meta: { "trans": "global.list", "label": "academic.batch_incharge.batch_incharges" },
    component: () => import('@/views/Pages/Academic/BatchIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicBatchInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.batch_incharge.batch_incharge", "permissions": ["batch-incharge:create"] },
    component: () => import('@/views/Pages/Academic/BatchIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicBatchInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.batch_incharge.batch_incharge", "permissions": ["batch-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/BatchIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicBatchInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.batch_incharge.batch_incharge", "permissions": ["batch-incharge:create"] },
    component: () => import('@/views/Pages/Academic/BatchIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicBatchInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.batch_incharge.batch_incharge" },
    component: () => import('@/views/Pages/Academic/BatchIncharge/Show.vue'),
}
],
},
{
    path: "subjects",
    name: "AcademicSubject",
    redirect: { name: "AcademicSubjectList" },
    meta: { "label": "academic.subject.subject", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["subject:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicSubjectList",
    meta: { "trans": "global.list", "label": "academic.subject.subjects" },
    component: () => import('@/views/Pages/Academic/Subject/Index.vue'),
},
{
    path: "create",
    name: "AcademicSubjectCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.subject.subject", "permissions": ["subject:create"] },
    component: () => import('@/views/Pages/Academic/Subject/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicSubjectEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.subject.subject", "permissions": ["subject:edit"] },
    component: () => import('@/views/Pages/Academic/Subject/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicSubjectDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.subject.subject", "permissions": ["subject:create"] },
    component: () => import('@/views/Pages/Academic/Subject/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicSubjectShow",
    meta: { "trans": "global.detail", "label": "academic.subject.subject" },
    component: () => import('@/views/Pages/Academic/Subject/Show.vue'),
}
],
},
{
    path: "subject-incharges",
    name: "AcademicSubjectIncharge",
    redirect: { name: "AcademicSubjectInchargeList" },
    meta: { "isNotNav": true, "label": "academic.subject_incharge.subject_incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["subject-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicSubjectInchargeList",
    meta: { "trans": "global.list", "label": "academic.subject_incharge.subject_incharges" },
    component: () => import('@/views/Pages/Academic/SubjectIncharge/Index.vue'),
},
{
    path: "create",
    name: "AcademicSubjectInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.subject_incharge.subject_incharge", "permissions": ["subject-incharge:create"] },
    component: () => import('@/views/Pages/Academic/SubjectIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicSubjectInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.subject_incharge.subject_incharge", "permissions": ["subject-incharge:edit"] },
    component: () => import('@/views/Pages/Academic/SubjectIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicSubjectInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.subject_incharge.subject_incharge", "permissions": ["subject-incharge:create"] },
    component: () => import('@/views/Pages/Academic/SubjectIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicSubjectInchargeShow",
    meta: { "trans": "global.detail", "label": "academic.subject_incharge.subject_incharge" },
    component: () => import('@/views/Pages/Academic/SubjectIncharge/Show.vue'),
}
],
},
{
    path: "class-timings",
    name: "AcademicClassTiming",
    redirect: { name: "AcademicClassTimingList" },
    meta: { "label": "academic.class_timing.class_timing", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["class-timing:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicClassTimingList",
    meta: { "trans": "global.list", "label": "academic.class_timing.class_timings" },
    component: () => import('@/views/Pages/Academic/ClassTiming/Index.vue'),
},
{
    path: "create",
    name: "AcademicClassTimingCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.class_timing.class_timing", "permissions": ["class-timing:create"] },
    component: () => import('@/views/Pages/Academic/ClassTiming/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicClassTimingEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.class_timing.class_timing", "permissions": ["class-timing:edit"] },
    component: () => import('@/views/Pages/Academic/ClassTiming/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicClassTimingDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.class_timing.class_timing", "permissions": ["class-timing:create"] },
    component: () => import('@/views/Pages/Academic/ClassTiming/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicClassTimingShow",
    meta: { "trans": "global.detail", "label": "academic.class_timing.class_timing" },
    component: () => import('@/views/Pages/Academic/ClassTiming/Show.vue'),
}
],
},
{
    path: "timetables",
    name: "AcademicTimetable",
    redirect: { name: "AcademicTimetableList" },
    meta: { "label": "academic.timetable.timetable", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["timetable:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicTimetableList",
    meta: { "trans": "global.list", "label": "academic.timetable.timetables" },
    component: () => import('@/views/Pages/Academic/Timetable/Index.vue'),
},
{
    path: "create",
    name: "AcademicTimetableCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.timetable.timetable", "permissions": ["timetable:create"] },
    component: () => import('@/views/Pages/Academic/Timetable/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicTimetableEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.timetable.timetable", "permissions": ["timetable:edit"] },
    component: () => import('@/views/Pages/Academic/Timetable/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicTimetableDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.timetable.timetable", "permissions": ["timetable:create"] },
    component: () => import('@/views/Pages/Academic/Timetable/Action.vue'),
},
{
    path: ":uuid/allocation",
    name: "AcademicTimetableAllocation",
    meta: { "permissions": ["timetable:allocate"] },
    component: () => import('@/views/Pages/Academic/Timetable/Allocation.vue'),
},
{
    path: ":uuid",
    name: "AcademicTimetableShow",
    meta: { "trans": "global.detail", "label": "academic.timetable.timetable" },
    component: () => import('@/views/Pages/Academic/Timetable/Show.vue'),
}
],
},
{
    path: "timetable",
    name: "AcademicTimetableIndex",
    redirect: { name: "AcademicTimetableList" },
    meta: { "isNotNav": true, "label": "academic.timetable.timetable", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["timetable:read"] },
    component: RouterView,
    children: [
{
    path: "teacher",
    name: "AcademicTeacherTimetableIndex",
    meta: { "trans": "global.list", "label": "academic.timetable.teacher_timetable" },
    component: () => import('@/views/Pages/Academic/Timetable/Teacher/Index.vue'),
}
],
},
{
    path: "book-lists",
    name: "AcademicBookList",
    redirect: { name: "AcademicBookListList" },
    meta: { "label": "academic.book_list.book_list", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["book-list:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicBookListList",
    meta: { "trans": "global.list", "label": "academic.book_list.book_lists" },
    component: () => import('@/views/Pages/Academic/BookList/Index.vue'),
},
{
    path: "create",
    name: "AcademicBookListCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.book_list.book_list" },
    component: () => import('@/views/Pages/Academic/BookList/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicBookListEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.book_list.book_list" },
    component: () => import('@/views/Pages/Academic/BookList/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicBookListDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.book_list.book_list" },
    component: () => import('@/views/Pages/Academic/BookList/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicBookListShow",
    meta: { "trans": "global.detail", "label": "academic.book_list.book_list" },
    component: () => import('@/views/Pages/Academic/BookList/Show.vue'),
}
],
},
{
    path: "certificate-templates",
    name: "AcademicCertificateTemplate",
    redirect: { name: "AcademicCertificateTemplateList" },
    meta: { "isNotNav": true, "label": "academic.certificate.template.template", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["certificate-template:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicCertificateTemplateList",
    meta: { "trans": "global.list", "label": "academic.certificate.template.templates" },
    component: () => import('@/views/Pages/Academic/CertificateTemplate/Index.vue'),
},
{
    path: "create",
    name: "AcademicCertificateTemplateCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.certificate.template.template", "permissions": ["certificate-template:create"] },
    component: () => import('@/views/Pages/Academic/CertificateTemplate/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicCertificateTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.certificate.template.template", "permissions": ["certificate-template:edit"] },
    component: () => import('@/views/Pages/Academic/CertificateTemplate/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicCertificateTemplateDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.certificate.template.template", "permissions": ["certificate-template:create"] },
    component: () => import('@/views/Pages/Academic/CertificateTemplate/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicCertificateTemplateShow",
    meta: { "trans": "global.detail", "label": "academic.certificate.template.template" },
    component: () => import('@/views/Pages/Academic/CertificateTemplate/Show.vue'),
}
],
},
{
    path: "certificates",
    name: "AcademicCertificate",
    redirect: { name: "AcademicCertificateList" },
    meta: { "label": "academic.certificate.certificate", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["certificate:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicCertificateList",
    meta: { "trans": "global.list", "label": "academic.certificate.certificates" },
    component: () => import('@/views/Pages/Academic/Certificate/Index.vue'),
},
{
    path: "create",
    name: "AcademicCertificateCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.certificate.certificate", "permissions": ["certificate:create"] },
    component: () => import('@/views/Pages/Academic/Certificate/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicCertificateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.certificate.certificate", "permissions": ["certificate:edit"] },
    component: () => import('@/views/Pages/Academic/Certificate/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicCertificateDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.certificate.certificate", "permissions": ["certificate:create"] },
    component: () => import('@/views/Pages/Academic/Certificate/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicCertificateShow",
    meta: { "trans": "global.detail", "label": "academic.certificate.certificate" },
    component: () => import('@/views/Pages/Academic/Certificate/Show.vue'),
}
],
},
{
    path: "id-card-templates",
    name: "AcademicIdCardTemplate",
    redirect: { name: "AcademicIdCardTemplateList" },
    meta: { "isNotNav": true, "label": "academic.id_card.template.template", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["id-card:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicIdCardTemplateList",
    meta: { "trans": "global.list", "label": "academic.id_card.template.templates" },
    component: () => import('@/views/Pages/Academic/IdCardTemplate/Index.vue'),
},
{
    path: "create",
    name: "AcademicIdCardTemplateCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "academic.id_card.template.template" },
    component: () => import('@/views/Pages/Academic/IdCardTemplate/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AcademicIdCardTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "academic.id_card.template.template" },
    component: () => import('@/views/Pages/Academic/IdCardTemplate/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AcademicIdCardTemplateDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "academic.id_card.template.template" },
    component: () => import('@/views/Pages/Academic/IdCardTemplate/Action.vue'),
},
{
    path: ":uuid",
    name: "AcademicIdCardTemplateShow",
    meta: { "trans": "global.detail", "label": "academic.id_card.template.template" },
    component: () => import('@/views/Pages/Academic/IdCardTemplate/Show.vue'),
}
],
},
{
    path: "id-cards",
    name: "AcademicIdCard",
    redirect: { name: "AcademicIdCardPrint" },
    meta: { "label": "academic.id_card.id_card", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["id-card:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "AcademicIdCardPrint",
    meta: { "trans": "global.print", "label": "academic.id_card.id_cards" },
    component: () => import('@/views/Pages/Academic/IdCard/Print.vue'),
}
],
}
],
},
{
    path: "student",
    name: "StudentIndex",
    redirect: { name: "StudentList" },
    meta: { "moduleName": "student", "label": "student.student", "icon": "fas fa-user-graduate", "permissions": ["registration:read", "student:transfer-request", "student:transfer", "student:read", "student:config"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "StudentConfig",
    redirect: { name: "StudentConfigGeneral" },
    meta: { "isNotNav": true, "label": "student.student", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["student:config"] },
    component: () => import('@/views/Pages/Student/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "StudentConfigGeneral",
    meta: { "label": "student.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Student/Config/General.vue'),
},
{
    path: "registration-stage",
    name: "StudentConfigRegistrationStage",
    redirect: { name: "StudentConfigRegistrationStageList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigRegistrationStageList",
    meta: { "trans": "global.list", "label": "student.registration_stage.registration_stage", "queryType": "registration_stage", "keySearch": true, "prefix": "StudentConfigRegistrationStage" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigRegistrationStageCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.registration_stage.registration_stage", "queryType": "registration_stage", "prefix": "StudentConfigRegistrationStage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigRegistrationStageEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.registration_stage.registration_stage", "queryType": "registration_stage", "prefix": "StudentConfigRegistrationStage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "enrollment-type",
    name: "StudentConfigEnrollmentType",
    redirect: { name: "StudentConfigEnrollmentTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigEnrollmentTypeList",
    meta: { "trans": "global.list", "label": "student.enrollment_type.enrollment_type", "queryType": "student_enrollment_type", "keySearch": true, "prefix": "StudentConfigEnrollmentType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigEnrollmentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.enrollment_type.enrollment_type", "queryType": "student_enrollment_type", "prefix": "StudentConfigEnrollmentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigEnrollmentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.enrollment_type.enrollment_type", "queryType": "student_enrollment_type", "prefix": "StudentConfigEnrollmentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "enrollment-status",
    name: "StudentConfigEnrollmentStatus",
    redirect: { name: "StudentConfigEnrollmentStatusList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigEnrollmentStatusList",
    meta: { "trans": "global.list", "label": "student.enrollment_status.enrollment_status", "queryType": "student_enrollment_status", "keySearch": true, "prefix": "StudentConfigEnrollmentStatus" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigEnrollmentStatusCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.enrollment_status.enrollment_status", "queryType": "student_enrollment_status", "prefix": "StudentConfigEnrollmentStatus" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigEnrollmentStatusEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.enrollment_status.enrollment_status", "queryType": "student_enrollment_status", "prefix": "StudentConfigEnrollmentStatus" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "attendance-types",
    name: "StudentConfigAttendanceType",
    redirect: { name: "StudentConfigAttendanceTypeList" },
    meta: { "label": "student.attendance_type.attendance_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigAttendanceTypeList",
    meta: { "trans": "global.list", "label": "student.attendance_type.attendance_types" },
    component: () => import('@/views/Pages/Student/Config/AttendanceType/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigAttendanceTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.attendance_type.attendance_type" },
    component: () => import('@/views/Pages/Student/Config/AttendanceType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigAttendanceTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.attendance_type.attendance_type" },
    component: () => import('@/views/Pages/Student/Config/AttendanceType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentConfigAttendanceTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.attendance_type.attendance_type" },
    component: () => import('@/views/Pages/Student/Config/AttendanceType/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentConfigAttendanceTypeShow",
    meta: { "trans": "global.detail", "label": "student.attendance_type.attendance_type" },
    component: () => import('@/views/Pages/Student/Config/AttendanceType/Show.vue'),
}
],
},
{
    path: "document-types",
    name: "StudentConfigDocumentType",
    redirect: { name: "StudentConfigDocumentTypeList" },
    meta: { "label": "student.document_type.document_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigDocumentTypeList",
    meta: { "trans": "global.list", "label": "student.document_type.document_types" },
    component: () => import('@/views/Pages/Student/Config/DocumentType/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigDocumentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.document_type.document_type" },
    component: () => import('@/views/Pages/Student/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigDocumentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.document_type.document_type" },
    component: () => import('@/views/Pages/Student/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentConfigDocumentTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.document_type.document_type" },
    component: () => import('@/views/Pages/Student/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentConfigDocumentTypeShow",
    meta: { "trans": "global.detail", "label": "student.document_type.document_type" },
    component: () => import('@/views/Pages/Student/Config/DocumentType/Show.vue'),
}
],
},
{
    path: "dialogue-category",
    name: "StudentConfigDialogueCategory",
    redirect: { name: "StudentConfigDialogueCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigDialogueCategoryList",
    meta: { "trans": "global.list", "label": "student.dialogue_category.dialogue_category", "queryType": "student_dialogue_category", "keySearch": true, "prefix": "StudentConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigDialogueCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.dialogue_category.dialogue_category", "queryType": "student_dialogue_category", "prefix": "StudentConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigDialogueCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.dialogue_category.dialogue_category", "queryType": "student_dialogue_category", "prefix": "StudentConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "leave-category",
    name: "StudentConfigLeaveCategory",
    redirect: { name: "StudentConfigLeaveCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigLeaveCategoryList",
    meta: { "trans": "global.list", "label": "student.leave_category.leave_category", "queryType": "student_leave_category", "keySearch": true, "prefix": "StudentConfigLeaveCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigLeaveCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.leave_category.leave_category", "queryType": "student_leave_category", "prefix": "StudentConfigLeaveCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigLeaveCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.leave_category.leave_category", "queryType": "student_leave_category", "prefix": "StudentConfigLeaveCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "transfer-reason",
    name: "StudentConfigTransferReason",
    redirect: { name: "StudentConfigTransferReasonList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigTransferReasonList",
    meta: { "trans": "global.list", "label": "student.transfer_reason.transfer_reason", "queryType": "student_transfer_reason", "keySearch": true, "prefix": "StudentConfigTransferReason" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigTransferReasonCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.transfer_reason.transfer_reason", "queryType": "student_transfer_reason", "prefix": "StudentConfigTransferReason" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigTransferReasonEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.transfer_reason.transfer_reason", "queryType": "student_transfer_reason", "prefix": "StudentConfigTransferReason" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "group",
    name: "StudentConfigGroup",
    redirect: { name: "StudentConfigGroupList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentConfigGroupList",
    meta: { "trans": "global.list", "label": "student.group.group", "queryType": "student_group", "keySearch": true, "prefix": "StudentConfigGroup" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "StudentConfigGroupCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.group.group", "queryType": "student_group", "prefix": "StudentConfigGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentConfigGroupEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.group.group", "queryType": "student_group", "prefix": "StudentConfigGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "students",
    name: "StudentLists",
    redirect: { name: "StudentList" },
    meta: { "label": "student.students", "icon": "fas fa-right-long", "permissions": ["student:read"], "keySearch": true },
},
{
    path: "registrations",
    name: "StudentRegistration",
    redirect: { name: "StudentRegistrationList" },
    meta: { "label": "student.registration.registration", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["registration:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentRegistrationList",
    meta: { "trans": "global.list", "label": "student.registration.registrations" },
    component: () => import('@/views/Pages/Student/Registration/Index.vue'),
},
{
    path: "create",
    name: "StudentRegistrationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.registration.registration", "permissions": ["registration:create"] },
    component: () => import('@/views/Pages/Student/Registration/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentRegistrationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.registration.registration", "permissions": ["registration:edit"] },
    component: () => import('@/views/Pages/Student/Registration/Action.vue'),
},
{
    path: ":uuid/wizard",
    name: "StudentRegistrationWizard",
    meta: { "type": "wizard", "action": "update", "trans": "global.edit", "label": "student.registration.registration", "permissions": ["registration:edit"] },
    component: () => import('@/views/Pages/Student/Registration/Wizard.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentRegistrationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.registration.registration", "permissions": ["registration:create"] },
    component: () => import('@/views/Pages/Student/Registration/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentRegistrationShow",
    meta: { "trans": "global.detail", "label": "student.registration.registration" },
    component: () => import('@/views/Pages/Student/Registration/Show.vue'),
}
],
},
{
    path: "timesheets",
    name: "StudentTimesheet",
    redirect: { name: "StudentTimesheetList" },
    meta: { "isNotNav": true, "label": "student.timesheet.timesheet", "icon": "fas fa-stopwatch", "hideChildren": true, "permissions": ["student:manage-timesheet"], "keySearch": true },
    component: RouterView,
    beforeEnter() { /* original guard preserved in router/index.js */ },
    children: [
{
    path: "",
    name: "StudentTimesheetList",
    meta: { "trans": "global.list", "label": "student.timesheet.timesheets" },
    component: () => import('@/views/Pages/Student/Timesheet/Index.vue'),
},
{
    path: "create",
    name: "StudentTimesheetCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.timesheet.timesheet" },
    component: () => import('@/views/Pages/Student/Timesheet/Action.vue'),
},
{
    path: "batch",
    name: "StudentTimesheetBatch",
    meta: { "type": "update", "action": "update", "trans": "global.update", "label": "student.timesheet.timesheet" },
    component: () => import('@/views/Pages/Student/Timesheet/Batch.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentTimesheetEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.timesheet.timesheet" },
    component: () => import('@/views/Pages/Student/Timesheet/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentTimesheetDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.timesheet.timesheet" },
    component: () => import('@/views/Pages/Student/Timesheet/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentTimesheetShow",
    meta: { "trans": "global.detail", "label": "student.timesheet.timesheet" },
    component: () => import('@/views/Pages/Student/Timesheet/Show.vue'),
}
],
},
{
    path: "timesheet",
    name: "StudentTimesheetForStudentAndGuardian",
    meta: { "isNotNav": true, "label": "student.timesheet.timesheet", "icon": "fas fa-stopwatch", "hideChildren": true, "roles": ["student", "guardian"], "keySearch": false },
    component: () => import('@/views/Pages/Student/Timesheet/Index.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "roll-number",
    name: "StudentRollNumber",
    meta: { "label": "student.roll_number.roll_number", "icon": "fas fa-right-long", "permissions": ["student:edit", "student-record:manage"], "keySearch": true },
    component: () => import('@/views/Pages/Student/RollNumber/Index.vue'),
},
{
    path: "health-record",
    name: "StudentHealthRecord",
    meta: { "label": "student.health_record.health_record", "icon": "fas fa-right-long", "permissions": ["student:edit", "student-record:manage"], "keySearch": true },
    component: () => import('@/views/Pages/Student/HealthRecord/Index.vue'),
},
{
    path: "subject",
    name: "StudentSubject",
    meta: { "label": "student.subject.subject", "icon": "fas fa-right-long", "permissions": ["student:edit", "student-record:manage"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Subject/Index.vue'),
},
{
    path: "attendance",
    name: "StudentAttendance",
    meta: { "label": "student.attendance.attendance", "icon": "fas fa-right-long", "permissions": ["student:list-attendance"], "keySearch": true, "keySearchLabel": "student.attendance.student_attendance" },
    component: () => import('@/views/Pages/Student/Attendance/Index.vue'),
},
{
    path: "attendance/absentees",
    name: "StudentAttendanceAbsentee",
    meta: { "isNotNav": true, "label": "student.attendance.absentees", "icon": "fas fa-right-long", "permissions": ["student:list-attendance"] },
    component: () => import('@/views/Pages/Student/Attendance/Absentee.vue'),
},
{
    path: "fee-allocation",
    name: "StudentFeeAllocation",
    meta: { "label": "student.fee_allocation.fee_allocation", "icon": "fas fa-right-long", "permissions": ["fee:set"] },
    component: () => import('@/views/Pages/Student/FeeAllocation/Index.vue'),
},
{
    path: "service-allocation",
    name: "StudentServiceAllocation",
    meta: { "label": "student.service_allocation.service_allocation", "icon": "fas fa-right-long", "permissions": ["student:service-allocation"] },
    component: () => import('@/views/Pages/Student/ServiceAllocation/Index.vue'),
},
{
    path: "promotion",
    name: "StudentPromotion",
    meta: { "label": "student.promotion.promotion", "icon": "fas fa-right-long", "permissions": ["student:promotion"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Promotion/Index.vue'),
},
{
    path: "edit-requests",
    name: "StudentEditRequest",
    redirect: { name: "StudentEditRequestList" },
    meta: { "label": "student.edit_request.edit_request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:edit-request-action"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentEditRequestList",
    meta: { "trans": "global.list", "label": "student.edit_request.edits_request" },
    component: () => import('@/views/Pages/Student/EditRequest/Index.vue'),
},
{
    path: ":uuid",
    name: "StudentEditRequestShow",
    meta: { "trans": "global.detail", "label": "student.edit_request.edit_request" },
    component: () => import('@/views/Pages/Student/EditRequest/Show.vue'),
}
],
},
{
    path: "service-requests",
    name: "StudentServiceRequest",
    redirect: { name: "StudentServiceRequestList" },
    meta: { "label": "student.service_request.service_request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:service-request"], "keySearch": true, "keySearchLabel": "student.service_request.student_service_request" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentServiceRequestList",
    meta: { "trans": "global.list", "label": "student.service_request.services_request" },
    component: () => import('@/views/Pages/Student/ServiceRequest/Index.vue'),
},
{
    path: "create",
    name: "StudentServiceRequestCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.service_request.service_request" },
    component: () => import('@/views/Pages/Student/ServiceRequest/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentServiceRequestEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.service_request.service_request" },
    component: () => import('@/views/Pages/Student/ServiceRequest/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentServiceRequestDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.service_request.service_request" },
    component: () => import('@/views/Pages/Student/ServiceRequest/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentServiceRequestShow",
    meta: { "trans": "global.detail", "label": "student.service_request.service_request" },
    component: () => import('@/views/Pages/Student/ServiceRequest/Show.vue'),
}
],
},
{
    path: "leave-requests",
    name: "StudentLeaveRequest",
    redirect: { name: "StudentLeaveRequestList" },
    meta: { "label": "student.leave_request.leave_request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:leave-request"], "keySearch": true, "keySearchLabel": "student.leave_request.student_leave_request" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentLeaveRequestList",
    meta: { "trans": "global.list", "label": "student.leave_request.leaves_request" },
    component: () => import('@/views/Pages/Student/LeaveRequest/Index.vue'),
},
{
    path: "create",
    name: "StudentLeaveRequestCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.leave_request.leave_request" },
    component: () => import('@/views/Pages/Student/LeaveRequest/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentLeaveRequestEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.leave_request.leave_request" },
    component: () => import('@/views/Pages/Student/LeaveRequest/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentLeaveRequestDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.leave_request.leave_request" },
    component: () => import('@/views/Pages/Student/LeaveRequest/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentLeaveRequestShow",
    meta: { "trans": "global.detail", "label": "student.leave_request.leave_request" },
    component: () => import('@/views/Pages/Student/LeaveRequest/Show.vue'),
}
],
},
{
    path: "transfer-requests",
    name: "StudentTransferRequest",
    redirect: { name: "StudentTransferRequestList" },
    meta: { "label": "student.transfer_request.transfer_request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:transfer-request"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentTransferRequestList",
    meta: { "trans": "global.list", "label": "student.transfer_request.transfers_request" },
    component: () => import('@/views/Pages/Student/TransferRequest/Index.vue'),
},
{
    path: "create",
    name: "StudentTransferRequestCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.transfer_request.transfer_request" },
    component: () => import('@/views/Pages/Student/TransferRequest/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentTransferRequestEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.transfer_request.transfer_request" },
    component: () => import('@/views/Pages/Student/TransferRequest/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentTransferRequestDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.transfer_request.transfer_request" },
    component: () => import('@/views/Pages/Student/TransferRequest/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentTransferRequestShow",
    meta: { "trans": "global.detail", "label": "student.transfer_request.transfer_request" },
    component: () => import('@/views/Pages/Student/TransferRequest/Show.vue'),
}
],
},
{
    path: "transfer/approval-requests",
    name: "StudentTransferApprovalRequestList",
    meta: { "isNotNav": true, "label": "student.transfer.transfer", "icon": "fas fa-right-long", "permissions": ["student:transfer"] },
    component: () => import('@/views/Pages/Student/Transfer/ApprovalRequest/Index.vue'),
},
{
    path: "transfers",
    name: "StudentTransfer",
    redirect: { name: "StudentTransferList" },
    meta: { "label": "student.transfer.transfer", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:transfer"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentTransferList",
    meta: { "trans": "global.list", "label": "student.transfer.transfers" },
    component: () => import('@/views/Pages/Student/Transfer/Index.vue'),
},
{
    path: "create",
    name: "StudentTransferCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.transfer.transfer" },
    component: () => import('@/views/Pages/Student/Transfer/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentTransferEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.transfer.transfer" },
    component: () => import('@/views/Pages/Student/Transfer/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentTransferDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.transfer.transfer" },
    component: () => import('@/views/Pages/Student/Transfer/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentTransferShow",
    meta: { "trans": "global.detail", "label": "student.transfer.transfer" },
    component: () => import('@/views/Pages/Student/Transfer/Show.vue'),
}
],
},
{
    path: "alumni",
    name: "StudentAlumni",
    meta: { "trans": "global.list", "label": "student.alumni.alumni", "icon": "fas fa-right-long", "permissions": ["alumni:read"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Index.vue'),
},
{
    path: "reports",
    name: "StudentReport",
    redirect: { name: "StudentReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student:list-attendance", "student:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentReportList",
    meta: { "trans": "global.list", "label": "student.report.report" },
    component: () => import('@/views/Pages/Student/Report/Index.vue'),
},
{
    path: "date-wise-attendance",
    name: "StudentReportDateWiseAttendance",
    meta: { "trans": "global.list", "label": "student.report.date_wise_attendance.date_wise_attendance", "permissions": ["student:list-attendance"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Report/DateWiseAttendance/Index.vue'),
},
{
    path: "batch-wise-attendance",
    name: "StudentReportBatchWiseAttendance",
    meta: { "trans": "global.list", "label": "student.report.batch_wise_attendance.batch_wise_attendance", "permissions": ["student:list-attendance"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Report/BatchWiseAttendance/Index.vue'),
},
{
    path: "subject-wise-attendance",
    name: "StudentReportSubjectWiseAttendance",
    meta: { "trans": "global.list", "label": "student.report.subject_wise_attendance.subject_wise_attendance", "permissions": ["student:list-attendance"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Report/SubjectWiseAttendance/Index.vue'),
},
{
    path: "subject-wise-student",
    name: "StudentReportSubjectWiseStudent",
    meta: { "trans": "global.list", "label": "student.report.subject_wise_student.subject_wise_student", "permissions": ["student:report"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Report/SubjectWiseStudent/Index.vue'),
},
{
    path: "daily-access-report",
    name: "StudentReportDailyAccessReport",
    meta: { "trans": "global.list", "label": "student.report.daily_access_report.daily_access_report", "permissions": ["student:report"], "keySearch": true },
    component: () => import('@/views/Pages/Student/Report/DailyAccessReport/Index.vue'),
}
],
},
{
    path: "accounts",
    name: "StudentAccounts",
    redirect: { name: "StudentAccountsList" },
    meta: { "isNotNav": true, "label": "student.account.accounts", "icon": "fas fa-right-long", "permissions": ["student:read"], "keySearch": true, "keySearchLabel": "student.account.student_accounts" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentAccountsList",
    meta: { "trans": "global.list", "label": "student.account.accounts" },
    component: () => import('@/views/Pages/Student/Accounts/Index.vue'),
},
{
    path: "create",
    name: "StudentAccountsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.account.account" },
    component: () => import('@/views/Pages/Student/Accounts/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentAccountsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.account.account" },
    component: () => import('@/views/Pages/Student/Accounts/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentAccountsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.account.account" },
    component: () => import('@/views/Pages/Student/Accounts/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentAccountsShow",
    meta: { "trans": "global.detail", "label": "student.account.account" },
    component: () => import('@/views/Pages/Student/Accounts/Show.vue'),
}
],
},
{
    path: "documents",
    name: "StudentDocuments",
    redirect: { name: "StudentDocumentsList" },
    meta: { "isNotNav": true, "label": "student.document.documents", "icon": "fas fa-right-long", "permissions": ["student:read"], "keySearch": true, "keySearchLabel": "student.document.student_documents" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentDocumentsList",
    meta: { "trans": "global.list", "label": "student.document.documents" },
    component: () => import('@/views/Pages/Student/Documents/Index.vue'),
},
{
    path: "create",
    name: "StudentDocumentsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.document.document" },
    component: () => import('@/views/Pages/Student/Documents/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentDocumentsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.document.document" },
    component: () => import('@/views/Pages/Student/Documents/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentDocumentsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.document.document" },
    component: () => import('@/views/Pages/Student/Documents/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentDocumentsShow",
    meta: { "trans": "global.detail", "label": "student.document.document" },
    component: () => import('@/views/Pages/Student/Documents/Show.vue'),
}
],
},
{
    path: "qualifications",
    name: "StudentQualifications",
    redirect: { name: "StudentQualificationsList" },
    meta: { "isNotNav": true, "label": "student.qualification.qualifications", "icon": "fas fa-right-long", "permissions": ["student:read"], "keySearch": true, "keySearchLabel": "student.qualification.student_qualifications" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentQualificationsList",
    meta: { "trans": "global.list", "label": "student.qualification.qualifications" },
    component: () => import('@/views/Pages/Student/Qualifications/Index.vue'),
},
{
    path: "create",
    name: "StudentQualificationsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.qualification.qualification" },
    component: () => import('@/views/Pages/Student/Qualifications/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "StudentQualificationsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.qualification.qualification" },
    component: () => import('@/views/Pages/Student/Qualifications/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "StudentQualificationsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.qualification.qualification" },
    component: () => import('@/views/Pages/Student/Qualifications/Action.vue'),
},
{
    path: ":uuid",
    name: "StudentQualificationsShow",
    meta: { "trans": "global.detail", "label": "student.qualification.qualification" },
    component: () => import('@/views/Pages/Student/Qualifications/Show.vue'),
}
],
},
{
    path: "migrate-attendance",
    name: "StudentMigrateAttendance",
    meta: { "isNotNav": true, "type": "general", "action": "general", "trans": "student.attendance.migrate_attendance", "label": "student.attendance.migrate_attendance", "roles": ["admin"] },
    component: () => import('@/views/Pages/Student/MigrateAttendance.vue'),
}
],
},
{
    path: "students",
    name: "Student",
    redirect: { name: "StudentList" },
    meta: { "isNotNav": true, "label": "student.student", "icon": "fas fa-user-graduate", "hideChildren": true, "permissions": ["student:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentList",
    meta: { "trans": "global.list", "label": "student.students", "keySearch": true },
    component: () => import('@/views/Pages/Student/Index.vue'),
},
{
    path: ":uuid",
    name: "StudentShow",
    redirect: { name: "StudentShowBasic" },
    meta: { "trans": "global.detail", "label": "student.student", "permissions": ["student:read"] },
    component: () => import('@/views/Pages/Student/Show.vue'),
    children: [
{
    path: "",
    name: "StudentShowIndex",
    redirect: { name: "StudentShowBasic" },
},
{
    path: "basic",
    name: "StudentShowBasic",
    meta: { "type": "read", "action": "read", "trans": "general.basic", "label": "general.basic" },
    component: () => import('@/views/Pages/Student/Basic.vue'),
},
{
    path: "basic/edit",
    name: "StudentEditBasic",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.student" },
    component: () => import('@/views/Pages/Student/EditBasic.vue'),
},
{
    path: "photo/edit",
    name: "StudentEditPhoto",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.props.photo" },
    component: () => import('@/views/Pages/Student/EditPhoto.vue'),
},
{
    path: "contact",
    name: "StudentShowContact",
    meta: { "type": "general", "action": "general", "trans": "contact.contact", "label": "contact.contact" },
    component: () => import('@/views/Pages/Student/Contact.vue'),
},
{
    path: "contact/edit",
    name: "StudentEditContact",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.contact" },
    component: () => import('@/views/Pages/Student/EditContact.vue'),
},
{
    path: "login",
    name: "StudentShowLogin",
    meta: { "type": "general", "action": "general", "trans": "student.login.login", "label": "student.login.login" },
    component: () => import('@/views/Pages/Student/Login.vue'),
},
{
    path: "login/edit",
    name: "StudentEditLogin",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.login.login" },
    component: () => import('@/views/Pages/Student/EditLogin.vue'),
},
{
    path: "guardians",
    name: "StudentGuardian",
    redirect: { name: "StudentGuardianList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentGuardianList",
    meta: { "trans": "global.list", "label": "guardian.guardians" },
    component: () => import('@/views/Pages/Student/Guardian/Index.vue'),
},
{
    path: "create",
    name: "StudentGuardianCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "guardian.guardian", "permissions": ["student:edit"] },
    component: () => import('@/views/Pages/Student/Guardian/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentGuardianEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "guardian.guardian", "permissions": ["student:edit"] },
    component: () => import('@/views/Pages/Student/Guardian/Action.vue'),
}
],
},
{
    path: "siblings",
    name: "StudentSibling",
    meta: { "type": "general", "action": "general", "trans": "student.sibling.sibling", "label": "student.sibling.sibling" },
    component: () => import('@/views/Pages/Student/Sibling/Index.vue'),
},
{
    path: "records",
    name: "StudentRecord",
    redirect: { name: "StudentRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentRecordList",
    meta: { "trans": "global.list", "label": "student.record.record" },
    component: () => import('@/views/Pages/Student/Record/Index.vue'),
}
],
},
{
    path: "fee",
    name: "StudentShowFee",
    meta: { "type": "general", "action": "general", "trans": "finance.fee.fee", "label": "finance.fee.fee" },
    component: () => import('@/views/Pages/Student/Fee/Index.vue'),
},
{
    path: "fee/set",
    name: "StudentSetFee",
    meta: { "type": "general", "action": "general", "trans": "global.set", "label": "finance.fee.fee", "permissions": ["fee:set"] },
    component: () => import('@/views/Pages/Student/Fee/Set.vue'),
},
{
    path: "fee/edit",
    name: "StudentEditFee",
    meta: { "type": "general", "action": "general", "trans": "global.edit", "label": "finance.fee.fee", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/Fee/Edit.vue'),
},
{
    path: "custom-fees",
    name: "StudentCustomFee",
    redirect: { name: "StudentCustomFeeList" },
    meta: { "isNotNav": true, "permissions": ["fee:set"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentCustomFeeList",
    meta: { "trans": "global.list", "label": "student.fee.custom_fees" },
    component: () => import('@/views/Pages/Student/CustomFee/Index.vue'),
},
{
    path: "create",
    name: "StudentCustomFeeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.fee.custom_fee", "permissions": ["fee:set"] },
    component: () => import('@/views/Pages/Student/CustomFee/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentCustomFeeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.fee.custom_fee", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/CustomFee/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentCustomFeeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.fee.custom_fee", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/CustomFee/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentCustomFeeShow",
    meta: { "trans": "global.detail", "label": "student.fee.custom_fee", "permissions": [] },
    component: () => import('@/views/Pages/Student/CustomFee/Show.vue'),
}
],
},
{
    path: "fee-refunds",
    name: "StudentFeeRefund",
    redirect: { name: "StudentFeeRefundList" },
    meta: { "isNotNav": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentFeeRefundList",
    meta: { "trans": "global.list", "label": "student.fee_refund.fee_refunds" },
    component: () => import('@/views/Pages/Student/FeeRefund/Index.vue'),
},
{
    path: "create",
    name: "StudentFeeRefundCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.fee_refund.fee_refund", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/FeeRefund/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentFeeRefundEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.fee_refund.fee_refund", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/FeeRefund/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentFeeRefundDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.fee_refund.fee_refund", "permissions": ["fee:edit"] },
    component: () => import('@/views/Pages/Student/FeeRefund/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentFeeRefundShow",
    meta: { "trans": "global.detail", "label": "student.fee_refund.fee_refund" },
    component: () => import('@/views/Pages/Student/FeeRefund/Show.vue'),
}
],
},
{
    path: "attendance",
    name: "StudentShowAttendance",
    meta: { "type": "general", "action": "general", "trans": "student.attendance.attendance", "label": "student.attendance.attendance" },
    component: () => import('@/views/Pages/Student/Attendance.vue'),
},
{
    path: "exam-report",
    name: "StudentShowExamReport",
    meta: { "type": "general", "action": "general", "trans": "exam.exam_report", "label": "exam.exam_report" },
    component: () => import('@/views/Pages/Student/ExamReport.vue'),
},
{
    path: "subject",
    name: "StudentShowSubject",
    meta: { "type": "general", "action": "general", "trans": "academic.subject.subject", "label": "academic.subject.subject" },
    component: () => import('@/views/Pages/Student/Subject.vue'),
},
{
    path: "dialogues",
    name: "StudentDialogue",
    redirect: { name: "StudentDialogueList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentDialogueList",
    meta: { "trans": "global.list", "label": "student.dialogue.dialogues", "permissions": ["student:dialogue"] },
    component: () => import('@/views/Pages/Student/Dialogue/Index.vue'),
},
{
    path: "create",
    name: "StudentDialogueCreate",
    meta: { "type": "create", "action": "create", "trans": "global.new", "label": "student.dialogue.dialogue" },
    component: () => import('@/views/Pages/Student/Dialogue/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentDialogueEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.dialogue.dialogue" },
    component: () => import('@/views/Pages/Student/Dialogue/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentDialogueDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.dialogue.dialogue" },
    component: () => import('@/views/Pages/Student/Dialogue/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentDialogueShow",
    meta: { "trans": "global.detail", "label": "student.dialogue.dialogue" },
    component: () => import('@/views/Pages/Student/Dialogue/Show.vue'),
}
],
},
{
    path: "accounts",
    name: "StudentAccount",
    redirect: { name: "StudentAccountList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentAccountList",
    meta: { "trans": "global.list", "label": "finance.account.accounts" },
    component: () => import('@/views/Pages/Student/Account/Index.vue'),
},
{
    path: "create",
    name: "StudentAccountCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.account.account", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Account/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentAccountEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.account.account", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Account/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentAccountDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.account.account", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Account/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentAccountShow",
    meta: { "trans": "global.detail", "label": "finance.account.account", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Account/Show.vue'),
}
],
},
{
    path: "documents",
    name: "StudentDocument",
    redirect: { name: "StudentDocumentList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentDocumentList",
    meta: { "trans": "global.list", "label": "student.document.documents" },
    component: () => import('@/views/Pages/Student/Document/Index.vue'),
},
{
    path: "create",
    name: "StudentDocumentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.document.document", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Document/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentDocumentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.document.document", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Document/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentDocumentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.document.document", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Document/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentDocumentShow",
    meta: { "trans": "global.detail", "label": "student.document.document" },
    component: () => import('@/views/Pages/Student/Document/Show.vue'),
}
],
},
{
    path: "qualifications",
    name: "StudentQualification",
    redirect: { name: "StudentQualificationList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentQualificationList",
    meta: { "trans": "global.list", "label": "student.qualification.qualifications" },
    component: () => import('@/views/Pages/Student/Qualification/Index.vue'),
},
{
    path: "create",
    name: "StudentQualificationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "student.qualification.qualification", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Qualification/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "StudentQualificationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "student.qualification.qualification", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Qualification/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "StudentQualificationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "student.qualification.qualification", "permissions": ["student:edit", "student-record:manage"] },
    component: () => import('@/views/Pages/Student/Qualification/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentQualificationShow",
    meta: { "trans": "global.detail", "label": "student.qualification.qualification" },
    component: () => import('@/views/Pages/Student/Qualification/Show.vue'),
}
],
},
{
    path: "edit-requests",
    name: "StudentProfileEditRequest",
    redirect: { name: "StudentProfileEditRequestList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "StudentProfileEditRequestList",
    meta: { "trans": "global.list", "label": "finance.edit_request.edit_requests" },
    component: () => import('@/views/Pages/Student/ProfileEditRequest/Index.vue'),
},
{
    path: "new",
    name: "StudentProfileEditRequestNew",
    meta: { "type": "new", "action": "create", "trans": "global.new", "label": "student.edit_request.edit_request" },
    component: () => import('@/views/Pages/Student/ProfileEditRequest/Action.vue'),
},
{
    path: ":muuid",
    name: "StudentProfileEditRequestShow",
    meta: { "trans": "global.detail", "label": "student.edit_request.edit_request" },
    component: () => import('@/views/Pages/Student/ProfileEditRequest/Show.vue'),
}
],
}
],
}
],
},
{
    path: "finance",
    name: "Finance",
    redirect: { name: "FinanceDayClosure" },
    meta: { "moduleName": "finance", "label": "finance.finance", "icon": "fas fa-money-bill-alt", "permissions": ["finance:config", "fee-group:read", "fee-head:read", "fee-concession:read", "fee-structure:read", "ledger-type:read", "ledger:read", "transaction:read", "finance:report"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "FinanceConfig",
    redirect: { name: "FinanceConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["finance:config"] },
    component: () => import('@/views/Pages/Finance/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "FinanceConfigGeneral",
    meta: { "label": "finance.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Finance/Config/General.vue'),
},
{
    path: "transaction-category",
    name: "FinanceConfigTransactionCategory",
    redirect: { name: "FinanceConfigTransactionCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceConfigTransactionCategoryList",
    meta: { "trans": "global.list", "label": "finance.transaction.category.category", "queryType": "transaction_category", "keySearch": true, "prefix": "FinanceConfigTransactionCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "FinanceConfigTransactionCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.transaction.category.category", "queryType": "transaction_category", "prefix": "FinanceConfigTransactionCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceConfigTransactionCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.transaction.category.category", "queryType": "transaction_category", "prefix": "FinanceConfigTransactionCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "fee-concession-type",
    name: "FinanceConfigFeeConcessionType",
    redirect: { name: "FinanceConfigFeeConcessionTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceConfigFeeConcessionTypeList",
    meta: { "trans": "global.list", "label": "finance.fee_concession.type.type", "queryType": "fee_concession_type", "keySearch": true, "prefix": "FinanceConfigFeeConcessionType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "FinanceConfigFeeConcessionTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_concession.type.type", "queryType": "fee_concession_type", "prefix": "FinanceConfigFeeConcessionType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceConfigFeeConcessionTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_concession.type.type", "queryType": "fee_concession_type", "prefix": "FinanceConfigFeeConcessionType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "payment-gateway",
    name: "FinanceConfigPaymentGateway",
    meta: { "label": "finance.config.payment_gateway", "icon": "far fa-building", "key": "payment_gateway" },
    component: () => import('@/views/Pages/Finance/Config/PaymentGateway.vue'),
},
{
    path: "bank-name",
    name: "FinanceConfigBankName",
    redirect: { name: "FinanceConfigBankNameList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceConfigBankNameList",
    meta: { "trans": "global.list", "label": "finance.bank_name.bank_name", "queryType": "bank_name", "keySearch": true, "prefix": "FinanceConfigBankName" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "FinanceConfigBankNameCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.bank_name.bank_name", "queryType": "bank_name", "prefix": "FinanceConfigBankName" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceConfigBankNameEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.bank_name.bank_name", "queryType": "bank_name", "prefix": "FinanceConfigBankName" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "card-provider",
    name: "FinanceConfigCardProvider",
    redirect: { name: "FinanceConfigCardProviderList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceConfigCardProviderList",
    meta: { "trans": "global.list", "label": "finance.card_provider.card_provider", "queryType": "card_provider", "keySearch": true, "prefix": "FinanceConfigCardProvider" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "FinanceConfigCardProviderCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.card_provider.card_provider", "queryType": "card_provider", "prefix": "FinanceConfigCardProvider" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceConfigCardProviderEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.card_provider.card_provider", "queryType": "card_provider", "prefix": "FinanceConfigCardProvider" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "payment-methods",
    name: "FinancePaymentMethod",
    redirect: { name: "FinancePaymentMethodList" },
    meta: { "label": "finance.payment_method.payment_method", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["finance:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinancePaymentMethodList",
    meta: { "trans": "global.list", "label": "finance.payment_method.payment_methods" },
    component: () => import('@/views/Pages/Finance/PaymentMethod/Index.vue'),
},
{
    path: "create",
    name: "FinancePaymentMethodCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.payment_method.payment_method" },
    component: () => import('@/views/Pages/Finance/PaymentMethod/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinancePaymentMethodEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.payment_method.payment_method" },
    component: () => import('@/views/Pages/Finance/PaymentMethod/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinancePaymentMethodDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.payment_method.payment_method" },
    component: () => import('@/views/Pages/Finance/PaymentMethod/Action.vue'),
},
{
    path: ":uuid",
    name: "FinancePaymentMethodShow",
    meta: { "trans": "global.detail", "label": "finance.payment_method.payment_method" },
    component: () => import('@/views/Pages/Finance/PaymentMethod/Show.vue'),
}
],
},
{
    path: "fee-groups",
    name: "FinanceFeeGroup",
    redirect: { name: "FinanceFeeGroupList" },
    meta: { "label": "finance.fee_group.fee_group", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["fee-group:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceFeeGroupList",
    meta: { "trans": "global.list", "label": "finance.fee_group.fee_groups" },
    component: () => import('@/views/Pages/Finance/FeeGroup/Index.vue'),
},
{
    path: "create",
    name: "FinanceFeeGroupCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_group.fee_group", "permissions": ["fee-group:create"] },
    component: () => import('@/views/Pages/Finance/FeeGroup/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceFeeGroupEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_group.fee_group", "permissions": ["fee-group:edit"] },
    component: () => import('@/views/Pages/Finance/FeeGroup/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceFeeGroupDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.fee_group.fee_group", "permissions": ["fee-group:create"] },
    component: () => import('@/views/Pages/Finance/FeeGroup/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceFeeGroupShow",
    meta: { "trans": "global.detail", "label": "finance.fee_group.fee_group" },
    component: () => import('@/views/Pages/Finance/FeeGroup/Show.vue'),
}
],
},
{
    path: "fee-heads",
    name: "FinanceFeeHead",
    redirect: { name: "FinanceFeeHeadList" },
    meta: { "label": "finance.fee_head.fee_head", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["fee-head:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceFeeHeadList",
    meta: { "trans": "global.list", "label": "finance.fee_head.fee_heads" },
    component: () => import('@/views/Pages/Finance/FeeHead/Index.vue'),
},
{
    path: "create",
    name: "FinanceFeeHeadCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_head.fee_head", "permissions": ["fee-head:create"] },
    component: () => import('@/views/Pages/Finance/FeeHead/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceFeeHeadEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_head.fee_head", "permissions": ["fee-head:edit"] },
    component: () => import('@/views/Pages/Finance/FeeHead/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceFeeHeadDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.fee_head.fee_head", "permissions": ["fee-head:create"] },
    component: () => import('@/views/Pages/Finance/FeeHead/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceFeeHeadShow",
    meta: { "trans": "global.detail", "label": "finance.fee_head.fee_head" },
    component: () => import('@/views/Pages/Finance/FeeHead/Show.vue'),
}
],
},
{
    path: "fee-concessions",
    name: "FinanceFeeConcession",
    redirect: { name: "FinanceFeeConcessionList" },
    meta: { "label": "finance.fee_concession.fee_concession", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["fee-concession:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceFeeConcessionList",
    meta: { "trans": "global.list", "label": "finance.fee_concession.fee_concessions" },
    component: () => import('@/views/Pages/Finance/FeeConcession/Index.vue'),
},
{
    path: "create",
    name: "FinanceFeeConcessionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_concession.fee_concession", "permissions": ["fee-concession:create"] },
    component: () => import('@/views/Pages/Finance/FeeConcession/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceFeeConcessionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_concession.fee_concession", "permissions": ["fee-concession:edit"] },
    component: () => import('@/views/Pages/Finance/FeeConcession/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceFeeConcessionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.fee_concession.fee_concession", "permissions": ["fee-concession:create"] },
    component: () => import('@/views/Pages/Finance/FeeConcession/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceFeeConcessionShow",
    meta: { "trans": "global.detail", "label": "finance.fee_concession.fee_concession" },
    component: () => import('@/views/Pages/Finance/FeeConcession/Show.vue'),
}
],
},
{
    path: "fee-structures",
    name: "FinanceFeeStructure",
    redirect: { name: "FinanceFeeStructureList" },
    meta: { "label": "finance.fee_structure.fee_structure", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["fee-structure:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceFeeStructureList",
    meta: { "trans": "global.list", "label": "finance.fee_structure.fee_structures" },
    component: () => import('@/views/Pages/Finance/FeeStructure/Index.vue'),
},
{
    path: "create",
    name: "FinanceFeeStructureCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_structure.fee_structure", "permissions": ["fee-structure:create"] },
    component: () => import('@/views/Pages/Finance/FeeStructure/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceFeeStructureEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_structure.fee_structure", "permissions": ["fee-structure:edit"] },
    component: () => import('@/views/Pages/Finance/FeeStructure/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceFeeStructureDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.fee_structure.fee_structure", "permissions": ["fee-structure:create"] },
    component: () => import('@/views/Pages/Finance/FeeStructure/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceFeeStructureShow",
    meta: { "trans": "global.detail", "label": "finance.fee_structure.fee_structure" },
    component: () => import('@/views/Pages/Finance/FeeStructure/Show.vue'),
}
],
},
{
    path: "fee-structure-components",
    name: "FinanceFeeStructureComponent",
    redirect: { name: "FinanceFeeStructureComponentList" },
    meta: { "label": "finance.fee_component.fee_component", "icon": "fas fa-right-long", "isNotNav": true, "hideChildren": true, "permissions": ["fee-structure:create", "fee-structure:update"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceFeeStructureComponentList",
    meta: { "trans": "global.list", "label": "finance.fee_component.fee_components" },
    component: () => import('@/views/Pages/Finance/FeeStructureComponent/Index.vue'),
},
{
    path: "create",
    name: "FinanceFeeStructureComponentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.fee_component.fee_component" },
    component: () => import('@/views/Pages/Finance/FeeStructureComponent/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceFeeStructureComponentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.fee_component.fee_component" },
    component: () => import('@/views/Pages/Finance/FeeStructureComponent/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceFeeStructureComponentShow",
    meta: { "trans": "global.detail", "label": "finance.fee_component.fee_component" },
    component: () => import('@/views/Pages/Finance/FeeStructureComponent/Show.vue'),
}
],
},
{
    path: "ledger-types",
    name: "FinanceLedgerType",
    redirect: { name: "FinanceLedgerTypeList" },
    meta: { "label": "finance.ledger_type.ledger_type", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["ledger-type:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceLedgerTypeList",
    meta: { "trans": "global.list", "label": "finance.ledger_type.ledger_types" },
    component: () => import('@/views/Pages/Finance/LedgerType/Index.vue'),
},
{
    path: "create",
    name: "FinanceLedgerTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.ledger_type.ledger_type", "permissions": ["ledger-type:create"] },
    component: () => import('@/views/Pages/Finance/LedgerType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceLedgerTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.ledger_type.ledger_type", "permissions": ["ledger-type:edit"] },
    component: () => import('@/views/Pages/Finance/LedgerType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceLedgerTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.ledger_type.ledger_type", "permissions": ["ledger-type:create"] },
    component: () => import('@/views/Pages/Finance/LedgerType/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceLedgerTypeShow",
    meta: { "trans": "global.detail", "label": "finance.ledger_type.ledger_type" },
    component: () => import('@/views/Pages/Finance/LedgerType/Show.vue'),
}
],
},
{
    path: "ledgers",
    name: "FinanceLedger",
    redirect: { name: "FinanceLedgerList" },
    meta: { "label": "finance.ledger.ledger", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["ledger:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceLedgerList",
    meta: { "trans": "global.list", "label": "finance.ledger.ledgers" },
    component: () => import('@/views/Pages/Finance/Ledger/Index.vue'),
},
{
    path: "create",
    name: "FinanceLedgerCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.ledger.ledger", "permissions": ["ledger:create"] },
    component: () => import('@/views/Pages/Finance/Ledger/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceLedgerEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.ledger.ledger", "permissions": ["ledger:edit"] },
    component: () => import('@/views/Pages/Finance/Ledger/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceLedgerDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.ledger.ledger", "permissions": ["ledger:create"] },
    component: () => import('@/views/Pages/Finance/Ledger/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceLedgerShow",
    meta: { "trans": "global.detail", "label": "finance.ledger.ledger" },
    component: () => import('@/views/Pages/Finance/Ledger/Show.vue'),
}
],
},
{
    path: "transactions",
    name: "FinanceTransaction",
    redirect: { name: "FinanceTransactionList" },
    meta: { "label": "finance.transaction.transaction", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transaction:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceTransactionList",
    meta: { "trans": "global.list", "label": "finance.transaction.transactions" },
    component: () => import('@/views/Pages/Finance/Transaction/Index.vue'),
},
{
    path: "create",
    name: "FinanceTransactionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.transaction.transaction", "permissions": ["transaction:create"] },
    component: () => import('@/views/Pages/Finance/Transaction/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceTransactionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.transaction.transaction", "permissions": ["transaction:edit"] },
    component: () => import('@/views/Pages/Finance/Transaction/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceTransactionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.transaction.transaction", "permissions": ["transaction:create"] },
    component: () => import('@/views/Pages/Finance/Transaction/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceTransactionShow",
    meta: { "trans": "global.detail", "label": "finance.transaction.transaction" },
    component: () => import('@/views/Pages/Finance/Transaction/Show.vue'),
}
],
},
{
    path: "receipts",
    name: "FinanceReceipt",
    redirect: { name: "FinanceReceiptList" },
    meta: { "label": "finance.receipt.receipt", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["receipt:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceReceiptList",
    meta: { "trans": "global.list", "label": "finance.receipt.receipts" },
    component: () => import('@/views/Pages/Finance/Receipt/Index.vue'),
},
{
    path: "create",
    name: "FinanceReceiptCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.receipt.receipt", "permissions": ["receipt:create"] },
    component: () => import('@/views/Pages/Finance/Receipt/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceReceiptEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.receipt.receipt", "permissions": ["receipt:edit"] },
    component: () => import('@/views/Pages/Finance/Receipt/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FinanceReceiptDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.receipt.receipt", "permissions": ["receipt:create"] },
    component: () => import('@/views/Pages/Finance/Receipt/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceReceiptShow",
    meta: { "trans": "global.detail", "label": "finance.receipt.receipt" },
    component: () => import('@/views/Pages/Finance/Receipt/Show.vue'),
}
],
},
{
    path: "day-closures",
    name: "FinanceDayClosure",
    redirect: { name: "FinanceDayClosureList" },
    meta: { "isNotNav": true, "label": "finance.day_closure.day_closure", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transaction:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceDayClosureList",
    meta: { "trans": "global.list", "label": "finance.day_closure.day_closures" },
    component: () => import('@/views/Pages/Finance/DayClosure/Index.vue'),
},
{
    path: "create",
    name: "FinanceDayClosureCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.day_closure.day_closure" },
    component: () => import('@/views/Pages/Finance/DayClosure/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FinanceDayClosureEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.day_closure.day_closure" },
    component: () => import('@/views/Pages/Finance/DayClosure/Action.vue'),
},
{
    path: ":uuid",
    name: "FinanceDayClosureShow",
    meta: { "trans": "global.detail", "label": "finance.day_closure.day_closure" },
    component: () => import('@/views/Pages/Finance/DayClosure/Show.vue'),
}
],
},
{
    path: "reports",
    name: "FinanceReport",
    redirect: { name: "FinanceReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["finance:report", "transaction:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "FinanceReportList",
    meta: { "trans": "global.list", "label": "finance.report.report", "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/Index.vue'),
},
{
    path: "day-book",
    name: "FinanceReportDayBook",
    meta: { "trans": "global.list", "label": "finance.report.day_book.day_book", "keySearch": true, "permissions": ["transaction:read"] },
    component: () => import('@/views/Pages/Finance/Report/DayBook/Index.vue'),
},
{
    path: "fee-summary",
    name: "FinanceReportFeeSummary",
    meta: { "trans": "global.list", "label": "finance.report.fee_summary.fee_summary", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/FeeSummary/Index.vue'),
},
{
    path: "fee-concession",
    name: "FinanceReportFeeConcession",
    meta: { "trans": "global.list", "label": "finance.report.fee_concession.fee_concession", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/FeeConcession/Index.vue'),
},
{
    path: "fee-concession-summary",
    name: "FinanceReportFeeConcessionSummary",
    meta: { "trans": "global.list", "label": "finance.report.fee_concession_summary.fee_concession_summary", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/FeeConcessionSummary/Index.vue'),
},
{
    path: "fee-due",
    name: "FinanceReportFeeDue",
    meta: { "trans": "global.list", "label": "finance.report.fee_due.fee_due", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/FeeDue/Index.vue'),
},
{
    path: "installment-wise-fee-due",
    name: "FinanceReportInstallmentWiseFeeDue",
    meta: { "trans": "global.list", "label": "finance.report.installment_wise_fee_due.installment_wise_fee_due", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/InstallmentWiseFeeDue/Index.vue'),
},
{
    path: "fee-head",
    name: "FinanceReportFeeHead",
    meta: { "trans": "global.list", "label": "finance.report.fee_head.fee_head", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/FeeHead/Index.vue'),
},
{
    path: "fee-payment",
    name: "FinanceReportFeePayment",
    meta: { "trans": "global.list", "label": "finance.report.fee_payment.fee_payment", "keySearch": true, "permissions": ["transaction:read"] },
    component: () => import('@/views/Pages/Finance/Report/FeePayment/Index.vue'),
},
{
    path: "online-fee-payment",
    name: "FinanceReportOnlineFeePayment",
    meta: { "trans": "global.list", "label": "finance.report.online_fee_payment.online_fee_payment", "keySearch": true, "permissions": ["transaction:read"] },
    component: () => import('@/views/Pages/Finance/Report/OnlineFeePayment/Index.vue'),
},
{
    path: "head-wise-fee-payment",
    name: "FinanceReportHeadWiseFeePayment",
    meta: { "trans": "global.list", "label": "finance.report.head_wise_fee_payment.head_wise_fee_payment", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/HeadWiseFeePayment/Index.vue'),
},
{
    path: "payment-method-wise-fee-payment",
    name: "FinanceReportPaymentMethodWiseFeePayment",
    meta: { "trans": "global.list", "label": "finance.report.payment_method_wise_fee_payment.payment_method_wise_fee_payment", "keySearch": true, "permissions": ["finance:report"] },
    component: () => import('@/views/Pages/Finance/Report/PaymentMethodWiseFeePayment/Index.vue'),
},
{
    path: "bank-transfer",
    name: "FinanceReportBankTransfer",
    meta: { "trans": "global.list", "label": "finance.report.bank_transfer.bank_transfer", "keySearch": true, "permissions": ["transaction:read"] },
    component: () => import('@/views/Pages/Finance/Report/BankTransfer/Index.vue'),
},
{
    path: "fee-refund",
    name: "FinanceReportFeeRefund",
    meta: { "trans": "global.list", "label": "finance.report.fee_refund.fee_refund", "keySearch": true, "permissions": ["transaction:read"] },
    component: () => import('@/views/Pages/Finance/Report/FeeRefund/Index.vue'),
}
],
}
],
},
{
    path: "exam",
    name: "ExamIndex",
    redirect: { name: "ExamList" },
    meta: { "moduleName": "exam", "label": "exam.exam", "icon": "fas fa-newspaper", "permissions": ["exam:manage", "exam-term:manage", "exam-grade:manage", "exam-assessment:manage", "exam-observation:manage", "exam-competency:manage", "exam-schedule:read", "exam-form:manage", "online-exam:read", "exam:marks-record", "exam:subject-incharge-wise-marks-record", "exam:report", "exam-admit-card:access", "exam-marksheet:access"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ExamConfig",
    redirect: { name: "ExamConfigGeneral" },
    meta: { "isNotNav": true, "label": "exam.exam", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["exam:config"] },
    component: () => import('@/views/Pages/Exam/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ExamConfigGeneral",
    meta: { "label": "exam.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Exam/Config/General.vue'),
}
],
},
{
    path: "exams",
    name: "ExamLists",
    redirect: { name: "ExamList" },
    meta: { "label": "exam.exams", "icon": "fas fa-right-long", "permissions": ["exam:manage"] },
},
{
    path: "terms",
    name: "ExamTerm",
    redirect: { name: "ExamTermList" },
    meta: { "label": "exam.term.term", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-term:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamTermList",
    meta: { "trans": "global.list", "label": "exam.term.terms" },
    component: () => import('@/views/Pages/Exam/Term/Index.vue'),
},
{
    path: "create",
    name: "ExamTermCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.term.term" },
    component: () => import('@/views/Pages/Exam/Term/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamTermEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.term.term" },
    component: () => import('@/views/Pages/Exam/Term/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamTermDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.term.term" },
    component: () => import('@/views/Pages/Exam/Term/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamTermShow",
    meta: { "trans": "global.detail", "label": "exam.term.term" },
    component: () => import('@/views/Pages/Exam/Term/Show.vue'),
}
],
},
{
    path: "grades",
    name: "ExamGrade",
    redirect: { name: "ExamGradeList" },
    meta: { "label": "exam.grade.grade", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-grade:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamGradeList",
    meta: { "trans": "global.list", "label": "exam.grade.grades" },
    component: () => import('@/views/Pages/Exam/Grade/Index.vue'),
},
{
    path: "create",
    name: "ExamGradeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.grade.grade" },
    component: () => import('@/views/Pages/Exam/Grade/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamGradeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.grade.grade" },
    component: () => import('@/views/Pages/Exam/Grade/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamGradeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.grade.grade" },
    component: () => import('@/views/Pages/Exam/Grade/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamGradeShow",
    meta: { "trans": "global.detail", "label": "exam.grade.grade" },
    component: () => import('@/views/Pages/Exam/Grade/Show.vue'),
}
],
},
{
    path: "assessments",
    name: "ExamAssessment",
    redirect: { name: "ExamAssessmentList" },
    meta: { "label": "exam.assessment.assessment", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-assessment:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamAssessmentList",
    meta: { "trans": "global.list", "label": "exam.assessment.assessments" },
    component: () => import('@/views/Pages/Exam/Assessment/Index.vue'),
},
{
    path: "create",
    name: "ExamAssessmentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.assessment.assessment" },
    component: () => import('@/views/Pages/Exam/Assessment/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamAssessmentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.assessment.assessment" },
    component: () => import('@/views/Pages/Exam/Assessment/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamAssessmentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.assessment.assessment" },
    component: () => import('@/views/Pages/Exam/Assessment/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamAssessmentShow",
    meta: { "trans": "global.detail", "label": "exam.assessment.assessment" },
    component: () => import('@/views/Pages/Exam/Assessment/Show.vue'),
}
],
},
{
    path: "observations",
    name: "ExamObservation",
    redirect: { name: "ExamObservationList" },
    meta: { "label": "exam.observation.observation", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-observation:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamObservationList",
    meta: { "trans": "global.list", "label": "exam.observation.observations" },
    component: () => import('@/views/Pages/Exam/Observation/Index.vue'),
},
{
    path: "create",
    name: "ExamObservationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.observation.observation" },
    component: () => import('@/views/Pages/Exam/Observation/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamObservationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.observation.observation" },
    component: () => import('@/views/Pages/Exam/Observation/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamObservationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.observation.observation" },
    component: () => import('@/views/Pages/Exam/Observation/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamObservationShow",
    meta: { "trans": "global.detail", "label": "exam.observation.observation" },
    component: () => import('@/views/Pages/Exam/Observation/Show.vue'),
}
],
},
{
    path: "competencies",
    name: "ExamCompetency",
    redirect: { name: "ExamCompetencyList" },
    meta: { "label": "exam.competency.competency", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-competency:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamCompetencyList",
    meta: { "trans": "global.list", "label": "exam.competency.competencies" },
    component: () => import('@/views/Pages/Exam/Competency/Index.vue'),
},
{
    path: "create",
    name: "ExamCompetencyCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.competency.competency" },
    component: () => import('@/views/Pages/Exam/Competency/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamCompetencyEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.competency.competency" },
    component: () => import('@/views/Pages/Exam/Competency/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamCompetencyDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.competency.competency" },
    component: () => import('@/views/Pages/Exam/Competency/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamCompetencyShow",
    meta: { "trans": "global.detail", "label": "exam.competency.competency" },
    component: () => import('@/views/Pages/Exam/Competency/Show.vue'),
}
],
},
{
    path: "schedules",
    name: "ExamSchedule",
    redirect: { name: "ExamScheduleList" },
    meta: { "label": "exam.schedule.schedule", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-schedule:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamScheduleList",
    meta: { "trans": "global.list", "label": "exam.schedule.schedules" },
    component: () => import('@/views/Pages/Exam/Schedule/Index.vue'),
},
{
    path: "create",
    name: "ExamScheduleCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.schedule.schedule", "permissions": ["exam-schedule:create"] },
    component: () => import('@/views/Pages/Exam/Schedule/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamScheduleEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.schedule.schedule", "permissions": ["exam-schedule:edit"] },
    component: () => import('@/views/Pages/Exam/Schedule/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamScheduleDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.schedule.schedule", "permissions": ["exam-schedule:create"] },
    component: () => import('@/views/Pages/Exam/Schedule/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamScheduleShow",
    meta: { "trans": "global.detail", "label": "exam.schedule.schedule" },
    component: () => import('@/views/Pages/Exam/Schedule/Show.vue'),
},
{
    path: ":uuid/form",
    name: "ExamScheduleFormSubmission",
    meta: { "trans": "global.detail", "label": "exam.schedule.form", "roles": ["student"] },
    component: () => import('@/views/Pages/Exam/Schedule/FormSubmission.vue'),
}
],
},
{
    path: "forms",
    name: "ExamForm",
    redirect: { name: "ExamFormList" },
    meta: { "label": "exam.form.form", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam-form:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamFormList",
    meta: { "trans": "global.list", "label": "exam.form.forms" },
    component: () => import('@/views/Pages/Exam/Form/Index.vue'),
},
{
    path: ":uuid",
    name: "ExamFormShow",
    meta: { "trans": "global.detail", "label": "exam.form.form" },
    component: () => import('@/views/Pages/Exam/Form/Show.vue'),
}
],
},
{
    path: "online-exams",
    name: "ExamOnlineExam",
    redirect: { name: "ExamOnlineExamList" },
    meta: { "label": "exam.online_exam.online_exam", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["online-exam:read"], "keySearch": true, "keySearchLabel": "exam.online_exam.online_exam" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamOnlineExamList",
    meta: { "trans": "global.list", "label": "exam.online_exam.online_exams" },
    component: () => import('@/views/Pages/Exam/OnlineExam/Index.vue'),
},
{
    path: "create",
    name: "ExamOnlineExamCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.online_exam.online_exam", "permission": ["online-exam:create"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamOnlineExamEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.online_exam.online_exam", "permission": ["online-exam:edit"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamOnlineExamDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.online_exam.online_exam", "permission": ["online-exam:create"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Action.vue'),
},
{
    path: ":uuid/submit",
    name: "ExamOnlineExamSubmit",
    meta: { "trans": "exam.online_exam.submit", "label": "exam.online_exam.submit", "role": ["student"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Submit.vue'),
},
{
    path: ":uuid/submission",
    name: "ExamOnlineExamStudentSubmission",
    meta: { "trans": "exam.online_exam.result", "label": "exam.online_exam.result", "role": ["student"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Submission.vue'),
},
{
    path: ":uuid",
    name: "ExamOnlineExamShow",
    redirect: { name: "ExamOnlineExamShowGeneral" },
    meta: { "trans": "global.detail", "label": "exam.online_exam.online_exam", "permissions": ["online-exam:read"] },
    component: () => import('@/views/Pages/Exam/OnlineExam/Show.vue'),
    children: [
{
    path: "",
    name: "ExamOnlineExamShowIndex",
    redirect: { name: "ExamOnlineExamShowGeneral" },
},
{
    path: "general",
    name: "ExamOnlineExamShowGeneral",
    meta: { "type": "read", "action": "read", "trans": "general.general", "label": "general.general" },
    component: () => import('@/views/Pages/Exam/OnlineExam/General.vue'),
},
{
    path: "questions",
    name: "ExamOnlineExamQuestion",
    redirect: { name: "ExamOnlineExamQuestionList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamOnlineExamQuestionList",
    meta: { "trans": "exam.online_exam.question.question", "label": "exam.online_exam.question.question" },
    component: () => import('@/views/Pages/Exam/OnlineExam/Question/Index.vue'),
}
],
},
{
    path: "submissions",
    name: "ExamOnlineExamSubmission",
    redirect: { name: "ExamOnlineExamSubmissionList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamOnlineExamSubmissionList",
    meta: { "trans": "exam.online_exam.submission.submission", "label": "exam.online_exam.submission.submission" },
    component: () => import('@/views/Pages/Exam/OnlineExam/Submission/Index.vue'),
}
],
}
],
}
],
},
{
    path: "admit-card",
    name: "ExamAdmitCard",
    meta: { "label": "exam.admit_card.admit_card", "icon": "fas fa-right-long", "permissions": ["exam-admit-card:access"] },
    component: () => import('@/views/Pages/Exam/AdmitCard/Index.vue'),
},
{
    path: "mark",
    name: "ExamMark",
    meta: { "label": "exam.mark", "icon": "fas fa-right-long", "permissions": ["exam:marks-record", "exam:subject-incharge-wise-marks-record"] },
    component: () => import('@/views/Pages/Exam/Mark/Index.vue'),
},
{
    path: "observation-mark",
    name: "ExamObservationMark",
    meta: { "isNotNav": true, "label": "exam.observation_mark", "icon": "fas fa-right-long", "permissions": ["exam:marks-record", "exam:subject-incharge-wise-marks-record"] },
    component: () => import('@/views/Pages/Exam/ObservationMark/Index.vue'),
},
{
    path: "competency-evaluation",
    name: "ExamCompetencyEvaluation",
    meta: { "isNotNav": true, "label": "exam.competency.evaluation", "icon": "fas fa-right-long", "permissions": ["exam:marks-record"] },
    component: () => import('@/views/Pages/Exam/CompetencyEvaluation/Index.vue'),
},
{
    path: "comment",
    name: "ExamComment",
    meta: { "isNotNav": true, "label": "exam.comment", "icon": "fas fa-right-long", "permissions": ["exam:marks-record", "exam:subject-incharge-wise-marks-record"] },
    component: () => import('@/views/Pages/Exam/Comment/Index.vue'),
},
{
    path: "attendance",
    name: "ExamAttendance",
    meta: { "isNotNav": true, "label": "student.attendance.attendance", "icon": "fas fa-right-long", "permissions": ["exam:marks-record", "exam:subject-incharge-wise-marks-record"] },
    component: () => import('@/views/Pages/Exam/Attendance/Index.vue'),
},
{
    path: "marksheet",
    name: "ExamMarksheet",
    redirect: { name: "ExamMarksheetPrint" },
    meta: { "label": "exam.marksheet.marksheet", "icon": "fas fa-right-long", "permissions": ["exam-marksheet:access"] },
    component: () => import('@/views/Pages/Exam/Marksheet/Index.vue'),
},
{
    path: "marksheet/legacy",
    name: "ExamMarksheetLegacy",
    meta: { "isNotNav": true, "label": "exam.marksheet.marksheet", "icon": "fas fa-right-long", "permissions": ["exam-marksheet:access"] },
    component: () => import('@/views/Pages/Exam/Marksheet/Index.vue'),
},
{
    path: "marksheet/process",
    name: "ExamMarksheetProcess",
    meta: { "isNotNav": true, "label": "exam.marksheet.marksheet", "icon": "fas fa-right-long", "permissions": ["exam-marksheet:process"] },
    component: () => import('@/views/Pages/Exam/Marksheet/Process/Index.vue'),
},
{
    path: "marksheet/print",
    name: "ExamMarksheetPrint",
    meta: { "isNotNav": true, "label": "exam.marksheet.marksheet", "icon": "fas fa-right-long", "permissions": ["exam-marksheet:access"] },
    component: () => import('@/views/Pages/Exam/Marksheet/Print/Index.vue'),
},
{
    path: "reports",
    name: "ExamReport",
    redirect: { name: "ExamReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["exam:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamReportList",
    meta: { "trans": "global.list", "label": "exam.report.report" },
    component: () => import('@/views/Pages/Exam/Report/Index.vue'),
},
{
    path: "mark-summary",
    name: "ExamReportMarkSummary",
    meta: { "trans": "global.list", "label": "exam.report.mark_summary.mark_summary", "keySearch": true },
    component: () => import('@/views/Pages/Exam/Report/MarkSummary/Index.vue'),
},
{
    path: "exam-summary",
    name: "ExamReportExamSummary",
    meta: { "trans": "global.list", "label": "exam.report.exam_summary.exam_summary", "keySearch": true },
    component: () => import('@/views/Pages/Exam/Report/ExamSummary/Index.vue'),
}
],
}
],
},
{
    path: "exams",
    name: "Exam",
    redirect: { name: "ExamList" },
    meta: { "isNotNav": true, "label": "exam.exam", "icon": "fas fa-user-graduate", "hideChildren": true, "permissions": ["exam:manage"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "ExamList",
    meta: { "trans": "global.list", "label": "exam.exams" },
    component: () => import('@/views/Pages/Exam/Index.vue'),
},
{
    path: "create",
    name: "ExamCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "exam.exam" },
    component: () => import('@/views/Pages/Exam/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ExamEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "exam.exam" },
    component: () => import('@/views/Pages/Exam/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ExamDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "exam.exam" },
    component: () => import('@/views/Pages/Exam/Action.vue'),
},
{
    path: ":uuid",
    name: "ExamShow",
    meta: { "trans": "global.detail", "label": "exam.exam" },
    component: () => import('@/views/Pages/Exam/Show.vue'),
}
],
},
{
    path: "employee",
    name: "Employee",
    redirect: { name: "EmployeeList" },
    meta: { "moduleName": "employee", "label": "employee.employee", "icon": "fas fa-user-tie", "permissions": ["employee:read", "department:read", "designation:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeIndex",
    redirect: { name: "EmployeeList" },
    meta: { "label": "employee.employees", "icon": "fas fa-right-long", "permissions": ["employee:read"] },
},
{
    path: "departments",
    name: "EmployeeDepartment",
    redirect: { name: "EmployeeDepartmentList" },
    meta: { "label": "employee.department.department", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["department:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeDepartmentList",
    meta: { "trans": "global.list", "label": "employee.department.departments" },
    component: () => import('@/views/Pages/Employee/Department/Index.vue'),
},
{
    path: "create",
    name: "EmployeeDepartmentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.department.department", "permissions": ["department:create"] },
    component: () => import('@/views/Pages/Employee/Department/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeDepartmentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.department.department", "permissions": ["department:edit"] },
    component: () => import('@/views/Pages/Employee/Department/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeDepartmentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.department.department", "permissions": ["department:create"] },
    component: () => import('@/views/Pages/Employee/Department/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeDepartmentShow",
    meta: { "trans": "global.detail", "label": "employee.department.department" },
    component: () => import('@/views/Pages/Employee/Department/Show.vue'),
}
],
},
{
    path: "designations",
    name: "EmployeeDesignation",
    redirect: { name: "EmployeeDesignationList" },
    meta: { "label": "employee.designation.designation", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["designation:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeDesignationList",
    meta: { "trans": "global.list", "label": "employee.designation.designations" },
    component: () => import('@/views/Pages/Employee/Designation/Index.vue'),
},
{
    path: "create",
    name: "EmployeeDesignationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.designation.designation", "permissions": ["designation:create"] },
    component: () => import('@/views/Pages/Employee/Designation/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeDesignationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.designation.designation", "permissions": ["designation:edit"] },
    component: () => import('@/views/Pages/Employee/Designation/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeDesignationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.designation.designation", "permissions": ["designation:create"] },
    component: () => import('@/views/Pages/Employee/Designation/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeDesignationShow",
    meta: { "trans": "global.detail", "label": "employee.designation.designation" },
    component: () => import('@/views/Pages/Employee/Designation/Show.vue'),
}
],
},
{
    path: "attendance",
    name: "EmployeeAttendance",
    redirect: { name: "EmployeeAttendanceList" },
    meta: { "permissions": ["attendance:read"], "label": "employee.attendance.attendance", "icon": "fas fa-right-long", "keySearch": true, "keySearchLabel": "employee.attendance.employee_attendance" },
    component: RouterView,
    children: [
{
    path: "work-shift",
    name: "EmployeeAttendanceWorkShiftReport",
    meta: { "trans": "global.report", "label": "employee.attendance.work_shift.work_shift", "icon": "fas fa-clock", "permissions": ["work-shift:read"], "keySearch": true },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Assign/Report.vue'),
},
{
    path: "work-shift/assign",
    name: "EmployeeAttendanceWorkShiftAssign",
    meta: { "isNotNav": true, "trans": "global.assign", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Assign/Index.vue'),
},
{
    path: "work-shifts",
    name: "EmployeeAttendanceWorkShift",
    redirect: { name: "EmployeeAttendanceWorkShiftList" },
    meta: { "isNotNav": true, "label": "employee.attendance.work_shift.work_shift", "icon": "fas fa-clock", "hideChildren": true, "permissions": ["work-shift:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeAttendanceWorkShiftList",
    meta: { "trans": "global.list", "label": "employee.attendance.work_shift.work_shifts" },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Index.vue'),
},
{
    path: "create",
    name: "EmployeeAttendanceWorkShiftCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:create"] },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeAttendanceWorkShiftEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:edit"] },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeAttendanceWorkShiftDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:create"] },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeAttendanceWorkShiftShow",
    meta: { "trans": "global.detail", "label": "employee.attendance.work_shift.work_shift" },
    component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Show.vue'),
}
],
},
{
    path: "timesheets",
    name: "EmployeeAttendanceTimesheet",
    redirect: { name: "EmployeeAttendanceTimesheetList" },
    meta: { "label": "employee.attendance.timesheet.timesheet", "icon": "fas fa-stopwatch", "hideChildren": true, "permissions": ["timesheet:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeAttendanceTimesheetList",
    meta: { "trans": "global.list", "label": "employee.attendance.timesheet.timesheets" },
    component: () => import('@/views/Pages/Employee/Attendance/Timesheet/Index.vue'),
},
{
    path: "create",
    name: "EmployeeAttendanceTimesheetCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.attendance.timesheet.timesheet", "permissions": ["timesheet:create"] },
    component: () => import('@/views/Pages/Employee/Attendance/Timesheet/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeAttendanceTimesheetEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.attendance.timesheet.timesheet", "permissions": ["timesheet:edit"] },
    component: () => import('@/views/Pages/Employee/Attendance/Timesheet/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeAttendanceTimesheetDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.attendance.timesheet.timesheet", "permissions": ["timesheet:create"] },
    component: () => import('@/views/Pages/Employee/Attendance/Timesheet/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeAttendanceTimesheetShow",
    meta: { "trans": "global.detail", "label": "employee.attendance.timesheet.timesheet" },
    component: () => import('@/views/Pages/Employee/Attendance/Timesheet/Show.vue'),
}
],
},
{
    path: "",
    name: "EmployeeAttendanceList",
    meta: { "icon": "fa-solid fa-table-list", "label": "employee.attendance.attendance", "permissions": ["attendance:read"] },
    component: () => import('@/views/Pages/Employee/Attendance/Index.vue'),
},
{
    path: "mark",
    name: "EmployeeAttendanceMark",
    meta: { "isNotNav": true, "label": "employee.attendance.mark", "permissions": ["attendance:mark"] },
    component: () => import('@/views/Pages/Employee/Attendance/Mark.vue'),
},
{
    path: "production",
    name: "EmployeeAttendanceProduction",
    meta: { "isNotNav": true, "label": "employee.attendance.mark_production", "permissions": ["attendance:mark"] },
    component: () => import('@/views/Pages/Employee/Attendance/MarkProduction.vue'),
},
{
    path: "types",
    name: "EmployeeAttendanceType",
    redirect: { name: "EmployeeAttendanceTypeList" },
    meta: { "label": "employee.attendance.type.type", "icon": "fas fa-list-alt", "hideChildren": true, "permissions": ["attendance:config"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeAttendanceTypeList",
    meta: { "trans": "global.list", "label": "employee.attendance.type.types" },
    component: () => import('@/views/Pages/Employee/Attendance/Type/Index.vue'),
},
{
    path: "create",
    name: "EmployeeAttendanceTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.attendance.type.type" },
    component: () => import('@/views/Pages/Employee/Attendance/Type/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeAttendanceTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.attendance.type.type" },
    component: () => import('@/views/Pages/Employee/Attendance/Type/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeAttendanceTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.attendance.type.type" },
    component: () => import('@/views/Pages/Employee/Attendance/Type/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeAttendanceTypeShow",
    meta: { "trans": "global.detail", "label": "employee.attendance.type.type" },
    component: () => import('@/views/Pages/Employee/Attendance/Type/Show.vue'),
}
],
},
{
    path: "config",
    name: "EmployeeAttendanceConfig",
    redirect: { name: "EmployeeAttendanceConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "icon": "fas fa-cog", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["attendance:config"] },
    component: () => import('@/views/Pages/Employee/Attendance/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "EmployeeAttendanceConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Employee/Attendance/Config/General.vue'),
}
],
}
],
},
{
    path: "documents",
    name: "EmployeeDocuments",
    redirect: { name: "EmployeeDocumentsList" },
    meta: { "isNotNav": true, "label": "employee.document.documents", "icon": "fas fa-right-long", "permissions": ["employee:read"], "keySearch": true, "keySearchLabel": "employee.document.employee_documents" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeDocumentsList",
    meta: { "trans": "global.list", "label": "employee.document.documents" },
    component: () => import('@/views/Pages/Employee/Documents/Index.vue'),
},
{
    path: "create",
    name: "EmployeeDocumentsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.document.document" },
    component: () => import('@/views/Pages/Employee/Documents/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeDocumentsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.document.document" },
    component: () => import('@/views/Pages/Employee/Documents/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeDocumentsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.document.document" },
    component: () => import('@/views/Pages/Employee/Documents/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeDocumentsShow",
    meta: { "trans": "global.detail", "label": "employee.document.document" },
    component: () => import('@/views/Pages/Employee/Documents/Show.vue'),
}
],
},
{
    path: "accounts",
    name: "EmployeeAccounts",
    redirect: { name: "EmployeeAccountsList" },
    meta: { "isNotNav": true, "label": "employee.account.accounts", "icon": "fas fa-right-long", "permissions": ["employee:read"], "keySearch": true, "keySearchLabel": "employee.account.employee_accounts" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeAccountsList",
    meta: { "trans": "global.list", "label": "employee.account.accounts" },
    component: () => import('@/views/Pages/Employee/Accounts/Index.vue'),
},
{
    path: "create",
    name: "EmployeeAccountsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.account.account" },
    component: () => import('@/views/Pages/Employee/Accounts/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeAccountsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.account.account" },
    component: () => import('@/views/Pages/Employee/Accounts/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeAccountsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.account.account" },
    component: () => import('@/views/Pages/Employee/Accounts/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeAccountsShow",
    meta: { "trans": "global.detail", "label": "employee.account.account" },
    component: () => import('@/views/Pages/Employee/Accounts/Show.vue'),
}
],
},
{
    path: "qualifications",
    name: "EmployeeQualifications",
    redirect: { name: "EmployeeQualificationsList" },
    meta: { "isNotNav": true, "label": "employee.qualification.qualifications", "icon": "fas fa-right-long", "permissions": ["employee:read"], "keySearch": true, "keySearchLabel": "employee.qualification.employee_qualifications" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeQualificationsList",
    meta: { "trans": "global.list", "label": "employee.qualification.qualifications" },
    component: () => import('@/views/Pages/Employee/Qualifications/Index.vue'),
},
{
    path: "create",
    name: "EmployeeQualificationsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.qualification.qualification" },
    component: () => import('@/views/Pages/Employee/Qualifications/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeQualificationsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.qualification.qualification" },
    component: () => import('@/views/Pages/Employee/Qualifications/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeQualificationsDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.qualification.qualification" },
    component: () => import('@/views/Pages/Employee/Qualifications/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeQualificationsShow",
    meta: { "trans": "global.detail", "label": "employee.qualification.qualification" },
    component: () => import('@/views/Pages/Employee/Qualifications/Show.vue'),
}
],
},
{
    path: "experiences",
    name: "EmployeeExperiences",
    redirect: { name: "EmployeeExperiencesList" },
    meta: { "isNotNav": true, "label": "employee.experience.experiences", "icon": "fas fa-right-long", "permissions": ["employee:read"], "keySearch": true, "keySearchLabel": "employee.experience.employee_experiences" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeExperiencesList",
    meta: { "trans": "global.list", "label": "employee.experience.experiences" },
    component: () => import('@/views/Pages/Employee/Experiences/Index.vue'),
},
{
    path: "create",
    name: "EmployeeExperiencesCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.experience.experience" },
    component: () => import('@/views/Pages/Employee/Experiences/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeExperiencesEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.experience.experience" },
    component: () => import('@/views/Pages/Employee/Experiences/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeExperiencesDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.experience.experience" },
    component: () => import('@/views/Pages/Employee/Experiences/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeExperiencesShow",
    meta: { "trans": "global.detail", "label": "employee.experience.experience" },
    component: () => import('@/views/Pages/Employee/Experiences/Show.vue'),
}
],
},
{
    path: "leave",
    name: "EmployeeLeave",
    redirect: { name: "EmployeeLeaveRequest" },
    meta: { "label": "employee.leave.leave", "icon": "fas fa-right-long", "permissions": ["leave-allocation:read", "leave-request:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "requests",
    name: "EmployeeLeaveRequest",
    redirect: { name: "EmployeeLeaveRequestList" },
    meta: { "label": "employee.leave.request.request", "icon": "fas fa-file-medical-alt", "hideChildren": true, "permissions": ["leave-request:read"], "keySearch": true, "keySearchLabel": "employee.leave.request.employee_request" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeLeaveRequestList",
    meta: { "trans": "global.list", "label": "employee.leave.request.requests" },
    component: () => import('@/views/Pages/Employee/Leave/Request/Index.vue'),
},
{
    path: "create",
    name: "EmployeeLeaveRequestCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.leave.request.request", "permissions": ["leave-request:create"] },
    component: () => import('@/views/Pages/Employee/Leave/Request/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeLeaveRequestEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.leave.request.request", "permissions": ["leave-request:edit"] },
    component: () => import('@/views/Pages/Employee/Leave/Request/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeLeaveRequestDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.leave.request.request", "permissions": ["leave-request:create"] },
    component: () => import('@/views/Pages/Employee/Leave/Request/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeLeaveRequestShow",
    meta: { "trans": "global.detail", "label": "employee.leave.request.request" },
    component: () => import('@/views/Pages/Employee/Leave/Request/Show.vue'),
}
],
},
{
    path: "allocations",
    name: "EmployeeLeaveAllocation",
    redirect: { name: "EmployeeLeaveAllocationList" },
    meta: { "label": "employee.leave.allocation.allocation", "icon": "fas fa-user-edit", "hideChildren": true, "permissions": ["leave-allocation:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeLeaveAllocationList",
    meta: { "trans": "global.list", "label": "employee.leave.allocation.allocations" },
    component: () => import('@/views/Pages/Employee/Leave/Allocation/Index.vue'),
},
{
    path: "create",
    name: "EmployeeLeaveAllocationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.leave.allocation.allocation", "permissions": ["leave-allocation:create"] },
    component: () => import('@/views/Pages/Employee/Leave/Allocation/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeLeaveAllocationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.leave.allocation.allocation", "permissions": ["leave-allocation:edit"] },
    component: () => import('@/views/Pages/Employee/Leave/Allocation/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeLeaveAllocationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.leave.allocation.allocation", "permissions": ["leave-allocation:create"] },
    component: () => import('@/views/Pages/Employee/Leave/Allocation/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeLeaveAllocationShow",
    meta: { "trans": "global.detail", "label": "employee.leave.allocation.allocation" },
    component: () => import('@/views/Pages/Employee/Leave/Allocation/Show.vue'),
}
],
},
{
    path: "types",
    name: "EmployeeLeaveType",
    redirect: { name: "EmployeeLeaveTypeList" },
    meta: { "label": "employee.leave.type.type", "icon": "fas fa-list-alt", "hideChildren": true, "permissions": ["leave:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeLeaveTypeList",
    meta: { "trans": "global.list", "label": "employee.leave.type.types" },
    component: () => import('@/views/Pages/Employee/Leave/Type/Index.vue'),
},
{
    path: "create",
    name: "EmployeeLeaveTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.leave.type.type" },
    component: () => import('@/views/Pages/Employee/Leave/Type/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeLeaveTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.leave.type.type" },
    component: () => import('@/views/Pages/Employee/Leave/Type/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeLeaveTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.leave.type.type" },
    component: () => import('@/views/Pages/Employee/Leave/Type/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeLeaveTypeShow",
    meta: { "trans": "global.detail", "label": "employee.leave.type.type" },
    component: () => import('@/views/Pages/Employee/Leave/Type/Show.vue'),
}
],
},
{
    path: "config",
    name: "EmployeeLeaveConfig",
    redirect: { name: "EmployeeLeaveConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "icon": "fas fa-cog", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["leave:config"] },
    component: () => import('@/views/Pages/Employee/Leave/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "EmployeeLeaveConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Employee/Leave/Config/General.vue'),
}
],
}
],
},
{
    path: "payroll",
    name: "EmployeePayroll",
    redirect: { name: "EmployeePayrollList" },
    meta: { "label": "employee.payroll.payroll", "icon": "fas fa-right-long", "permissions": ["payroll:read", "salary-template:read", "salary-structure:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "config",
    name: "EmployeePayrollConfig",
    redirect: { name: "EmployeePayrollConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "icon": "fas fa-cog", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["payroll:config"] },
    component: () => import('@/views/Pages/Employee/Payroll/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "EmployeePayrollConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Employee/Payroll/Config/General.vue'),
}
],
},
{
    path: "",
    name: "EmployeePayrollList",
    meta: { "label": "employee.payroll.payroll", "icon": "fas fa-list-alt", "permissions": ["payroll:read"] },
    component: () => import('@/views/Pages/Employee/Payroll/Index.vue'),
},
{
    path: "salary-structures",
    name: "EmployeePayrollSalaryStructure",
    redirect: { name: "EmployeePayrollSalaryStructureList" },
    meta: { "label": "employee.payroll.salary_structure.salary_structure", "icon": "fas fa-clone", "hideChildren": true, "permissions": ["salary-structure:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeePayrollSalaryStructureList",
    meta: { "trans": "global.list", "label": "employee.payroll.salary_structure.salary_structures" },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryStructure/Index.vue'),
},
{
    path: "create",
    name: "EmployeePayrollSalaryStructureCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.payroll.salary_structure.salary_structure", "permissions": ["salary-structure:create"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryStructure/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeePayrollSalaryStructureEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.payroll.salary_structure.salary_structure", "permissions": ["salary-structure:edit"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryStructure/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeePayrollSalaryStructureDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.payroll.salary_structure.salary_structure", "permissions": ["salary-structure:create"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryStructure/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeePayrollSalaryStructureShow",
    meta: { "trans": "global.detail", "label": "employee.payroll.salary_structure.salary_structure" },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryStructure/Show.vue'),
}
],
},
{
    path: "salary-templates",
    name: "EmployeePayrollSalaryTemplate",
    redirect: { name: "EmployeePayrollSalaryTemplateList" },
    meta: { "label": "employee.payroll.salary_template.salary_template", "icon": "fas fa-folder-open", "hideChildren": true, "permissions": ["salary-template:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeePayrollSalaryTemplateList",
    meta: { "trans": "global.list", "label": "employee.payroll.salary_template.salary_templates" },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryTemplate/Index.vue'),
},
{
    path: "create",
    name: "EmployeePayrollSalaryTemplateCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.payroll.salary_template.salary_template", "permissions": ["salary-template:create"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryTemplate/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeePayrollSalaryTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.payroll.salary_template.salary_template", "permissions": ["salary-template:edit"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryTemplate/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeePayrollSalaryTemplateDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.payroll.salary_template.salary_template", "permissions": ["salary-template:create"] },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryTemplate/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeePayrollSalaryTemplateShow",
    meta: { "trans": "global.detail", "label": "employee.payroll.salary_template.salary_template" },
    component: () => import('@/views/Pages/Employee/Payroll/SalaryTemplate/Show.vue'),
}
],
},
{
    path: "pay-heads",
    name: "EmployeePayrollPayHead",
    redirect: { name: "EmployeePayrollPayHeadList" },
    meta: { "label": "employee.payroll.pay_head.pay_head", "icon": "fas fa-list-alt", "hideChildren": true, "permissions": ["payroll:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeePayrollPayHeadList",
    meta: { "trans": "global.list", "label": "employee.payroll.pay_head.pay_heads" },
    component: () => import('@/views/Pages/Employee/Payroll/PayHead/Index.vue'),
},
{
    path: "create",
    name: "EmployeePayrollPayHeadCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.payroll.pay_head.pay_head" },
    component: () => import('@/views/Pages/Employee/Payroll/PayHead/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeePayrollPayHeadEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.payroll.pay_head.pay_head" },
    component: () => import('@/views/Pages/Employee/Payroll/PayHead/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeePayrollPayHeadDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.payroll.pay_head.pay_head" },
    component: () => import('@/views/Pages/Employee/Payroll/PayHead/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeePayrollPayHeadShow",
    meta: { "trans": "global.detail", "label": "employee.payroll.pay_head.pay_head" },
    component: () => import('@/views/Pages/Employee/Payroll/PayHead/Show.vue'),
}
],
}
],
},
{
    path: "payrolls",
    name: "EmployeePayrolls",
    redirect: { name: "EmployeePayrollList" },
    meta: { "isNotNav": true, "label": "employee.payroll.payrolls" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeePayrollList",
    meta: { "trans": "global.list", "label": "employee.payroll.payrolls" },
    component: () => import('@/views/Pages/Employee/Payroll/Index.vue'),
},
{
    path: "create",
    name: "EmployeePayrollCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.payroll.payroll", "permissions": ["payroll:create"] },
    component: () => import('@/views/Pages/Employee/Payroll/Action.vue'),
},
{
    path: "process",
    name: "EmployeePayrollProcess",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.payroll.payroll", "permissions": ["payroll:process"] },
    component: () => import('@/views/Pages/Employee/Payroll/Process.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeePayrollEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.payroll.payroll", "permissions": ["payroll:edit"] },
    component: () => import('@/views/Pages/Employee/Payroll/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeePayrollShow",
    meta: { "trans": "global.detail", "label": "employee.payroll.payroll" },
    component: () => import('@/views/Pages/Employee/Payroll/Show.vue'),
}
],
},
{
    path: "edit-requests",
    name: "EmployeeEditRequest",
    redirect: { name: "EmployeeEditRequestList" },
    meta: { "label": "employee.edit_request.edit_request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["employee:edit-request-action"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeEditRequestList",
    meta: { "trans": "global.list", "label": "employee.edit_request.edits_request" },
    component: () => import('@/views/Pages/Employee/EditRequest/Index.vue'),
},
{
    path: ":uuid",
    name: "EmployeeEditRequestShow",
    meta: { "trans": "global.detail", "label": "employee.edit_request.edit_request" },
    component: () => import('@/views/Pages/Employee/EditRequest/Show.vue'),
}
],
}
],
},
{
    path: "employees",
    name: "Employees",
    redirect: { name: "EmployeeList" },
    meta: { "isNotNav": true, "label": "employee.employees", "icon": "fas fa-users", "permissions": ["employee:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeList",
    meta: { "label": "employee.employees", "icon": "fas fa-right-long", "permissions": ["employee:read"], "keySearch": true },
    component: () => import('@/views/Pages/Employee/Index.vue'),
},
{
    path: "config",
    name: "EmployeeConfig",
    redirect: { name: "EmployeeConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["employee:config"] },
    component: () => import('@/views/Pages/Employee/Config/Index.vue'),
    children: [
{
    path: "",
    name: "EmployeeConfigIndex",
    redirect: { name: "EmployeeConfigGeneral" },
},
{
    path: "general",
    name: "EmployeeConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Employee/Config/General.vue'),
},
{
    path: "employment-status",
    name: "EmployeeConfigEmploymentStatus",
    redirect: { name: "EmployeeConfigEmploymentStatusList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeConfigEmploymentStatusList",
    meta: { "trans": "global.list", "label": "employee.employment_status.employment_status", "queryType": "employment_status", "keySearch": true, "prefix": "EmployeeConfigEmploymentStatus" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "EmployeeConfigEmploymentStatusCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.employment_status.employment_status", "queryType": "employment_status", "prefix": "EmployeeConfigEmploymentStatus" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeConfigEmploymentStatusEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.employment_status.employment_status", "queryType": "employment_status", "prefix": "EmployeeConfigEmploymentStatus" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "employment-type",
    name: "EmployeeConfigEmploymentType",
    redirect: { name: "EmployeeConfigEmploymentTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeConfigEmploymentTypeList",
    meta: { "trans": "global.list", "label": "employee.employment_type.employment_type", "queryType": "employment_type", "keySearch": true, "prefix": "EmployeeConfigEmploymentType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "EmployeeConfigEmploymentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.employment_type.employment_type", "queryType": "employment_type", "prefix": "EmployeeConfigEmploymentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeConfigEmploymentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.employment_type.employment_type", "queryType": "employment_type", "prefix": "EmployeeConfigEmploymentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "dialogue-category",
    name: "EmployeeConfigDialogueCategory",
    redirect: { name: "EmployeeConfigDialogueCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeConfigDialogueCategoryList",
    meta: { "trans": "global.list", "label": "employee.dialogue_category.dialogue_category", "queryType": "employee_dialogue_category", "keySearch": true, "prefix": "EmployeeConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "EmployeeConfigDialogueCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.dialogue_category.dialogue_category", "queryType": "employee_dialogue_category", "prefix": "EmployeeConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeConfigDialogueCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.dialogue_category.dialogue_category", "queryType": "employee_dialogue_category", "prefix": "EmployeeConfigDialogueCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "document-types",
    name: "EmployeeConfigDocumentType",
    redirect: { name: "EmployeeConfigDocumentTypeList" },
    meta: { "label": "employee.document_type.document_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["employee:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeConfigDocumentTypeList",
    meta: { "trans": "global.list", "label": "employee.document_type.document_types" },
    component: () => import('@/views/Pages/Employee/Config/DocumentType/Index.vue'),
},
{
    path: "create",
    name: "EmployeeConfigDocumentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.document_type.document_type" },
    component: () => import('@/views/Pages/Employee/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeConfigDocumentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.document_type.document_type" },
    component: () => import('@/views/Pages/Employee/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "EmployeeConfigDocumentTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.document_type.document_type" },
    component: () => import('@/views/Pages/Employee/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeConfigDocumentTypeShow",
    meta: { "trans": "global.detail", "label": "employee.document_type.document_type" },
    component: () => import('@/views/Pages/Employee/Config/DocumentType/Show.vue'),
}
],
},
{
    path: "group",
    name: "EmployeeConfigGroup",
    redirect: { name: "EmployeeConfigGroupList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeConfigGroupList",
    meta: { "trans": "global.list", "label": "employee.group.group", "queryType": "employee_group", "keySearch": true, "prefix": "EmployeeConfigGroup" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "EmployeeConfigGroupCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.group.group", "queryType": "employee_group", "prefix": "EmployeeConfigGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "EmployeeConfigGroupEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.group.group", "queryType": "employee_group", "prefix": "EmployeeConfigGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "create",
    name: "EmployeeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.employee" },
    component: () => import('@/views/Pages/Employee/Action.vue'),
},
{
    path: ":uuid",
    name: "EmployeeShow",
    redirect: { name: "EmployeeShowBasic" },
    meta: { "trans": "global.detail", "label": "employee.employee", "permissions": ["employee:read"] },
    component: () => import('@/views/Pages/Employee/Show.vue'),
    children: [
{
    path: "",
    name: "EmployeeShowIndex",
    redirect: { name: "EmployeeShowBasic" },
},
{
    path: "basic",
    name: "EmployeeShowBasic",
    meta: { "type": "read", "action": "read", "trans": "general.basic", "label": "general.basic" },
    component: () => import('@/views/Pages/Employee/Basic.vue'),
},
{
    path: "basic/edit",
    name: "EmployeeEditBasic",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.employee" },
    component: () => import('@/views/Pages/Employee/EditBasic.vue'),
},
{
    path: "photo/edit",
    name: "EmployeeEditPhoto",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.props.photo" },
    component: () => import('@/views/Pages/Employee/EditPhoto.vue'),
},
{
    path: "contact",
    name: "EmployeeShowContact",
    meta: { "type": "general", "action": "general", "trans": "contact.contact", "label": "contact.contact" },
    component: () => import('@/views/Pages/Employee/Contact.vue'),
},
{
    path: "contact/edit",
    name: "EmployeeEditContact",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.contact" },
    component: () => import('@/views/Pages/Employee/EditContact.vue'),
},
{
    path: "login",
    name: "EmployeeShowLogin",
    meta: { "type": "general", "action": "general", "trans": "contact.login.login", "label": "contact.login.login" },
    component: () => import('@/views/Pages/Employee/Login.vue'),
},
{
    path: "login/edit",
    name: "EmployeeEditLogin",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.login.login" },
    component: () => import('@/views/Pages/Employee/EditLogin.vue'),
},
{
    path: "records",
    name: "EmployeeRecord",
    redirect: { name: "EmployeeRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeRecordList",
    meta: { "trans": "global.list", "label": "employee.record.records" },
    component: () => import('@/views/Pages/Employee/Record/Index.vue'),
},
{
    path: "create",
    name: "EmployeeRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.record.record", "permissions": ["employment-record:manage"] },
    component: () => import('@/views/Pages/Employee/Record/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.record.record", "permissions": ["employment-record:manage"] },
    component: () => import('@/views/Pages/Employee/Record/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeRecordShow",
    meta: { "trans": "global.detail", "label": "employee.record.record" },
    component: () => import('@/views/Pages/Employee/Record/Show.vue'),
}
],
},
{
    path: "incharges",
    name: "EmployeeIncharge",
    redirect: { name: "EmployeeInchargeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeInchargeList",
    meta: { "trans": "global.list", "label": "employee.incharge.incharges" },
    component: () => import('@/views/Pages/Employee/Incharge/Index.vue'),
}
],
},
{
    path: "work-shifts",
    name: "EmployeeWorkShift",
    redirect: { name: "EmployeeWorkShiftList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeWorkShiftList",
    meta: { "trans": "global.list", "label": "employee.attendance.work_shift.work_shifts", "permissions": ["employee:read", "work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/WorkShift/Index.vue'),
},
{
    path: "create",
    name: "EmployeeWorkShiftCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/WorkShift/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeWorkShiftEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/WorkShift/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeWorkShiftDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/WorkShift/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeWorkShiftShow",
    meta: { "trans": "global.detail", "label": "employee.attendance.work_shift.work_shift", "permissions": ["work-shift:assign"] },
    component: () => import('@/views/Pages/Employee/WorkShift/Show.vue'),
}
],
},
{
    path: "qualifications",
    name: "EmployeeQualification",
    redirect: { name: "EmployeeQualificationList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeQualificationList",
    meta: { "trans": "global.list", "label": "employee.qualification.qualifications" },
    component: () => import('@/views/Pages/Employee/Qualification/Index.vue'),
},
{
    path: "create",
    name: "EmployeeQualificationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.qualification.qualification", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Qualification/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeQualificationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.qualification.qualification", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Qualification/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeQualificationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.qualification.qualification", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Qualification/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeQualificationShow",
    meta: { "trans": "global.detail", "label": "employee.qualification.qualification", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Qualification/Show.vue'),
}
],
},
{
    path: "dialogues",
    name: "EmployeeDialogue",
    redirect: { name: "EmployeeDialogueList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeDialogueList",
    meta: { "trans": "global.list", "label": "employee.dialogue.dialogues", "permissions": ["employee:dialogue"] },
    component: () => import('@/views/Pages/Employee/Dialogue/Index.vue'),
},
{
    path: "create",
    name: "EmployeeDialogueCreate",
    meta: { "type": "create", "action": "create", "trans": "global.new", "label": "employee.dialogue.dialogue" },
    component: () => import('@/views/Pages/Employee/Dialogue/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeDialogueEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.dialogue.dialogue" },
    component: () => import('@/views/Pages/Employee/Dialogue/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeDialogueDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.dialogue.dialogue" },
    component: () => import('@/views/Pages/Employee/Dialogue/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeDialogueShow",
    meta: { "trans": "global.detail", "label": "employee.dialogue.dialogue" },
    component: () => import('@/views/Pages/Employee/Dialogue/Show.vue'),
}
],
},
{
    path: "accounts",
    name: "EmployeeAccount",
    redirect: { name: "EmployeeAccountList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeAccountList",
    meta: { "trans": "global.list", "label": "finance.account.accounts" },
    component: () => import('@/views/Pages/Employee/Account/Index.vue'),
},
{
    path: "create",
    name: "EmployeeAccountCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "finance.account.account", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Account/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeAccountEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "finance.account.account", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Account/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeAccountDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "finance.account.account", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Account/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeAccountShow",
    meta: { "trans": "global.detail", "label": "finance.account.account", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Account/Show.vue'),
}
],
},
{
    path: "documents",
    name: "EmployeeDocument",
    redirect: { name: "EmployeeDocumentList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeDocumentList",
    meta: { "trans": "global.list", "label": "employee.document.documents" },
    component: () => import('@/views/Pages/Employee/Document/Index.vue'),
},
{
    path: "create",
    name: "EmployeeDocumentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.document.document", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Document/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeDocumentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.document.document", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Document/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeDocumentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.document.document", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Document/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeDocumentShow",
    meta: { "trans": "global.detail", "label": "employee.document.document", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Document/Show.vue'),
}
],
},
{
    path: "experiences",
    name: "EmployeeExperience",
    redirect: { name: "EmployeeExperienceList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeExperienceList",
    meta: { "trans": "global.list", "label": "employee.experience.experiences" },
    component: () => import('@/views/Pages/Employee/Experience/Index.vue'),
},
{
    path: "create",
    name: "EmployeeExperienceCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "employee.experience.experience", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Experience/Action.vue'),
},
{
    path: ":muuid/edit",
    name: "EmployeeExperienceEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "employee.experience.experience", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Experience/Action.vue'),
},
{
    path: ":muuid/duplicate",
    name: "EmployeeExperienceDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "employee.experience.experience", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Experience/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeExperienceShow",
    meta: { "trans": "global.detail", "label": "employee.experience.experience", "permissions": ["employee:edit", "employee-record:manage", "employee:self-service"] },
    component: () => import('@/views/Pages/Employee/Experience/Show.vue'),
}
],
},
{
    path: "edit-requests",
    name: "EmployeeProfileEditRequest",
    redirect: { name: "EmployeeProfileEditRequestList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "EmployeeProfileEditRequestList",
    meta: { "trans": "global.list", "label": "finance.edit_request.edit_requests" },
    component: () => import('@/views/Pages/Employee/ProfileEditRequest/Index.vue'),
},
{
    path: "new",
    name: "EmployeeProfileEditRequestNew",
    meta: { "type": "new", "action": "create", "trans": "global.new", "label": "employee.edit_request.edit_request" },
    component: () => import('@/views/Pages/Employee/ProfileEditRequest/Action.vue'),
},
{
    path: ":muuid",
    name: "EmployeeProfileEditRequestShow",
    meta: { "trans": "global.detail", "label": "employee.edit_request.edit_request" },
    component: () => import('@/views/Pages/Employee/ProfileEditRequest/Show.vue'),
}
],
}
],
}
],
},
{
    path: "attendance",
    name: "AttendanceAssistant",
    meta: { "isNotNav": true, "label": "attendance.attendance", "icon": "fas fa-laptop-code", "roles": ["admin", "attendance-assistant"], "keySearch": true },
    component: () => import('@/views/Pages/Attendance/Assistant.vue'),
},
{
    path: "attendance/qr-code",
    name: "AttendanceQrCode",
    meta: { "isNotNav": true, "label": "attendance.qr_code", "icon": "fas fa-qrcode", "keySearch": true },
    component: () => import('@/views/Pages/Attendance/QrCode.vue'),
},
{
    path: "resource",
    name: "Resource",
    redirect: { name: "ResourceAssignment" },
    meta: { "moduleName": "resource", "label": "resource.resource", "icon": "fas fa-folder", "permissions": ["resource:config", "student-diary:read", "assignment:read", "lesson-plan:read", "syllabus:read", "learning-material:read", "download:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ResourceConfig",
    redirect: { name: "ResourceConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["resource:config"] },
    component: () => import('@/views/Pages/Resource/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ResourceConfigGeneral",
    meta: { "label": "resource.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Resource/Config/General.vue'),
},
{
    path: "assignment-type",
    name: "ResourceConfigAssignmentType",
    redirect: { name: "ResourceConfigAssignmentTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceConfigAssignmentTypeList",
    meta: { "trans": "global.list", "label": "resource.assignment.type.type", "queryType": "assignment_type", "keySearch": true, "prefix": "ResourceConfigAssignmentType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ResourceConfigAssignmentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.assignment.type.type", "queryType": "assignment_type", "prefix": "ResourceConfigAssignmentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceConfigAssignmentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.assignment.type.type", "queryType": "assignment_type", "prefix": "ResourceConfigAssignmentType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "book-lists",
    name: "ResourceBookList",
    meta: { "icon": "fas fa-right-long", "trans": "global.list", "label": "resource.book_list.book_lists", "permissions": ["book-list:read"] },
    component: () => import('@/views/Pages/Resource/BookList/Index.vue'),
},
{
    path: "diaries",
    name: "ResourceDiary",
    redirect: { name: "ResourceDiaryList" },
    meta: { "label": "resource.diary.diary", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["student-diary:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceDiaryList",
    meta: { "trans": "global.list", "label": "resource.diary.diaries" },
    component: () => import('@/views/Pages/Resource/Diary/Index.vue'),
},
{
    path: "create",
    name: "ResourceDiaryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.diary.diary", "permissions": ["student-diary:create"] },
    component: () => import('@/views/Pages/Resource/Diary/Action.vue'),
},
{
    path: "preview",
    name: "ResourceDiaryPreview",
    meta: { "trans": "global.detail", "label": "resource.diary.diary" },
    component: () => import('@/views/Pages/Resource/Diary/Preview.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceDiaryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.diary.diary", "permissions": ["student-diary:edit"] },
    component: () => import('@/views/Pages/Resource/Diary/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceDiaryDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.diary.diary", "permissions": ["student-diary:create"] },
    component: () => import('@/views/Pages/Resource/Diary/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceDiaryShow",
    meta: { "trans": "global.detail", "label": "resource.diary.diary" },
    component: () => import('@/views/Pages/Resource/Diary/Show.vue'),
}
],
},
{
    path: "syllabuses",
    name: "ResourceSyllabus",
    redirect: { name: "ResourceSyllabusList" },
    meta: { "label": "resource.syllabus.syllabus", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["syllabus:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceSyllabusList",
    meta: { "trans": "global.list", "label": "resource.syllabus.syllabuses" },
    component: () => import('@/views/Pages/Resource/Syllabus/Index.vue'),
},
{
    path: "create",
    name: "ResourceSyllabusCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.syllabus.syllabus", "permissions": ["syllabus:create"] },
    component: () => import('@/views/Pages/Resource/Syllabus/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceSyllabusEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.syllabus.syllabus", "permissions": ["syllabus:edit"] },
    component: () => import('@/views/Pages/Resource/Syllabus/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceSyllabusDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.syllabus.syllabus", "permissions": ["syllabus:create"] },
    component: () => import('@/views/Pages/Resource/Syllabus/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceSyllabusShow",
    meta: { "trans": "global.detail", "label": "resource.syllabus.syllabus" },
    component: () => import('@/views/Pages/Resource/Syllabus/Show.vue'),
}
],
},
{
    path: "lesson-plans",
    name: "ResourceLessonPlan",
    redirect: { name: "ResourceLessonPlanList" },
    meta: { "label": "resource.lesson_plan.lesson_plan", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["lesson-plan:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceLessonPlanList",
    meta: { "trans": "global.list", "label": "resource.lesson_plan.lesson_plans" },
    component: () => import('@/views/Pages/Resource/LessonPlan/Index.vue'),
},
{
    path: "create",
    name: "ResourceLessonPlanCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.lesson_plan.lesson_plan", "permissions": ["lesson-plan:create"] },
    component: () => import('@/views/Pages/Resource/LessonPlan/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceLessonPlanEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.lesson_plan.lesson_plan", "permissions": ["lesson-plan:edit"] },
    component: () => import('@/views/Pages/Resource/LessonPlan/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceLessonPlanDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.lesson_plan.lesson_plan", "permissions": ["lesson-plan:create"] },
    component: () => import('@/views/Pages/Resource/LessonPlan/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceLessonPlanShow",
    meta: { "trans": "global.detail", "label": "resource.lesson_plan.lesson_plan" },
    component: () => import('@/views/Pages/Resource/LessonPlan/Show.vue'),
}
],
},
{
    path: "assignments",
    name: "ResourceAssignment",
    redirect: { name: "ResourceAssignmentList" },
    meta: { "label": "resource.assignment.assignment", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["assignment:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceAssignmentList",
    meta: { "trans": "global.list", "label": "resource.assignment.assignments" },
    component: () => import('@/views/Pages/Resource/Assignment/Index.vue'),
},
{
    path: "create",
    name: "ResourceAssignmentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.assignment.assignment", "permissions": ["assignment:create"] },
    component: () => import('@/views/Pages/Resource/Assignment/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceAssignmentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.assignment.assignment", "permissions": ["assignment:edit"] },
    component: () => import('@/views/Pages/Resource/Assignment/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceAssignmentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.assignment.assignment", "permissions": ["assignment:create"] },
    component: () => import('@/views/Pages/Resource/Assignment/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceAssignmentShow",
    meta: { "trans": "global.detail", "label": "resource.assignment.assignment" },
    component: () => import('@/views/Pages/Resource/Assignment/Show.vue'),
}
],
},
{
    path: "online-classes",
    name: "ResourceOnlineClass",
    redirect: { name: "ResourceOnlineClassList" },
    meta: { "label": "resource.online_class.online_class", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["online-class:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceOnlineClassList",
    meta: { "trans": "global.list", "label": "resource.online_class.online_classs" },
    component: () => import('@/views/Pages/Resource/OnlineClass/Index.vue'),
},
{
    path: "create",
    name: "ResourceOnlineClassCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.online_class.online_class", "permissions": ["online-class:create"] },
    component: () => import('@/views/Pages/Resource/OnlineClass/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceOnlineClassEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.online_class.online_class", "permissions": ["online-class:edit"] },
    component: () => import('@/views/Pages/Resource/OnlineClass/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceOnlineClassDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.online_class.online_class", "permissions": ["online-class:create"] },
    component: () => import('@/views/Pages/Resource/OnlineClass/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceOnlineClassShow",
    meta: { "trans": "global.detail", "label": "resource.online_class.online_class" },
    component: () => import('@/views/Pages/Resource/OnlineClass/Show.vue'),
}
],
},
{
    path: "learning-materials",
    name: "ResourceLearningMaterial",
    redirect: { name: "ResourceLearningMaterialList" },
    meta: { "label": "resource.learning_material.learning_material", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["learning-material:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceLearningMaterialList",
    meta: { "trans": "global.list", "label": "resource.learning_material.learning_materials" },
    component: () => import('@/views/Pages/Resource/LearningMaterial/Index.vue'),
},
{
    path: "create",
    name: "ResourceLearningMaterialCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.learning_material.learning_material", "permissions": ["learning-material:create"] },
    component: () => import('@/views/Pages/Resource/LearningMaterial/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceLearningMaterialEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.learning_material.learning_material", "permissions": ["learning-material:edit"] },
    component: () => import('@/views/Pages/Resource/LearningMaterial/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceLearningMaterialDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.learning_material.learning_material", "permissions": ["learning-material:create"] },
    component: () => import('@/views/Pages/Resource/LearningMaterial/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceLearningMaterialShow",
    meta: { "trans": "global.detail", "label": "resource.learning_material.learning_material" },
    component: () => import('@/views/Pages/Resource/LearningMaterial/Show.vue'),
}
],
},
{
    path: "downloads",
    name: "ResourceDownload",
    redirect: { name: "ResourceDownloadList" },
    meta: { "label": "resource.download.download", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["download:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceDownloadList",
    meta: { "trans": "global.list", "label": "resource.download.downloads" },
    component: () => import('@/views/Pages/Resource/Download/Index.vue'),
},
{
    path: "create",
    name: "ResourceDownloadCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "resource.download.download", "permissions": ["download:create"] },
    component: () => import('@/views/Pages/Resource/Download/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ResourceDownloadEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "resource.download.download", "permissions": ["download:edit"] },
    component: () => import('@/views/Pages/Resource/Download/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ResourceDownloadDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "resource.download.download", "permissions": ["download:create"] },
    component: () => import('@/views/Pages/Resource/Download/Action.vue'),
},
{
    path: ":uuid",
    name: "ResourceDownloadShow",
    meta: { "trans": "global.detail", "label": "resource.download.download" },
    component: () => import('@/views/Pages/Resource/Download/Show.vue'),
}
],
},
{
    path: "reports",
    name: "ResourceReport",
    redirect: { name: "ResourceReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["resource:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "ResourceReportList",
    meta: { "trans": "global.list", "label": "resource.report.report" },
    component: () => import('@/views/Pages/Resource/Report/Index.vue'),
},
{
    path: "date-wise-student-diary",
    name: "ResourceReportDateWiseStudentDiary",
    meta: { "trans": "global.list", "label": "resource.report.date_wise_student_diary.date_wise_student_diary" },
    component: () => import('@/views/Pages/Resource/Report/DateWiseStudentDiary/Index.vue'),
},
{
    path: "date-wise-assignment",
    name: "ResourceReportDateWiseAssignment",
    meta: { "trans": "global.list", "label": "resource.report.date_wise_assignment.date_wise_assignment" },
    component: () => import('@/views/Pages/Resource/Report/DateWiseAssignment/Index.vue'),
},
{
    path: "date-wise-learning-material",
    name: "ResourceReportDateWiseLearningMaterial",
    meta: { "trans": "global.list", "label": "resource.report.date_wise_learning_material.date_wise_learning_material" },
    component: () => import('@/views/Pages/Resource/Report/DateWiseLearningMaterial/Index.vue'),
}
],
}
],
},
{
    path: "transport",
    name: "Transport",
    redirect: { name: "TransportRoute" },
    meta: { "moduleName": "transport", "label": "transport.transport", "icon": "fas fa-truck", "permissions": ["transport:config", "transport-stoppage:manage", "transport-route:read", "transport-circle:read", "transport-fee:read", "transport:report"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "TransportConfig",
    redirect: { name: "TransportConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["transport:config"] },
    component: () => import('@/views/Pages/Transport/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "TransportConfigGeneral",
    meta: { "label": "transport.config.config", "icon": "far fa-truck", "key": "general" },
    component: () => import('@/views/Pages/Transport/Config/General.vue'),
}
],
},
{
    path: "stoppages",
    name: "TransportStoppage",
    redirect: { name: "TransportStoppageList" },
    meta: { "isNotNav": true, "label": "transport.stoppage.stoppage", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportStoppageList",
    meta: { "trans": "global.list", "label": "transport.stoppage.stoppages" },
    component: () => import('@/views/Pages/Transport/Stoppage/Index.vue'),
},
{
    path: "create",
    name: "TransportStoppageCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.stoppage.stoppage" },
    component: () => import('@/views/Pages/Transport/Stoppage/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportStoppageEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.stoppage.stoppage" },
    component: () => import('@/views/Pages/Transport/Stoppage/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportStoppageDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.stoppage.stoppage" },
    component: () => import('@/views/Pages/Transport/Stoppage/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportStoppageShow",
    meta: { "trans": "global.detail", "label": "transport.stoppage.stoppage" },
    component: () => import('@/views/Pages/Transport/Stoppage/Show.vue'),
}
],
},
{
    path: "routes",
    name: "TransportRoute",
    redirect: { name: "TransportRouteList" },
    meta: { "label": "transport.route.route", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport-route:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportRouteList",
    meta: { "trans": "global.list", "label": "transport.route.routes" },
    component: () => import('@/views/Pages/Transport/Route/Index.vue'),
},
{
    path: "create",
    name: "TransportRouteCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.route.route", "permissions": ["transport-route:create"] },
    component: () => import('@/views/Pages/Transport/Route/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportRouteEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.route.route", "permissions": ["transport-route:edit"] },
    component: () => import('@/views/Pages/Transport/Route/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportRouteDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.route.route", "permissions": ["transport-route:create"] },
    component: () => import('@/views/Pages/Transport/Route/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportRouteShow",
    meta: { "trans": "global.detail", "label": "transport.route.route" },
    component: () => import('@/views/Pages/Transport/Route/Show.vue'),
}
],
},
{
    path: "circles",
    name: "TransportCircle",
    redirect: { name: "TransportCircleList" },
    meta: { "label": "transport.circle.circle", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport-circle:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportCircleList",
    meta: { "trans": "global.list", "label": "transport.circle.circles" },
    component: () => import('@/views/Pages/Transport/Circle/Index.vue'),
},
{
    path: "create",
    name: "TransportCircleCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.circle.circle", "permissions": ["transport-circle:create"] },
    component: () => import('@/views/Pages/Transport/Circle/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportCircleEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.circle.circle", "permissions": ["transport-circle:edit"] },
    component: () => import('@/views/Pages/Transport/Circle/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportCircleDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.circle.circle", "permissions": ["transport-circle:create"] },
    component: () => import('@/views/Pages/Transport/Circle/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportCircleShow",
    meta: { "trans": "global.detail", "label": "transport.circle.circle" },
    component: () => import('@/views/Pages/Transport/Circle/Show.vue'),
}
],
},
{
    path: "fees",
    name: "TransportFee",
    redirect: { name: "TransportFeeList" },
    meta: { "label": "transport.fee.fee", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport-fee:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportFeeList",
    meta: { "trans": "global.list", "label": "transport.fee.fees" },
    component: () => import('@/views/Pages/Transport/Fee/Index.vue'),
},
{
    path: "create",
    name: "TransportFeeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.fee.fee", "permissions": ["transport-fee:create"] },
    component: () => import('@/views/Pages/Transport/Fee/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportFeeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.fee.fee", "permissions": ["transport-fee:edit"] },
    component: () => import('@/views/Pages/Transport/Fee/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportFeeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.fee.fee", "permissions": ["transport-fee:create"] },
    component: () => import('@/views/Pages/Transport/Fee/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportFeeShow",
    meta: { "trans": "global.detail", "label": "transport.fee.fee" },
    component: () => import('@/views/Pages/Transport/Fee/Show.vue'),
}
],
},
{
    path: "vehicle",
    name: "TransportVehicleIndex",
    redirect: { name: "TransportVehicleList" },
    meta: { "isNotNav": true, "label": "vehicle.vehicle", "icon": "fas fa-right-long", "permissions": ["vehicle:config", "vehicle-trip-record:read", "vehicle-fuel-record:read", "vehicle-service-record:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "TransportVehicleConfig",
    redirect: { name: "TransportVehicleConfigDocumentType" },
    meta: { "isNotNav": true, "label": "transport.vehicle.vehicle", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["vehicle:config"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "TransportVehicleConfigGeneral",
    meta: { "label": "transport.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/General.vue'),
},
{
    path: "type",
    name: "TransportVehicleConfigType",
    redirect: { name: "TransportVehicleConfigTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleConfigTypeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.type.type", "queryType": "vehicle_type", "keySearch": true, "prefix": "TransportVehicleConfigType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleConfigTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.type.type", "queryType": "vehicle_type", "prefix": "TransportVehicleConfigType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleConfigTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.type.type", "queryType": "vehicle_type", "prefix": "TransportVehicleConfigType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "document-types",
    name: "TransportVehicleConfigDocumentType",
    redirect: { name: "TransportVehicleConfigDocumentTypeList" },
    meta: { "label": "transport.vehicle.document_type.document_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleConfigDocumentTypeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.document_type.document_types" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/DocumentType/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleConfigDocumentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.document_type.document_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleConfigDocumentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.document_type.document_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleConfigDocumentTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.document_type.document_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleConfigDocumentTypeShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.document_type.document_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/DocumentType/Show.vue'),
}
],
},
{
    path: "expense-types",
    name: "TransportVehicleConfigExpenseType",
    redirect: { name: "TransportVehicleConfigExpenseTypeList" },
    meta: { "label": "transport.vehicle.expense_type.expense_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleConfigExpenseTypeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.expense_type.expense_types" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/ExpenseType/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleConfigExpenseTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.expense_type.expense_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/ExpenseType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleConfigExpenseTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.expense_type.expense_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/ExpenseType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleConfigExpenseTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.expense_type.expense_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/ExpenseType/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleConfigExpenseTypeShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.expense_type.expense_type" },
    component: () => import('@/views/Pages/Transport/Vehicle/Config/ExpenseType/Show.vue'),
}
],
},
{
    path: "case-type",
    name: "TransportVehicleConfigCaseType",
    redirect: { name: "TransportVehicleConfigCaseTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleConfigCaseTypeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.case_type.case_type", "queryType": "vehicle_case_type", "keySearch": true, "prefix": "TransportVehicleConfigCaseType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleConfigCaseTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.case_type.case_type", "queryType": "vehicle_case_type", "prefix": "TransportVehicleConfigCaseType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleConfigCaseTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.case_type.case_type", "queryType": "vehicle_case_type", "prefix": "TransportVehicleConfigCaseType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "trip-purpose",
    name: "TransportVehicleConfigTripPurpose",
    redirect: { name: "TransportVehicleConfigTripPurposeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleConfigTripPurposeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.trip_purpose.trip_purpose", "queryType": "vehicle_trip_purpose", "keySearch": true, "prefix": "TransportVehicleConfigTripPurpose" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleConfigTripPurposeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.trip_purpose.trip_purpose", "queryType": "vehicle_trip_purpose", "prefix": "TransportVehicleConfigTripPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleConfigTripPurposeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.trip_purpose.trip_purpose", "queryType": "vehicle_trip_purpose", "prefix": "TransportVehicleConfigTripPurpose" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "incharges",
    name: "TransportVehicleIncharge",
    redirect: { name: "TransportVehicleInchargeList" },
    meta: { "isNotNav": true, "label": "transport.vehicle.incharge.incharge", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["vehicle-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleInchargeList",
    meta: { "trans": "global.list", "label": "transport.vehicle.incharge.incharges" },
    component: () => import('@/views/Pages/Transport/Vehicle/Incharge/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.incharge.incharge", "permissions": ["vehicle-incharge:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Incharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.incharge.incharge", "permissions": ["vehicle-incharge:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Incharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.incharge.incharge", "permissions": ["vehicle-incharge:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Incharge/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleInchargeShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.incharge.incharge" },
    component: () => import('@/views/Pages/Transport/Vehicle/Incharge/Show.vue'),
}
],
},
{
    path: "documents",
    name: "TransportVehicleDocument",
    redirect: { name: "TransportVehicleDocumentList" },
    meta: { "label": "transport.vehicle.document.document", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-document:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDocumentList",
    meta: { "trans": "global.list", "label": "transport.vehicle.document.document" },
    component: () => import('@/views/Pages/Transport/Vehicle/Document/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleDocumentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.document.document", "permissions": ["vehicle-document:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Document/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleDocumentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.document.document", "permissions": ["vehicle-document:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Document/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleDocumentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.document.document", "permissions": ["vehicle-document:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Document/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleDocumentShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.document.document" },
    component: () => import('@/views/Pages/Transport/Vehicle/Document/Show.vue'),
}
],
},
{
    path: "trip-records",
    name: "TransportVehicleTripRecord",
    redirect: { name: "TransportVehicleTripRecordList" },
    meta: { "label": "transport.vehicle.trip_record.trip_record", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-trip-record:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleTripRecordList",
    meta: { "trans": "global.list", "label": "transport.vehicle.trip_record.trip_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/TripRecord/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleTripRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.trip_record.trip_record", "permissions": ["vehicle-trip-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/TripRecord/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleTripRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.trip_record.trip_record", "permissions": ["vehicle-trip-record:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/TripRecord/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleTripRecordDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.trip_record.trip_record", "permissions": ["vehicle-trip-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/TripRecord/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleTripRecordShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.trip_record.trip_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/TripRecord/Show.vue'),
}
],
},
{
    path: "fuel-records",
    name: "TransportVehicleFuelRecord",
    redirect: { name: "TransportVehicleFuelRecordList" },
    meta: { "label": "transport.vehicle.fuel_record.fuel_record", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-fuel-record:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleFuelRecordList",
    meta: { "trans": "global.list", "label": "transport.vehicle.fuel_record.fuel_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/FuelRecord/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleFuelRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.fuel_record.fuel_record", "permissions": ["vehicle-fuel-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/FuelRecord/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleFuelRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.fuel_record.fuel_record", "permissions": ["vehicle-fuel-record:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/FuelRecord/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleFuelRecordDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.fuel_record.fuel_record", "permissions": ["vehicle-fuel-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/FuelRecord/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleFuelRecordShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.fuel_record.fuel_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/FuelRecord/Show.vue'),
}
],
},
{
    path: "service-records",
    name: "TransportVehicleServiceRecord",
    redirect: { name: "TransportVehicleServiceRecordList" },
    meta: { "label": "transport.vehicle.service_record.service_record", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-service-record:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleServiceRecordList",
    meta: { "trans": "global.list", "label": "transport.vehicle.service_record.service_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/ServiceRecord/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleServiceRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.service_record.service_record", "permissions": ["vehicle-service-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ServiceRecord/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleServiceRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.service_record.service_record", "permissions": ["vehicle-service-record:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ServiceRecord/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleServiceRecordDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.service_record.service_record", "permissions": ["vehicle-service-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ServiceRecord/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleServiceRecordShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.service_record.service_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/ServiceRecord/Show.vue'),
}
],
},
{
    path: "expense-records",
    name: "TransportVehicleExpenseRecord",
    redirect: { name: "TransportVehicleExpenseRecordList" },
    meta: { "label": "transport.vehicle.expense_record.expense_record", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-expense-record:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleExpenseRecordList",
    meta: { "trans": "global.list", "label": "transport.vehicle.expense_record.expense_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/ExpenseRecord/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleExpenseRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.expense_record.expense_record", "permissions": ["vehicle-expense-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ExpenseRecord/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleExpenseRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.expense_record.expense_record", "permissions": ["vehicle-expense-record:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ExpenseRecord/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleExpenseRecordDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.expense_record.expense_record", "permissions": ["vehicle-expense-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/ExpenseRecord/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleExpenseRecordShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.expense_record.expense_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/ExpenseRecord/Show.vue'),
}
],
},
{
    path: "case-records",
    name: "TransportVehicleCaseRecord",
    redirect: { name: "TransportVehicleCaseRecordList" },
    meta: { "label": "transport.vehicle.case_record.case_record", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle-case-record:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleCaseRecordList",
    meta: { "trans": "global.list", "label": "transport.vehicle.case_record.case_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/CaseRecord/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleCaseRecordCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.case_record.case_record", "permissions": ["vehicle-case-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/CaseRecord/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleCaseRecordEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.case_record.case_record", "permissions": ["vehicle-case-record:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/CaseRecord/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleCaseRecordDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.case_record.case_record", "permissions": ["vehicle-case-record:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/CaseRecord/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleCaseRecordShow",
    meta: { "trans": "global.detail", "label": "transport.vehicle.case_record.case_record" },
    component: () => import('@/views/Pages/Transport/Vehicle/CaseRecord/Show.vue'),
}
],
}
],
},
{
    path: "vehicles",
    name: "TransportVehicle",
    redirect: { name: "TransportVehicleList" },
    meta: { "label": "transport.vehicle.vehicle", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vehicle:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleList",
    meta: { "trans": "global.list", "label": "transport.vehicle.vehicles" },
    component: () => import('@/views/Pages/Transport/Vehicle/Index.vue'),
},
{
    path: "create",
    name: "TransportVehicleCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "transport.vehicle.vehicle", "permissions": ["vehicle:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TransportVehicleEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "transport.vehicle.vehicle", "permissions": ["vehicle:edit"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TransportVehicleDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "transport.vehicle.vehicle", "permissions": ["vehicle:create"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Action.vue'),
},
{
    path: ":uuid",
    name: "TransportVehicleShow",
    redirect: { name: "TransportVehicleShowGeneral" },
    meta: { "trans": "global.detail", "label": "transport.vehicle.vehicle", "permissions": ["vehicle:read"] },
    component: () => import('@/views/Pages/Transport/Vehicle/Show.vue'),
    children: [
{
    path: "",
    name: "TransportVehicleShowIndex",
    redirect: { name: "TransportVehicleShowGeneral" },
},
{
    path: "general",
    name: "TransportVehicleShowGeneral",
    meta: { "type": "read", "action": "read", "trans": "general.general", "label": "general.general" },
    component: () => import('@/views/Pages/Transport/Vehicle/General.vue'),
},
{
    path: "documents",
    name: "TransportVehicleDetailDocument",
    redirect: { name: "TransportVehicleDetailDocumentList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailDocumentList",
    meta: { "trans": "transport.vehicle.document.documents", "label": "transport.vehicle.document.documents" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/Document/Index.vue'),
}
],
},
{
    path: "incharges",
    name: "TransportVehicleDetailIncharge",
    redirect: { name: "TransportVehicleDetailInchargeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailInchargeList",
    meta: { "trans": "transport.vehicle.incharge.incharges", "label": "transport.vehicle.incharge.incharges" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/Incharge/Index.vue'),
}
],
},
{
    path: "expense-records",
    name: "TransportVehicleDetailExpense",
    redirect: { name: "TransportVehicleDetailExpenseList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailExpenseRecordList",
    meta: { "trans": "transport.vehicle.expense_record.expense_records", "label": "transport.vehicle.expense_record.expense_records" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/ExpenseRecord/Index.vue'),
}
],
},
{
    path: "case-records",
    name: "TransportVehicleDetailCase",
    redirect: { name: "TransportVehicleDetailCaseRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailCaseRecordList",
    meta: { "trans": "transport.vehicle.case_record.case_records", "label": "transport.vehicle.case_record.case_records" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/CaseRecord/Index.vue'),
}
],
},
{
    path: "trip-records",
    name: "TransportVehicleDetailTrip",
    redirect: { name: "TransportVehicleDetailTripRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailTripRecordList",
    meta: { "trans": "transport.vehicle.trip_record.trip_records", "label": "transport.vehicle.trip_record.trip_records" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/TripRecord/Index.vue'),
}
],
},
{
    path: "fuel-records",
    name: "TransportVehicleDetailFuel",
    redirect: { name: "TransportVehicleDetailFuelRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailFuelRecordList",
    meta: { "trans": "transport.vehicle.fuel_record.fuel_records", "label": "transport.vehicle.fuel_record.fuel_records" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/FuelRecord/Index.vue'),
}
],
},
{
    path: "service-records",
    name: "TransportVehicleDetailService",
    redirect: { name: "TransportVehicleDetailServiceRecordList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportVehicleDetailServiceRecordList",
    meta: { "trans": "transport.vehicle.service_record.service_records", "label": "transport.vehicle.service_record.service_records" },
    component: () => import('@/views/Pages/Transport/Vehicle/Detail/ServiceRecord/Index.vue'),
}
],
}
],
}
],
},
{
    path: "reports",
    name: "TransportReport",
    redirect: { name: "TransportReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["transport:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "TransportReportList",
    meta: { "trans": "global.list", "label": "transport.report.report" },
    component: () => import('@/views/Pages/Transport/Report/Index.vue'),
},
{
    path: "batch-wise-route",
    name: "TransportReportBatchWiseRoute",
    meta: { "trans": "global.list", "label": "transport.report.batch_wise_route.batch_wise_route", "keySearch": true },
    component: () => import('@/views/Pages/Transport/Report/BatchWiseRoute/Index.vue'),
},
{
    path: "route-wise-student",
    name: "TransportReportRouteWiseStudent",
    meta: { "trans": "global.list", "label": "transport.report.route_wise_student.route_wise_student", "keySearch": true },
    component: () => import('@/views/Pages/Transport/Report/RouteWiseStudent/Index.vue'),
}
],
}
],
},
{
    path: "calendar",
    name: "Calendar",
    redirect: { name: "CalendarHoliday" },
    meta: { "moduleName": "calendar", "label": "calendar.calendar", "icon": "fas fa-calendar", "permissions": ["holiday:read", "celebration:read", "event:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "CalendarConfig",
    redirect: { name: "CalendarConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["calendar:config"] },
    component: () => import('@/views/Pages/Calendar/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "CalendarConfigGeneral",
    meta: { "label": "calendar.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Calendar/Config/General.vue'),
},
{
    path: "event-type",
    name: "CalendarConfigEventType",
    redirect: { name: "CalendarConfigEventTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "CalendarConfigEventTypeList",
    meta: { "trans": "global.list", "label": "calendar.event.type.type", "queryType": "event_type", "keySearch": true, "prefix": "CalendarConfigEventType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "CalendarConfigEventTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "calendar.event.type.type", "queryType": "event_type", "prefix": "CalendarConfigEventType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CalendarConfigEventTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "calendar.event.type.type", "queryType": "event_type", "prefix": "CalendarConfigEventType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "holidays",
    name: "CalendarHoliday",
    redirect: { name: "CalendarHolidayList" },
    meta: { "label": "calendar.holiday.holiday", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["holiday:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CalendarHolidayList",
    meta: { "trans": "global.list", "label": "calendar.holiday.holidays" },
    component: () => import('@/views/Pages/Calendar/Holiday/Index.vue'),
},
{
    path: "create",
    name: "CalendarHolidayCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "calendar.holiday.holiday", "permissions": ["holiday:create"] },
    component: () => import('@/views/Pages/Calendar/Holiday/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CalendarHolidayEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "calendar.holiday.holiday", "permissions": ["holiday:edit"] },
    component: () => import('@/views/Pages/Calendar/Holiday/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CalendarHolidayDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "calendar.holiday.holiday", "permissions": ["holiday:create"] },
    component: () => import('@/views/Pages/Calendar/Holiday/Action.vue'),
},
{
    path: ":uuid",
    name: "CalendarHolidayShow",
    meta: { "trans": "global.detail", "label": "calendar.holiday.holiday" },
    component: () => import('@/views/Pages/Calendar/Holiday/Show.vue'),
}
],
},
{
    path: "celebrations",
    name: "CalendarCelebration",
    redirect: { name: "CalendarCelebrationList" },
    meta: { "label": "calendar.celebration.celebration", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["celebration:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CalendarCelebrationList",
    meta: { "trans": "global.list", "label": "calendar.celebration.celebrations" },
    component: () => import('@/views/Pages/Calendar/Celebration/Index.vue'),
}
],
},
{
    path: "events",
    name: "CalendarEvent",
    redirect: { name: "CalendarEventList" },
    meta: { "label": "calendar.event.event", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["event:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CalendarEventList",
    meta: { "trans": "global.list", "label": "calendar.event.events" },
    component: () => import('@/views/Pages/Calendar/Event/Index.vue'),
},
{
    path: "create",
    name: "CalendarEventCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "calendar.event.event", "permissions": ["event:create"] },
    component: () => import('@/views/Pages/Calendar/Event/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CalendarEventEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "calendar.event.event", "permissions": ["event:edit"] },
    component: () => import('@/views/Pages/Calendar/Event/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CalendarEventDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "calendar.event.event", "permissions": ["event:create"] },
    component: () => import('@/views/Pages/Calendar/Event/Action.vue'),
},
{
    path: ":uuid",
    name: "CalendarEventShow",
    meta: { "trans": "global.detail", "label": "calendar.event.event" },
    component: () => import('@/views/Pages/Calendar/Event/Show.vue'),
}
],
}
],
},
{
    path: "inventories",
    name: "Inventory",
    redirect: { name: "InventoryList" },
    meta: { "isNotNav": true, "label": "inventory.inventory", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["inventory:config"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryList",
    meta: { "trans": "global.list", "label": "inventory.inventory" },
    component: () => import('@/views/Pages/Inventory/Index.vue'),
},
{
    path: "create",
    name: "InventoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.inventory" },
    component: () => import('@/views/Pages/Inventory/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.inventory" },
    component: () => import('@/views/Pages/Inventory/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.inventory" },
    component: () => import('@/views/Pages/Inventory/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryShow",
    meta: { "trans": "global.detail", "label": "inventory.inventory" },
    component: () => import('@/views/Pages/Inventory/Show.vue'),
}
],
},
{
    path: "inventory",
    name: "InventoryIndex",
    redirect: { name: "InventoryStockPurchase" },
    meta: { "moduleName": "inventory", "label": "inventory.inventory", "icon": "fas fa-warehouse", "permissions": ["inventory:config", "stock-category:read", "stock-item:read", "stock-requisition:read", "stock-purchase:read", "stock-transfer:read", "stock-adjustment:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "InventoryConfig",
    redirect: { name: "InventoryConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["inventory:config"] },
    component: () => import('@/views/Pages/Inventory/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "InventoryConfigGeneral",
    meta: { "label": "inventory.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Inventory/Config/General.vue'),
},
{
    path: "unit",
    name: "InventoryConfigUnit",
    redirect: { name: "InventoryConfigUnitList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryConfigUnitList",
    meta: { "trans": "global.list", "label": "inventory.unit.unit", "queryType": "unit", "keySearch": true, "prefix": "InventoryConfigUnit" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "InventoryConfigUnitCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.unit.unit", "queryType": "unit", "prefix": "InventoryConfigUnit" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryConfigUnitEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.unit.unit", "queryType": "unit", "prefix": "InventoryConfigUnit" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "stock_item_condition",
    name: "InventoryConfigStockItemCondition",
    redirect: { name: "InventoryConfigStockItemConditionList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryConfigStockItemConditionList",
    meta: { "trans": "global.list", "label": "inventory.stock_item_condition.stock_item_condition", "queryType": "stock_item_condition", "keySearch": true, "prefix": "InventoryConfigStockItemCondition" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "InventoryConfigStockItemConditionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_item_condition.stock_item_condition", "queryType": "stock_item_condition", "prefix": "InventoryConfigStockItemCondition" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryConfigStockItemConditionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_item_condition.stock_item_condition", "queryType": "stock_item_condition", "prefix": "InventoryConfigStockItemCondition" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "incharges",
    name: "InventoryIncharge",
    redirect: { name: "InventoryInchargeList" },
    meta: { "isNotNav": true, "label": "inventory.incharge.incharge", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["inventory:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryInchargeList",
    meta: { "trans": "global.list", "label": "inventory.incharge.incharges" },
    component: () => import('@/views/Pages/Inventory/Incharge/Index.vue'),
},
{
    path: "create",
    name: "InventoryInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.incharge.incharge" },
    component: () => import('@/views/Pages/Inventory/Incharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.incharge.incharge" },
    component: () => import('@/views/Pages/Inventory/Incharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.incharge.incharge" },
    component: () => import('@/views/Pages/Inventory/Incharge/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryInchargeShow",
    meta: { "trans": "global.detail", "label": "inventory.incharge.incharge" },
    component: () => import('@/views/Pages/Inventory/Incharge/Show.vue'),
}
],
},
{
    path: "vendors",
    name: "InventoryVendor",
    redirect: { name: "InventoryVendorList" },
    meta: { "label": "inventory.vendor.vendor", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vendor:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryVendorList",
    meta: { "trans": "global.list", "label": "inventory.vendor.vendor" },
    component: () => import('@/views/Pages/Inventory/Vendor/Index.vue'),
},
{
    path: "create",
    name: "InventoryVendorCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.vendor.vendor", "permissions": ["vendor:create"] },
    component: () => import('@/views/Pages/Inventory/Vendor/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryVendorEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.vendor.vendor", "permissions": ["vendor:edit"] },
    component: () => import('@/views/Pages/Inventory/Vendor/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryVendorDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.vendor.vendor", "permissions": ["vendor:create"] },
    component: () => import('@/views/Pages/Inventory/Vendor/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryVendorShow",
    meta: { "trans": "global.detail", "label": "inventory.vendor.vendor" },
    component: () => import('@/views/Pages/Inventory/Vendor/Show.vue'),
}
],
},
{
    path: "vendor",
    name: "InventoryVendorIndex",
    redirect: { name: "InventoryVendorList" },
    meta: { "isNotNav": true, "label": "inventory.vendor.vendor", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["vendor:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "statement",
    name: "InventoryVendorStatement",
    meta: { "trans": "global.list", "label": "inventory.vendor.statement.statement" },
    component: () => import('@/views/Pages/Inventory/Vendor/Statement.vue'),
}
],
},
{
    path: "stock-categories",
    name: "InventoryStockCategory",
    redirect: { name: "InventoryStockCategoryList" },
    meta: { "label": "inventory.stock_category.category", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-category:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockCategoryList",
    meta: { "trans": "global.list", "label": "inventory.stock_category.stock_category" },
    component: () => import('@/views/Pages/Inventory/StockCategory/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_category.stock_category", "permissions": ["stock-category:create"] },
    component: () => import('@/views/Pages/Inventory/StockCategory/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_category.stock_category", "permissions": ["stock-category:edit"] },
    component: () => import('@/views/Pages/Inventory/StockCategory/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockCategoryDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_category.stock_category", "permissions": ["stock-category:create"] },
    component: () => import('@/views/Pages/Inventory/StockCategory/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockCategoryShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_category.stock_category" },
    component: () => import('@/views/Pages/Inventory/StockCategory/Show.vue'),
}
],
},
{
    path: "stock-items",
    name: "InventoryStockItem",
    redirect: { name: "InventoryStockItemList" },
    meta: { "label": "inventory.stock_item.item", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-item:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockItemList",
    meta: { "trans": "global.list", "label": "inventory.stock_item.stock_item" },
    component: () => import('@/views/Pages/Inventory/StockItem/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockItemCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_item.stock_item", "permissions": ["stock-item:create"] },
    component: () => import('@/views/Pages/Inventory/StockItem/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockItemEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_item.stock_item", "permissions": ["stock-item:edit"] },
    component: () => import('@/views/Pages/Inventory/StockItem/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockItemDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_item.stock_item", "permissions": ["stock-item:create"] },
    component: () => import('@/views/Pages/Inventory/StockItem/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockItemShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_item.stock_item" },
    component: () => import('@/views/Pages/Inventory/StockItem/Show.vue'),
}
],
},
{
    path: "stock-item",
    name: "InventoryStockItemIndex",
    redirect: { name: "InventoryStockItemCopy" },
    meta: { "isNotNav": true, "label": "inventory.stock_item.stock_item" },
    children: [
{
    path: "copies",
    name: "InventoryStockItemCopy",
    redirect: { name: "InventoryStockItemCopyList" },
    meta: { "isNotNav": true, "label": "inventory.stock_item.copy.copy", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-item:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockItemCopyList",
    meta: { "trans": "global.list", "label": "inventory.stock_item.copy.copy" },
    component: () => import('@/views/Pages/Inventory/StockItemCopy/Index.vue'),
}
],
}
],
},
{
    path: "stock-item/labels",
    name: "InventoryStockItemLabel",
    redirect: { name: "InventoryStockItemLabelPrint" },
    meta: { "isNotNav": true, "label": "inventory.stock_item.label", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["stock-item:create"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockItemLabelPrint",
    meta: { "trans": "global.print", "label": "inventory.stock_item.label" },
    component: () => import('@/views/Pages/Inventory/StockItemLabel/Print.vue'),
}
],
},
{
    path: "stock-requisitions",
    name: "InventoryStockRequisition",
    redirect: { name: "InventoryStockRequisitionList" },
    meta: { "label": "inventory.stock_requisition.requisition", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-requisition:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockRequisitionList",
    meta: { "trans": "global.list", "label": "inventory.stock_requisition.stock_requisition" },
    component: () => import('@/views/Pages/Inventory/StockRequisition/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockRequisitionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_requisition.stock_requisition", "permissions": ["stock-requisition:create"] },
    component: () => import('@/views/Pages/Inventory/StockRequisition/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockRequisitionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_requisition.stock_requisition", "permissions": ["stock-requisition:edit"] },
    component: () => import('@/views/Pages/Inventory/StockRequisition/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockRequisitionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_requisition.stock_requisition", "permissions": ["stock-requisition:create"] },
    component: () => import('@/views/Pages/Inventory/StockRequisition/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockRequisitionShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_requisition.stock_requisition" },
    component: () => import('@/views/Pages/Inventory/StockRequisition/Show.vue'),
}
],
},
{
    path: "stock-purchases",
    name: "InventoryStockPurchase",
    redirect: { name: "InventoryStockPurchaseList" },
    meta: { "label": "inventory.stock_purchase.purchase", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-purchase:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockPurchaseList",
    meta: { "trans": "global.list", "label": "inventory.stock_purchase.stock_purchase" },
    component: () => import('@/views/Pages/Inventory/StockPurchase/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockPurchaseCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_purchase.stock_purchase", "permissions": ["stock-purchase:create"] },
    component: () => import('@/views/Pages/Inventory/StockPurchase/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockPurchaseEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_purchase.stock_purchase", "permissions": ["stock-purchase:edit"] },
    component: () => import('@/views/Pages/Inventory/StockPurchase/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockPurchaseDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_purchase.stock_purchase", "permissions": ["stock-purchase:create"] },
    component: () => import('@/views/Pages/Inventory/StockPurchase/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockPurchaseShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_purchase.stock_purchase" },
    component: () => import('@/views/Pages/Inventory/StockPurchase/Show.vue'),
}
],
},
{
    path: "stock-returns",
    name: "InventoryStockReturn",
    redirect: { name: "InventoryStockReturnList" },
    meta: { "label": "inventory.stock_return.return", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-return:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockReturnList",
    meta: { "trans": "global.list", "label": "inventory.stock_return.stock_return" },
    component: () => import('@/views/Pages/Inventory/StockReturn/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockReturnCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_return.stock_return", "permissions": ["stock-return:create"] },
    component: () => import('@/views/Pages/Inventory/StockReturn/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockReturnEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_return.stock_return", "permissions": ["stock-return:edit"] },
    component: () => import('@/views/Pages/Inventory/StockReturn/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockReturnDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_return.stock_return", "permissions": ["stock-return:create"] },
    component: () => import('@/views/Pages/Inventory/StockReturn/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockReturnShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_return.stock_return" },
    component: () => import('@/views/Pages/Inventory/StockReturn/Show.vue'),
}
],
},
{
    path: "stock-transfers",
    name: "InventoryStockTransfer",
    redirect: { name: "InventoryStockTransferList" },
    meta: { "label": "inventory.stock_transfer.transfer", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-transfer:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockTransferList",
    meta: { "trans": "global.list", "label": "inventory.stock_transfer.stock_transfer" },
    component: () => import('@/views/Pages/Inventory/StockTransfer/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockTransferCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_transfer.stock_transfer", "permissions": ["stock-transfer:create"] },
    component: () => import('@/views/Pages/Inventory/StockTransfer/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockTransferEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_transfer.stock_transfer", "permissions": ["stock-transfer:edit"] },
    component: () => import('@/views/Pages/Inventory/StockTransfer/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockTransferDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_transfer.stock_transfer", "permissions": ["stock-transfer:create"] },
    component: () => import('@/views/Pages/Inventory/StockTransfer/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockTransferShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_transfer.stock_transfer" },
    component: () => import('@/views/Pages/Inventory/StockTransfer/Show.vue'),
}
],
},
{
    path: "stock-adjustments",
    name: "InventoryStockAdjustment",
    redirect: { name: "InventoryStockAdjustmentList" },
    meta: { "label": "inventory.stock_adjustment.adjustment", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["stock-adjustment:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryStockAdjustmentList",
    meta: { "trans": "global.list", "label": "inventory.stock_adjustment.stock_adjustment" },
    component: () => import('@/views/Pages/Inventory/StockAdjustment/Index.vue'),
},
{
    path: "create",
    name: "InventoryStockAdjustmentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "inventory.stock_adjustment.stock_adjustment", "permissions": ["stock-adjustment:create"] },
    component: () => import('@/views/Pages/Inventory/StockAdjustment/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "InventoryStockAdjustmentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "inventory.stock_adjustment.stock_adjustment", "permissions": ["stock-adjustment:edit"] },
    component: () => import('@/views/Pages/Inventory/StockAdjustment/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "InventoryStockAdjustmentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "inventory.stock_adjustment.stock_adjustment", "permissions": ["stock-adjustment:create"] },
    component: () => import('@/views/Pages/Inventory/StockAdjustment/Action.vue'),
},
{
    path: ":uuid",
    name: "InventoryStockAdjustmentShow",
    meta: { "trans": "global.detail", "label": "inventory.stock_adjustment.stock_adjustment" },
    component: () => import('@/views/Pages/Inventory/StockAdjustment/Show.vue'),
}
],
},
{
    path: "reports",
    name: "InventoryReport",
    redirect: { name: "InventoryReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["inventory:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "InventoryReportList",
    meta: { "trans": "global.list", "label": "inventory.report.report" },
    component: () => import('@/views/Pages/Inventory/Report/Index.vue'),
},
{
    path: "item-summary",
    name: "InventoryReportItemSummary",
    meta: { "trans": "global.list", "label": "inventory.report.item_summary.item_summary", "keySearch": true },
    component: () => import('@/views/Pages/Inventory/Report/ItemSummary/Index.vue'),
}
],
}
],
},
{
    path: "communication",
    name: "Communication",
    redirect: { name: "CommunicationAnnouncement" },
    meta: { "moduleName": "communication", "label": "communication.communication", "icon": "fas fa-bullhorn", "permissions": ["communication:config", "announcement:read", "email:read", "sms:read", "push-message:read", "whatsapp:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "CommunicationConfig",
    redirect: { name: "CommunicationConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["communication:config"] },
    component: () => import('@/views/Pages/Communication/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "CommunicationConfigGeneral",
    meta: { "label": "communication.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Communication/Config/General.vue'),
},
{
    path: "announcement-type",
    name: "CommunicationConfigAnnouncementType",
    redirect: { name: "CommunicationConfigAnnouncementTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationConfigAnnouncementTypeList",
    meta: { "trans": "global.list", "label": "communication.announcement.type.type", "queryType": "announcement_type", "keySearch": true, "prefix": "CommunicationConfigAnnouncementType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "CommunicationConfigAnnouncementTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "communication.announcement.type.type", "queryType": "announcement_type", "prefix": "CommunicationConfigAnnouncementType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CommunicationConfigAnnouncementTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "communication.announcement.type.type", "queryType": "announcement_type", "prefix": "CommunicationConfigAnnouncementType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "announcements",
    name: "CommunicationAnnouncement",
    redirect: { name: "CommunicationAnnouncementList" },
    meta: { "label": "communication.announcement.announcement", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["announcement:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationAnnouncementList",
    meta: { "trans": "global.list", "label": "communication.announcement.announcements" },
    component: () => import('@/views/Pages/Communication/Announcement/Index.vue'),
},
{
    path: "create",
    name: "CommunicationAnnouncementCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "communication.announcement.announcement", "permissions": ["announcement:create"] },
    component: () => import('@/views/Pages/Communication/Announcement/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CommunicationAnnouncementEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "communication.announcement.announcement", "permissions": ["announcement:edit"] },
    component: () => import('@/views/Pages/Communication/Announcement/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CommunicationAnnouncementDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "communication.announcement.announcement", "permissions": ["announcement:create"] },
    component: () => import('@/views/Pages/Communication/Announcement/Action.vue'),
},
{
    path: ":uuid",
    name: "CommunicationAnnouncementShow",
    meta: { "trans": "global.detail", "label": "communication.announcement.announcement" },
    component: () => import('@/views/Pages/Communication/Announcement/Show.vue'),
}
],
},
{
    path: "emails",
    name: "CommunicationEmail",
    redirect: { name: "CommunicationEmailList" },
    meta: { "label": "communication.email.email", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["email:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationEmailList",
    meta: { "trans": "global.list", "label": "communication.email.emails" },
    component: () => import('@/views/Pages/Communication/Email/Index.vue'),
},
{
    path: "new",
    name: "CommunicationEmailNew",
    meta: { "type": "new", "action": "create", "trans": "global.add", "label": "communication.email.email", "permissions": ["email:send"] },
    component: () => import('@/views/Pages/Communication/Email/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CommunicationEmailDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "communication.email.email", "permissions": ["email:create"] },
    component: () => import('@/views/Pages/Communication/Email/Action.vue'),
},
{
    path: ":uuid",
    name: "CommunicationEmailShow",
    meta: { "trans": "global.detail", "label": "communication.email.email" },
    component: () => import('@/views/Pages/Communication/Email/Show.vue'),
}
],
},
{
    path: "sms",
    name: "CommunicationSMS",
    redirect: { name: "CommunicationSMSList" },
    meta: { "label": "communication.sms.sms", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["sms:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationSMSList",
    meta: { "trans": "global.list", "label": "communication.sms.sms" },
    component: () => import('@/views/Pages/Communication/SMS/Index.vue'),
},
{
    path: "new",
    name: "CommunicationSMSNew",
    meta: { "type": "new", "action": "create", "trans": "global.add", "label": "communication.sms.sms", "permissions": ["sms:send"] },
    component: () => import('@/views/Pages/Communication/SMS/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CommunicationSMSDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "communication.sms.sms", "permissions": ["sms:create"] },
    component: () => import('@/views/Pages/Communication/SMS/Action.vue'),
},
{
    path: ":uuid",
    name: "CommunicationSMSShow",
    meta: { "trans": "global.detail", "label": "communication.sms.sms" },
    component: () => import('@/views/Pages/Communication/SMS/Show.vue'),
}
],
},
{
    path: "whatsapp",
    name: "CommunicationWhatsApp",
    redirect: { name: "CommunicationWhatsAppList" },
    meta: { "label": "communication.whatsapp.whatsapp", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["whatsapp:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationWhatsAppList",
    meta: { "trans": "global.list", "label": "communication.whatsapp.whatsapp" },
    component: () => import('@/views/Pages/Communication/WhatsApp/Index.vue'),
},
{
    path: "new",
    name: "CommunicationWhatsAppNew",
    meta: { "type": "new", "action": "create", "trans": "global.add", "label": "communication.whatsapp.whatsapp", "permissions": ["whatsapp:send"] },
    component: () => import('@/views/Pages/Communication/WhatsApp/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CommunicationWhatsAppDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "communication.whatsapp.whatsapp", "permissions": ["whatsapp:create"] },
    component: () => import('@/views/Pages/Communication/WhatsApp/Action.vue'),
},
{
    path: ":uuid",
    name: "CommunicationWhatsAppShow",
    meta: { "trans": "global.detail", "label": "communication.whatsapp.whatsapp" },
    component: () => import('@/views/Pages/Communication/WhatsApp/Show.vue'),
}
],
},
{
    path: "push-messages",
    name: "CommunicationPushMessage",
    redirect: { name: "CommunicationPushMessageList" },
    meta: { "label": "communication.push_message.push_message", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["push-message:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CommunicationPushMessageList",
    meta: { "trans": "global.list", "label": "communication.push_message.push_message" },
    component: () => import('@/views/Pages/Communication/PushMessage/Index.vue'),
},
{
    path: "new",
    name: "CommunicationPushMessageNew",
    meta: { "type": "new", "action": "create", "trans": "global.add", "label": "communication.push_message.push_message", "permissions": ["push-message:send"] },
    component: () => import('@/views/Pages/Communication/PushMessage/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CommunicationPushMessageDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "communication.push_message.push_message", "permissions": ["push-message:create"] },
    component: () => import('@/views/Pages/Communication/PushMessage/Action.vue'),
},
{
    path: ":uuid",
    name: "CommunicationPushMessageShow",
    meta: { "trans": "global.detail", "label": "communication.push_message.push_message" },
    component: () => import('@/views/Pages/Communication/PushMessage/Show.vue'),
}
],
}
],
},
{
    path: "library",
    name: "Library",
    redirect: { name: "LibraryBook" },
    meta: { "moduleName": "library", "label": "library.library", "icon": "fas fa-book", "permissions": ["library:config", "book:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "LibraryConfig",
    redirect: { name: "LibraryConfigBookAuthor" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["library:config"] },
    component: () => import('@/views/Pages/Library/Config/Index.vue'),
    children: [
{
    path: "",
    name: "LibraryConfigIndex",
    redirect: { name: "LibraryConfigGeneral" },
},
{
    path: "general",
    name: "LibraryConfigGeneral",
    meta: { "label": "library.config.config", "icon": "far fa-books", "key": "general" },
    component: () => import('@/views/Pages/Library/Config/General.vue'),
},
{
    path: "book-author",
    name: "LibraryConfigBookAuthor",
    redirect: { name: "LibraryConfigBookAuthorList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookAuthorList",
    meta: { "trans": "global.list", "label": "library.book_author.book_author", "queryType": "book_author", "keySearch": true, "prefix": "LibraryConfigBookAuthor" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookAuthorCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_author.book_author", "queryType": "book_author", "prefix": "LibraryConfigBookAuthor" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookAuthorEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_author.book_author", "queryType": "book_author", "prefix": "LibraryConfigBookAuthor" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "book-language",
    name: "LibraryConfigBookLanguage",
    redirect: { name: "LibraryConfigBookLanguageList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookLanguageList",
    meta: { "trans": "global.list", "label": "library.book_language.book_language", "queryType": "book_language", "keySearch": true, "prefix": "LibraryConfigBookLanguage" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookLanguageCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_language.book_language", "queryType": "book_language", "prefix": "LibraryConfigBookLanguage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookLanguageEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_language.book_language", "queryType": "book_language", "prefix": "LibraryConfigBookLanguage" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "book-publisher",
    name: "LibraryConfigBookPublisher",
    redirect: { name: "LibraryConfigBookPublisherList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookPublisherList",
    meta: { "trans": "global.list", "label": "library.book_publisher.book_publisher", "queryType": "book_publisher", "keySearch": true, "prefix": "LibraryConfigBookPublisher" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookPublisherCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_publisher.book_publisher", "queryType": "book_publisher", "prefix": "LibraryConfigBookPublisher" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookPublisherEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_publisher.book_publisher", "queryType": "book_publisher", "prefix": "LibraryConfigBookPublisher" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "book-topic",
    name: "LibraryConfigBookTopic",
    redirect: { name: "LibraryConfigBookTopicList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookTopicList",
    meta: { "trans": "global.list", "label": "library.book_topic.book_topic", "queryType": "book_topic", "keySearch": true, "prefix": "LibraryConfigBookTopic" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookTopicCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_topic.book_topic", "queryType": "book_topic", "prefix": "LibraryConfigBookTopic" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookTopicEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_topic.book_topic", "queryType": "book_topic", "prefix": "LibraryConfigBookTopic" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "book-condition",
    name: "LibraryConfigBookCondition",
    redirect: { name: "LibraryConfigBookConditionList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookConditionList",
    meta: { "trans": "global.list", "label": "library.book_condition.book_condition", "queryType": "book_condition", "keySearch": true, "prefix": "LibraryConfigBookCondition" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookConditionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_condition.book_condition", "queryType": "book_condition", "prefix": "LibraryConfigBookCondition" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookConditionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_condition.book_condition", "queryType": "book_condition", "prefix": "LibraryConfigBookCondition" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "book-category",
    name: "LibraryConfigBookCategory",
    redirect: { name: "LibraryConfigBookCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryConfigBookCategoryList",
    meta: { "trans": "global.list", "label": "library.book_category.book_category", "queryType": "book_category", "keySearch": true, "prefix": "LibraryConfigBookCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "LibraryConfigBookCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_category.book_category", "queryType": "book_category", "prefix": "LibraryConfigBookCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryConfigBookCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_category.book_category", "queryType": "book_category", "prefix": "LibraryConfigBookCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "books",
    name: "LibraryBook",
    redirect: { name: "LibraryBookList" },
    meta: { "label": "library.book.book", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["book:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryBookList",
    meta: { "trans": "global.list", "label": "library.book.book" },
    component: () => import('@/views/Pages/Library/Book/Index.vue'),
},
{
    path: "create",
    name: "LibraryBookCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book.book", "permissions": ["book:create"] },
    component: () => import('@/views/Pages/Library/Book/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryBookEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book.book", "permissions": ["book:edit"] },
    component: () => import('@/views/Pages/Library/Book/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "LibraryBookDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "library.book.book", "permissions": ["book:create"] },
    component: () => import('@/views/Pages/Library/Book/Action.vue'),
},
{
    path: ":uuid",
    name: "LibraryBookShow",
    meta: { "trans": "global.detail", "label": "library.book.book" },
    component: () => import('@/views/Pages/Library/Book/Show.vue'),
}
],
},
{
    path: "book",
    name: "LibraryBookIndex",
    redirect: { name: "LibraryBookCopy" },
    meta: { "isNotNav": true, "label": "library.book.book" },
    children: [
{
    path: "copies",
    name: "LibraryBookCopy",
    redirect: { name: "LibraryBookCopyList" },
    meta: { "isNotNav": true, "label": "library.book.copy.copy", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["book:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryBookCopyList",
    meta: { "trans": "global.list", "label": "library.book.copy.copy" },
    component: () => import('@/views/Pages/Library/BookCopy/Index.vue'),
}
],
}
],
},
{
    path: "book/labels",
    name: "LibraryBookLabel",
    redirect: { name: "LibraryBookLabelPrint" },
    meta: { "isNotNav": true, "label": "library.book.label", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["book:create"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryBookLabelPrint",
    meta: { "trans": "global.print", "label": "library.book.label" },
    component: () => import('@/views/Pages/Library/BookLabel/Print.vue'),
}
],
},
{
    path: "book-additions",
    name: "LibraryBookAddition",
    redirect: { name: "LibraryBookAdditionList" },
    meta: { "label": "library.book_addition.book_addition", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["book-addition:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryBookAdditionList",
    meta: { "trans": "global.list", "label": "library.book_addition.book_addition" },
    component: () => import('@/views/Pages/Library/BookAddition/Index.vue'),
},
{
    path: "create",
    name: "LibraryBookAdditionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.book_addition.book_addition", "permissions": ["book-addition:create"] },
    component: () => import('@/views/Pages/Library/BookAddition/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryBookAdditionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.book_addition.book_addition", "permissions": ["book-addition:edit"] },
    component: () => import('@/views/Pages/Library/BookAddition/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "LibraryBookAdditionDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "library.book_addition.book_addition", "permissions": ["book-addition:create"] },
    component: () => import('@/views/Pages/Library/BookAddition/Action.vue'),
},
{
    path: ":uuid",
    name: "LibraryBookAdditionShow",
    meta: { "trans": "global.detail", "label": "library.book_addition.book_addition" },
    component: () => import('@/views/Pages/Library/BookAddition/Show.vue'),
}
],
},
{
    path: "transactions",
    name: "LibraryTransaction",
    redirect: { name: "LibraryTransactionList" },
    meta: { "label": "library.transaction.issue_return", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["book:issue", "book:return"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryTransactionList",
    meta: { "trans": "global.list", "label": "library.transaction.transaction" },
    component: () => import('@/views/Pages/Library/Transaction/Index.vue'),
},
{
    path: "create",
    name: "LibraryTransactionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "library.transaction.transaction", "permissions": ["book:issue"] },
    component: () => import('@/views/Pages/Library/Transaction/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "LibraryTransactionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "library.transaction.transaction", "permissions": ["book:issue"] },
    component: () => import('@/views/Pages/Library/Transaction/Action.vue'),
},
{
    path: ":uuid",
    name: "LibraryTransactionShow",
    meta: { "trans": "global.detail", "label": "library.transaction.transaction" },
    component: () => import('@/views/Pages/Library/Transaction/Show.vue'),
}
],
},
{
    path: "book-wise-transactions",
    name: "LibraryBookWiseTransaction",
    redirect: { name: "LibraryBookWiseTransactionList" },
    meta: { "isNotNav": true, "label": "library.transaction.book_wise_issue_return", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["book:issue", "book:return"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryBookWiseTransactionList",
    meta: { "trans": "global.list", "label": "library.transaction.book_wise_issue_return" },
    component: () => import('@/views/Pages/Library/BookWiseTransaction/Index.vue'),
}
],
},
{
    path: "reports",
    name: "LibraryReport",
    redirect: { name: "LibraryReportList" },
    meta: { "label": "general.report", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["library:report"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "LibraryReportList",
    meta: { "trans": "global.list", "label": "library.report.report" },
    component: () => import('@/views/Pages/Library/Report/Index.vue'),
},
{
    path: "top-borrower",
    name: "LibraryReportTopBorrower",
    meta: { "trans": "global.list", "label": "library.report.top_borrower.top_borrower", "keySearch": true },
    component: () => import('@/views/Pages/Library/Report/TopBorrower/Index.vue'),
},
{
    path: "top-book",
    name: "LibraryReportTopBorrowedBook",
    meta: { "trans": "global.list", "label": "library.report.top_borrowed_book.top_borrowed_book", "keySearch": true },
    component: () => import('@/views/Pages/Library/Report/TopBorrowedBook/Index.vue'),
}
],
}
],
},
{
    path: "approval",
    name: "Approval",
    redirect: { name: "ApprovalRequest" },
    meta: { "moduleName": "approval", "label": "approval.approval", "icon": "fas fa-thumbs-up", "permissions": ["approval:config", "approval-type:manage", "approval-request:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ApprovalConfig",
    redirect: { name: "ApprovalConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["approval:config"] },
    component: () => import('@/views/Pages/Approval/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ApprovalConfigGeneral",
    meta: { "label": "approval.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Approval/Config/General.vue'),
},
{
    path: "request-group",
    name: "ApprovalConfigRequestGroup",
    redirect: { name: "ApprovalConfigRequestGroupList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ApprovalConfigRequestGroupList",
    meta: { "trans": "global.list", "label": "approval.request.group.group", "queryType": "approval_request_group", "keySearch": true, "prefix": "ApprovalConfigRequestGroup" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ApprovalConfigRequestGroupCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "approval.request.group.group", "queryType": "approval_request_group", "prefix": "ApprovalConfigRequestGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ApprovalConfigRequestGroupEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "approval.request.group.group", "queryType": "approval_request_group", "prefix": "ApprovalConfigRequestGroup" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "request-nature",
    name: "ApprovalConfigRequestNature",
    redirect: { name: "ApprovalConfigRequestNatureList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ApprovalConfigRequestNatureList",
    meta: { "trans": "global.list", "label": "approval.request.nature.nature", "queryType": "approval_request_nature", "keySearch": true, "prefix": "ApprovalConfigRequestNature" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ApprovalConfigRequestNatureCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "approval.request.nature.nature", "queryType": "approval_request_nature", "prefix": "ApprovalConfigRequestNature" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ApprovalConfigRequestNatureEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "approval.request.nature.nature", "queryType": "approval_request_nature", "prefix": "ApprovalConfigRequestNature" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "request-priority",
    name: "ApprovalConfigRequestPriority",
    redirect: { name: "ApprovalConfigRequestPriorityList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ApprovalConfigRequestPriorityList",
    meta: { "trans": "global.list", "label": "approval.request.priority.priority", "queryType": "approval_request_priority", "keySearch": true, "prefix": "ApprovalConfigRequestPriority" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ApprovalConfigRequestPriorityCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "approval.request.priority.priority", "queryType": "approval_request_priority", "prefix": "ApprovalConfigRequestPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ApprovalConfigRequestPriorityEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "approval.request.priority.priority", "queryType": "approval_request_priority", "prefix": "ApprovalConfigRequestPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "types",
    name: "ApprovalType",
    redirect: { name: "ApprovalTypeList" },
    meta: { "label": "approval.type.type", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["approval-type:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ApprovalTypeList",
    meta: { "trans": "global.list", "label": "approval.type.types" },
    component: () => import('@/views/Pages/Approval/Type/Index.vue'),
},
{
    path: "create",
    name: "ApprovalTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "approval.type.type" },
    component: () => import('@/views/Pages/Approval/Type/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ApprovalTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "approval.type.type" },
    component: () => import('@/views/Pages/Approval/Type/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ApprovalTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "approval.type.type" },
    component: () => import('@/views/Pages/Approval/Type/Action.vue'),
},
{
    path: ":uuid",
    name: "ApprovalTypeShow",
    meta: { "trans": "global.detail", "label": "approval.type.type" },
    component: () => import('@/views/Pages/Approval/Type/Show.vue'),
}
],
},
{
    path: "requests",
    name: "ApprovalRequest",
    redirect: { name: "ApprovalRequestList" },
    meta: { "label": "approval.request.request", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["approval-request:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ApprovalRequestList",
    meta: { "trans": "global.list", "label": "approval.request.requests" },
    component: () => import('@/views/Pages/Approval/Request/Index.vue'),
},
{
    path: "create",
    name: "ApprovalRequestCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "approval.request.request", "permissions": ["approval-request:create"] },
    component: () => import('@/views/Pages/Approval/Request/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ApprovalRequestEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "approval.request.request", "permissions": ["approval-request:edit"] },
    component: () => import('@/views/Pages/Approval/Request/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ApprovalRequestDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "approval.request.request", "permissions": ["approval-request:create"] },
    component: () => import('@/views/Pages/Approval/Request/Action.vue'),
},
{
    path: ":uuid",
    name: "ApprovalRequestShow",
    meta: { "trans": "global.detail", "label": "approval.request.request" },
    component: () => import('@/views/Pages/Approval/Request/Show.vue'),
}
],
},
{
    path: "requests/pending",
    name: "ApprovalRequestPendingList",
    meta: { "label": "approval.request.pending_requests", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["approval-request:read"], "keySearch": true },
    component: () => import('@/views/Pages/Approval/Request/Pending.vue'),
},
{
    path: "requests/processed",
    name: "ApprovalRequestProcessedList",
    meta: { "label": "approval.request.processed_requests", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["approval-request:read"], "keySearch": true },
    component: () => import('@/views/Pages/Approval/Request/Processed.vue'),
}
],
},
{
    path: "task",
    name: "Task",
    redirect: { name: "TaskList" },
    meta: { "moduleName": "task", "label": "task.task", "icon": "fas fa-list-check", "permissions": ["task:read"], "keySearch": true },
    component: RouterView,
},
{
    path: "tasks",
    name: "Tasks",
    redirect: { name: "TaskList" },
    meta: { "isNotNav": true, "label": "task.tasks", "icon": "fas fa-list-check", "permissions": ["task:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskList",
    meta: { "label": "task.tasks", "icon": "fas fa-chevron-right", "permissions": ["task:read"] },
    component: () => import('@/views/Pages/Task/Index.vue'),
},
{
    path: "dashboard",
    name: "TaskDashboard",
    meta: { "noPadding": true, "label": "task.dashboard.dashboard", "icon": "fas fa-home", "permissions": ["task:read"] },
    component: () => import('@/views/Pages/Task/Dashboard/Index.vue'),
},
{
    path: "config",
    name: "TaskConfig",
    redirect: { name: "TaskConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["task:config"] },
    component: () => import('@/views/Pages/Task/Config/Index.vue'),
    children: [
{
    path: "",
    name: "TaskConfigIndex",
    redirect: { name: "TaskConfigGeneral" },
},
{
    path: "general",
    name: "TaskConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Task/Config/General.vue'),
},
{
    path: "categories",
    name: "TaskConfigCategory",
    redirect: { name: "TaskConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskConfigCategoryList",
    meta: { "trans": "global.list", "label": "task.category.category", "queryType": "task_category", "keySearch": true, "prefix": "TaskConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TaskConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "task.category.category", "queryType": "task_category", "prefix": "TaskConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TaskConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "task.category.category", "queryType": "task_category", "prefix": "TaskConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "priorities",
    name: "TaskConfigPriority",
    redirect: { name: "TaskConfigPriorityList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskConfigPriorityList",
    meta: { "trans": "global.list", "label": "task.priority.priority", "queryType": "task_priority", "keySearch": true, "prefix": "TaskConfigPriority" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TaskConfigPriorityCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "task.priority.priority", "queryType": "task_priority", "prefix": "TaskConfigPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TaskConfigPriorityEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "task.priority.priority", "queryType": "task_priority", "prefix": "TaskConfigPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "lists",
    name: "TaskConfigList",
    redirect: { name: "TaskConfigListList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskConfigListList",
    meta: { "trans": "global.list", "label": "task.list.list", "queryType": "task_list", "keySearch": true, "prefix": "TaskConfigList" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "TaskConfigListCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "task.list.list", "queryType": "task_list", "prefix": "TaskConfigList" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TaskConfigListEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "task.list.list", "queryType": "task_list", "prefix": "TaskConfigList" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "create",
    name: "TaskCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "task.task" },
    component: () => import('@/views/Pages/Task/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "TaskEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "task.task", "permissions": ["task:edit"] },
    component: () => import('@/views/Pages/Task/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "TaskDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "task.task", "permissions": ["task:create"] },
    component: () => import('@/views/Pages/Task/Action.vue'),
},
{
    path: ":uuid",
    name: "TaskShow",
    redirect: { name: "TaskShowGeneral" },
    meta: { "trans": "global.detail", "label": "task.task", "permissions": ["task:read"] },
    component: () => import('@/views/Pages/Task/Show.vue'),
    children: [
{
    path: "",
    name: "TaskShowIndex",
    redirect: { name: "TaskShowGeneral" },
},
{
    path: "general",
    name: "TaskShowGeneral",
    meta: { "type": "read", "action": "read", "trans": "general.general", "label": "general.general" },
    component: () => import('@/views/Pages/Task/General.vue'),
},
{
    path: "checklists",
    name: "TaskChecklist",
    redirect: { name: "TaskChecklistList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskChecklistList",
    meta: { "trans": "task.checklist.checklist", "label": "task.checklist.checklist" },
    component: () => import('@/views/Pages/Task/Checklist/Index.vue'),
}
],
},
{
    path: "members",
    name: "TaskMember",
    redirect: { name: "TaskMemberList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskMemberList",
    meta: { "trans": "task.member.member", "label": "task.member.member" },
    component: () => import('@/views/Pages/Task/Member/Index.vue'),
}
],
},
{
    path: "media",
    name: "TaskMedia",
    redirect: { name: "TaskMediaList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskMediaList",
    meta: { "trans": "task.media.media", "label": "task.media.media" },
    component: () => import('@/views/Pages/Task/Media/Index.vue'),
}
],
},
{
    path: "repeats",
    name: "TaskRepeat",
    redirect: { name: "TaskRepeatList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "TaskRepeatList",
    meta: { "trans": "task.repeat.repeat", "label": "task.repeat.repeat" },
    component: () => import('@/views/Pages/Task/Repeat/Index.vue'),
}
],
}
],
}
],
},
{
    path: "helpdesk",
    name: "Helpdesk",
    redirect: { name: "HelpdeskFaqList" },
    meta: { "moduleName": "helpdesk", "label": "helpdesk.helpdesk", "icon": "fas fa-headset", "hideChildren": false, "permissions": ["faq:read"] },
    component: RouterView,
    children: [
{
    path: "faq",
    name: "HelpdeskFaqIndex",
    redirect: { name: "HelpdeskFaqCategoryList" },
    meta: { "label": "helpdesk.faq.faq", "icon": "fas fa-file-lines", "isNotNav": true, "hideChildren": true, "permissions": ["helpdesk:config"] },
    component: RouterView,
},
{
    path: "faqs",
    name: "HelpdeskFaq",
    redirect: { name: "HelpdeskFaqList" },
    meta: { "label": "helpdesk.faq.faq", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["faq:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "HelpdeskFaqList",
    meta: { "trans": "global.list", "label": "helpdesk.faq.faqs" },
    component: () => import('@/views/Pages/Helpdesk/Faq/Index.vue'),
},
{
    path: "create",
    name: "HelpdeskFaqCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "helpdesk.faq.faq", "permissions": ["faq:create"] },
    component: () => import('@/views/Pages/Helpdesk/Faq/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HelpdeskFaqEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "helpdesk.faq.faq", "permissions": ["faq:edit"] },
    component: () => import('@/views/Pages/Helpdesk/Faq/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HelpdeskFaqDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "helpdesk.faq.faq", "permissions": ["faq:create"] },
    component: () => import('@/views/Pages/Helpdesk/Faq/Action.vue'),
},
{
    path: ":uuid",
    name: "HelpdeskFaqShow",
    meta: { "trans": "global.detail", "label": "helpdesk.faq.faq" },
    component: () => import('@/views/Pages/Helpdesk/Faq/Show.vue'),
}
],
},
{
    path: "ticket",
    name: "HelpdeskTicketIndex",
    redirect: { name: "HelpdeskTicketCategoryList" },
    meta: { "label": "helpdesk.ticket.ticket", "icon": "fas fa-file-lines", "isNotNav": true, "hideChildren": true, "permissions": ["helpdesk:config"] },
    component: RouterView,
},
{
    path: "tickets",
    name: "HelpdeskTicket",
    redirect: { name: "HelpdeskTicketList" },
    meta: { "label": "helpdesk.ticket.ticket", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["ticket:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "HelpdeskTicketList",
    meta: { "trans": "global.list", "label": "helpdesk.ticket.tickets" },
    component: () => import('@/views/Pages/Helpdesk/Ticket/Index.vue'),
},
{
    path: "create",
    name: "HelpdeskTicketCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "helpdesk.ticket.ticket", "permissions": ["ticket:create"] },
    component: () => import('@/views/Pages/Helpdesk/Ticket/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HelpdeskTicketEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "helpdesk.ticket.ticket", "permissions": ["ticket:edit"] },
    component: () => import('@/views/Pages/Helpdesk/Ticket/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HelpdeskTicketDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "helpdesk.ticket.ticket", "permissions": ["ticket:create"] },
    component: () => import('@/views/Pages/Helpdesk/Ticket/Action.vue'),
},
{
    path: ":uuid",
    name: "HelpdeskTicketShow",
    meta: { "trans": "global.detail", "label": "helpdesk.ticket.ticket" },
    component: () => import('@/views/Pages/Helpdesk/Ticket/Show.vue'),
}
],
},
{
    path: "config",
    name: "HelpdeskConfig",
    redirect: { name: "HelpdeskConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["helpdesk:config"] },
    component: () => import('@/views/Pages/Helpdesk/Config/Index.vue'),
    children: [
{
    path: "",
    name: "HelpdeskConfigIndex",
    redirect: { name: "HelpdeskConfigGeneral" },
},
{
    path: "general",
    name: "HelpdeskConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Helpdesk/Config/General.vue'),
},
{
    path: "faq-category",
    name: "HelpdeskFaqConfigCategory",
    redirect: { name: "HelpdeskFaqConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "HelpdeskFaqConfigCategoryList",
    meta: { "trans": "global.list", "label": "helpdesk.faq.category.category", "queryType": "faq_category", "keySearch": true, "prefix": "HelpdeskFaqConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "HelpdeskFaqConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "helpdesk.faq.category.category", "queryType": "faq_category", "prefix": "HelpdeskFaqConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HelpdeskFaqConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "helpdesk.faq.category.category", "queryType": "faq_category", "prefix": "HelpdeskFaqConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "ticket-category",
    name: "HelpdeskTicketConfigCategory",
    redirect: { name: "HelpdeskTicketConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "HelpdeskTicketConfigCategoryList",
    meta: { "trans": "global.list", "label": "helpdesk.ticket.category.category", "queryType": "ticket_category", "keySearch": true, "prefix": "HelpdeskTicketConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "HelpdeskTicketConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "helpdesk.ticket.category.category", "queryType": "ticket_category", "prefix": "HelpdeskTicketConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HelpdeskTicketConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "helpdesk.ticket.category.category", "queryType": "ticket_category", "prefix": "HelpdeskTicketConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "ticket-priority",
    name: "HelpdeskTicketConfigPriority",
    redirect: { name: "HelpdeskTicketConfigPriorityList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "HelpdeskTicketConfigPriorityList",
    meta: { "trans": "global.list", "label": "helpdesk.ticket.priority.priority", "queryType": "ticket_priority", "keySearch": true, "prefix": "HelpdeskTicketConfigPriority" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "HelpdeskTicketConfigPriorityCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "helpdesk.ticket.priority.priority", "queryType": "ticket_priority", "prefix": "HelpdeskTicketConfigPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HelpdeskTicketConfigPriorityEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "helpdesk.ticket.priority.priority", "queryType": "ticket_priority", "prefix": "HelpdeskTicketConfigPriority" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
}
],
},
{
    path: "discipline",
    name: "Discipline",
    redirect: { name: "DisciplineIncident" },
    meta: { "moduleName": "discipline", "label": "discipline.discipline", "icon": "fas fa-school-circle-exclamation", "permissions": ["incident:manage"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "DisciplineConfig",
    redirect: { name: "DisciplineConfigIncidentCategory" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["discipline:config"] },
    component: () => import('@/views/Pages/Discipline/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "DisciplineConfigGeneral",
    meta: { "label": "discipline.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Discipline/Config/General.vue'),
},
{
    path: "incident-category",
    name: "DisciplineConfigIncidentCategory",
    redirect: { name: "DisciplineConfigIncidentCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "DisciplineConfigIncidentCategoryList",
    meta: { "trans": "global.list", "label": "discipline.incident.category.category", "queryType": "incident_category", "keySearch": true, "prefix": "DisciplineConfigIncidentCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "DisciplineConfigIncidentCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "discipline.incident.category.category", "queryType": "incident_category", "prefix": "DisciplineConfigIncidentCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "DisciplineConfigIncidentCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "discipline.incident.category.category", "queryType": "incident_category", "prefix": "DisciplineConfigIncidentCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "incidents",
    name: "DisciplineIncident",
    redirect: { name: "DisciplineIncidentList" },
    meta: { "label": "discipline.incident.incident", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["incident:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "DisciplineIncidentList",
    meta: { "trans": "global.list", "label": "discipline.incident.incidents" },
    component: () => import('@/views/Pages/Discipline/Incident/Index.vue'),
},
{
    path: "create",
    name: "DisciplineIncidentCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "discipline.incident.incident" },
    component: () => import('@/views/Pages/Discipline/Incident/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "DisciplineIncidentEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "discipline.incident.incident" },
    component: () => import('@/views/Pages/Discipline/Incident/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "DisciplineIncidentDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "discipline.incident.incident" },
    component: () => import('@/views/Pages/Discipline/Incident/Action.vue'),
},
{
    path: ":uuid",
    name: "DisciplineIncidentShow",
    meta: { "trans": "global.detail", "label": "discipline.incident.incident" },
    component: () => import('@/views/Pages/Discipline/Incident/Show.vue'),
}
],
}
],
},
{
    path: "gallery",
    name: "GalleryIndex",
    redirect: { name: "GalleryList" },
    meta: { "moduleName": "gallery", "label": "gallery.gallery", "icon": "fas fa-image", "isNotNav": true, "hideChildren": true, "permissions": ["gallery:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "config",
    name: "GalleryConfig",
    redirect: { name: "GalleryConfigGeneral" },
    meta: { "label": "gallery.gallery", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["gallery:config"] },
    component: () => import('@/views/Pages/Gallery/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "GalleryConfigGeneral",
    meta: { "label": "gallery.config.general", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Gallery/Config/General.vue'),
}
],
}
],
},
{
    path: "galleries",
    name: "Gallery",
    redirect: { name: "GalleryList" },
    meta: { "label": "gallery.gallery", "icon": "fas fa-image", "hideChildren": true, "permissions": ["gallery:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "GalleryList",
    meta: { "trans": "global.list", "label": "gallery.galleries" },
    component: () => import('@/views/Pages/Gallery/Index.vue'),
},
{
    path: "create",
    name: "GalleryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "gallery.gallery", "permissions": ["gallery:create"] },
    component: () => import('@/views/Pages/Gallery/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "GalleryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "gallery.gallery", "permissions": ["gallery:edit"] },
    component: () => import('@/views/Pages/Gallery/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "GalleryDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "gallery.gallery", "permissions": ["gallery:create"] },
    component: () => import('@/views/Pages/Gallery/Action.vue'),
},
{
    path: ":uuid",
    name: "GalleryShow",
    meta: { "trans": "global.detail", "label": "gallery.gallery" },
    component: () => import('@/views/Pages/Gallery/Show.vue'),
}
],
},
{
    path: "guardians",
    name: "Guardian",
    redirect: { name: "GuardianList" },
    meta: { "moduleName": "guardian", "label": "guardian.guardian", "icon": "fas fa-user-group", "hideChildren": true, "permissions": ["guardian:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "config",
    name: "GuardianConfig",
    redirect: { name: "GuardianConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["guardian:config"] },
    component: () => import('@/views/Pages/Guardian/Config/Index.vue'),
    children: [
{
    path: "",
    name: "GuardianConfigIndex",
    redirect: { name: "GuardianConfigGeneral" },
},
{
    path: "general",
    name: "GuardianConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Guardian/Config/General.vue'),
}
],
},
{
    path: "",
    name: "GuardianList",
    meta: { "trans": "global.list", "label": "guardian.guardians" },
    component: () => import('@/views/Pages/Guardian/Index.vue'),
},
{
    path: ":uuid",
    name: "GuardianShow",
    redirect: { name: "GuardianShowBasic" },
    meta: { "trans": "global.detail", "label": "guardian.guardian", "permissions": ["guardian:read"] },
    component: () => import('@/views/Pages/Guardian/Show.vue'),
    children: [
{
    path: "",
    name: "GuardianShowIndex",
    redirect: { name: "GuardianShowBasic" },
},
{
    path: "basic",
    name: "GuardianShowBasic",
    meta: { "type": "read", "action": "read", "trans": "general.basic", "label": "general.basic" },
    component: () => import('@/views/Pages/Guardian/Basic.vue'),
},
{
    path: "basic/edit",
    name: "GuardianEditBasic",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "guardian.guardian" },
    component: () => import('@/views/Pages/Guardian/EditBasic.vue'),
},
{
    path: "photo/edit",
    name: "GuardianEditPhoto",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.props.photo" },
    component: () => import('@/views/Pages/Guardian/EditPhoto.vue'),
},
{
    path: "contact",
    name: "GuardianShowContact",
    meta: { "type": "general", "action": "general", "trans": "contact.contact", "label": "contact.contact" },
    component: () => import('@/views/Pages/Guardian/Contact.vue'),
},
{
    path: "contact/edit",
    name: "GuardianEditContact",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.contact" },
    component: () => import('@/views/Pages/Guardian/EditContact.vue'),
},
{
    path: "login",
    name: "GuardianShowLogin",
    meta: { "type": "general", "action": "general", "trans": "guardian.login.login", "label": "guardian.login.login" },
    component: () => import('@/views/Pages/Guardian/Login.vue'),
},
{
    path: "login/edit",
    name: "GuardianEditLogin",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "guardian.login.login" },
    component: () => import('@/views/Pages/Guardian/EditLogin.vue'),
}
],
}
],
},
{
    path: "contact",
    name: "ContactIndex",
    redirect: { name: "ContactList" },
    meta: { "moduleName": "contact", "label": "contact.contact", "icon": "fas fa-address-card", "isNotNav": true, "hideChildren": true, "permissions": ["contact:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ContactConfig",
    redirect: { name: "ContactConfigGeneral" },
    meta: { "label": "contact.contact", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["contact:config"] },
    component: () => import('@/views/Pages/Contact/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ContactConfigGeneral",
    meta: { "label": "contact.config.general", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Contact/Config/General.vue'),
},
{
    path: "religion",
    name: "ContactConfigReligion",
    redirect: { name: "ContactConfigReligionList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactConfigReligionList",
    meta: { "trans": "global.list", "label": "contact.religion.religion", "queryType": "religion", "keySearch": true, "prefix": "ContactConfigReligion" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ContactConfigReligionCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.religion.religion", "queryType": "religion", "prefix": "ContactConfigReligion" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ContactConfigReligionEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.religion.religion", "queryType": "religion", "prefix": "ContactConfigReligion" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "caste",
    name: "ContactConfigCaste",
    redirect: { name: "ContactConfigCasteList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactConfigCasteList",
    meta: { "trans": "global.list", "label": "contact.caste.caste", "queryType": "member_caste", "keySearch": true, "prefix": "ContactConfigCaste" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ContactConfigCasteCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.caste.caste", "queryType": "member_caste", "prefix": "ContactConfigCaste" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ContactConfigCasteEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.caste.caste", "queryType": "member_caste", "prefix": "ContactConfigCaste" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "category",
    name: "ContactConfigCategory",
    redirect: { name: "ContactConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactConfigCategoryList",
    meta: { "trans": "global.list", "label": "contact.category.category", "queryType": "member_category", "keySearch": true, "prefix": "ContactConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ContactConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.category.category", "queryType": "member_category", "prefix": "ContactConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ContactConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.category.category", "queryType": "member_category", "prefix": "ContactConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
},
{
    path: "document-types",
    name: "ContactConfigDocumentType",
    redirect: { name: "ContactConfigDocumentTypeList" },
    meta: { "label": "contact.document_type.document_types", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["contact:config"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactConfigDocumentTypeList",
    meta: { "trans": "global.list", "label": "contact.document_type.document_types" },
    component: () => import('@/views/Pages/Contact/Config/DocumentType/Index.vue'),
},
{
    path: "create",
    name: "ContactConfigDocumentTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.document_type.document_type" },
    component: () => import('@/views/Pages/Contact/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ContactConfigDocumentTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.document_type.document_type" },
    component: () => import('@/views/Pages/Contact/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ContactConfigDocumentTypeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "contact.document_type.document_type" },
    component: () => import('@/views/Pages/Contact/Config/DocumentType/Action.vue'),
},
{
    path: ":uuid",
    name: "ContactConfigDocumentTypeShow",
    meta: { "trans": "global.detail", "label": "contact.document_type.document_type" },
    component: () => import('@/views/Pages/Contact/Config/DocumentType/Show.vue'),
}
],
},
{
    path: "qualification-level",
    name: "ContactConfigQualificationLevel",
    redirect: { name: "ContactConfigQualificationLevelList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactConfigQualificationLevelList",
    meta: { "trans": "global.list", "label": "contact.qualification_level.qualification_level", "queryType": "qualification_level", "keySearch": true, "prefix": "ContactConfigQualificationLevel" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ContactConfigQualificationLevelCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.qualification_level.qualification_level", "queryType": "qualification_level", "prefix": "ContactConfigQualificationLevel" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ContactConfigQualificationLevelEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.qualification_level.qualification_level", "queryType": "qualification_level", "prefix": "ContactConfigQualificationLevel" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
}
],
},
{
    path: "contacts",
    name: "Contact",
    redirect: { name: "ContactList" },
    meta: { "label": "contact.contact", "icon": "fas fa-people-group", "hideChildren": true, "permissions": ["contact:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ContactList",
    meta: { "trans": "global.list", "label": "contact.contacts" },
    component: () => import('@/views/Pages/Contact/Index.vue'),
},
{
    path: "create",
    name: "ContactCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "contact.contact", "permissions": ["contact:create"] },
    component: () => import('@/views/Pages/Contact/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ContactDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "contact.contact", "permissions": ["contact:create"] },
    component: () => import('@/views/Pages/Contact/Action.vue'),
},
{
    path: ":uuid",
    name: "ContactShow",
    redirect: { name: "ContactShowBasic" },
    meta: { "trans": "global.detail", "label": "contact.contact", "permissions": ["contact:read"] },
    component: () => import('@/views/Pages/Contact/Show.vue'),
    children: [
{
    path: "",
    name: "ContactShowIndex",
    redirect: { name: "ContactShowBasic" },
},
{
    path: "basic",
    name: "ContactShowBasic",
    meta: { "type": "read", "action": "read", "trans": "general.basic", "label": "general.basic" },
    component: () => import('@/views/Pages/Contact/Basic.vue'),
},
{
    path: "basic/edit",
    name: "ContactEditBasic",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.contact" },
    component: () => import('@/views/Pages/Contact/EditBasic.vue'),
},
{
    path: "photo/edit",
    name: "ContactEditPhoto",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.props.photo" },
    component: () => import('@/views/Pages/Contact/EditPhoto.vue'),
},
{
    path: "contact",
    name: "ContactShowContact",
    meta: { "type": "general", "action": "general", "trans": "contact.contact", "label": "contact.contact" },
    component: () => import('@/views/Pages/Contact/Contact.vue'),
},
{
    path: "contact/edit",
    name: "ContactEditContact",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.contact" },
    component: () => import('@/views/Pages/Contact/EditContact.vue'),
},
{
    path: "login",
    name: "ContactShowLogin",
    meta: { "type": "general", "action": "general", "trans": "contact.login.login", "label": "contact.login.login" },
    component: () => import('@/views/Pages/Contact/Login.vue'),
},
{
    path: "login/edit",
    name: "ContactEditLogin",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "contact.login.login" },
    component: () => import('@/views/Pages/Contact/EditLogin.vue'),
}
],
}
],
},
{
    path: "devices",
    name: "Device",
    redirect: { name: "DeviceList" },
    meta: { "isNotNav": true, "label": "device.device", "icon": "fas fa-microchip", "hideChildren": true, "roles": ["admin"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "DeviceList",
    meta: { "trans": "global.list", "label": "device.devices" },
    component: () => import('@/views/Pages/Device/Index.vue'),
},
{
    path: "create",
    name: "DeviceCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "device.device" },
    component: () => import('@/views/Pages/Device/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "DeviceEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "device.device" },
    component: () => import('@/views/Pages/Device/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "DeviceDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "device.device" },
    component: () => import('@/views/Pages/Device/Action.vue'),
},
{
    path: ":uuid",
    name: "DeviceShow",
    meta: { "trans": "global.detail", "label": "device.device" },
    component: () => import('@/views/Pages/Device/Show.vue'),
}
],
},
{
    path: "post",
    name: "PostIndex",
    redirect: { name: "PostList" },
    meta: { "moduleName": "post", "label": "post.post", "icon": "fas fa-newspaper", "isNotNav": true, "hideChildren": true, "permissions": ["post:read"], "keySearch": true },
    component: RouterView,
    beforeEnter() { /* original guard preserved in router/index.js */ },
    children: [
{
    path: "config",
    name: "PostConfig",
    redirect: { name: "PostConfigGeneral" },
    meta: { "label": "post.post", "icon": "fas fa-cog", "hideChildren": true, "permissions": ["post:config"] },
    component: () => import('@/views/Pages/Post/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "PostConfigGeneral",
    meta: { "label": "post.config.general", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Post/Config/General.vue'),
}
],
}
],
},
{
    path: "posts",
    name: "Post",
    redirect: { name: "PostList" },
    meta: { "isNotNav": true, "label": "post.post", "icon": "fas fa-image", "hideChildren": true, "permissions": ["post:read"] },
    component: RouterView,
    beforeEnter() { /* original guard preserved in router/index.js */ },
    children: [
{
    path: "",
    name: "PostList",
    meta: { "trans": "global.list", "label": "post.posts" },
    component: () => import('@/views/Pages/Post/Index.vue'),
},
{
    path: ":uuid/edit",
    name: "PostEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "post.post", "permissions": ["post:edit"] },
    component: () => import('@/views/Pages/Post/Edit.vue'),
},
{
    path: ":uuid",
    name: "PostShow",
    meta: { "trans": "global.detail", "label": "post.post" },
    component: () => import('@/views/Pages/Post/Show.vue'),
}
],
},
{
    path: "mess",
    name: "Mess",
    redirect: { name: "MessMeal" },
    meta: { "moduleName": "mess", "label": "mess.mess", "icon": "fas fa-utensils", "permissions": ["mess:config", "menu-item:manage", "meal:manage", "meal-log:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "MessConfig",
    redirect: { name: "MessConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["mess:config"] },
    component: () => import('@/views/Pages/Mess/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "MessConfigGeneral",
    meta: { "label": "mess.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Mess/Config/General.vue'),
}
],
},
{
    path: "menu-items",
    name: "MessMenuItem",
    redirect: { name: "MessMenuItemList" },
    meta: { "label": "mess.menu.item", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["menu-item:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "MessMenuItemList",
    meta: { "trans": "global.list", "label": "mess.menu.item" },
    component: () => import('@/views/Pages/Mess/MenuItem/Index.vue'),
},
{
    path: "create",
    name: "MessMenuItemCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "mess.menu.item" },
    component: () => import('@/views/Pages/Mess/MenuItem/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "MessMenuItemEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "mess.menu.item" },
    component: () => import('@/views/Pages/Mess/MenuItem/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "MessMenuItemDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "mess.menu.item" },
    component: () => import('@/views/Pages/Mess/MenuItem/Action.vue'),
},
{
    path: ":uuid",
    name: "MessMenuItemShow",
    meta: { "trans": "global.detail", "label": "mess.menu.item" },
    component: () => import('@/views/Pages/Mess/MenuItem/Show.vue'),
}
],
},
{
    path: "meals",
    name: "MessMeal",
    redirect: { name: "MessMealList" },
    meta: { "label": "mess.meal.meal", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["meal:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "MessMealList",
    meta: { "trans": "global.list", "label": "mess.meal.meal" },
    component: () => import('@/views/Pages/Mess/Meal/Index.vue'),
},
{
    path: "create",
    name: "MessMealCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "mess.meal.meal" },
    component: () => import('@/views/Pages/Mess/Meal/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "MessMealEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "mess.meal.meal" },
    component: () => import('@/views/Pages/Mess/Meal/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "MessMealDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "mess.meal.meal" },
    component: () => import('@/views/Pages/Mess/Meal/Action.vue'),
},
{
    path: ":uuid",
    name: "MessMealShow",
    meta: { "trans": "global.detail", "label": "mess.meal.meal" },
    component: () => import('@/views/Pages/Mess/Meal/Show.vue'),
}
],
},
{
    path: "meal-logs",
    name: "MessMealLog",
    redirect: { name: "MessMealLogList" },
    meta: { "label": "mess.meal.log.log", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["meal-log:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "MessMealLogList",
    meta: { "trans": "global.list", "label": "mess.meal.log.log" },
    component: () => import('@/views/Pages/Mess/MealLog/Index.vue'),
},
{
    path: "create",
    name: "MessMealLogCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "mess.meal.log.log", "permissions": ["meal-log:create"] },
    component: () => import('@/views/Pages/Mess/MealLog/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "MessMealLogEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "mess.meal.log.log", "permissions": ["meal-log:edit"] },
    component: () => import('@/views/Pages/Mess/MealLog/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "MessMealLogDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "mess.meal.log.log", "permissions": ["meal-log:create"] },
    component: () => import('@/views/Pages/Mess/MealLog/Action.vue'),
},
{
    path: ":uuid",
    name: "MessMealLogShow",
    meta: { "trans": "global.detail", "label": "mess.meal.log.log" },
    component: () => import('@/views/Pages/Mess/MealLog/Show.vue'),
}
],
}
],
},
{
    path: "activity",
    name: "Activity",
    redirect: { name: "ActivityTrip" },
    meta: { "moduleName": "activity", "label": "activity.activity", "icon": "fas fa-sliders", "permissions": ["trip:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "ActivityConfig",
    redirect: { name: "ActivityConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["activity:config"] },
    component: () => import('@/views/Pages/Activity/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "ActivityConfigGeneral",
    meta: { "label": "activity.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Activity/Config/General.vue'),
},
{
    path: "trip-type",
    name: "ActivityConfigTripType",
    redirect: { name: "ActivityConfigTripTypeList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ActivityConfigTripTypeList",
    meta: { "trans": "global.list", "label": "activity.trip.type.type", "queryType": "trip_type", "keySearch": true, "prefix": "ActivityConfigTripType" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "ActivityConfigTripTypeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "activity.trip.type.type", "queryType": "trip_type", "prefix": "ActivityConfigTripType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ActivityConfigTripTypeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "activity.trip.type.type", "queryType": "trip_type", "prefix": "ActivityConfigTripType" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "trips",
    name: "ActivityTrip",
    redirect: { name: "ActivityTripList" },
    meta: { "label": "activity.trip.trip", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true, "permissions": ["trip:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "ActivityTripList",
    meta: { "trans": "global.list", "label": "activity.trip.trips" },
    component: () => import('@/views/Pages/Activity/Trip/Index.vue'),
},
{
    path: "create",
    name: "ActivityTripCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "activity.trip.trip", "permissions": ["trip:manage"] },
    component: () => import('@/views/Pages/Activity/Trip/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ActivityTripEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "activity.trip.trip", "permissions": ["trip:manage"] },
    component: () => import('@/views/Pages/Activity/Trip/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ActivityTripDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "activity.trip.trip", "permissions": ["trip:manage"] },
    component: () => import('@/views/Pages/Activity/Trip/Action.vue'),
},
{
    path: ":uuid",
    name: "ActivityTripShow",
    redirect: { name: "ActivityTripShowGeneral" },
    meta: { "trans": "global.detail", "label": "activity.trip.trip", "permissions": ["trip:read"] },
    component: () => import('@/views/Pages/Activity/Trip/Show.vue'),
    children: [
{
    path: "",
    name: "ActivityTripShowIndex",
    redirect: { name: "ActivityTripShowGeneral" },
},
{
    path: "general",
    name: "ActivityTripShowGeneral",
    meta: { "type": "read", "action": "read", "trans": "general.general", "label": "general.general" },
    component: () => import('@/views/Pages/Activity/Trip/General.vue'),
},
{
    path: "participants",
    name: "ActivityTripParticipant",
    redirect: { name: "ActivityTripParticipantList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ActivityTripParticipantList",
    meta: { "trans": "activity.trip.participant.participants", "label": "activity.trip.participant.participants" },
    component: () => import('@/views/Pages/Activity/Trip/Participant/Index.vue'),
}
],
},
{
    path: "media",
    name: "ActivityTripMedia",
    redirect: { name: "ActivityTripMediaList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ActivityTripMediaList",
    meta: { "trans": "activity.trip.media.media", "label": "activity.trip.media.media" },
    component: () => import('@/views/Pages/Activity/Trip/Media/Index.vue'),
}
],
}
],
}
],
}
],
},
{
    path: "hostel",
    name: "Hostel",
    redirect: { name: "HostelBlock" },
    meta: { "moduleName": "hostel", "label": "hostel.hostel", "icon": "fas fa-hotel", "permissions": ["hostel:manage", "hostel-room-allocation:read"] },
    component: RouterView,
    children: [
{
    path: "blocks",
    name: "HostelBlock",
    redirect: { name: "HostelBlockList" },
    meta: { "label": "hostel.block.block", "icon": "fas fa-right-long", "hideChildren": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "HostelBlockList",
    meta: { "trans": "global.list", "label": "hostel.block.blocks" },
    component: () => import('@/views/Pages/Hostel/Block/Index.vue'),
},
{
    path: "create",
    name: "HostelBlockCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "hostel.block.block" },
    component: () => import('@/views/Pages/Hostel/Block/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HostelBlockEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "hostel.block.block" },
    component: () => import('@/views/Pages/Hostel/Block/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HostelBlockDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "hostel.block.block" },
    component: () => import('@/views/Pages/Hostel/Block/Action.vue'),
},
{
    path: ":uuid",
    name: "HostelBlockShow",
    meta: { "trans": "global.detail", "label": "hostel.block.block" },
    component: () => import('@/views/Pages/Hostel/Block/Show.vue'),
}
],
},
{
    path: "block-incharges",
    name: "HostelBlockIncharge",
    redirect: { name: "HostelBlockInchargeList" },
    meta: { "isNotNav": true, "label": "hostel.block_incharge.block_incharge", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["hostel-incharge:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "HostelBlockInchargeList",
    meta: { "trans": "global.list", "label": "hostel.block_incharge.block_incharges" },
    component: () => import('@/views/Pages/Hostel/BlockIncharge/Index.vue'),
},
{
    path: "create",
    name: "HostelBlockInchargeCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "hostel.block_incharge.block_incharge", "permissions": ["hostel-incharge:create"] },
    component: () => import('@/views/Pages/Hostel/BlockIncharge/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HostelBlockInchargeEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "hostel.block_incharge.block_incharge", "permissions": ["hostel-incharge:edit"] },
    component: () => import('@/views/Pages/Hostel/BlockIncharge/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HostelBlockInchargeDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "hostel.block_incharge.block_incharge", "permissions": ["hostel-incharge:create"] },
    component: () => import('@/views/Pages/Hostel/BlockIncharge/Action.vue'),
},
{
    path: ":uuid",
    name: "HostelBlockInchargeShow",
    meta: { "trans": "global.detail", "label": "hostel.block_incharge.block_incharge" },
    component: () => import('@/views/Pages/Hostel/BlockIncharge/Show.vue'),
}
],
},
{
    path: "floors",
    name: "HostelFloor",
    redirect: { name: "HostelFloorList" },
    meta: { "isNotNav": true, "label": "hostel.floor.floor", "icon": "fas fa-right-long", "hideChildren": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "HostelFloorList",
    meta: { "trans": "global.list", "label": "hostel.floor.floors" },
    component: () => import('@/views/Pages/Hostel/Floor/Index.vue'),
},
{
    path: "create",
    name: "HostelFloorCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "hostel.floor.floor" },
    component: () => import('@/views/Pages/Hostel/Floor/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HostelFloorEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "hostel.floor.floor" },
    component: () => import('@/views/Pages/Hostel/Floor/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HostelFloorDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "hostel.floor.floor" },
    component: () => import('@/views/Pages/Hostel/Floor/Action.vue'),
},
{
    path: ":uuid",
    name: "HostelFloorShow",
    meta: { "trans": "global.detail", "label": "hostel.floor.floor" },
    component: () => import('@/views/Pages/Hostel/Floor/Show.vue'),
}
],
},
{
    path: "rooms",
    name: "HostelRoom",
    redirect: { name: "HostelRoomList" },
    meta: { "isNotNav": true, "label": "hostel.room.room", "icon": "fas fa-right-long", "hideChildren": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "HostelRoomList",
    meta: { "trans": "global.list", "label": "hostel.room.rooms" },
    component: () => import('@/views/Pages/Hostel/Room/Index.vue'),
},
{
    path: "create",
    name: "HostelRoomCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "hostel.room.room" },
    component: () => import('@/views/Pages/Hostel/Room/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HostelRoomEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "hostel.room.room" },
    component: () => import('@/views/Pages/Hostel/Room/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HostelRoomDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "hostel.room.room" },
    component: () => import('@/views/Pages/Hostel/Room/Action.vue'),
},
{
    path: ":uuid",
    name: "HostelRoomShow",
    meta: { "trans": "global.detail", "label": "hostel.room.room" },
    component: () => import('@/views/Pages/Hostel/Room/Show.vue'),
}
],
},
{
    path: "room-allocations",
    name: "HostelRoomAllocation",
    redirect: { name: "HostelRoomAllocationList" },
    meta: { "label": "hostel.room_allocation.room_allocation", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["hostel-room-allocation:read"] },
    component: RouterView,
    children: [
{
    path: "",
    name: "HostelRoomAllocationList",
    meta: { "trans": "global.list", "label": "hostel.room_allocation.room_allocations" },
    component: () => import('@/views/Pages/Hostel/RoomAllocation/Index.vue'),
},
{
    path: "create",
    name: "HostelRoomAllocationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "hostel.room_allocation.room_allocation", "permissions": ["hostel-room-allocation:create"] },
    component: () => import('@/views/Pages/Hostel/RoomAllocation/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "HostelRoomAllocationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "hostel.room_allocation.room_allocation", "permissions": ["hostel-room-allocation:edit"] },
    component: () => import('@/views/Pages/Hostel/RoomAllocation/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "HostelRoomAllocationDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "hostel.room_allocation.room_allocation", "permissions": ["hostel-room-allocation:create"] },
    component: () => import('@/views/Pages/Hostel/RoomAllocation/Action.vue'),
},
{
    path: ":uuid",
    name: "HostelRoomAllocationShow",
    meta: { "trans": "global.detail", "label": "hostel.room_allocation.room_allocation" },
    component: () => import('@/views/Pages/Hostel/RoomAllocation/Show.vue'),
}
],
}
],
},
{
    path: "forms",
    name: "Form",
    redirect: { name: "FormList" },
    meta: { "moduleName": "form", "label": "form.form", "icon": "fas fa-rectangle-list", "hideChildren": true, "permissions": ["form:config", "form:read", "form:submit"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "FormList",
    meta: { "trans": "global.list", "label": "form.form" },
    component: () => import('@/views/Pages/Form/Index.vue'),
},
{
    path: "create",
    name: "FormCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "form.form", "permissions": ["form:create"] },
    component: () => import('@/views/Pages/Form/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "FormEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "form.form", "permissions": ["form:edit"] },
    component: () => import('@/views/Pages/Form/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "FormDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "form.form", "permissions": ["form:create"] },
    component: () => import('@/views/Pages/Form/Action.vue'),
},
{
    path: ":uuid",
    name: "FormShow",
    meta: { "trans": "global.detail", "label": "form.form", "permissions": ["form:create", "form:edit"] },
    component: () => import('@/views/Pages/Form/Show.vue'),
},
{
    path: ":uuid/submit",
    name: "FormSubmit",
    meta: { "trans": "global.detail", "label": "form.form", "permissions": ["form:submit"] },
    component: () => import('@/views/Pages/Form/Submit.vue'),
},
{
    path: ":uuid/submissions",
    name: "FormSubmission",
    redirect: { name: "FormSubmissionList" },
    meta: { "trans": "global.detail", "label": "form.form", "permissions": ["form-submission:manage"] },
    component: () => import('@/views/Pages/Form/Submission/Layout.vue'),
    children: [
{
    path: "",
    name: "FormSubmissionList",
    component: () => import('@/views/Pages/Form/Submission/Index.vue'),
},
{
    path: ":muuid",
    name: "FormSubmissionShow",
    meta: { "trans": "global.detail", "label": "form.submission.submission", "permissions": [] },
    component: () => import('@/views/Pages/Form/Submission/Show.vue'),
}
],
}
],
},
{
    path: "form",
    name: "FormIndex",
    redirect: { name: "FormList" },
    meta: { "label": "form.form", "icon": "fas fa-input", "permissions": ["form:config"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "FormConfig",
    redirect: { name: "FormConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["form:config"] },
    component: () => import('@/views/Pages/Form/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "FormConfigGeneral",
    meta: { "label": "form.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Form/Config/General.vue'),
}
],
}
],
},
{
    path: "asset",
    name: "Asset",
    redirect: { name: "AssetBuilding" },
    meta: { "moduleName": "asset", "label": "asset.asset", "icon": "fas fa-building", "permissions": ["asset:config", "building:manage"] },
    component: RouterView,
    children: [
{
    path: "building",
    name: "AssetBuilding",
    redirect: { name: "AssetBuildingBlock" },
    meta: { "label": "asset.building.building", "icon": "fas fa-right-long", "permissions": ["building:manage"] },
    component: RouterView,
    children: [
{
    path: "blocks",
    name: "AssetBuildingBlock",
    redirect: { name: "AssetBuildingBlockList" },
    meta: { "isNotNav": true, "label": "asset.building.block.block", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "AssetBuildingBlockList",
    meta: { "trans": "global.list", "label": "asset.building.block.blocks" },
    component: () => import('@/views/Pages/Asset/Building/Block/Index.vue'),
},
{
    path: "create",
    name: "AssetBuildingBlockCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "asset.building.block.block" },
    component: () => import('@/views/Pages/Asset/Building/Block/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AssetBuildingBlockEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "asset.building.block.block" },
    component: () => import('@/views/Pages/Asset/Building/Block/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AssetBuildingBlockDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "asset.building.block.block" },
    component: () => import('@/views/Pages/Asset/Building/Block/Action.vue'),
},
{
    path: ":uuid",
    name: "AssetBuildingBlockShow",
    meta: { "trans": "global.detail", "label": "asset.building.block.block" },
    component: () => import('@/views/Pages/Asset/Building/Block/Show.vue'),
}
],
},
{
    path: "floors",
    name: "AssetBuildingFloor",
    redirect: { name: "AssetBuildingFloorList" },
    meta: { "isNotNav": true, "label": "asset.building.floor.floor", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "AssetBuildingFloorList",
    meta: { "trans": "global.list", "label": "asset.building.floor.floors" },
    component: () => import('@/views/Pages/Asset/Building/Floor/Index.vue'),
},
{
    path: "create",
    name: "AssetBuildingFloorCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "asset.building.floor.floor" },
    component: () => import('@/views/Pages/Asset/Building/Floor/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AssetBuildingFloorEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "asset.building.floor.floor" },
    component: () => import('@/views/Pages/Asset/Building/Floor/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AssetBuildingFloorDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "asset.building.floor.floor" },
    component: () => import('@/views/Pages/Asset/Building/Floor/Action.vue'),
},
{
    path: ":uuid",
    name: "AssetBuildingFloorShow",
    meta: { "trans": "global.detail", "label": "asset.building.floor.floor" },
    component: () => import('@/views/Pages/Asset/Building/Floor/Show.vue'),
}
],
},
{
    path: "rooms",
    name: "AssetBuildingRoom",
    redirect: { name: "AssetBuildingRoomList" },
    meta: { "isNotNav": true, "label": "asset.building.room.room", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "AssetBuildingRoomList",
    meta: { "trans": "global.list", "label": "asset.building.room.rooms" },
    component: () => import('@/views/Pages/Asset/Building/Room/Index.vue'),
},
{
    path: "create",
    name: "AssetBuildingRoomCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "asset.building.room.room" },
    component: () => import('@/views/Pages/Asset/Building/Room/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "AssetBuildingRoomEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "asset.building.room.room" },
    component: () => import('@/views/Pages/Asset/Building/Room/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "AssetBuildingRoomDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "asset.building.room.room" },
    component: () => import('@/views/Pages/Asset/Building/Room/Action.vue'),
},
{
    path: ":uuid",
    name: "AssetBuildingRoomShow",
    meta: { "trans": "global.detail", "label": "asset.building.room.room" },
    component: () => import('@/views/Pages/Asset/Building/Room/Show.vue'),
}
],
}
],
}
],
},
{
    path: "site",
    name: "Site",
    redirect: { name: "SitePage" },
    meta: { "moduleName": "site", "label": "site.site", "icon": "fas fa-globe", "permissions": ["site:manage"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "SiteConfig",
    redirect: { name: "SiteConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config" },
    component: () => import('@/views/Pages/Site/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "SiteConfigGeneral",
    meta: { "label": "site.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Site/Config/General.vue'),
}
],
},
{
    path: "pages",
    name: "SitePage",
    redirect: { name: "SitePageList" },
    meta: { "label": "site.page.page", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "SitePageList",
    meta: { "trans": "global.list", "label": "site.page.pages" },
    component: () => import('@/views/Pages/Site/Page/Index.vue'),
},
{
    path: "create",
    name: "SitePageCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "site.page.page" },
    component: () => import('@/views/Pages/Site/Page/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "SitePageEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "site.page.page" },
    component: () => import('@/views/Pages/Site/Page/Edit.vue'),
},
{
    path: ":uuid/duplicate",
    name: "SitePageDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "site.page.page" },
    component: () => import('@/views/Pages/Site/Page/Action.vue'),
},
{
    path: ":uuid",
    name: "SitePageShow",
    meta: { "trans": "global.detail", "label": "site.page.page" },
    component: () => import('@/views/Pages/Site/Page/Show.vue'),
}
],
},
{
    path: "menus",
    name: "SiteMenu",
    redirect: { name: "SiteMenuList" },
    meta: { "label": "site.menu.menu", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "SiteMenuList",
    meta: { "trans": "global.list", "label": "site.menu.menus" },
    component: () => import('@/views/Pages/Site/Menu/Index.vue'),
},
{
    path: "create",
    name: "SiteMenuCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "site.menu.menu" },
    component: () => import('@/views/Pages/Site/Menu/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "SiteMenuEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "site.menu.menu" },
    component: () => import('@/views/Pages/Site/Menu/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "SiteMenuDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "site.menu.menu" },
    component: () => import('@/views/Pages/Site/Menu/Action.vue'),
},
{
    path: ":uuid",
    name: "SiteMenuShow",
    redirect: { name: "SiteMenuList" },
    meta: { "trans": "global.detail", "label": "site.menu.menu" },
    component: () => import('@/views/Pages/Site/Menu/Show.vue'),
}
],
},
{
    path: "blocks",
    name: "SiteBlock",
    redirect: { name: "SiteBlockList" },
    meta: { "label": "site.block.block", "icon": "fas fa-right-long", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "SiteBlockList",
    meta: { "trans": "global.list", "label": "site.block.blocks" },
    component: () => import('@/views/Pages/Site/Block/Index.vue'),
},
{
    path: "create",
    name: "SiteBlockCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "site.block.block" },
    component: () => import('@/views/Pages/Site/Block/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "SiteBlockEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "site.block.block" },
    component: () => import('@/views/Pages/Site/Block/Edit.vue'),
},
{
    path: ":uuid/duplicate",
    name: "SiteBlockDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "site.block.block" },
    component: () => import('@/views/Pages/Site/Block/Action.vue'),
},
{
    path: ":uuid",
    name: "SiteBlockShow",
    meta: { "trans": "global.detail", "label": "site.block.block" },
    component: () => import('@/views/Pages/Site/Block/Show.vue'),
}
],
}
],
},
{
    path: "blogs",
    name: "Blog",
    redirect: { name: "BlogList" },
    meta: { "moduleName": "blog", "label": "blog.blog", "icon": "fas fa-pen-to-square", "hideChildren": true, "permissions": ["blog:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "BlogList",
    meta: { "trans": "global.list", "label": "blog.blog" },
    component: () => import('@/views/Pages/Blog/Index.vue'),
},
{
    path: "config",
    name: "BlogConfig",
    redirect: { name: "BlogConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["blog:config"] },
    component: () => import('@/views/Pages/Blog/Config/Index.vue'),
    children: [
{
    path: "",
    name: "BlogConfigIndex",
    redirect: { name: "BlogConfigGeneral" },
},
{
    path: "general",
    name: "BlogConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Blog/Config/General.vue'),
},
{
    path: "categories",
    name: "BlogConfigCategory",
    redirect: { name: "BlogConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "BlogConfigCategoryList",
    meta: { "trans": "global.list", "label": "blog.category.category", "queryType": "blog_category", "keySearch": true, "prefix": "BlogConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "BlogConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "blog.category.category", "queryType": "blog_category", "prefix": "BlogConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "BlogConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "blog.category.category", "queryType": "blog_category", "prefix": "BlogConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "create",
    name: "BlogCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "blog.blog", "permissions": ["blog:create"] },
    component: () => import('@/views/Pages/Blog/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "BlogEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "blog.blog", "permissions": ["blog:edit"] },
    component: () => import('@/views/Pages/Blog/Edit.vue'),
},
{
    path: ":uuid",
    name: "BlogShow",
    meta: { "trans": "global.detail", "label": "blog.blog", "permissions": ["blog:create"] },
    component: () => import('@/views/Pages/Blog/Show.vue'),
}
],
},
{
    path: "news",
    name: "News",
    redirect: { name: "NewsList" },
    meta: { "moduleName": "news", "label": "news.news", "icon": "fas fa-newspaper", "hideChildren": true, "permissions": ["news:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "NewsList",
    meta: { "trans": "global.list", "label": "news.news" },
    component: () => import('@/views/Pages/News/Index.vue'),
},
{
    path: "config",
    name: "NewsConfig",
    redirect: { name: "NewsConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["news:config"] },
    component: () => import('@/views/Pages/News/Config/Index.vue'),
    children: [
{
    path: "",
    name: "NewsConfigIndex",
    redirect: { name: "NewsConfigGeneral" },
},
{
    path: "general",
    name: "NewsConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/News/Config/General.vue'),
},
{
    path: "categories",
    name: "NewsConfigCategory",
    redirect: { name: "NewsConfigCategoryList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "NewsConfigCategoryList",
    meta: { "trans": "global.list", "label": "news.category.category", "queryType": "news_category", "keySearch": true, "prefix": "NewsConfigCategory" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "NewsConfigCategoryCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "news.category.category", "queryType": "news_category", "prefix": "NewsConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "NewsConfigCategoryEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "news.category.category", "queryType": "news_category", "prefix": "NewsConfigCategory" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "create",
    name: "NewsCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "news.news", "permissions": ["news:create"] },
    component: () => import('@/views/Pages/News/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "NewsEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "news.news", "permissions": ["news:edit"] },
    component: () => import('@/views/Pages/News/Edit.vue'),
},
{
    path: ":uuid",
    name: "NewsShow",
    meta: { "trans": "global.detail", "label": "news.news", "permissions": ["news:create"] },
    component: () => import('@/views/Pages/News/Show.vue'),
}
],
},
{
    path: "recruitment",
    name: "Recruitment",
    redirect: { name: "RecruitmentVacancy" },
    meta: { "moduleName": "recruitment", "label": "recruitment.recruitment", "icon": "fas fa-file-lines", "permissions": ["recruitment:config", "job-vacancy:read", "job-application:read"] },
    component: RouterView,
    children: [
{
    path: "config",
    name: "RecruitmentConfig",
    redirect: { name: "RecruitmentConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["recruitment:config"] },
    component: () => import('@/views/Pages/Recruitment/Config/Index.vue'),
    children: [
{
    path: "general",
    name: "RecruitmentConfigGeneral",
    meta: { "label": "recruitment.config.config", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Recruitment/Config/General.vue'),
}
],
},
{
    path: "vacancies",
    name: "RecruitmentVacancy",
    redirect: { name: "RecruitmentVacancyList" },
    meta: { "label": "recruitment.vacancy.vacancy", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["job-vacancy:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "RecruitmentVacancyList",
    meta: { "trans": "global.list", "label": "recruitment.vacancy.vacancies" },
    component: () => import('@/views/Pages/Recruitment/Vacancy/Index.vue'),
},
{
    path: "create",
    name: "RecruitmentVacancyCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "recruitment.vacancy.vacancy", "permissions": ["job-vacancy:create"] },
    component: () => import('@/views/Pages/Recruitment/Vacancy/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "RecruitmentVacancyEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "recruitment.vacancy.vacancy", "permissions": ["job-vacancy:edit"] },
    component: () => import('@/views/Pages/Recruitment/Vacancy/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "RecruitmentVacancyDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "recruitment.vacancy.vacancy", "permissions": ["job-vacancy:create"] },
    component: () => import('@/views/Pages/Recruitment/Vacancy/Action.vue'),
},
{
    path: ":uuid",
    name: "RecruitmentVacancyShow",
    meta: { "trans": "global.detail", "label": "recruitment.vacancy.vacancy" },
    component: () => import('@/views/Pages/Recruitment/Vacancy/Show.vue'),
}
],
},
{
    path: "applications",
    name: "RecruitmentApplication",
    redirect: { name: "RecruitmentApplicationList" },
    meta: { "label": "recruitment.application.application", "icon": "fas fa-right-long", "hideChildren": true, "permissions": ["job-application:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "RecruitmentApplicationList",
    meta: { "trans": "global.list", "label": "recruitment.application.applications" },
    component: () => import('@/views/Pages/Recruitment/Application/Index.vue'),
},
{
    path: "create",
    name: "RecruitmentApplicationCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "recruitment.application.application", "permissions": ["job-application:create"] },
    component: () => import('@/views/Pages/Recruitment/Application/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "RecruitmentApplicationEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "recruitment.application.application", "permissions": ["job-application:edit"] },
    component: () => import('@/views/Pages/Recruitment/Application/Action.vue'),
},
{
    path: ":uuid",
    name: "RecruitmentApplicationShow",
    meta: { "trans": "global.detail", "label": "recruitment.application.application" },
    component: () => import('@/views/Pages/Recruitment/Application/Show.vue'),
}
],
}
],
},
{
    path: "users",
    name: "User",
    redirect: { name: "UserList" },
    meta: { "label": "user.user", "icon": "fas fa-users", "hideChildren": true, "permissions": ["user:read"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "UserList",
    meta: { "trans": "global.list", "label": "user.user" },
    component: () => import('@/views/Pages/User/Index.vue'),
},
{
    path: "create",
    name: "UserCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "user.user", "permissions": ["user:create"] },
    component: () => import('@/views/Pages/User/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "UserEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "user.user", "permissions": ["user:edit"] },
    component: () => import('@/views/Pages/User/Action.vue'),
},
{
    path: ":uuid",
    name: "UserShow",
    meta: { "trans": "global.detail", "label": "user.user" },
    component: () => import('@/views/Pages/User/Show.vue'),
}
],
},
{
    path: "failed-login-attempts",
    name: "FailedLoginAttempt",
    meta: { "roles": ["admin"], "label": "auth.failed_login_attempt", "icon": "fas fa-user-times", "isHiddenNav": true },
    component: () => import('@/views/Pages/Auth/FailedLoginAttempt.vue'),
},
{
    path: "user/force-change-password",
    name: "UserForceChangePassword",
    meta: { "label": "user.props.force_change_password", "icon": "fas fa-user", "isNotNav": true },
    component: () => import('@/views/Pages/User/ForceChangePassword.vue'),
},
{
    path: "user",
    name: "Profile",
    redirect: { name: "UserProfile" },
    meta: { "label": "user.profile.profile", "icon": "fas fa-user", "isHiddenNav": true, "showOnlyChildren": true, "hideChildren": false },
    component: () => import('@/views/Layouts/User.vue'),
    children: [
{
    path: "profile",
    name: "UserProfile",
    meta: { "label": "user.profile.profile", "icon": "fas fa-user-circle", "isHiddenNav": false },
    component: () => import('@/views/Pages/User/Profile/Index.vue'),
},
{
    path: "account",
    name: "UserAccount",
    meta: { "label": "user.profile.account", "icon": "fas fa-user", "isHiddenNav": false },
    component: () => import('@/views/Pages/User/Profile/Account.vue'),
},
{
    path: "avatar",
    name: "UserAvatar",
    meta: { "label": "user.avatar", "icon": "fas fa-camera", "isHiddenNav": false },
    component: () => import('@/views/Pages/User/Profile/Avatar.vue'),
},
{
    path: "preference",
    name: "UserPreference",
    meta: { "label": "user.preference.preference", "icon": "fas fa-user-cog", "isHiddenNav": false },
    component: () => import('@/views/Pages/User/Profile/Preference.vue'),
},
{
    path: "password",
    name: "UserPassword",
    meta: { "label": "auth.password.change_password", "icon": "fas fa-key", "isHiddenNav": false },
    component: () => import('@/views/Pages/User/Profile/Password.vue'),
}
],
},
{
    path: "chat",
    name: "Chat",
    meta: { "isNotNav": true, "label": "chat.chat", "icon": "fas fa-message", "permissions": ["chat:access"] },
    component: () => import('@/views/Pages/Chat/Index.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
    children: [
{
    path: ":uuid",
    name: "ChatMessage",
    meta: { "trans": "global.show", "label": "chat.chat" },
    component: () => import('@/views/Pages/Chat/Message.vue'),
}
],
},
{
    path: "custom-fields",
    name: "CustomField",
    redirect: { name: "CustomFieldList" },
    meta: { "moduleName": "customField", "label": "custom_field.custom_field", "icon": "fas fa-boxes", "hideChildren": true, "permissions": ["custom-field:manage"], "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "CustomFieldList",
    meta: { "trans": "global.list", "label": "custom_field.custom_field" },
    component: () => import('@/views/Pages/CustomField/Index.vue'),
},
{
    path: "create",
    name: "CustomFieldCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "custom_field.custom_field" },
    component: () => import('@/views/Pages/CustomField/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "CustomFieldEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "custom_field.custom_field" },
    component: () => import('@/views/Pages/CustomField/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "CustomFieldDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "custom_field.custom_field" },
    component: () => import('@/views/Pages/CustomField/Action.vue'),
},
{
    path: ":uuid",
    name: "CustomFieldShow",
    meta: { "trans": "global.detail", "label": "custom_field.custom_field" },
    component: () => import('@/views/Pages/CustomField/Show.vue'),
}
],
},
{
    path: "utility",
    name: "Utility",
    redirect: { name: "UtilityTodo" },
    meta: { "moduleName": "utility", "label": "utility.utility", "icon": "fas fa-tools" },
    component: RouterView,
    children: [
{
    path: "config",
    name: "UtilityConfig",
    redirect: { name: "UtilityConfigGeneral" },
    meta: { "isNotNav": true, "type": "config", "action": "config", "trans": "global.config", "label": "config.config", "permissions": ["config:store"] },
    component: () => import('@/views/Pages/Utility/Config/Index.vue'),
    children: [
{
    path: "",
    name: "UtilityConfigIndex",
    redirect: { name: "UtilityConfigGeneral" },
},
{
    path: "general",
    name: "UtilityConfigGeneral",
    meta: { "type": "config", "action": "config", "trans": "config.config", "label": "config.config" },
    component: () => import('@/views/Pages/Utility/Config/General.vue'),
},
{
    path: "todo-lists",
    name: "UtilityConfigTodoList",
    redirect: { name: "UtilityConfigTodoListList" },
    component: RouterView,
    children: [
{
    path: "",
    name: "UtilityConfigTodoListList",
    meta: { "trans": "global.list", "label": "utility.todo.list.list", "queryType": "todo_list", "keySearch": true, "prefix": "UtilityConfigTodoList" },
    component: () => import('@/views/Pages/Option/Index.vue'),
},
{
    path: "create",
    name: "UtilityConfigTodoListCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "utility.todo.list.list", "queryType": "todo_list", "prefix": "UtilityConfigTodoList" },
    component: () => import('@/views/Pages/Option/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "UtilityConfigTodoListEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "utility.todo.list.list", "queryType": "todo_list", "prefix": "UtilityConfigTodoList" },
    component: () => import('@/views/Pages/Option/Action.vue'),
}
],
}
],
},
{
    path: "todos",
    name: "UtilityTodo",
    redirect: { name: "UtilityTodoList" },
    meta: { "label": "utility.todo.todo", "icon": "far fa-check-square", "hideChildren": true, "permissions": ["todo:manage"], "feature": "enableTodo" },
    component: RouterView,
    children: [
{
    path: "",
    name: "UtilityTodoList",
    meta: { "trans": "global.list", "label": "utility.todo.todos" },
    component: () => import('@/views/Pages/Utility/Todo/Index.vue'),
},
{
    path: "create",
    name: "UtilityTodoCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "utility.todo.todo" },
    component: () => import('@/views/Pages/Utility/Todo/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "UtilityTodoEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "utility.todo.todo" },
    component: () => import('@/views/Pages/Utility/Todo/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "UtilityTodoDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "utility.todo.todo" },
    component: () => import('@/views/Pages/Utility/Todo/Action.vue'),
},
{
    path: ":uuid",
    name: "UtilityTodoShow",
    meta: { "trans": "global.detail", "label": "utility.todo.todo" },
    component: () => import('@/views/Pages/Utility/Todo/Show.vue'),
}
],
},
{
    path: "backups",
    name: "UtilityBackup",
    meta: { "label": "utility.backup.backup", "icon": "fas fa-database", "permissions": ["backup:manage"], "feature": "enableBackup" },
    component: () => import('@/views/Pages/Utility/Backup/Index.vue'),
},
{
    path: "activity-logs",
    name: "UtilityActivityLog",
    meta: { "label": "utility.activity.log", "icon": "far fa-file-alt", "permissions": ["activity-log:manage"], "feature": "enableActivityLog" },
    component: () => import('@/views/Pages/Utility/ActivityLog/Index.vue'),
}
],
},
{
    path: "reminders",
    name: "Reminder",
    redirect: { name: "ReminderList" },
    meta: { "isNotNav": true, "label": "reminder.reminder", "icon": "fas fa-bell", "hideChildren": true, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "",
    name: "ReminderList",
    meta: { "trans": "global.list", "label": "reminder.reminders" },
    component: () => import('@/views/Pages/Reminder/Index.vue'),
},
{
    path: "create",
    name: "ReminderCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "reminder.reminder" },
    component: () => import('@/views/Pages/Reminder/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ReminderEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "reminder.reminder" },
    component: () => import('@/views/Pages/Reminder/Action.vue'),
},
{
    path: ":uuid/duplicate",
    name: "ReminderDuplicate",
    meta: { "type": "duplicate", "action": "create", "trans": "global.duplicate", "label": "reminder.reminder" },
    component: () => import('@/views/Pages/Reminder/Action.vue'),
},
{
    path: ":uuid",
    name: "ReminderShow",
    meta: { "trans": "global.detail", "label": "reminder.reminder" },
    component: () => import('@/views/Pages/Reminder/Show.vue'),
}
],
},
{
    path: "bulk-upload/action",
    name: "BulkUploadAction",
    meta: { "isNotNav": true, "label": "bulk_action", "icon": "fas fa-upload", "roles": ["admin"], "keySearch": false },
    component: () => import('@/views/Pages/General/BulkUpload/Action.vue'),
},
{
    path: "config",
    name: "Config",
    redirect: { name: "ConfigGeneral" },
    meta: { "label": "config.config", "icon": "fas fa-cog", "permissions": ["config:store"], "isHiddenNav": false, "hideChildren": false, "keySearch": true },
    component: RouterView,
    children: [
{
    path: "general",
    name: "ConfigGeneral",
    meta: { "label": "config.general.general", "icon": "far fa-building", "key": "general" },
    component: () => import('@/views/Pages/Config/General/Index.vue'),
},
{
    path: "asset",
    name: "ConfigAsset",
    meta: { "label": "config.asset.asset", "icon": "far fa-images", "key": "asset" },
    component: () => import('@/views/Pages/Config/Asset/Index.vue'),
},
{
    path: "system",
    name: "ConfigSystem",
    meta: { "label": "config.system.system", "icon": "fas fa-cogs", "key": "system" },
    component: () => import('@/views/Pages/Config/System/Index.vue'),
},
{
    path: "auth",
    name: "ConfigAuth",
    meta: { "label": "config.auth.auth", "icon": "fas fa-sign-in-alt", "key": "auth" },
    component: () => import('@/views/Pages/Config/Auth/Index.vue'),
},
{
    path: "notification",
    name: "ConfigNotification",
    meta: { "label": "config.notification.notification", "icon": "fas fa-bell", "key": "notification" },
    component: () => import('@/views/Pages/Config/Notification/Index.vue'),
},
{
    path: "mail",
    name: "ConfigMail",
    meta: { "label": "config.mail.mail", "icon": "fas fa-envelope", "key": "mail" },
    component: () => import('@/views/Pages/Config/Mail/Index.vue'),
},
{
    path: "sms",
    name: "ConfigSMS",
    meta: { "label": "config.sms.sms", "icon": "fas fa-message", "key": "sms" },
    component: () => import('@/views/Pages/Config/SMS/Index.vue'),
},
{
    path: "whatsapp",
    name: "ConfigWhatsApp",
    meta: { "label": "config.whatsapp.whatsapp", "icon": "fas fa-message", "key": "whatsapp" },
    component: () => import('@/views/Pages/Config/WhatsApp/Index.vue'),
},
{
    path: "mail-template",
    name: "ConfigMailTemplate",
    redirect: { name: "ConfigMailTemplateList" },
    meta: { "label": "config.mail.template.template", "icon": "fas fa-file-lines", "hideChildren": true, "key": "mailTemplate" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ConfigMailTemplateList",
    meta: { "trans": "global.list", "label": "config.mail.template.template" },
    component: () => import('@/views/Pages/Config/MailTemplate/Index.vue'),
},
{
    path: ":uuid/edit",
    name: "ConfigMailTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "config.mail.template.template" },
    component: () => import('@/views/Pages/Config/MailTemplate/Action.vue'),
},
{
    path: ":uuid",
    name: "ConfigMailTemplateShow",
    meta: { "trans": "global.detail", "label": "config.mail.template.template" },
    component: () => import('@/views/Pages/Config/MailTemplate/Show.vue'),
}
],
},
{
    path: "sms-template",
    name: "ConfigSMSTemplate",
    redirect: { name: "ConfigSMSTemplateList" },
    meta: { "label": "config.sms.template.template", "icon": "fas fa-file-lines", "hideChildren": true, "key": "smsTemplate" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ConfigSMSTemplateList",
    meta: { "trans": "global.list", "label": "config.sms.template.template" },
    component: () => import('@/views/Pages/Config/SMSTemplate/Index.vue'),
},
{
    path: ":uuid/edit",
    name: "ConfigSMSTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "config.sms.template.template" },
    component: () => import('@/views/Pages/Config/SMSTemplate/Action.vue'),
}
],
},
{
    path: "whatsapp-template",
    name: "ConfigWhatsAppTemplate",
    redirect: { name: "ConfigWhatsAppTemplateList" },
    meta: { "label": "config.whatsapp.template.template", "icon": "fas fa-file-lines", "hideChildren": true, "key": "whatsappTemplate" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ConfigWhatsAppTemplateList",
    meta: { "trans": "global.list", "label": "config.whatsapp.template.template" },
    component: () => import('@/views/Pages/Config/WhatsAppTemplate/Index.vue'),
},
{
    path: ":uuid/edit",
    name: "ConfigWhatsAppTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "config.whatsapp.template.template" },
    component: () => import('@/views/Pages/Config/WhatsAppTemplate/Action.vue'),
}
],
},
{
    path: "push-notification-template",
    name: "ConfigPushNotificationTemplate",
    redirect: { name: "ConfigPushNotificationTemplateList" },
    meta: { "label": "config.push_notification.template.template", "icon": "fas fa-file-lines", "hideChildren": true, "key": "pushNotificationTemplate" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ConfigPushNotificationTemplateList",
    meta: { "trans": "global.list", "label": "config.push_notification.template.template" },
    component: () => import('@/views/Pages/Config/PushNotificationTemplate/Index.vue'),
},
{
    path: ":uuid/edit",
    name: "ConfigPushNotificationTemplateEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "config.push_notification.template.template" },
    component: () => import('@/views/Pages/Config/PushNotificationTemplate/Action.vue'),
}
],
},
{
    path: "feature",
    name: "ConfigFeature",
    meta: { "label": "config.feature.feature", "icon": "fas fa-list", "key": "feature" },
    component: () => import('@/views/Pages/Config/Feature/Index.vue'),
},
{
    path: "chat",
    name: "ConfigChat",
    meta: { "label": "config.chat.chat", "icon": "fas fa-comment", "key": "chat" },
    component: () => import('@/views/Pages/Config/Chat/Index.vue'),
},
{
    path: "module",
    name: "ConfigModule",
    meta: { "label": "config.module.module", "icon": "fas fa-boxes-stacked", "hideChildren": true, "key": "module" },
    component: () => import('@/views/Pages/Config/Module/Index.vue'),
},
{
    path: "social-network",
    name: "ConfigSocialNetwork",
    meta: { "label": "config.social.social", "icon": "fas fa-share-alt", "key": "social-network" },
    component: () => import('@/views/Pages/Config/SocialNetwork/Index.vue'),
},
{
    path: "locale",
    name: "ConfigLocale",
    redirect: { name: "ConfigLocaleList" },
    meta: { "label": "config.locale.locale", "icon": "fas fa-language", "hideChildren": true, "key": "locale" },
    component: RouterView,
    children: [
{
    path: "",
    name: "ConfigLocaleList",
    meta: { "trans": "global.list", "label": "config.locale.locale" },
    component: () => import('@/views/Pages/Config/Locale/Index.vue'),
},
{
    path: "create",
    name: "ConfigLocaleCreate",
    meta: { "type": "create", "action": "create", "trans": "global.add", "label": "config.locale.locale" },
    component: () => import('@/views/Pages/Config/Locale/Action.vue'),
},
{
    path: ":uuid/edit",
    name: "ConfigLocaleEdit",
    meta: { "type": "edit", "action": "update", "trans": "global.edit", "label": "config.locale.locale" },
    component: () => import('@/views/Pages/Config/Locale/Action.vue'),
}
],
}
],
},
{
    path: "product",
    name: "Product",
    meta: { "isNotNav": true, "title": "setup.product", "roles": ["admin"] },
    component: () => import('@/views/Pages/Product/Index.vue'),
},
{
    path: "license",
    name: "License",
    meta: { "isNotNav": true, "title": "setup.license.validation" },
    component: () => import('@/views/Pages/Product/License.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
},
{
    path: "support",
    name: "Support",
    meta: { "isNotNav": true, "label": "general.support", "icon": "fas fa-headset", "hideChildren": true, "superAdmin": true, "keySearch": true },
    component: () => import('@/views/Pages/Support/Index.vue'),
}
],
},
{
    path: "/",
    name: "Setup",
    redirect: { name: "install" },
    meta: { "isNotNav": true, "belongsTo": "setup" },
    component: () => import('@/views/Layouts/Setup.vue'),
    children: [
{
    path: "install",
    name: "Install",
    meta: { "title": "setup.install.install_wizard" },
    component: () => import('@/views/Pages/Install/Index.vue'),
    beforeEnter() { /* original guard preserved in router/index.js */ },
}
],
},
{
    path: "/",
    name: "Error",
    meta: { "isNotNav": true, "belongsTo": "setup" },
    component: () => import('@/views/Layouts/Error.vue'),
    children: [
{
    path: "error",
    name: "ErrorGeneral",
    meta: { "title": "general.errors.error_page_title" },
    component: () => import('@/views/Pages/Errors/Index.vue'),
},
{
    path: "401",
    name: "Error401",
    meta: { "title": "general.errors.unauthorized_title" },
    component: () => import('@/views/Pages/Errors/401.vue'),
},
{
    path: "403",
    name: "Error403",
    meta: { "title": "general.errors.permission_denied_title" },
    component: () => import('@/views/Pages/Errors/403.vue'),
},
{
    path: "404",
    name: "Error404",
    meta: { "title": "general.errors.page_not_found_title" },
    component: () => import('@/views/Pages/Errors/404.vue'),
}
],
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { "isNotNav": true },
}
];
