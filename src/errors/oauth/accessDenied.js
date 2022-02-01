import OAuthError from './error';

export default class AccessDenied extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'access_denied';
  }
}
