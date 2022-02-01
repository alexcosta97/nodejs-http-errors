import OAuthError from './error';

export default class InvalidClientMetadata extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'invalid_client_metadata';
  }
}
