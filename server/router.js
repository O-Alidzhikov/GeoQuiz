const router = require("express").Router();

const userController = require("./controllers/userController");
const quizController = require("./controllers/quizController")



 router.use("/", userController);
 router.use("/quiz-create", quizController)

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
