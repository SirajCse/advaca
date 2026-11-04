import Department from './academic/department';
import Departmentincharge from './academic/departmentIncharge';
import Programtype from './academic/programType';
import Program from './academic/program';
import Programincharge from './academic/programIncharge';
import Session from './academic/session';
import Period from './academic/period';
import Division from './academic/division';
import Divisionincharge from './academic/divisionIncharge';
import Course from './academic/course';
import Courseincharge from './academic/courseIncharge';
import Enrollmentseat from './academic/enrollmentSeat';
import Batch from './academic/batch';
import Batchincharge from './academic/batchIncharge';
import Subject from './academic/subject';
import Subjectincharge from './academic/subjectIncharge';
import Batchsubjectincharge from './academic/batchSubjectIncharge';
import Classtiming from './academic/classTiming';
import Timetable from './academic/timetable';
import Booklist from './academic/bookList';
import Certificatetemplate from './academic/certificateTemplate';
import Certificate from './academic/certificate';
import Idcardtemplate from './academic/idCardTemplate';
import Idcard from './academic/idCard';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        department: Department,
        departmentIncharge: Departmentincharge,
        programType: Programtype,
        program: Program,
        programIncharge: Programincharge,
        session: Session,
        period: Period,
        division: Division,
        divisionIncharge: Divisionincharge,
        course: Course,
        courseIncharge: Courseincharge,
        enrollmentSeat: Enrollmentseat,
        batch: Batch,
        batchIncharge: Batchincharge,
        subject: Subject,
        subjectIncharge: Subjectincharge,
        batchSubjectIncharge: Batchsubjectincharge,
        classTiming: Classtiming,
        timetable: Timetable,
        bookList: Booklist,
        certificateTemplate: Certificatetemplate,
        certificate: Certificate,
        idCardTemplate: Idcardtemplate,
        idCard: Idcard,
    },
};
