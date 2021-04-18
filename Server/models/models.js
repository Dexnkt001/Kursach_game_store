const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameShema = new Schema({
 main_img:String,
 name_game:String,

});

module.exports = mongoose.model('game', gameSchema);
