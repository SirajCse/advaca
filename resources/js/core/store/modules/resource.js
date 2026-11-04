import Booklist from './resource/bookList';
import Diary from './resource/diary';
import Assignment from './resource/assignment';
import Onlineclass from './resource/onlineClass';
import Lessonplan from './resource/lessonPlan';
import Syllabus from './resource/syllabus';
import Learningmaterial from './resource/learningMaterial';
import Download from './resource/download';
import Report from './resource/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        bookList: Booklist,
        diary: Diary,
        assignment: Assignment,
        onlineClass: Onlineclass,
        lessonPlan: Lessonplan,
        syllabus: Syllabus,
        learningMaterial: Learningmaterial,
        download: Download,
        report: Report,
    },
};
