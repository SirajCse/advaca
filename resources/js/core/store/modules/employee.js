import Documenttype from './employee/documentType';
import Department from './employee/department';
import Designation from './employee/designation';
import Documents from './employee/documents';
import Accounts from './employee/accounts';
import Qualifications from './employee/qualifications';
import Experiences from './employee/experiences';
import Leave from './employee/leave';
import Attendance from './employee/attendance';
import Payroll from './employee/payroll';
import Editrequest from './employee/editRequest';
import Record from './employee/record';
import Incharge from './employee/incharge';
import Workshift from './employee/workShift';
import Qualification from './employee/qualification';
import Dialogue from './employee/dialogue';
import Account from './employee/account';
import Document from './employee/document';
import Experience from './employee/experience';
import Profileeditrequest from './employee/profileEditRequest';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        documentType: Documenttype,
        department: Department,
        designation: Designation,
        documents: Documents,
        accounts: Accounts,
        qualifications: Qualifications,
        experiences: Experiences,
        leave: Leave,
        attendance: Attendance,
        payroll: Payroll,
        editRequest: Editrequest,
        record: Record,
        incharge: Incharge,
        workShift: Workshift,
        qualification: Qualification,
        dialogue: Dialogue,
        account: Account,
        document: Document,
        experience: Experience,
        profileEditRequest: Profileeditrequest,
    },
    ...makeModule('/app/employees'),
};
