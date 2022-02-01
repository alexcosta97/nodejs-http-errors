import HttpError from './http';

export default function (err, req, res) {
  if (err instanceof HttpError && res) {
    //Log as HttpError
    console.error(`Error on operation ${err.operationId}: ${err.message}`);
    return res.status(err.status).json({
      systemMessage: err.message,
      operationId: err.operationId,
      userMessage: err.userMessage || err.message,
      code: err.code
    });
  } else {
    //Log as Normal Error
    console.error(`Error occured: ${err.message}\n${err.stack}`);
  }
}
