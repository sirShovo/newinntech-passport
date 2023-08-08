/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { SECRET } from "./secrets";

export const generateAccessToken = (user: any) => {
  return jwt.sign(user, SECRET, { expiresIn: "6h" });
}

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers['authorization'] || req.query.accessToken;
  if (!accessToken) res.send('Access denied');

  jwt.verify(accessToken as string, SECRET, (err, user) => {
    if (err) {
      res.send('Access denied, token expired or incorrect');
    } else {
      req.user = user;
      next();
    }
  });
}

export const getDataToken = (token: string) => {
  let data = null;
  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      console.log("Error, we can't get the token information");
    } else {
      data = user;
    }
  });
  return data;
}
