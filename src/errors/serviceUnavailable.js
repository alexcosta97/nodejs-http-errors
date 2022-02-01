import HttpError from './http';

export default class ServiceUnavailableError extends HttpError {
  constructor(message, operationId = undefined, userMessage = undefined) {
    super(message);
    this.name = 'ServiceUnavailableError';
    this.status = 503;
    this.operationId = operationId || 'someOperation';
    this.userMessage = userMessage || `The service is unavailable. Please try again later.`;
    this.code = 'service_unavailable';
  }
}
