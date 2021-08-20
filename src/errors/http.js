export default class HttpError extends Error {
  constructor(message) {
    super(message);
    this.name = 'HttpError';
    this.status = 500;
    this.operationId = 'someOperation';
    this.userMessage = `Couldn't process your request. Please try again later.`;
    this.code = 'internal_server_error';
  }
}
