import makeModule from '../../../crud';

export default makeModule('/app/utility/todos', { extraState: {"optionURL": "/app/options"} });
