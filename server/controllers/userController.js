const router = require("express").Router();
const userService = require("../services/userService");



router.post("/register", async (req, res) => {
  const { username, email, password,  } = req.body;
  console.log( username, email, password)

  const highScore = 0;

  await userService.register({ username, email, password, highScore });


});


 router.post("/login", async (req, res) => {
   const { email, password } = req.body;
   
  const userData = await userService.login(email, password);
  // console.log(token)


  res.cookie("auth", userData.token, { 
    httpOnly: true, 
    secure: false, 
    sameSite: 'none', 
    path: '/',        
  });
  res.status(200).json({user:userData.user,
    token:userData.token
  });


});

router.get("/logout", (req, res) => {
  res.clearCookie("auth-token");
});

module.exports = router;
