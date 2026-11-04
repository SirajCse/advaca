import makeModule from '../../../crud';

export default makeModule('/app/employee/accounts', { extraState: {"subUrl": "/app/employees"} });
