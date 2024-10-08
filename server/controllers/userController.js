const express = require("express");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");

const loginController = () => {};
const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary input fields have not been filled");
  }

  // pre existing user
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw Error("User already exists");
  }

  // username already taken
  const userNameExist = await User.findOne({ name });
  if (userNameExist) {
    throw Error("Username already taken");
  }

  // create an entry in the db for the new user
  const newUser = await User.create({ name, email, password });
});

module.exports = { loginController, registerController };
