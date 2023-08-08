/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from "express";

export const signUp = (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: "Email and password is required",
    });
  }

  try {
    return undefined;
  } catch (error: any) {
    console.log(error);
    res.render("login");
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const login = (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: "Email and password is required",
    });
  }
  return undefined;
};
