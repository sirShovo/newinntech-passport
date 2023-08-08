import express from "express";
import passport from "passport";
const router = express.Router();

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/profile");
  }
  res.redirect("/");
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "profile"],
  })
);

router.get("/facebook/redirect", passport.authenticate("facebook"), (req, res) => {
  res.redirect("/profile");
});

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["email", "profile"],
  })
);

router.get("/github/redirect", passport.authenticate("github"), (req, res) => {
  res.redirect("/profile");
});


export default router;
