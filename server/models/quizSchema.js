const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true, minlength: 10, maxlength: 250 },
  optionA: { type: String, required: true, minlength: 1, maxlength: 100 },
  optionB: { type: String, required: true, minlength: 1, maxlength: 100 },
  optionC: { type: String, required: true, minlength: 1, maxlength: 100 },
  optionD: { type: String, required: true, minlength: 1, maxlength: 100 },
  answer: { type: String, required: true, minlength: 1, maxlength: 100 },
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, minlength: 10 },
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
  questions: [questionSchema],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
