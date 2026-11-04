import makeModule from '../../../crud';

export default makeModule('/app/students', { extraState: {"module": "/custom-fees"} });
