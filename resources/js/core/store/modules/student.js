import Registration from './student/registration';
import Registrationdocument from './student/registrationDocument';
import Registrationqualification from './student/registrationQualification';
import Rollnumber from './student/rollNumber';
import Photo from './student/photo';
import Healthrecord from './student/healthRecord';
import Subject from './student/subject';
import Attendance from './student/attendance';
import Feeallocation from './student/feeAllocation';
import Serviceallocation from './student/serviceAllocation';
import Promotion from './student/promotion';
import Editrequest from './student/editRequest';
import Servicerequest from './student/serviceRequest';
import Leaverequest from './student/leaveRequest';
import Transferrequest from './student/transferRequest';
import Transfer from './student/transfer';
import Transferapprovalrequest from './student/transferApprovalRequest';
import Timesheet from './student/timesheet';
import Report from './student/report';
import Accounts from './student/accounts';
import Documents from './student/documents';
import Qualifications from './student/qualifications';
import Attendancetype from './student/attendanceType';
import Documenttype from './student/documentType';
import Guardian from './student/guardian';
import Sibling from './student/sibling';
import Record from './student/record';
import Fee from './student/fee';
import Customfee from './student/customFee';
import Feerefund from './student/feeRefund';
import Payment from './student/payment';
import Dialogue from './student/dialogue';
import Account from './student/account';
import Document from './student/document';
import Qualification from './student/qualification';
import Profileeditrequest from './student/profileEditRequest';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        registration: Registration,
        registrationDocument: Registrationdocument,
        registrationQualification: Registrationqualification,
        rollNumber: Rollnumber,
        photo: Photo,
        healthRecord: Healthrecord,
        subject: Subject,
        attendance: Attendance,
        feeAllocation: Feeallocation,
        serviceAllocation: Serviceallocation,
        promotion: Promotion,
        editRequest: Editrequest,
        serviceRequest: Servicerequest,
        leaveRequest: Leaverequest,
        transferRequest: Transferrequest,
        transfer: Transfer,
        transferApprovalRequest: Transferapprovalrequest,
        timesheet: Timesheet,
        report: Report,
        accounts: Accounts,
        documents: Documents,
        qualifications: Qualifications,
        attendanceType: Attendancetype,
        documentType: Documenttype,
        guardian: Guardian,
        sibling: Sibling,
        record: Record,
        fee: Fee,
        customFee: Customfee,
        feeRefund: Feerefund,
        payment: Payment,
        dialogue: Dialogue,
        account: Account,
        document: Document,
        qualification: Qualification,
        profileEditRequest: Profileeditrequest,
    },
    ...makeModule('/app/students'),
};
