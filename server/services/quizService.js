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


exports.getQuizzes = async () => {
  try {
    const allQuizzes = await Quiz.find({}); 
    return allQuizzes; 
  } catch (error) {
    console.error('Error getting quizzes:', error);
    throw error; 
  }
};

exports.getQuiz = async (_id) => {
  try {
    const quiz = await Quiz.findById(_id); 
    return quiz; 
  } catch (error) {
    console.error('Error getting quizzes:', error);
    throw error; 
  }
};


exports.deleteQuiz = async (quizId) => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
    return deletedQuiz; 
  } catch (error) {
    console.error('Error deleting quiz:', error);
    throw error;
  }
};