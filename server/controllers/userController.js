const router = require("express").Router();
const userService = require("../services/userService");



router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log( username, email, password)


  await userService.register({ username, email, password });


});


 router.post("/login", async (req, res,next) => {
   const { email, password } = req.body;
   
  const token = await userService.login(email, password);
  console.log(token)


  res.cookie("auth", token, { 
    httpOnly: true, 
    secure: false, 
    sameSite: 'none', 
    path: '/',        
  });

  res.status(200).json({token:token});
  next();
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth-token");
});

module.exports = router;
