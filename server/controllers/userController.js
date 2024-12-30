const router = require("express").Router();
const userService = require("../services/userService");



router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log( name, email, password)


  await userService.register({ name, email, password });

  // res.redirect("/users/login");
});


 router.post("/login", async (req, res) => {
   const { username, password } = req.body;
  const token = await userService.login(username, password);

  res.cookie("auth", token, { httpOnly: true });
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

module.exports = router;
