/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", checkAuth, (req, res) => {
  res.render("profile", { user: req.user });
});

export default router;
