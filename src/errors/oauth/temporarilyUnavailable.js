import OAuthError from './error';

export default class TemporarilyUnavailable extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'temporarily_unavailable';
    this.status = 503;
  }
}
