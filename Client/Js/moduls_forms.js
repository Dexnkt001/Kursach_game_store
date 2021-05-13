import {
  add_new_game_db,
  add_new_user,
  log_in_user,
  add_new_status,
  find_choose_game,
} from "./script.js";

function all_game(massPict) {
  console.log(massPict);
  const module_window_all_game = document.createElement("div"),
    back_module_window = document.createElement("div"),
    main_section_module_window = document.createElement("div"),
    module_content = document.createElement("div"),
    up_modul = document.createElement("div"),
    exit = document.createElement("div");
  back_module_window.classList.add("back-modul");
  module_window_all_game.classList.add("modul-window");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  main_section_module_window.classList.add("main-section-modul-window");
  main_section_module_window.classList.add("all-game");
  module_content.classList.add("module-content");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(module_window_all_game);
  module_window_all_game.prepend(up_modul);
  up_modul.append(exit);
  module_window_all_game.append(main_section_module_window);
  main_section_module_window.append(module_content);
  massPict.forEach((element) => {
    let img = document.createElement("img");
    img.classList.add("slides");
    img.classList.add("module-content-items");
    img.setAttribute("src", `${element.images.main_img}`);
    img.setAttribute("alt", `${element.name}`);
    module_content.append(img);
  });

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });

  Array.from(document.querySelectorAll("img")).forEach((element) => {
    element.addEventListener("click", () => {
      find_choose_game(element.alt);
      document
        .querySelector(".modul-window")
        .parentNode.removeChild(document.querySelector(".modul-window"));
      document
        .querySelector(".back-modul")
        .parentNode.removeChild(document.querySelector(".back-modul"));
    });
  });
}

function top_chart(massPict) {
  const module_window_all_game = document.createElement("div"),
    back_module_window = document.createElement("div"),
    main_section_module_window = document.createElement("div"),
    module_content = document.createElement("div"),
    up_modul = document.createElement("div"),
    exit = document.createElement("div");
  back_module_window.classList.add("back-modul");
  module_window_all_game.classList.add("modul-window");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  main_section_module_window.classList.add("main-section-modul-window");
  main_section_module_window.classList.add("all-game");
  module_content.classList.add("module-content");
  module_content.classList.add("top-chart");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(module_window_all_game);
  module_window_all_game.prepend(up_modul);
  up_modul.append(exit);
  module_window_all_game.append(main_section_module_window);
  main_section_module_window.append(module_content);
  massPict.forEach((element) => {
    let img = document.createElement("img");
    img.classList.add("slides");
    img.classList.add("module-content-items");
    img.classList.add("top-chart-items-game");
    img.setAttribute("src", `${element.images.main_img}`);
    img.setAttribute("alt", `${element.name}`);
    module_content.append(img);
  });

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
  Array.from(document.querySelectorAll("img")).forEach((element) =>
    element.addEventListener("click", () => find_choose_game(element.alt))
  );
}

function log_in() {
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
    log_in_user(info_items);
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

function status() {
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
  h1.innerHTML = "Status";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  let nick = document.createElement("div"),
    span = document.createElement("span"),
    input = document.createElement("input");
  nick.classList.add("nick");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Login");
  inputs.append(nick);
  nick.append(span);
  nick.append(input);
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

  document.querySelector(".add_user").addEventListener("click", () => {
    const user = document.querySelector(".nick input").value;
    console.log(user);
    add_new_status(user);
  });
}

function module_game(obj) {
  console.log(obj);
  let str = obj.images.all_img
    .map((element) => {
      return `<img class="main-slide" src="${element}" alt="cyber">`;
    })
    .join(",")
    .replace(/[,]/g, "");

  let html_text = `
<div class="back-modul-game" style="background-image: url(${obj.images.main_img})"></div>
<div class="modul-window assasin_bg">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class="img_game">
    <img src="${obj.images.main_img}" alt="assasin">
  </div>
  <div class="short_module_info">
    <img src="${obj.images.main_img}" alt="assasin">
    <div class="short_text_module">
    ${obj.info.short_info}
    </div>
    <div class="module_conteiner_prize">
      <div class="module_prize">
        <div class="numb_prize"><span>${obj.prize} &#8381;</span></div>
        <div class="module_button_buy">Купить сейчас</div>
      </div>
    </div>
  </div>

  <div class="full_module_info">
    <div class="title_module">
      Об игре ${obj.name}
    </div>
    <div class="info_for_module_game">
      <div class="module_game_dev">
        <div>Developer</div>
        <div>${obj.developer}</div>
      </div>
      <div class="module_game_publisher">
        <div>Publisher</div>
        <div>${obj.publish}</div>
      </div>
      <div class="module_game_data">
        <div>Release data</div>
        <div>${obj.info.release}</div>
      </div>
      <div class="module_game_tags">
        <div>Tags</div>
        <div>${obj.info.tag}</div>
      </div>
      <div class="module_game_raiting">
        <div>Raiting</div>
        <div>${obj.info.rait}</div>
      </div>
      <div class="module_game_platform">
        <div>Platforma</div>
        <div>${obj.full_min_info.platform}</div>
      </div>
    </div>
      <div class="module_full_info_text">
        <div class="title_full_info_module_game">${obj.name}</div>
        <div class="text_full_info_under_title">${obj.info.full_info}</div>
      </div>
      <div class="main-slider module-imgs-game">
        <div class="container-slider-module-imgs-game">
           ${str}
        </div>
      </div>
    </div>
    <div class="full_module_info">
      <div class="title_module">
       Системные требования
      </div>
      <div class="info_for_req_module_game">
        <div class="minimal_req">
          <div>
            <div class="title_req">Minimal</div>
          </div>
          <div>
            <div class="title_req">OS</div>
            <div>${obj.full_min_info.platform}</div>
          </div>
          <div>
            <div class="title_req">Processor</div>
            <div>${obj.full_min_info.proc}</div>
          </div>
          <div><div class="title_req">RAM</div>
            <div>${obj.full_min_info.RAM}</div>
          </div>
          <div><div class="title_req">Memory</div>
            <div>${obj.memory}</div>
          </div>
          <div><div class="title_req">Direct X</div>
            <div>${obj.full_min_info.direct}</div>
          </div>
          <div><div class="title_req">Video card</div>
            <div>${obj.full_min_info.video_card}</div>
          </div>
        </div>
        <div class="recommended_req">
          <div>
            <div class="title_req">Recommended</div>
          </div>
          <div>
            <div class="title_req">OS</div>
            <div>${obj.full_recomend_info.platform}</div>
          </div>
          <div>
            <div class="title_req">Processor</div>
            <div>${obj.full_recomend_info.proc}</div>
          </div>
          <div><div class="title_req">CPU</div>
            <div>${obj.full_recomend_info.RAM}</div>
          </div>
          <div><div class="title_req">Memory</div>
            <div>${obj.full_recomend_info.memory}</div>
          </div>
          <div><div class="title_req">Direct X</div>
            <div>${obj.full_recomend_info.direct}</div>
          </div>
          <div><div class="title_req">Video card</div>
            <div>${obj.full_recomend_info.video_card}</div>
          </div>
        </div>
        </div>
      </div>
  </div>

</div>
`;

  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul-game")
      .parentNode.removeChild(document.querySelector(".back-modul-game"));
  });
}

function add_new_game() {
  let html_text = `
  <div class="back-modul"></div>
  <form action="new_game" method='POST' class='module_wind_new_game' onsubmit="return false;">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>New game</h1>
<div class="inputs inputs_add_new_game">
  <div class="nick"><input placeholder="Name" type="text"></div>
<div class="nick"><input placeholder="Developer" type="text"></div>
<div class="nick"><input placeholder="Prize" type="text"></div>
<div class="nick"><input placeholder="All imges" type="text"></div>
<div class="nick"><input placeholder="Short info" type="text"></div>
<div class="nick"><input placeholder="Publisher" type="text"></div>
<div class="nick"><input placeholder="Release" type="text"></div>
<div class="nick"><input placeholder="Tag" type="text"></div>
<div class="nick"><input placeholder="Raiting" type="text"></div>
<div class="nick"><input placeholder="Main image" type="text"></div>
<div class="nick"><input placeholder="Platform" type="text"></div>
<div class="nick"><input placeholder="Full information" type="text"></div>
<div class="nick"><input placeholder="Processor" type="text"></div>
<div class="nick"><input placeholder="RAM" type="text"></div>
<div class="nick"><input placeholder="Memory" type="text"></div>
<div class="nick"><input placeholder="Direct" type="text"></div>
<div class="nick"><input placeholder="Video card" type="text"></div>
<button type="submit" class="add_user">Add</button>
</div>
  </div>
</form>
`;
  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    console.log(info_items);
    add_new_game_db(info_items);
    document
      .querySelector(".module_wind_new_game")
      .parentNode.removeChild(document.querySelector(".module_wind_new_game"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".module_wind_new_game")
      .parentNode.removeChild(document.querySelector(".module_wind_new_game"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

function change_game_but() {
  let html_text = `
  <div class="back-modul"></div>
<form action="change_game" class='sign_up' method='POST'onsubmit = "return false;">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>Change_game</h1>
<div class="inputs inputs_sign_up">
  <div class="nick"><input type="text" placeholder="Name"></div>
  <div class="nick nick-flex"><div><select size="0" name="hero[]">
    <option selected>Choose function</option>
    <option value="Prize">Prize</option>
    <option value="Effect">Effect</option>
   </select></div><input type="text" id='change_effect' placeholder="Effect"></div>
<button type="submit" id="change_game" class="add_user">Add</button>
</div>
  </div>
</form>

`;
  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  const select = document.querySelector("select"),
    change_btn = document.querySelector(".add_user"),
    change_effect = document.getElementById("change_effect");

  select.addEventListener("change", () => {
    console.log(select.value);
  });
  change_btn.addEventListener("click", () => {
    if (
      change_effect.value === "discaunt" ||
      change_effect.value === "Discaunt"
    ) {
      const select_val = select.value;
      discaunt(select_val);
    } else {
      const full_information_new_game =
        document.querySelectorAll(".nick input");
      document.querySelector(".add_user").addEventListener("click", () => {
        const info_items = Array.from(full_information_new_game).map(
          (element) => element.value
        );
        info_items.push(select.value);
        add_new_game_db(info_items);
        document
          .querySelector(".sign_up")
          .parentNode.removeChild(document.querySelector(".sign_up"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
      });
    }
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

function admin_buttons() {
  const add_game = `<span id="add_new_game" class="add_new_game">Добавить игру</span>`,
    change_game = ` <span id="change_game" class="change_game">Изменить игру</span>`;

  document
    .querySelector(".lower-header div")
    .insertAdjacentHTML("beforeend", add_game);
  document
    .querySelector(".lower-header div")
    .insertAdjacentHTML("beforeend", change_game);

  document.getElementById("add_new_game").addEventListener("click", () => {
    add_new_game();
  });
  document.getElementById("change_game").addEventListener("click", () => {
    change_game_but();
  });
}

function discaunt(select) {
  const html = `<div id="discaunt_module" class='sign_up up_mod' method='POST'onsubmit = "return false;">
  <div class='content_log_in'>
    <h1>Discaunt</h1>
<div class="inputs inputs_sign_up">
  <div class="nick"><input type="text" id="amount_of_discaunt" placeholder="Discaunt"></div>
<button type="submit" id="add_discaunt" class="add_user">Add</button>
</div>
  </div>
</div>`;
  document.querySelector("header").insertAdjacentHTML("afterend", html);

  console.log("rabotaet tyt");
  console.log("rabotaet posle");
  document.getElementById("add_discaunt").addEventListener("click", () => {
    const full_information_new_game = document.querySelectorAll(".nick input");
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    info_items.push(select);
    console.log(info_items);
    add_new_game_db(info_items);
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up .up_mod"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

export {
  all_game,
  top_chart,
  log_in,
  sign_up,
  module_game,
  status,
  admin_buttons,
};
