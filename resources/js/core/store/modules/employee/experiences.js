import makeModule from '../../../crud';

export default makeModule('/app/employee/experiences', { extraState: {"subUrl": "/app/employees"} });
