const express = require("express");
// controllers functions
const {
  loginUser,
  signupUser,
  getUserInfo,
} = require("../controllers/userController");
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// user information
router.get("/:email", getUserInfo);

module.exports = router;
