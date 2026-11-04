import Menuitem from './mess/menuItem';
import Meal from './mess/meal';
import Meallog from './mess/mealLog';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        menuItem: Menuitem,
        meal: Meal,
        mealLog: Meallog,
    },
};
