import OAuthError from './error';

export default class InvalidClient extends OAuthError {
  constructor(message, status = 400) {
    super(message);
    this.error = 'invalid_client';
    this.status = status;
  }
}
