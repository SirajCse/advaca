import makeModule from '../../../crud';

export default makeModule('/app/config/whatsapp-templates', { extraState: {"templateUrl": "/app/config/templates"} });
