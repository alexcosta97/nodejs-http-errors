import OAuthError from './error';

export default class UnsupportedGrantType extends OAuthError {
  constructor(message) {
    super(message);
    this.error = 'unsupported_grant_type';
  }
}
