const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// create token
const createToken = (_id) => {
  // the _id parameter will be the payload of the token
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup
const signupUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.signup(email, password, role);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get user information
const getUserInfo = async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(404).json({ err: "No user found" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ err: "No user found" });
  }
  res.status(200).json(user);
};

module.exports = {
  loginUser,
  signupUser,
  getUserInfo,
};
