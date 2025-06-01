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


router.get("/", async (req, res) => {
    try {
    const quizzes = await quizService.getQuizzes();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
})
module.exports = router;
