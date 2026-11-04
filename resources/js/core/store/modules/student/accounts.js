import makeModule from '../../../crud';

export default makeModule('/app/student/accounts', { extraState: {"subUrl": "/app/students"} });
