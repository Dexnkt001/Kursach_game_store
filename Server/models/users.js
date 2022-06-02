const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  login: String,
  email: String,
  password: String,
  status: String,
  phone: String,
  country: String,
  town: String,
  buyr_games: {
    type: Array,
    default: [],
  },
  intrsting_games: {
    type: Array,
    default: [],
  },
  genre: {
    type: Array,
    default: [],
  },
  develop: {
    type: Array,
    default: [],
  },
  photo: {
    type: String,
    default: "../images/none_name.jpg",
  },
  discount: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("user", usersSchema);
