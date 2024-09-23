const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Object_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const user = mongoose.Model(userModel, "userModel");
module.exports = user;
