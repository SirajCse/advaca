import makeModule from '../../../crud';

export default makeModule('/app/guest-registration-payments', { extraState: {"anonymousInitURL": "/app/anonymous-payments"} });
