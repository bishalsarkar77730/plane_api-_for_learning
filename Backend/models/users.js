const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    default: 0,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;