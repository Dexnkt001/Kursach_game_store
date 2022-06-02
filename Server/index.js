//const { response } = require("express");
const express = require("express"),
  mongoose = require("mongoose"),
  keys = require("./config/keys.js"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  User = require("./models/users"),
  Game = require("./models/games"),
  Code = require("./models/code");

const PORT = process.env.PORT || 5500;

const app = express();
app.use(cors());
var cb = bodyParser.json();
app.use(cb);

async function start() {
  try {
    await mongoose
      .connect(keys.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((error) => console.log(error));
    app.listen(PORT, () => {
      console.log(`Server ${PORT} is work!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

app.post("/new_game", cb, (req, res) => {
  const game_info = req.body.game_info;

  const all_img = game_info[3].split(","),
    proc = game_info[12].split(","),
    platforma = game_info[10].split(","),
    ram = game_info[13].split(","),
    memory = game_info[14].split(","),
    direct = game_info[15].split(","),
    video_card = game_info[16].split(",");

  const game = new Game({
    name: game_info[0],
    developer: game_info[1],
    prize: game_info[2],
    publish: game_info[5],
    info: {
      short_info: game_info[4],
      full_info: game_info[11],
      release: game_info[6],
      rait: game_info[8],
      tag: game_info[7],
    },
    images: {
      main_img: game_info[9],
      all_img: all_img,
    },
    full_min_info: {
      platform: platforma[0],
      proc: proc[0],
      RAM: ram[0],
      memory: memory[0],
      direct: direct[0],
      video_card: video_card[0],
    },
    full_recomend_info: {
      platform: platforma[1],
      proc: proc[1],
      RAM: ram[1],
      memory: memory[1],
      direct: direct[1],
      video_card: video_card[1],
    },
    gener: game_info[0],
  });

  game.save();
  res.sendStatus(200);
});

app.post("/change_game", cb, (req, res) => {
  const change_game_info = req.body.game_info;
  if (change_game_info[2] === "Effect" && change_game_info.length === 3) {
    Game.findOneAndUpdate(
      { name: change_game_info[0] },
      { $push: { effect: change_game_info[1] } },
      { new: true },
      (err, respons) => {
        if (err) {
          console.log(err);
          res.json({ status: "error" });
        } else {
          console.log(respons);
          res.json({ status: "complite" });
        }
      }
    );
  } else if (
    change_game_info[3] === "Effect" &&
    change_game_info.length === 4
  ) {
    Game.findOneAndUpdate(
      { name: change_game_info[1] },
      {
        $push: { effect: change_game_info[2] },
        $set: { discaunt: change_game_info[0] },
      },
      { new: true },
      (err, respons) => {
        if (err) {
          console.log(err);
          res.json({ status: "error" });
        } else {
          res.json({ status: "complite" });
        }
      }
    );
  } else {
    Game.findOneAndUpdate(
      { name: change_game_info[1] },
      { $set: { prize: change_game_info[2] } },
      { new: true },
      (err, resp) => {
        if (err) {
          console.log(err);
          res.json("error");
        } else {
          res.json({ status: "coplite" });
        }
      }
    );
  }
});

app.post("/add_new_user", cb, (req, res) => {
  const user_info = req.body.user_info;
  User.find({ login: user_info[2][0] }).then((result) => {
    if (result.length === 0) {
      User.find({ email: user_info[2][1] }).then((result) => {
        if (result.length === 0) {
          const user = new User({
            login: user_info[2][0],
            email: user_info[2][1],
            password: user_info[2][2],
            status: "client",
            phone: user_info[2][5],
            country: user_info[2][3],
            town: user_info[2][4],
            genre: user_info[0],
            develop: user_info[1],
          });
          user.save();
          res.json({ status: "добавлен" });
        } else {
          res.json({ status: "существует" });
        }
      });
    } else {
      res.json({ status: "существует" });
    }
  });
});

app.post("/add_user_new_info", cb, (req, res) => {
  const user_i = req.body.user_info;
  User.findOneAndUpdate(
    { login: user_i[3] },
    {
      $set: {
        login: user_i[2][0],
        email: user_i[2][1],
        password: user_i[2][2],
        status: "client",
        phone: user_i[2][5],
        country: user_i[2][3],
        town: user_i[2][4],
        genre: user_i[0],
        develop: user_i[1],
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        if (doc !== null) {
          res.json({
            login: doc.login,
            email: doc.email,
            password: doc.password,
            status: doc.status,
            phone: doc.phone,
            country: doc.country,
            town: doc.town,
            genre: doc.genre,
            develop: doc.develop,
          });
        } else {
          res.json({ status: "error" });
        }
      }
    }
  );
});

app.post("/add_user_intresting_game", cb, (req, res) => {
  const game = req.body.game_info;
  User.find({ login: game[0] }).then((result) => {
    if (
      result[0].intrsting_games.some((element) => {
        return JSON.stringify(element) == JSON.stringify(game[1]);
      }) == false
    ) {
      User.findOneAndUpdate(
        { login: game[0] },
        { $push: { intrsting_games: game[1] } },
        { new: true },
        (err, doc) => {
          if (err) {
            res.json({ status: "error" });
          } else {
            if (doc !== null) {
              res.json({
                login: doc.login,
                status: doc.status,
                buyr_games: doc.buyr_games,
                intrsting_games: doc.intrsting_games,
              });
            } else {
              res.json({ status: "error" });
            }
          }
        }
      );
    } else {
      res.json({
        login: result.login,
        status: result.status,
        buyr_games: result.buyr_games,
        intrsting_games: result.intrsting_games,
      });
    }
  });
});

// app.post("/new_user", cb, (req, res) => {
//   const user_info = req.body.user_info;
//   User.find({ login: user_info[0] }).then((result) => {
//     if (result.length === 0) {
//       User.find({ email: user_info[1] }).then((result) => {
//         if (result.length === 0) {
//           const user = new User({
//             login: user_info[0],
//             email: user_info[1],
//             password: user_info[2],
//             status: "client",
//           });
//           user.save();
//           res.json({ status: "добавлен" });
//         } else {
//           res.json({ status: "существует" });
//         }
//       });
//     } else {
//       res.json({ status: "существует" });
//     }
//   });
// });

app.post("/add_user_buyer_game", cb, (req, res) => {
  const game = req.body.game_info;
console.log('lololololo', game[1])
  User.find({ login: game[0] }).then((result) => {
    if (
      result[0].buyr_games.some((element) => {
        return JSON.stringify(element) == JSON.stringify(game[1]);
      }) == false
    ) {
      let arr = game[1].genre.reduce((acc,val)=>{if(!acc.includes(val)){
        acc.push(val)
        return acc
      }else {
        return acc
      }},result[0].genre)
      User.findOneAndUpdate(
        { login: game[0] },
        { $push: { buyr_games: game[1] },
        $set:{genre:arr}},
        { new: true },
        (err, doc) => {
          if (err) {
            res.json({ status: "error" });
          } else {
            if (doc !== null) {
              res.json({
                login: doc.login,
                status: doc.status,
                genre:doc.genre,
                buyr_games: doc.buyr_games,
                intrsting_games: doc.intrsting_games,
              });
            } else {
              res.json({ status: "error" });
            }
          }
        }
      );
    } else {
      res.json({
        login: result.login,
        status: result.status,
        buyr_games: result.buyr_games,
        intrsting_games: result.intrsting_games,
      });
    }
  });
});

app.post("/new_status", cb, (req, res) => {
  const user = req.body.user_status;
  User.findOneAndUpdate(
    { login: user },
    { $set: { status: "admin" } },
    { new: true },
    (err, doc) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        if (doc !== null) {
          res.json({ status: "complited" });
        } else {
          res.json({ status: "error" });
        }
      }
    }
  );
});

app.get("/log_in/:word", (req, res) => {
  console.log(req.params.word)
  const val = req.params.word.toString().split(",");
  User.find({ login: val[0], password: val[1] }).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      res.json({
        login: val[0],
        status: result[0].status,
        email: result[0].email,
        password: result[0].password,
        genre: result[0].genre,
        develop: result[0].develop,
        phone: result[0].phone,
        country: result[0].country,
        town: result[0].town,
        buyr_games: result[0].buyr_games,
        intrsting_games: result[0].intrsting_games,
        discount: result[0].discount,
      });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/client/:word", (req, res) => {
  console.log('client : ',req.params.word.toString())
  const val = req.params.word.toString().split(",");
  User.find({ login: val[0]}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      res.json({
        login: val[0],
        status: result[0].status,
        email: result[0].email,
        password: result[0].password,
        genre: result[0].genre,
        develop: result[0].develop,
        phone: result[0].phone,
        country: result[0].country,
        town: result[0].town,
        buyr_games: result[0].buyr_games,
        intrsting_games: result[0].intrsting_games,
        discount: result[0].discount,
      });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

// app.get("/log_in_after_game/:word", (req, res) => {
//   const val = req.params.word;
//   console.log(val, " -------- val");
//   User.find({ login: val }).then((result) => {
//     if (result.length !== 0) {
//       console.log(result[0].status);
//       res.json({
//         login: val,
//         status: result[0].status,
//         buyr_games: result[0].buyr_games,
//         intrsting_games: result[0].intrsting_games,
//       });
//     } else {
//       res.json({ status: "Error!" });
//     }
//   });
//   // JSON.stringify(arr)
// });

app.get("/find_game/:word", (req, res) => {
  const val = req.params.word;
  Game.find({ name: val }).then((result) => {
    if (result.length !== 0) {
      res.json({ game: result[0] });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

//--------------------------------------------

app.get("/new_game_arr/:word", (req, res) => {
  // const val = req.params.word.toString().split(",");
  let arr_new = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      arr_new = result.filter((element) => {
        return element.effect.includes("new");
      });
      res.json({ arr_new_games: arr_new });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

function save(arr_g, arr_c){
  const bool = arr_g.genre.reduce((acc, elem)=>{
    console.log(acc)
    if(!acc.skip){
      if(arr_c[0].some(element => element === elem)){
        return {skip:true}
      }else {return {skip:false}}
    }else{
      return acc
    }
  },{skip:false}).skip;
  return bool
}

function prov(arr_g, arr_c){
  console.log('prov')
  const bool = arr_g.genre.reduce((acc, elem)=>{
    console.log(acc)
    if(!acc.skip){
      if(arr_c[0].some(element => element === elem)){
        return {skip:true}
      }else {return {skip:false}}
    }else{
      return acc
    }
  },{skip:false}).skip;

  const bool_d = arr_c[1].some(element=>element === arr_g.develop)
  console.log('bool : ', bool)
  console.log('bool_d : ', bool_d)

  return bool && bool_d

}

app.get("/rec_game_arr/:word", (req, res) => {
  const arr = req.params.word.toString().split(";");
  const info_user = [arr[0].split(','), arr[1].split(',')]
  let arr_rec = [];
  console.log('genre : ', info_user[0])
  console.log('develop : ', info_user[1])
   Game.find({}).then((result) => {
     if (result.length !== 0) {
       //-----------
       for(let i=0; i<result.length; i++){
         if(prov(result[i], info_user)){
           arr_rec.push(arr[i])
           result.splice(i,1)
           i--;
         }
       }
       for(let i=0; i< result.length; i++){
         if(save(result[i],info_user)){
           arr_rec.push(result[i])
           result.splice(i,1)
           i--
         }
       }
       for(let i=0; i< result.length; i++){
         if(info_user[1].some(element=>element === result[i].develop)){
           arr_rec.push(result[i]);
           result.splice(i,1);
           i--;
         }
       }
       //----------
      res.json({ arr_new_games: arr_rec });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/arr_all_games/:word", (req, res) => {
  // const val = req.params.word.toString().split(",");
  let arr_new = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      res.json({ arr_all_games: result });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});


app.get("/popular_arr/:word", (req, res) => {
  let popular_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      popular_games = result.filter((element) => {
        return element.effect.includes("popular");
      });
      res.json({ arr_popular_games: popular_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/top_arr/:word", (req, res) => {
  let top_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      top_games = result.filter((element) => {
        return element.effect.includes("top");
      });
      res.json({ arr_top_games: top_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/week_arr/:word", (req, res) => {
  let week_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      week_games = result.filter((element) => {
        return element.effect.includes("week");
      });
      res.json({ arr_week_games: week_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/free_arr/:word", (req, res) => {
  let free_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      free_games = result.filter((element) => {
        return element.effect.includes("free");
      });
      res.json({ arr_free_games: free_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/preprodaction_arr/:word", (req, res) => {
  let preprodaction_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      preprodaction_games = result.filter((element) => {
        return element.effect.includes("preprodaction");
      });
      res.json({ arr_preprodaction_games: preprodaction_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/online_arr/:word", (req, res) => {
  let online_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      online_games = result.filter((element) => {
        return element.effect.includes("online");
      });
      res.json({ arr_online_games: online_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/discaunt_arr/:word", (req, res) => {
  let discaunt_games = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      discaunt_games = result.filter((element) => {
        return element.effect.includes("discaunt");
      });
      res.json({ arr_discaunt_games: discaunt_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.post("/enter_code", cb, async function (req, res) {
  const code_info = req.body.code_info;

  let info = [];
  let disc = 0;

  await User.find({ login: code_info[1] }).then((resulte) => {
    console.log("-------------", resulte, "------", resulte[0].discount);
    info.push(resulte[0].discount);
  });
  await Code.find({ name: code_info[0] }).then((resulte) => {
    info.push(resulte[0].disc);
  });
  console.log(info);
  disc = info.reduce((acc, element) => {
    if (acc + element > 70) {
      return 70;
    } else {
      return acc + element;
    }
  }, 0);

  console.log(disc);

  User.findOneAndUpdate(
    { login: code_info[1] },
    { $set: { discount: disc } },
    { new: true },
    (err, doc) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        if (doc !== null) {
          res.json({ status: doc.discount });
        } else {
          res.json({ status: "error" });
        }
      }
    }
  );
});

app.post("/new_code", cb, (req, res) => {
  const code_info = req.body.code_info;

  const code = new Code({
    name: code_info[0],
    disc: code_info[1],
  });

  code.save();
  res.json({ status: "Код добавлен" });
});
