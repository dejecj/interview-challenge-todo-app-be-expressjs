import { ErrorRequestHandler } from "express";
import env from "../env";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  req.log.debug('Error handler called');
  res.status(400).json({
    message: err.message,
    data: err.data,
    stack: env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

export default errorHandler;
