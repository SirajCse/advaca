import { createApp, defineAsyncComponent } from 'vue';
const App = defineAsyncComponent(() => import('./views/Layouts/App.vue'));
import router from './router';
import store from './core/store';
import { http, form, cal, trans, emitter, swalConfirm } from './core';
import VueToastification from 'vue-toastification';
import FloatingVue, { Menu as VMenu, Dropdown as VDropdown } from 'floating-vue';
import ContextMenu from '@imengyu/vue3-context-menu';
import Vue3Marquee from 'vue3-marquee';
import VueTelInput from 'vue-tel-input';
import flatPickr from 'vue-flatpickr-component';
import moment from 'moment';
import momentz from 'moment-timezone';

import {
    CheckCircleIcon, ExclamationCircleIcon, XCircleIcon,
    InformationCircleIcon, XMarkIcon, EllipsisVerticalIcon,
} from './core/icons';

const app = createApp(App);

// plugins (same options as the original compiled bundle)
app.use(router);
app.use(store);
app.use(VueToastification, {
    position: 'bottom-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
});
app.use(Vue3Marquee);
app.use(VueTelInput);
app.use(ContextMenu);

// provide + global properties (original: $http, $form, $cal, $trans, $swal, moment, emitter, $contextmenu)
app.provide('$http', http);
app.provide('$form', form);
app.provide('$cal', cal);
app.provide('$trans', trans);
app.provide('$swal', swalConfirm);
app.provide('moment', moment);
app.provide('momentz', momentz);
app.provide('emitter', emitter);
app.config.globalProperties.$http = http;
app.config.globalProperties.$form = form;
app.config.globalProperties.$cal = cal;
app.config.globalProperties.$trans = trans;
app.config.globalProperties.$swal = swalConfirm;
app.config.globalProperties.moment = moment;
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$contextmenu = ContextMenu.showContextMenu;

// directives
app.directive('tooltip', FloatingVue.directive);

// auto-register core design-system components (original: import.meta.glob over core/components)
const coreComponents = import.meta.glob('./core/components/**/*.vue', { eager: true });
Object.entries(coreComponents).forEach(([path, component]) => {
    const name = path.split('/').pop().replace(/\.\w+$/, '');
    app.component(name, component.default);
});

// globally registered components (original registration list, extracted from the bundle)
const glob = import.meta.glob('./views/Components/*.vue', { eager: true });
const globalComponents = [
    'AppNavigation', 'PageHeader', 'PageHeaderAction', 'ProfileDropdown', 'MobileSidebar',
    'FooterCredit', 'ConfigPage', 'ConfigSidebar', 'ModuleConfig', 'ModuleConfigSidebar',
    'FormActionButton', 'ShowButton', 'CardHeader', 'ErrorPage', 'ReLogin', 'KeySearch',
    'NotificationList', 'UserScope', 'ParentTransition', 'ChildTransition', 'MenuParentTransition',
    'CustomField', 'ReminderInput', 'PeriodSelection', 'SessionWisePeriodSelection',
    'TimesheetClock', 'StudentTimesheetClock', 'NameInput', 'AddressInput', 'PaymentMethodInput',
    'PaymentMethodDetail', 'LedgerBalance', 'AudienceInput', 'MarkdownContent', 'PostReactions',
    'ViewLog', 'EmployeeSummary', 'AssignIncharge', 'GuestHeader',
];
globalComponents.forEach((name) => {
    if (glob[`./views/Components/${name}.vue`]) {
        app.component(name, glob[`./views/Components/${name}.vue`].default);
    }
});

app.component('VMenu', VMenu);
app.component('VDropdown', VDropdown);
app.component('flat-pickr', flatPickr);
app.component('CheckCircleIcon', CheckCircleIcon);
app.component('ExclamationCircleIcon', ExclamationCircleIcon);
app.component('XCircleIcon', XCircleIcon);
app.component('InformationCircleIcon', InformationCircleIcon);
app.component('XMarkIcon', XMarkIcon);
app.component('EllipsisVerticalIcon', EllipsisVerticalIcon);

app.mount('#root');
