const Quiz = require("../models/quizSchema")


exports.create = async (questions) => {
  try {
    const newQuiz = await Quiz.create(questions);
    console.log("we did it server side")
    return newQuiz;
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw error
  }
} 

exports.edit = async (quizId, updatedData) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      updatedData,
      { new: true, runValidators: true } 
    );

    if (!updatedQuiz) {
      throw new Error("Quiz not found");
    }

    console.log("Quiz successfully updated");
    return updatedQuiz;
  } catch (error) {
    console.error("Error editing quiz:", error);
    throw error
  }
};


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