import OAuthError from './error';

export default class InternalError extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'server_error';
    this.status = 500;
  }
}
