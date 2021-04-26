const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  login:String,
  email:String,
  password:String,
  status:String
})

module.exports = mongoose.model('user', usersSchema);
