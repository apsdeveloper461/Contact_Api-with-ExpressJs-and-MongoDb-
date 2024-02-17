const { constants } = require("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        title: "Server Problem",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHERIZED:
      res.json({
        title: "Unautherized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
     console.log("Not an error , All is good!");
      break;
  }
};

module.exports = errorHandler;
