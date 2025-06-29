const router = require("express").Router();
const {isAuth} = require("../middlewares/authMiddleware")
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  const highScore = 0;

  await userService.register({ username, email, password, highScore });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userData = await userService.login(email, password);

  const isProd = process.env.NODE_ENV === "production";

  res.cookie("auth-token", userData.token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ user: userData.user, token: userData.token });
});



router.get("/me", isAuth, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({
    userId: req.user._id,
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth-token");
});

module.exports = router;
