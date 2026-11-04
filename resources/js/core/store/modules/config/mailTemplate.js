import makeModule from '../../../crud';

export default makeModule('/app/config/mail-templates', { extraState: {"templateUrl": "/app/config/templates"} });
