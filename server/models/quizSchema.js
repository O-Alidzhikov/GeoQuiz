const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  answer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
  questions: [questionSchema],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
