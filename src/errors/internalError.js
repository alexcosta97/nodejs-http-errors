import HttpError from './http';

export default class InternalError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'InternalError';
    this.status = 500;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || this.userMessage;
    this.code = 'internal_server_error';
  }
}
