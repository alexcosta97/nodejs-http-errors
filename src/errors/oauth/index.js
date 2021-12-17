import OAuthError from './error';
import InvalidClient from './invalidClient';
import InvalidClientMetadata from './invalidClientMetadata';
import InvalidGrant from './invalidGrant';
import InvalidRedirectURI from './invalidRedirectUri';
import InvalidRequest from './invalidRequest';
import InvalidScope from './invalidScope';
import UnauthorizedClient from './unauthorizedClient';
import UnsupportedGrantType from './unsupportedGrantType';
import errorHandler from './errorHandler';

export default {
  OAuthError,
  InvalidClient,
  InvalidClientMetadata,
  InvalidGrant,
  InvalidRedirectURI,
  InvalidRequest,
  InvalidScope,
  UnauthorizedClient,
  UnsupportedGrantType,
  errorHandler
};
