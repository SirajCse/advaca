import Submission from './form/submission';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        submission: Submission,
    },
    ...makeModule('/app/forms'),
};
