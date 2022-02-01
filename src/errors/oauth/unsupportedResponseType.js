import OAuthError from './error';

export default class UnsupportedResponseType extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'unsupported_response_type';
  }
}
