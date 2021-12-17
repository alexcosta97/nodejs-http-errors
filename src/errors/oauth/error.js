export default class OAuthError extends Error {
  constructor(message) {
    super(message);
    (this.error = 'oauth_error'), (this.error_description = message);
    this.status = 400;
  }
}
