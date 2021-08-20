import HttpError from './http';

export default class ConflictError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'ConflictError';
    this.status = 409;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || `This data already exists`;
    this.code = 'data_conflict';
  }
}
