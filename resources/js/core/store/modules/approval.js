import Type from './approval/type';
import Request from './approval/request';
import Report from './approval/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        type: Type,
        request: Request,
        report: Report,
    },
};
