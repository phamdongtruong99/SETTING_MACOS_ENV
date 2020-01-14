export default class ResponseHandler {
  static returnSuccess(res, data) {
    return res.status(200).json({
      data
    });
  }

  static returnError(res, error) {
    return res.status(400).json({
      message: error.message,
      error: e.stack || e
    });
  }
}
