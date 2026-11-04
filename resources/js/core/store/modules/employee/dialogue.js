import makeModule from '../../../crud';

export default makeModule('/app/employees', { extraState: {"module": "/dialogues"} });
