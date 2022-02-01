import OAuthError from './error';

export default class InvalidRedirectURI extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'invalid_redirect_uri';
  }
}
