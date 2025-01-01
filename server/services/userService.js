const User = require("../models/userSchema"); 
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");

exports.register = async (userData) => {
  try {
    
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
   
    console.error("Error creating user:", error);
    throw new Error("Error registering user");
  }
};


exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  // validate username
  if (!user) {
    throw new Error("Invalid username or password!");
  }

  // validate password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid username or password!");
  }

  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
};