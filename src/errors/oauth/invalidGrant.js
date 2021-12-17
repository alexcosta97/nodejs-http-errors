import OAuthError from './error';

export default class InvalidGrant extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'invalid_grant';
  }
}
