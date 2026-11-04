import Todo from './utility/todo';
import Backup from './utility/backup';
import Activitylog from './utility/activityLog';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        todo: Todo,
        backup: Backup,
        activityLog: Activitylog,
    },
};
