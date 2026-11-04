import makeModule from '../../../crud';

export default makeModule('/app/reception/enquiries', { extraState: {"module": "/follow-ups"} });
