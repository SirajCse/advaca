import Term from './exam/term';
import Grade from './exam/grade';
import Assessment from './exam/assessment';
import Observation from './exam/observation';
import Competency from './exam/competency';
import Schedule from './exam/schedule';
import Form from './exam/form';
import Onlineexam from './exam/onlineExam';
import Admitcard from './exam/admitCard';
import Mark from './exam/mark';
import Observationmark from './exam/observationMark';
import Competencyevaluation from './exam/competencyEvaluation';
import Comment from './exam/comment';
import Attendance from './exam/attendance';
import Report from './exam/report';
import Marksheet from './exam/marksheet';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        term: Term,
        grade: Grade,
        assessment: Assessment,
        observation: Observation,
        competency: Competency,
        schedule: Schedule,
        form: Form,
        onlineExam: Onlineexam,
        admitCard: Admitcard,
        mark: Mark,
        observationMark: Observationmark,
        competencyEvaluation: Competencyevaluation,
        comment: Comment,
        attendance: Attendance,
        report: Report,
        marksheet: Marksheet,
    },
    ...makeModule('/app/exams'),
};
