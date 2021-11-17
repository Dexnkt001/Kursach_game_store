import {
  default_previus_slider,
  default_next_slider,
  discaunt_previus_slider,
  discaunt_next_slider,
} from "./sliders.js";
import {
  all_game,
  top_chart,
  log_in,
  sign_up,
  status,
  admin_buttons,
  user_list,
  add_code,
} from "./moduls_forms.js";

import {
  main_list,
  main_list_new_games,
  main_list_popular_games,
  main_list_top_games,
  main_list_week_game,
  main_list_discount_games,
  main_list_free_game,
  main_list_preprodaction_games,
  main_list_online_games,
} from "./home_page.js";

let id_new_game = 0,
  id_discaunt_game = 0,
  id_preproduces_game = 0,
  id_best_online_game = 0,
  click_img = document.querySelectorAll("click_img"),
  admin = false,
  arr_new_games = [],
  arr_popular_games = [],
  arr_top_games = [],
  arr_week_game = [],
  arr_discount_games = [],
  arr_free_game = [],
  arr_preprodaction_games = [],
  arr_online_games = [],
  arr_all_games = [],
  user_info = 0;

let place_new_pict,
  place_discount_pict,
  place_preproduce_pict,
  place_best_online_pict;

function ForEach(mass, fun) {
  return Array.prototype.forEach.call(mass, fun);
}

const add_class = (place_pict) => {
  console.log(place_pict);
  ForEach(place_pict, (element) => {
    element.classList.add("slider-popcity");
  });
};

const delete_class = (place_pict) => {
  ForEach(place_pict, (element) => element.classList.remove("slider-popcity"));
};

// async function add_buyer_game(user, game) {
//   const game_info = [user, game];
//   try {
//     let response = await fetch("http://localhost:5500/add_user_buyer_game", {
//       method: "POST",
//       body: JSON.stringify({
//         game_info,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//     response.json().then((res) => {
//       if (res.status != "error") {
//         user_info = res;
//         console.log(user_info);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function add_intresting_game(user, game) {
//   console.log(user);
//   const game_info = [user, game];
//   try {
//     let response = await fetch(
//       "http://localhost:5500/add_user_intresting_game",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           game_info,
//         }),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );
//     response.json().then((res) => {
//       if (res.status != "error") {
//         user_info = res;
//         console.log(user_info);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

async function default_slider_for_previus_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        default_previus_slider(
          id_game,
          mass_pict_new_game,
          place_pict,
          numb_pict
        )
      );
    }, 1000);
  }).then((result) => {
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    return result;
  });

  let return_promise = await promise;

  return return_promise;
}

async function default_slider_for_next_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  console.log("id - game(postupivshee) :", id_game);
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        default_next_slider(id_game, mass_pict_new_game, place_pict, numb_pict)
      );
    }, 1000);
  }).then((result) => {
    console.log("lololol rabotaets");
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    console.log("new id after fun : ", result);
    return result;
  });
  let return_promise = await promise;

  return return_promise;
}

async function discaunt_slider_for_next_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  console.log("id - game(postupivshee) :", id_game);
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        discaunt_next_slider(id_game, mass_pict_new_game, place_pict, numb_pict)
      );
    }, 1000);
  }).then((result) => {
    console.log("lololol rabotaets");
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    console.log("new id after fun : ", result);
    return result;
  });
  let return_promise = await promise;

  return return_promise;
}

async function discaunt_slider_for_previus_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        discaunt_previus_slider(
          id_game,
          mass_pict_new_game,
          place_pict,
          numb_pict
        )
      );
    }, 1000);
  }).then((result) => {
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    return result;
  });

  let return_promise = await promise;

  return return_promise;
}

//Запрос на интересующею игру, который отправляется на бэк и делает запрос в БД
//после возвращения результата вызывается функция которая создает модульное окно
//с полной информацией о игре

async function find_choose_game(name) {
  console.log("lol");
  const val = name;
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/find_game/${val}`);
    const game = await response.json().then((res) => {
      return res.game;
    });
    new_window(game, user_info);
  } catch (err) {
    console.log(err);
  }
}

//функция добавления игры в базу данных (данная функция доступна тоько админу)\
//в функцию приходит массив из введенных данных, идет проверка на количество элементов массива
// так как данная функция используется не только для создания новой игры но и для обновления данных уже сущесвующей
// после отправки запроса в зависимости от длины происходят следующие действия, если массив состоял из четырех элементов до будет вызван запрос на обновление данных
//если же там будет массив с большим количесвтом элементов то будет вызван запрос на добавление новой игры

async function add_new_game_db(arr) {
  console.log(arr);
  const game_info = arr;
  if (game_info.length <= 4) {
    try {
      await fetch("http://localhost:5500/change_game", {
        method: "POST",
        body: JSON.stringify({
          game_info,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await fetch("http://localhost:5500/new_game", {
        method: "POST",
        body: JSON.stringify({
          game_info,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

//Это функция регистрации куда приходит два параметра, массив из введеных данных и массив строк ввода
//здесб отправляется запрос на бэк для регистрации пользователя, там же происхожит и проверкаа на наличие этого пользователя, если данный пользоватеь уже существует то будет выведена ошибка регистрации
// если же данного пользователя нет то регистрацияя пройдет успешно и по завершению пользователь автоматический зайдет на свою новую страницу

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
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${arr[0]}
    </a>
    <a id="sign_up" href="#">
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

function open_fun_user() {
  document.querySelector(".fun_user").classList.toggle("activ_user_fun");
  document.querySelector(".cont_user a").classList.toggle("activ_user");
}

function new_window_bascet(user) {
  console.log(user.intrsting_games);
  let str_interes = user.intrsting_games
    .map((element) => {
      return `<img class="main-slide" src="${element.images.main_img}" alt="${element.name}">`;
    })
    .join(",")
    .replace(/[,]/g, "");

  let str_buyrs = user.buyr_games
    .map((element) => {
      return `<img class="main-slide" src="${element.images.main_img}" alt="${element.name}">`;
    })
    .join(",")
    .replace(/[,]/g, "");

  let new_window = window.open(
    `http://127.0.0.1:5500/Client/html/bascet.html?name=${user.login}`,
    "bascet"
  );

  const content_bascet = `
<div class="container">
<div class="top"><div class='top-left'>
  <span>Главная страница</span> Все игры
</div>
<div class='top-right'><input type="text"><img src="../images/loopa.png" alt="search"></div>
</div>
<div class="container">
<div class="content-grid-user">
<div class='img-user'>
  <div class="nick-name">
    <span class="login-user-layot">${user.login}</span>
  </div>
  <img  class="img_user" src="../images/none_name.jpg" alt="none_name">
</div>
<div class='main-content-user'>
  <div class='buyr-games'>
    <h2>
Купленные
    </h2>
    ${str_buyrs}
  </div>
<div class='intresting-games'>
  <h2>
Интересующие
  </h2>
  ${str_interes}
</div>
</div>
</div>
</div>
`;

  new_window.onload = function () {
    new_window.document.body.insertAdjacentHTML("afterbegin", content_bascet);
  };
}

function new_window(obj, user) {
  let str = obj.images.all_img.map((element) => {
    return `<img class="main-slide" src="${element}" alt="cyber">`;
  });
  // .join(",");
  // .replace(/[,]/g, "");

  console.log(user);
  var game = JSON.stringify(obj);

  document.cookie = `game=${game}`;

  var newWin = window.open(
    `http://127.0.0.1:5500/Client/html/two.html?number=${user.login}`,
    `${obj.name}`
  );

  console.log(str);

  const main_info = `<div class="container">
  <div class="top"><div class='top-left'>
    <a href="../html/index.html">&lt; Главная страница</a> ${obj.name}
  </div>
  <div class='top-right'><input type="text"><img src="../images/loopa.png" alt="search"></div>
</div>
<div class='container-content'><h1>${obj.name}</h1>
  <img src="${obj.images.main_img}" alt=""></div>
  <div class='purchase'>
    <img src="../images/HITMAN_3_LOGO.png" alt="pict">
    <span>${obj.prize} &#8381;</span>
    <button type="button" class="buy btn btn-danger">Купить сейчас</button>
    <button type="button" class="intres btn btn-outline-secondary">В список желаемого</button>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
     <li class="list-group-item">A fourth item</li>
     <li class="list-group-item">And a fifth one</li>
    </ul>
  </div>
    <div class="container-min">
      <div class="under-img">
        <div class="short-info">
          <h3> ${obj.info.short_info}</h3>
        </div>
        <div class="gener-tag">
          <div>
            <div class='title-gener'>Жанр</div>
          <div>Шутер, дедектив, приключения</div>
        </div>
        <div>
          <div class='title-tag'>Тег</div>
          <div>${obj.info.tag}</div>
        </div>
      </div>
      <div class='many-imgs'>
        <h4>${obj.name}</h4>
        <div>${obj.info.full_info}.</div>
        <div class='imgs'>
          <img class='img-in-many' src="${obj.images.main_img}" alt="hit">
          <div class='but-all-imgs'>Показать больше &#8744;</div>
        </div>
        <div class='all-many-imgs'>
        ${str[1]}
        ${str[2]}
          <div class='but-all-imgs-up'>Свернуть &#8744;</div>
        </div>
      </div>
      </div>
      <div class='raiting'>
        <h4>Рэйтинг</h4>
        <div class='cont-progress'>
          <div class="progress-game">
           <svg class='prgress-right' width='120' height='120'>
             <circle class="progress-ring__circle_1" stroke='red' stroke-width='4' cx='60' cy='60' r='52' fill='transparent'>
             </circle>
             </svg>
             <div class="points-game">7/10</div>
             <div class='critic'>Рэйтинг от Game informer</div>
             <div class='discript-crititic'>
               <div class='title-discript'>Game informer</div>
               <div class='points-discript'>7/10</div>
               <div class='info-disript'>" Agent 47's journey ends on a high note, at least as far as players are concerned. New levels are memorable and cater to the freedom fans have come to expect "</div>
             </div>
          </div>
          <div class="progress-game">
           <svg class='prgress-right' width='120' height='120'>
             <circle class="progress-ring__circle_2" stroke='red' stroke-width='4' cx='60' cy='60' r='52' fill='transparent'>
             </circle>
             </svg>
             <div class="points-game">65%</div>
             <div class='critic'>Рэйтинг от IMD Studio</div>
             <div class='discript-crititic'>
               <div class='title-discript'>IMD Studio</div>
               <div class='points-discript'>65%</div>
               <div class='info-disript'>" Agent 47's journey ends on a high note, at least as far as players are concerned. New levels are memorable and cater to the freedom fans have come to expect "</div>
             </div>
          </div>
          <div class="progress-game">
           <svg class='prgress-right' width='120' height='120'>
             <circle class="progress-ring__circle_3" stroke='red' stroke-width='4' cx='60' cy='60' r='52' fill='transparent'>
             </circle>
             </svg>
             <div class="points-game">5/10</div>
             <div class='critic'>Рэйтинг от Geme Studio</div>
             <div class='discript-crititic'>
               <div class='title-discript'>Geme Studio</div>
               <div class='points-discript'>5/10</div>
               <div class='info-disript'>" Agent 47's journey ends on a high note, at least as far as players are concerned. New levels are memorable and cater to the freedom fans have come to expect "</div>
             </div>
          </div>
       </div>
       </div>
       <div class='req'>
       <h4>Системные требования</h4>
       <div class='main-req'>
         <div class='min-req'>
          <div class='title-req-item title-req'>Минимальные</div>
          <div class='req-item'>
           <div class='title-req-item'>ОС Windows</div>
           <div>${obj.full_min_info.platform}</div>
          </div>
          <div class='req-item'>
           <div class='title-req-item'>Процессор Windows</div>
           <div>${obj.full_min_info.proc}</div>
          </div>
          <div class='req-item'>
           <div class='title-req-item'>Память Windows</div>
           <div>${obj.full_min_info.RAM}</div>
          </div>
          <div class='req-item'>
           <div class='title-req-item'>Место на диске Windows</div>
           <div>${obj.full_min_info.memory}</div>
          </div>
          <div class='req-item'>
           <div class='title-req-item'>Windows Direct X</div>
           <div>${obj.full_min_info.direct}</div>
          </div>
          <div class='req-item last-req'>
           <div class='title-req-item'>Видеокарта для Windows</div>
           <div>${obj.full_min_info.video_card}</div>
          </div>
         </div>
         <div class='rec-req'>
         <div class='title-req-item title-req'>Минимальные</div>
         <div class='req-item'>
          <div class='title-req-item'>ОС Windows</div>
          <div>${obj.full_recomend_info.platform}</div>
         </div>
         <div class='req-item'>
          <div class='title-req-item'>Процессор Windows</div>
          <div>${obj.full_recomend_info.proc}</div>
         </div>
         <div class='req-item'>
          <div class='title-req-item'>Память Windows</div>
          <div>${obj.full_recomend_info.RAM}</div>
         </div>
         <div class='req-item'>
          <div class='title-req-item'>Место на диске Windows</div>
          <div>${obj.full_recomend_info.memory}</div>
         </div>
         <div class='req-item'>
          <div class='title-req-item'>Windows Direct X</div>
          <div>${obj.full_recomend_info.direct}</div>
         </div>
         <div class='req-item last-req'>
          <div class='title-req-item'>Видеокарта для Windows</div>
          <div>${obj.full_recomend_info.video_card}</div>
         </div>
        </div>
</div>

    `;

  newWin.onload = function () {
    newWin.document.body.insertAdjacentHTML("afterbegin", main_info);
  };
}

{
  /* <script>
    if (${user} !== 0) {
      ${add_intresting_game(user, obj)});
      // log_in_after_game(user);
    }

    document.querySelector(".buy, .btn, .btn-danger").addEventListener("click", () => {
      // document
      //   .querySelector(".modul-window")
      //   .parentNode.removeChild(document.querySelector(".modul-window"));
      // document
      //   .querySelector(".back-modul-game")
      //   .parentNode.removeChild(document.querySelector(".back-modul-game"));
      if (${user} === 0) {
        ${log_in()};
      } else {
        ${buy()};
        ${add_buyer_game(user, obj)};
      }
    });
    </script> */
}

// async function log_in_after_game(user) {
//   console.log(user);
//   let val = user.login;
//   try {
//     console.log(val);
//     const response = await fetch(
//       `http://localhost:5500/log_in_after_game/${val}`
//     );
//     const list = await response.json().then();
//     console.log(list);
//     user_info = list;
//     console.log(user_info);
//   } catch (err) {
//     console.log(err);
//   }
// }

//функция авторизации в данную функцию приходит массив введенных пользователем (логин и пароль)
//производиться запрос на бэк и от туда в базу данных, идет сравнение введных данных
//и если логин и пароль овпадает возвращается объект с полной информацией о пользователе, она нужна что бы узнать
//какую роль имеет пользователь, админ он или просто клиент и в зависимости от этих данных будут созданы кнопки
//у админа появится возможность добавлять игру и изменять ее и изменять статус придавая клиентам статуса админа,
//клиент эе получит доступ к своей корзине

async function log_in_user(arr) {
  const val = arr;
  //console.log(val)
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/log_in/${val}`);
    const list = await response.json().then();
    user_info = list;
    console.log(Object.keys(list).length);
    if (Object.keys(list).length === 4) {
      document
        .querySelector(".log_in")
        .parentNode.removeChild(document.querySelector(".log_in"));
      document
        .querySelector(".back-modul")
        .parentNode.removeChild(document.querySelector(".back-modul"));
      document
        .getElementById("log_in")
        .parentNode.removeChild(document.getElementById("log_in"));
      document
        .getElementById("sign_up")
        .parentNode.removeChild(document.getElementById("sign_up"));
      if (list.status === "admin") {
        let html = `
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${list.login}
    </a>
    <a id="log_in" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        Status
    </a>
        `;
        admin = true;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
        document
          .getElementById("log_in")
          .addEventListener("click", () => status());
        admin_buttons();
      } else {
        console.log("login_nov");
        let html = `
        <div class="cont_user">
        <a class='logo_nick' id="log_in" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="login">
        ${list.login}
    </a>
    <div class="fun_user">
    <div class="chan"><span>Change</span></div>
    <div class="code"><span>Code</span></div>
  </div>
</div>
    <a class="basket" id="sign_up" href="#">
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
        document.querySelector(".basket").addEventListener("click", () => {
          console.log("basket");
          new_window_bascet(user_info);
        });
        document.querySelector(".logo_nick").addEventListener("click", () => {
          open_fun_user();
        });
        document.querySelector(".code").addEventListener("click", () => {
          add_code();
        });
      }
    } else {
      Array.from(document.querySelectorAll(".nick input")).forEach(
        (element) => (element.style.border = "2px solid red")
      );
      alert("Неправильный Login или Пароль!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function add_new_status(user) {
  const user_status = user;
  console.log("status");
  try {
    const res = await fetch("http://localhost:5500/new_status", {
      method: "POST",
      body: JSON.stringify({
        user_status,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    res.json().then((res) => {
      console.log(res.status);
      if (res.status == "complited") {
        document
          .querySelector(".log_in")
          .parentNode.removeChild(document.querySelector(".log_in"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
      } else {
        document.querySelector(".nick input").style.border = "2px solid red";
        alert("Неправильный Login!");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("new-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_new_game,
    arr_new_games,
    place_new_pict,
    5
  ).then((res) => (id_new_game = res));
});
document.getElementById("new-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_new_game,
    arr_new_games,
    place_new_pict,
    5
  ).then((res) => (id_new_game = res));
});

//------------------------------
//массивы на слайдеры

// discaunt_arr=[],
//   arr_new_games=[],
//   arr_popular_games=[],
//   arr_top_games=[],
//   arr_week_game=[],
//   arr_discount_games=[],
//   arr_free_game=[],
//   arr_preprodaction_games=[],
//   arr_online_games=[];

async function serv_arr_new_games() {
  console.log("вызов");
  try {
    const response = await fetch(`http://localhost:5500/new_game_arr/new_game`);
    await response.json().then((res) => (arr_new_games = res.arr_new_games));
    console.log(arr_new_games);
  } catch (error) {
    console.log(error);
  }
}

//serv_arr_new_games();

async function serv_arr_popular_games() {
  try {
    const response = await fetch(`http://localhost:5500/popular_arr/popular`);
    await response.json().then((res) => {
      arr_popular_games = res.arr_popular_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_top_games() {
  try {
    const response = await fetch(`http://localhost:5500/top_arr/top`);
    await response.json().then((res) => {
      arr_top_games = res.arr_top_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_all_games() {
  try {
    const response = await fetch(`http://localhost:5500/arr_all_games/all`);
    await response.json().then((res) => {
      arr_all_games = res.arr_all_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_week_game() {
  try {
    const response = await fetch(`http://localhost:5500/week_arr/week`);
    await response.json().then((res) => {
      arr_week_game = res.arr_week_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_free_game() {
  try {
    const response = await fetch(`http://localhost:5500/free_arr/free`);
    await response.json().then((res) => {
      arr_free_game = res.arr_free_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_discount_games() {
  try {
    const response = await fetch(`http://localhost:5500/discaunt_arr/discaunt`);
    await response.json().then((res) => {
      arr_discount_games = res.arr_discaunt_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_preprodaction_games() {
  try {
    const response = await fetch(
      `http://localhost:5500/preprodaction_arr/preprodaction`
    );
    await response.json().then((res) => {
      arr_preprodaction_games = res.arr_preprodaction_games;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_online_games() {
  try {
    const response = await fetch(`http://localhost:5500/online_arr/online`);
    await response.json().then((res) => {
      arr_online_games = res.arr_online_games;
    });
  } catch (error) {
    console.log(error);
  }
}

//-------------------------------------------------------

//здесь происходит запуск сайта, то есть происходят запросы в бд который ждет ответа на наличие игр
// далее в массивы записываются данные которые пришли с базы данных и на основе этих данных строится главня страница

window.onload = async function () {
  await serv_arr_new_games();
  await serv_arr_online_games();
  await serv_arr_preprodaction_games();
  await serv_arr_discount_games();
  await serv_arr_free_game();
  await serv_arr_week_game();
  await serv_arr_top_games();
  await serv_arr_popular_games();
  await serv_arr_all_games();

  main_list(arr_new_games);
  main_list_new_games(arr_new_games);
  main_list_popular_games(arr_popular_games);
  main_list_top_games(arr_top_games);
  main_list_week_game(arr_week_game);
  main_list_discount_games(arr_discount_games);
  main_list_free_game(arr_free_game);
  main_list_preprodaction_games(arr_preprodaction_games);
  main_list_online_games(arr_online_games);

  (place_new_pict = document.querySelectorAll(".items-new-games")),
    //place_discount_pict = document.querySelectorAll('.items-discount-games'),
    (place_preproduce_pict = document.querySelectorAll(
      ".items-preproduce-games"
    )),
    (place_best_online_pict = document.querySelectorAll(
      ".items-best-online-games"
    ));
  place_discount_pict = document.querySelectorAll(".items-discount-games");
  Array.from(document.querySelectorAll("img")).forEach((element) =>
    element.addEventListener("click", () => find_choose_game(element.alt))
  );
};

//---------------------------------------------------------

// document.getElementById('discount-prev').addEventListener('click',()=>{default_slider_prev_game(id_discount_game,mass_pict_new_game, place_new_pict)});
// document.getElementById('discount-next').addEventListener('click',()=>{default_slider_next_game(id_discount_game,mass_pict_new_game, place_new_pict)});
document.getElementById("preproduces-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_preproduces_game,
    arr_preprodaction_games,
    place_preproduce_pict,
    4
  ).then((res) => (id_preproduces_game = res));
});
document.getElementById("preproduces-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_preproduces_game,
    arr_preprodaction_games,
    place_preproduce_pict,
    4
  ).then((res) => (id_preproduces_game = res));
});
document.getElementById("best-online-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_best_online_game,
    arr_online_games,
    place_best_online_pict,
    5
  ).then((res) => (id_best_online_game = res));
});

document.getElementById("discount-prev").addEventListener("click", () => {
  discaunt_slider_for_previus_elements(
    id_discaunt_game,
    arr_discount_games,
    place_discount_pict,
    5
  ).then((res) => (id_best_online_game = res));
});

document.getElementById("discount-next").addEventListener("click", () => {
  console.log("element ", place_discount_pict[0].childNodes[7].childNodes[1]);
  console.log("element ", place_discount_pict[0].childNodes[7].childNodes[3]);
  console.log("element ", place_discount_pict[0].childNodes[7].childNodes[5]);
  discaunt_slider_for_next_elements(
    id_discaunt_game,
    arr_discount_games,
    place_discount_pict,
    5
  ).then((res) => (id_discaunt_game = res));
});

document.getElementById("best-online-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_best_online_game,
    arr_online_games,
    place_best_online_pict,
    5
  ).then((res) => (id_best_online_game = res));
});
// document.getElementById("view").addEventListener("click", () => {
//   console.log(arr_all_games);
//   all_game(arr_all_games);
// });

document.getElementById("more_top_gaems").addEventListener("click", () => {
  top_chart(arr_top_games);
});

document.getElementById("log_in").addEventListener("click", () => {
  log_in();
});
// document.getElementById("sign_up").addEventListener("click", () => {
//   sign_up();
// });
//listener_for_img();

// document.querySelector('.search_game').addEventListener('');

document.querySelector(".search-wrapper").addEventListener("submit", () => {
  find_choose_game(document.querySelector(".search").value);
});

document.querySelector(".find").addEventListener("click", () => {
  find_choose_game(document.querySelector(".search").value);
});

export {
  add_new_game_db,
  add_new_user,
  log_in_user,
  add_new_status,
  find_choose_game,
  //add_buyer_game,
  // add_intresting_game,
  //log_in_after_game,
};
