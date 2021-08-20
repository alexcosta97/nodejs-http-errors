import HttpError from './http';

export default class NotFoundError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
    this.operationId = operationId || 'categoriesOperation';
    this.userMessage = userMessage || `Couldn't find information. Please try again later.`;
    this.code = 'not_found';
  }
}
