const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  login: String,
  email: String,
  password: String,
  status: String,
  buyr_games: {
    type: Array,
    default: [],
  },
  intrsting_games: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("user", usersSchema);
