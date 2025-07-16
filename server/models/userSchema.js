const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username must be less than 30 characters long']
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'] 
  },
  password: { 
    type: String, 
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    maxlength: [120,'Password must be less than 120 characters long']
  },
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;