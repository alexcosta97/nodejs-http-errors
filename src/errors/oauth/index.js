import AccessDenied from './accessDenied';
import OAuthError from './error';
import InternalError from './internalError';
import InvalidClient from './invalidClient';
import InvalidClientMetadata from './invalidClientMetadata';
import InvalidGrant from './invalidGrant';
import InvalidRedirectURI from './invalidRedirectUri';
import InvalidRequest from './invalidRequest';
import InvalidScope from './invalidScope';
import TemporarilyUnavailable from './temporarilyUnavailable';
import UnauthorizedClient from './unauthorizedClient';
import UnsupportedGrantType from './unsupportedGrantType';
import UnsupportedResponseType from './unsupportedResponseType';
import errorHandler from './errorHandler';

export default {
  AccessDenied,
  OAuthError,
  InternalError,
  InvalidClient,
  InvalidClientMetadata,
  InvalidGrant,
  InvalidRedirectURI,
  InvalidRequest,
  InvalidScope,
  TemporarilyUnavailable,
  UnauthorizedClient,
  UnsupportedGrantType,
  UnsupportedResponseType,
  errorHandler
};
