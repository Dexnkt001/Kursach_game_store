const express = require('express'),
 mongoose = require('mongoose'),
 keys = require('./config/keys.js'),
 cors = require('cors'),
 bodyParser = require('body-parser'),
 User = require('./models/users'),
 Game = require('./models/games');

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
  .then(()=>{console.log('MongoDB connected')
})
  .catch(error=>console.log(error));
app.listen(PORT, ()=>{
  console.log(`Server ${PORT} is work!`)
})
  }catch(e){
    console.log(e)
  }
}

start();


app.post('/new_game', cb, (req, res)=>{
  const game_info = req.body.game_info;

const game = new Game({
  name:game_info[0],
 developer:game_info[1],
 prize:game_info[2],
publish:game_info[5],
info:{
  short_info:game_info[4],
  full_info:game_info[11],
  release:game_info[6],
  rait:game_info[8],
  tag:game_info[7],
},
images:{
  main_img:game_info[9],
  all_img:game_info[3],
},
full_info:{
  platform:game_info[10],
  proc:game_info[12],
  cpu:game_info[13],
  memory:game_info[14],
  direct:game_info[15],
  video_card:game_info[16],
},
})

  game.save();
  res.sendStatus(200);
})

app.post('/change_game', cb, (req, res)=>{
  console.log(req.body.game_info);
  const change_game_info = req.body.game_info;
  if(change_game_info[3] === 'Effect'){db.games.update({name : change_game_info[1]}, {effect:change_game_info[2], discaunt:change_game_info[0
  ]}, {upsert: true})
}else{
  db.games.update({name : change_game_info[1]}, {prize:change_game_info[2]}, {upsert: true})
}
  res.sendStatus(200)
})

app.post('/new_user', cb, (req, res)=>{
const user_info = req.body.user_info;

User.find({login:user_info[0]}).then((result) => {
if(result.length === 0){
  const user = new User({
  login:user_info[0],
  email:user_info[1],
  password:user_info[2],
})
 user.save();
 res.sendStatus(200);
}else{
  console.log('существует')
  res.send('пользователь существует!')
}
});

})

app.get('/log_in/:word', (req, res) => {
  const val = req.params.word.toString().split(',');
  let arr = [];
console.log(val);
User.find({login:val[0],password:val[1]}).then(result=>{
if(result.length !== 0){
  res.send([val[0], 'Welcome!'])
}else{
  res.send('Error!')
}
})
// JSON.stringify(arr)
});
