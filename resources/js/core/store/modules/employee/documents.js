import makeModule from '../../../crud';

export default makeModule('/app/employee/documents', { extraState: {"subUrl": "/app/employees"} });
