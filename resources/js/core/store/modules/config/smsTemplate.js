import makeModule from '../../../crud';

export default makeModule('/app/config/sms-templates', { extraState: {"templateUrl": "/app/config/templates"} });
