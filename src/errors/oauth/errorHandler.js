import OAuthError from './error';

export default function (err, req, res) {
  if (err instanceof OAuthError && res) {
    //Log as HttpError
    console.error(`Error occured: ${err.message}`);
    return res.status(err.status).json({
      error: err.error,
      error_description: err.error_description
    });
  } else {
    //Log as Normal Error
    console.error(`Error occured: ${err.message}`);
  }
}
