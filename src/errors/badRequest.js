import HttpError from './http';

export default class BadRequestError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'BadRequestError';
    this.status = 400;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || this.userMessage;
    this.code = 'bad_request';
  }
}
