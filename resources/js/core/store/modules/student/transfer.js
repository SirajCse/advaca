import makeModule from '../../../crud';

export default makeModule('/app/student/transfers', { extraState: {"subInitURL": "/app/student/transfer/approval-requests"} });
