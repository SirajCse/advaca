import makeModule from '../../../crud';

export default makeModule('/app/finance/transactions', { extraState: {"subInitUrl": "/app/finance"} });
