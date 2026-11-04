import makeModule from '../../../crud';

export default makeModule('/app/student/qualifications', { extraState: {"subUrl": "/app/students"} });
