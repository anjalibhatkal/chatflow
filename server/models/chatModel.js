const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
    },
    isGroupChat: {
      type: Boolean,
      required: true,
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timeStamp: true,
  }
);

const Chat = mongoose.Model(chatModel, "chatModel");
module.exports = Chat;
