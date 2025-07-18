const router = require("express").Router();
const quizService = require("../services/quizService");

router.post("/", async (req, res) => {
  const quizData = req.body;
  console.log(quizData);

  try {
    const createdQuiz = await quizService.create(quizData);
    res.status(201).json(createdQuiz);
  } catch (err) {
    res.status(500).json({ message: "Failed to create quiz" });
  }
});


router.patch("/edit", async (req, res) => {
  const quizData = req.body;
  console.log(quizData);

  try {
    const editedQuiz = await quizService.edit(quizData.id,quizData);
    res.status(201).json(editedQuiz);
  } catch (err) {
    res.status(500).json({ message: "Failed to edit quiz" });
  }
});

router.get("/", async (req, res) => {
  try {
    const quizzes = await quizService.getQuizzes();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

router.get("/get-one", async (req, res) => {
  const { quizId } = req.query;
  try {
    const quizzes = await quizService.getQuiz(quizId);
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

router.delete("/", async (req, res) => {
  const { _id } = req.body;
  try {
    const deleted = await quizService.deleteQuiz(_id);
    return deleted;
  } catch (error) {
    res.status(500).json({ error: "Failed to delete quiz" });
  }
});
module.exports = router;
