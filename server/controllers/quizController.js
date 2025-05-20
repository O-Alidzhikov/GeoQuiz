const router = require("express").Router();
const quizService = require("../services/quizService");


router.post("/", async (req, res) => {
  const quizData = req.body;

  try {
    const createdQuiz = await quizService.create(quizData);
    res.status(201).json(createdQuiz); 
  } catch (err) {
    res.status(500).json({ message: "Failed to create quiz" });
  }
});

module.exports = router;
