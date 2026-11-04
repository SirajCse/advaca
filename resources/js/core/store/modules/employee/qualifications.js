import makeModule from '../../../crud';

export default makeModule('/app/employee/qualifications', { extraState: {"subUrl": "/app/employees"} });
