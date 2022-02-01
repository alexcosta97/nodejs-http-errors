import AccessDenied from './accessDenied';
import OAuthError from './error';
import InvalidClient from './invalidClient';
import InvalidClientMetadata from './invalidClientMetadata';
import InvalidGrant from './invalidGrant';
import InvalidRedirectURI from './invalidRedirectUri';
import InvalidRequest from './invalidRequest';
import InvalidScope from './invalidScope';
import ServerError from './serverError';
import TemporarilyUnavailable from './temporarilyUnavailable';
import UnauthorizedClient from './unauthorizedClient';
import UnsupportedGrantType from './unsupportedGrantType';
import UnsupportedResponseType from './unsupportedResponseType';
import errorHandler from './errorHandler';

export default {
  AccessDenied,
  OAuthError,
  InvalidClient,
  InvalidClientMetadata,
  InvalidGrant,
  InvalidRedirectURI,
  InvalidRequest,
  InvalidScope,
  ServerError,
  TemporarilyUnavailable,
  UnauthorizedClient,
  UnsupportedGrantType,
  UnsupportedResponseType,
  errorHandler
};
