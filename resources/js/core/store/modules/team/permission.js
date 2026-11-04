import makeModule from '../../../crud';

export default makeModule('/app/teams', { extraState: {"module": "/permissions"} });
