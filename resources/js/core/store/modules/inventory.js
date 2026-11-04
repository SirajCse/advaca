import Incharge from './inventory/incharge';
import Vendor from './inventory/vendor';
import Stockcategory from './inventory/stockCategory';
import Stockitem from './inventory/stockItem';
import Stockitemcopy from './inventory/stockItemCopy';
import Stockitemwithcopy from './inventory/stockItemWithCopy';
import Stockitemlabel from './inventory/stockItemLabel';
import Stockrequisition from './inventory/stockRequisition';
import Stockpurchase from './inventory/stockPurchase';
import Stockreturn from './inventory/stockReturn';
import Stocktransfer from './inventory/stockTransfer';
import Stockadjustment from './inventory/stockAdjustment';
import Report from './inventory/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        incharge: Incharge,
        vendor: Vendor,
        stockCategory: Stockcategory,
        stockItem: Stockitem,
        stockItemCopy: Stockitemcopy,
        stockItemWithCopy: Stockitemwithcopy,
        stockItemLabel: Stockitemlabel,
        stockRequisition: Stockrequisition,
        stockPurchase: Stockpurchase,
        stockReturn: Stockreturn,
        stockTransfer: Stocktransfer,
        stockAdjustment: Stockadjustment,
        report: Report,
    },
    ...makeModule('/app/inventories'),
};
