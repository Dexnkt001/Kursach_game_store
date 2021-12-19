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

    let login = document.location.search.substr(1).split("=")[1];

    document
      .querySelector(".btn-danger")
      .addEventListener("click", async () => {
        if (user === undefined) {
          log_in();
        } else {
          buy();
          // add_buyer_game(user, obj);
        }
      });
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

async function log_in() {
  const log_window = document.createElement("div"),
    back_module_window = document.createElement("div"),
    content_log_in = document.createElement("div"),
    inputs = document.createElement("div"),
    up_modul = document.createElement("div"),
    h1 = document.createElement("h1"),
    exit = document.createElement("div"),
    button = document.createElement("button");
  back_module_window.classList.add("back-modul");
  log_window.classList.add("log_in");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  content_log_in.classList.add("content_log_in");
  inputs.classList.add("inputs");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(log_window);
  log_window.prepend(up_modul);
  up_modul.append(exit);
  log_window.append(content_log_in);
  h1.innerHTML = "Log in";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  for (let i = 0; i < 2; i++) {
    console.log(i);
    let nick = document.createElement("div"),
      span = document.createElement("span"),
      input = document.createElement("input");
    nick.classList.add("nick");
    if (i === 0) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Login");
    } else {
      input.setAttribute("type", "password");
      input.setAttribute("placeholder", "Password");
    }
    inputs.append(nick);
    nick.append(span);
    nick.append(input);
  }

  button.classList.add("add_user");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  inputs.append(button);

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".log_in")
      .parentNode.removeChild(document.querySelector(".log_in"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });

  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    let aser = await log_in_user(info_items);
    return aser;
  });
}

function sign_up() {
  const log_window = document.createElement("div"),
    back_module_window = document.createElement("div"),
    content_log_in = document.createElement("div"),
    inputs = document.createElement("div"),
    up_modul = document.createElement("div"),
    h1 = document.createElement("h1"),
    exit = document.createElement("div"),
    button = document.createElement("button");
  back_module_window.classList.add("back-modul");
  log_window.classList.add("sign_up");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  content_log_in.classList.add("content_log_in");
  inputs.classList.add("inputs");
  inputs.classList.add("inputs_sign_up");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(log_window);
  log_window.prepend(up_modul);
  up_modul.append(exit);
  log_window.append(content_log_in);
  h1.innerHTML = "Sign up";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  for (let i = 0; i < 3; i++) {
    console.log(i);
    let nick = document.createElement("div"),
      span = document.createElement("span"),
      input = document.createElement("input");
    nick.classList.add("nick");
    if (i === 0) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Login");
    } else if (i === 1) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Email");
    } else {
      input.setAttribute("type", "password");
      input.setAttribute("placeholder", "password");
    }
    inputs.append(nick);
    nick.append(span);
    nick.append(input);
  }
  button.classList.add("add_user");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  inputs.append(button);
  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    console.log(info_items);
    add_new_user(info_items, full_information_new_game);
  });
  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

async function add_new_user(arr, arr_inp) {
  console.log("dobavlenie novogo usera");
  const user_info = arr;
  try {
    const response = await fetch("http://localhost:5500/new_user", {
      method: "POST",
      body: JSON.stringify({
        user_info,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    response.json().then((res) => {
      if (res.status == "существует") {
        Array.from(arr_inp).forEach((element, index) => {
          if (index < 2) {
            element.style.border = "2px solid red";
          }
        });
        alert("Неправильно введен Логин или  Emai!");
      } else if (res.status === "добавлен") {
        document
          .querySelector(".sign_up")
          .parentNode.removeChild(document.querySelector(".sign_up"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
        document
          .getElementById("log_in")
          .parentNode.removeChild(document.getElementById("log_in"));
        document
          .getElementById("sign_up")
          .parentNode.removeChild(document.getElementById("sign_up"));
        let html = `
        <a class='log-in-user-ind' id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${arr[0]}
    </a>
    <a class='log-in-user-ind' id="sign_up" href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <img src="../images/bag_buy_cart_market_shop_shopping_tote_icon_123191.png" alt="sign up">
    basket
</a>
        `;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
        open_fun_user();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function log_in_user(arr) {
  const val = arr;
  //console.log(val)
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/log_in/${val}`);
    const list = await response.json().then();
    user_info = list;
    return user_info[0];
  } catch (error) {
    console.log(error);
  }
}

function buy() {
  let html_text = ` <div class="back-modul"></div>
   <div class='sign_up'>
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>Card inforamtion</h1>
<div class="inputs inputs_sign_up">
  <div class="nick"><input placeholder="Card number" type="text"></div>
  <div class="nick"><input placeholder="CV" type="text"></div>
<div class="nick"><input placeholder="Data" type="text"></div>
<button type="submit" class="add_user">Add</button>
</div>
</div>
</div>`;

  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
  document.querySelector(".add_user").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}
