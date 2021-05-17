//const { response } = require("express");
const express = require("express"),
  mongoose = require("mongoose"),
  keys = require("./config/keys.js"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  User = require("./models/users"),
  Game = require("./models/games");

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

  console.log(game_info);

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
  });

  game.save();
  res.sendStatus(200);
});

app.post("/change_game", cb, (req, res) => {
  console.log(req.body.game_info);
  const change_game_info = req.body.game_info;
  if (change_game_info[2] === "Effect" && change_game_info.length === 3) {
    console.log("effect");
    console.log("ne disc");
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
          console.log(respons);
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
          console.log(resp);
          res.json({ status: "coplite" });
        }
      }
    );
  }
});

app.post("/new_user", cb, (req, res) => {
  const user_info = req.body.user_info;
  console.log("ia v fun");
  User.find({ login: user_info[0] }).then((result) => {
    console.log(result);
    if (result.length === 0) {
      User.find({ email: user_info[1] }).then((result) => {
        if (result.length === 0) {
          const user = new User({
            login: user_info[0],
            email: user_info[1],
            password: user_info[2],
            status: "client",
          });
          user.save();
          res.json({ status: "добавлен" });
        } else {
          console.log("существует");
          res.json({ status: "существует" });
        }
      });
    } else {
      console.log("существует");
      res.json({ status: "существует" });
    }
  });
});

app.post("/add_user_buyer_game", cb, (req, res) => {
  const game = req.body.game_info;

  User.find({ login: game[0].login }).then((result) => {
    if (
      result[0].buyr_games.some((element) => {
        return JSON.stringify(element) == JSON.stringify(game[1]);
      }) == false
    ) {
      User.findOneAndUpdate(
        { login: game[0].login },
        { $push: { buyr_games: game[1] } },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("we have a problem");
            res.json({ status: "error" });
          } else {
            console.log(doc);
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
      res.json({ status: "существует" });
    }
  });
});

app.post("/add_user_intresting_game", cb, (req, res) => {
  const game = req.body.game_info;

  User.find({ login: game[0].login }).then((result) => {
    if (
      result[0].intrsting_games.some((element) => {
        return JSON.stringify(element) == JSON.stringify(game[1]);
      }) == false
    ) {
      User.findOneAndUpdate(
        { login: game[0].login },
        { $push: { intrsting_games: game[1] } },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("we have a problem");
            res.json({ status: "error" });
          } else {
            console.log(doc);
            if (doc !== null) {
              console.log(doc, " --------- обновленный юзер");
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
      res.json({ status: "существует" });
    }
  });
});

app.post("/new_status", cb, (req, res) => {
  console.log(req.body.user_status);
  const user = req.body.user_status;
  console.log(user);
  User.findOneAndUpdate(
    { login: user },
    { $set: { status: "admin" } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("we have a problem");
        res.json({ status: "error" });
      } else {
        console.log(doc);
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
  const val = req.params.word.toString().split(",");
  console.log(val);
  User.find({ login: val[0], password: val[1] }).then((result) => {
    if (result.length !== 0) {
      console.log(result[0].status);
      res.json({
        login: val[0],
        status: result[0].status,
        buyr_games: result[0].buyr_games,
        intrsting_games: result[0].intrsting_games,
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
  console.log("finde_game ----- ", val);
  Game.find({ name: val }).then((result) => {
    if (result.length !== 0) {
      console.log(result[0].status);
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
  console.log("new_game_arr");
  let arr_new = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      arr_new = result.filter((element) => {
        return element.effect.includes("new");
      });
      console.log(arr_new);
      res.json({ arr_new_games: arr_new });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/arr_all_games/:word", (req, res) => {
  // const val = req.params.word.toString().split(",");
  console.log("arr_all_games");
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
      console.log(result);
      popular_games = result.filter((element) => {
        return element.effect.includes("popular");
      });
      console.log(popular_games);
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
      console.log(result);
      top_games = result.filter((element) => {
        return element.effect.includes("top");
      });
      console.log(top_games);
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
      console.log(result);
      week_games = result.filter((element) => {
        return element.effect.includes("week");
      });
      console.log(week_games);
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
      console.log(result);
      free_games = result.filter((element) => {
        return element.effect.includes("free");
      });
      console.log(free_games);
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
      console.log(result);
      preprodaction_games = result.filter((element) => {
        return element.effect.includes("preprodaction");
      });
      console.log(preprodaction_games);
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
      console.log(online_games);
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
      console.log(discaunt_games);
      res.json({ arr_discaunt_games: discaunt_games });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});
