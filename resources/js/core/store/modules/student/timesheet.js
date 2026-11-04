import makeModule from '../../../crud';

export default makeModule('/app/student/timesheets', { extraState: {"subURL": "/app/student/timesheet"} });
