const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  name: String,
  developer: String,
  prize: String,
  publish: String,
  info: {
    short_info: String,
    full_info: String,
    release: String,
    rait: String,
    tag: String,
  },
  images: {
    main_img: String,
    all_img: Array,
  },
  full_min_info: {
    platform: String,
    proc: String,
    RAM: String,
    memory: String,
    direct: String,
    video_card: String,
  },
  full_recomend_info: {
    platform: String,
    proc: String,
    RAM: String,
    memory: String,
    direct: String,
    video_card: String,
  },
  effect: {
    type: Array,
    default: "none",
  },
  discaunt: {
    type: String,
    default: 0,
  },
  shopping: {
    type: Number,
    default: 0,
  },
  genre: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("game", gameSchema);
