import makeModule from '../../../crud';

export default makeModule('/app/user', { extraState: {"initAuthURL": "/auth/user"} });
