const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  try {
    await userService.register({ username, email, password });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    
   // nsole.error("Caught in controller:", err.name); 
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);

      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    res.status(500).json({
      message: "Something went wrong",
    });
  }
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
