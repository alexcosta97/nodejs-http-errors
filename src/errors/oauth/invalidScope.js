import OAuthError from './error';

export default class InvalidScope extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'invalid_scope';
  }
}
