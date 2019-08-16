const mongoose = require("./connection.js");

const UserSchema = new mongoose.Schema({
  username: String,
  friends: Number
});

module.exports = mongoose.model("User", UserSchema);
