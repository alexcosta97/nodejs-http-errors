import BadRequestError from './errors/badRequest';
import ClientForbiddenError from './errors/clientForbidden';
import ClientNotAuthorizedError from './errors/clientNotAuthorized';
import ConflictError from './errors/conflict';
import HttpError from './errors/http';
import InternalError from './errors/internalError';
import NotFoundError from './errors/notFound';
import OAuth from './errors/oauth/index';

export default {
  BadRequestError,
  ClientForbiddenError,
  ClientNotAuthorizedError,
  ConflictError,
  HttpError,
  InternalError,
  NotFoundError,
  OAuth
};
