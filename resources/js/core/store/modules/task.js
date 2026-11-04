import Dashboard from './task/dashboard';
import Checklist from './task/checklist';
import Member from './task/member';
import Media from './task/media';
import Repeat from './task/repeat';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        dashboard: Dashboard,
        checklist: Checklist,
        member: Member,
        media: Media,
        repeat: Repeat,
    },
    ...makeModule('/app/tasks'),
};
