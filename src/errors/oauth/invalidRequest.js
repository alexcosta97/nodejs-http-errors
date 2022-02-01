import OAuthError from './error';

export default class InvalidRequest extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'invalid_request';
  }
}
