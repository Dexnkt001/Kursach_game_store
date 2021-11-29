const mongoose = require("mongoose");
const { Schema } = mongoose;

const codeSchema = new Schema({
  name: String,
  disc: {
    type: Number,
    default: "0",
  },
});

module.exports = mongoose.model("code", codeSchema);
