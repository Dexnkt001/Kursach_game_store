document
  .querySelector("body")
  .addEventListener("DOMSubtreeModified", function () {
    const circle_1 = document.querySelector(".progress-ring__circle_1");
    const circle_2 = document.querySelector(".progress-ring__circle_2");
    const circle_3 = document.querySelector(".progress-ring__circle_3");
    const radius = circle_1.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle_1.style.strokeDasharray = `${circumference} ${circumference}`;
    circle_1.style.strokeDashoffset = circumference;

    circle_2.style.strokeDasharray = `${circumference} ${circumference}`;
    circle_2.style.strokeDashoffset = circumference;

    circle_3.style.strokeDasharray = `${circumference} ${circumference}`;
    circle_3.style.strokeDashoffset = circumference;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      return offset;
    }

    circle_1.style.strokeDashoffset = setProgress(70);
    circle_2.style.strokeDashoffset = setProgress(65);
    circle_3.style.strokeDashoffset = setProgress(50);

    let login = document.location.search.substr(1).split("=")[1],
      game = JSON.parse(getCookie("game"));

    document.querySelector(".buy").addEventListener("click", () => {
      add_buyer_game(login, game);
    });

    document.querySelector(".intres").addEventListener("click", () => {
      add_intresting_game(login, game);
    });

    console.log("lol");
    console.log(JSON.parse(getCookie("game")));
  });

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function add_intresting_game(user, game) {
  console.log(user);
  const game_info = [user, game];
  try {
    let response = await fetch(
      "http://localhost:5500/add_user_intresting_game",
      {
        method: "POST",
        body: JSON.stringify({
          game_info,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    response.json().then((res) => {
      if (res.status != "error") {
        console.log("interes rabotaet");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function add_buyer_game(user, game) {
  const game_info = [user, game];
  try {
    let response = await fetch("http://localhost:5500/add_user_buyer_game", {
      method: "POST",
      body: JSON.stringify({
        game_info,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    response.json().then((res) => {
      if (res.status != "error") {
        user_info = res;
        console.log(user_info);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// if (user !== 0) {
//   add_intresting_game(user, obj);
//   // log_in_after_game(user);
// }

// document.querySelector(".module_button_buy").addEventListener("click", () => {
//   // document
//   //   .querySelector(".modul-window")
//   //   .parentNode.removeChild(document.querySelector(".modul-window"));
//   // document
//   //   .querySelector(".back-modul-game")
//   //   .parentNode.removeChild(document.querySelector(".back-modul-game"));
//   if (user === 0) {
//     log_in();
//   } else {
//     buy();
//     add_buyer_game(user, obj);
//   }
// });
