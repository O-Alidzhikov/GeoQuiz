const Quiz = require("../models/quizSchema")


exports.create = async (questions) => {
  try {
    const newQuiz = await Quiz.create(questions);
    console.log("we did it server side")
    return newQuiz;
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw new Error("Error creating quiz");
  }
} 