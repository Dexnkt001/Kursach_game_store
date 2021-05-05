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
  if (change_game_info[3] === "Effect") {
    Game.findOneAndUpdate(
      { name: change_game_info[1] },
      { effect: change_game_info[2], discaunt: change_game_info[0] },
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
      res.json({ login: val[0], status: result[0].status });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});
