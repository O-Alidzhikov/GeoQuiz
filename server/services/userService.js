const User = require("../models/userSchema"); 

exports.register = async (userData) => {
  try {
    
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
   
    console.error("Error creating user:", error);
    throw new Error("Error registering user");
  }
};