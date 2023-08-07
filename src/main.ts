import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import posts from "./routes/posts.routes";
import dairies from "./routes/diaries.route";

const router: Express = express();

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
router.use("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});
router.use("/posts", posts);
router.use("/dairies", dairies);
router.use((_req, res) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
