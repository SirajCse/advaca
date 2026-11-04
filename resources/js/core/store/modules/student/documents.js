import makeModule from '../../../crud';

export default makeModule('/app/student/documents', { extraState: {"subUrl": "/app/students"} });
