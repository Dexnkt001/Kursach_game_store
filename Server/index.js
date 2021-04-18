const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys.js')
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5500

const app = express();
app.use(cors());
var cb = bodyParser.json();
app.use(cb);

async function start(){
  try{
await mongoose.connect(keys.mongoURL, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify:false
  })
  .then(()=>console.log('MongoDB connected'))
  .catch(error=>console.log(error));
app.listen(PORT, ()=>{
  console.log(`Server ${PORT} is work!`)
})
  }catch(e){
    console.log(e)
  }
}

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('db connected')
// });


app.post('/new_game', cb, (req, res)=>{
  const info_new_game = req.body.game_info;
  console.log('начала ',info_new_game, ' конец')
  res.sendStatus(200);
})

start();
