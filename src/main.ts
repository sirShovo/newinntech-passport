import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import posts from "./routes/posts.routes";
import dairies from "./routes/diaries.route";
import auth from "./routes/auth.route";
import profile from "./routes/profile.route";
import "./config/passport";
import { COOKIE_KEY, MONGO_URI } from "./config/secrets";
import passport from "passport";
import cookieSession from "cookie-session";
import mongoose from "mongoose";

const router: Express = express();

router.set("view engine", "ejs");

router.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY],
  })
);

router.use(passport.initialize());
router.use(passport.session());

mongoose.connect(MONGO_URI, () => {
  console.log("connected to mongodb");
});

router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  return next();
});


// Routes list
router.get("/", (_req, res) => {
  res.render("home");
});
router.use("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});
router.use("/posts", posts);
router.use("/dairies", dairies);
router.use("/auth", auth);
router.use("/profile", profile);
router.use((_req, res) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

// Initialize server
const httpServer = http.createServer(router);
const PORT: unknown = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
