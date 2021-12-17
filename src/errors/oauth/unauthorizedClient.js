import OAuthError from './error';

export default class UnauthorizedClient extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'unauthorized_client';
  }
}
