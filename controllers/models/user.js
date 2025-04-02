const mongoose =  require("mongoose");

const user = new mongoose.Schema({
  username: String,
  hashedPassword: String,
});

const User = mongoose.model('User', userSchema)
module.exports = User;