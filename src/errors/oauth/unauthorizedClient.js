import OAuthError from './error';

export default class UnauthorizedClient extends OAuthError {
  constructor(message, status = 400) {
    super(message);
    this.error = 'unauthorized_client';
    this.status = status;
  }
}
