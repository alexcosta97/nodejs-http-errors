import HttpError from './http';

export default class ClientForbiddenError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'ClientForbiddenError';
    this.status = 403;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || this.userMessage;
    this.code = 'client_forbidden';
  }
}
