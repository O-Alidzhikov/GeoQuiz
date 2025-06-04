const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants/constants");

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

  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid username or password!");
  }

  const payload = {
    _id: user._id,
    email: user.email,
  };

  try {
    const token = await jwt.sign(payload, SECRET, { expiresIn: "7d" });
    console.log(token);
    console.log("Successful login!");
    return { token: token, user: user };
  } catch (err) {
    console.error("Error signing the JWT:", err.message);
    throw new Error("Failed to generate authentication token.");
  }
};
