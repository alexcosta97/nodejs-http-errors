import HttpError from './http';

export default class ClientNotAuthorizedError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'ClientNotAuthorizedError';
    this.status = 401;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || this.userMessage;
    this.code = 'client_not_authorized';
  }
}
