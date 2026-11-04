import Vacancy from './recruitment/vacancy';
import Application from './recruitment/application';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        vacancy: Vacancy,
        application: Application,
    },
    ...makeModule('/app/job'),
};
