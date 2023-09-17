import { Errback, NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.sendStatus(500);
};

export default errorHandler;
