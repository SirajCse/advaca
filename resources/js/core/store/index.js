import { createStore } from 'vuex';

import AcademicModule from './modules/academic';
import ActivityModule from './modules/activity';
import ApprovalModule from './modules/approval';
import AssetModule from './modules/asset';
import AttendanceassistantModule from './modules/attendanceAssistant';
import AuthModule from './modules/auth';
import BlogModule from './modules/blog';
import CalendarModule from './modules/calendar';
import ChatModule from './modules/chat';
import CommentModule from './modules/comment';
import CommunicationModule from './modules/communication';
import ConfigModule from './modules/config';
import ContactModule from './modules/contact';
import CustomfieldModule from './modules/customField';
import DashboardModule from './modules/dashboard';
import DeviceModule from './modules/device';
import DisciplineModule from './modules/discipline';
import EmployeeModule from './modules/employee';
import ExamModule from './modules/exam';
import FinanceModule from './modules/finance';
import FormModule from './modules/form';
import GalleryModule from './modules/gallery';
import GeneralModule from './modules/general';
import GuardianModule from './modules/guardian';
import GuestpaymentModule from './modules/guestPayment';
import HelpdeskModule from './modules/helpdesk';
import HostelModule from './modules/hostel';
import ImageModule from './modules/image';
import InventoryModule from './modules/inventory';
import LayoutModule from './modules/layout';
import LibraryModule from './modules/library';
import MessModule from './modules/mess';
import ModuleimportModule from './modules/moduleImport';
import NavigationModule from './modules/navigation';
import NewsModule from './modules/news';
import NotificationModule from './modules/notification';
import OnlineenquiryModule from './modules/onlineEnquiry';
import OnlineregistrationModule from './modules/onlineRegistration';
import OptionModule from './modules/option';
import OrganizationModule from './modules/organization';
import PostModule from './modules/post';
import ProductModule from './modules/product';
import ReceptionModule from './modules/reception';
import RecruitmentModule from './modules/recruitment';
import ReminderModule from './modules/reminder';
import ResourceModule from './modules/resource';
import SetupModule from './modules/setup';
import SiteModule from './modules/site';
import StudentModule from './modules/student';
import SupportModule from './modules/support';
import TagModule from './modules/tag';
import TaskModule from './modules/task';
import TeamModule from './modules/team';
import TransfercertificateModule from './modules/transferCertificate';
import TransportModule from './modules/transport';
import UserModule from './modules/user';
import UtilityModule from './modules/utility';

export default createStore({
    modules: {
        AcademicModule,
        ActivityModule,
        ApprovalModule,
        AssetModule,
        AttendanceassistantModule,
        AuthModule,
        BlogModule,
        CalendarModule,
        ChatModule,
        CommentModule,
        CommunicationModule,
        ConfigModule,
        ContactModule,
        CustomfieldModule,
        DashboardModule,
        DeviceModule,
        DisciplineModule,
        EmployeeModule,
        ExamModule,
        FinanceModule,
        FormModule,
        GalleryModule,
        GeneralModule,
        GuardianModule,
        GuestpaymentModule,
        HelpdeskModule,
        HostelModule,
        ImageModule,
        InventoryModule,
        LayoutModule,
        LibraryModule,
        MessModule,
        ModuleimportModule,
        NavigationModule,
        NewsModule,
        NotificationModule,
        OnlineenquiryModule,
        OnlineregistrationModule,
        OptionModule,
        OrganizationModule,
        PostModule,
        ProductModule,
        ReceptionModule,
        RecruitmentModule,
        ReminderModule,
        ResourceModule,
        SetupModule,
        SiteModule,
        StudentModule,
        SupportModule,
        TagModule,
        TaskModule,
        TeamModule,
        TransfercertificateModule,
        TransportModule,
        UserModule,
        UtilityModule,
    },
});
