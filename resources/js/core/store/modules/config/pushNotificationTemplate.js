import makeModule from '../../../crud';

export default makeModule('/app/config/push-notification-templates', { extraState: {"templateUrl": "/app/config/templates"} });
