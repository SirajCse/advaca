import Stoppage from './transport/stoppage';
import Route from './transport/route';
import Circle from './transport/circle';
import Fee from './transport/fee';
import Vehicle from './transport/vehicle';
import Report from './transport/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        stoppage: Stoppage,
        route: Route,
        circle: Circle,
        fee: Fee,
        vehicle: Vehicle,
        report: Report,
    },
};
