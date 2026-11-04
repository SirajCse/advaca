import makeModule from '../../../crud';

export default makeModule('/app/tasks', { extraState: {"module": "/media"} });
