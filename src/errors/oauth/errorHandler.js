import OAuthError from './error';

export default function (err, req, res) {
  if (err instanceof OAuthError && res) {
    //Log as OAuthError
    console.error(`Error occured of type ${err.error}: ${err.error_description}`);
    return res.status(err.status).json({
      error: err.error,
      error_description: err.error_description
    });
  } else {
    //Log as Normal Error
    console.error(`Error occured: ${err.message}\n${err.stack}`);
  }
}
