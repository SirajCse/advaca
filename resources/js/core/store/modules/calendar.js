import Holiday from './calendar/holiday';
import Celebration from './calendar/celebration';
import Event from './calendar/event';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        holiday: Holiday,
        celebration: Celebration,
        event: Event,
    },
};
