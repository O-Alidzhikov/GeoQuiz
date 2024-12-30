const router = require("express").Router();
const userService = require("../services/userService");



router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log( username, email, password)


  await userService.register({ username, email, password });


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
