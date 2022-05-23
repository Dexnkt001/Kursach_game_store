function user_list(user) {
  console.log("user_list");

  let str_game_buy = ``,
      str_game_intresting = ``;
  console.log(user);

  user.buyr_games.forEach((element) => {
    str_game_buy =
        str_game_buy +
        `<div class='relative-for-game-text'> <img class="user-buyr_games" src="${element.images.main_img}" alt="${element.name}"><spam class="text-buer-game">Скачать</spam></div>`;
  });

  user.intrsting_games.forEach((element) => {
    str_game_intresting =
        str_game_intresting +
        `<div class='relative-for-game-text'> <img class="user-int_games" src="${element.images.main_img}" alt="${element.name}"><spam class="text-intrest-game">Смотреть</spam></div>`;
  });

  let html_text = `<div class="back-modul"></div>
<div class="modul-window assasin_bg">
  <div class="up-module-window-user">
    <span class="login-user-layot">${user.login} </span>
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class="content-grid-user">
    <div class='img-user'>
      <img  class="img_user" src="../images/none_name.jpg" alt="none_name">
    </div>
    <div class='main-content-user'>
      <div class='buyr-games'>
        <h2>
  Купленные
        </h2>
        ${str_game_buy}
      </div>
    <div class='intresting-games'>
      <h2>
Интересующие
      </h2>
      ${str_game_intresting}
    </div>
  </div>
  </div>
  </div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", html_text);

  // document.getElementById("exit").addEventListener("click", () => {
  //   document
  //       .querySelector(".modul-window")
  //       .parentNode.removeChild(document.querySelector(".modul-window"));
  //   document
  //       .querySelector(".back-modul")
  //       .parentNode.removeChild(document.querySelector(".back-modul"));
  // });

  Array.from(document.querySelectorAll(".user-int_games")).forEach(
      (element) => {
        console.log(element)
        element.addEventListener("click", () => {
          // document
          //     .querySelector(".modul-window")
          //     .parentNode.removeChild(document.querySelector(".modul-window"));
          // document
          //     .querySelector(".back-modul")
          //     .parentNode.removeChild(document.querySelector(".back-modul"));
          find_choose_game(element.alt,user.login);
        });
      }
  );

  Array.from(document.querySelectorAll(".user-buyr_games")).forEach(
      (element) => {
        element.removeEventListener("click", find_choose_game);
        element.addEventListener("click", () => {
          document
              .querySelector(".modul-window")
              .parentNode.removeChild(document.querySelector(".modul-window"));
          document
              .querySelector(".back-modul")
              .parentNode.removeChild(document.querySelector(".back-modul"));
        });
      }
  );

  Array.from(document.querySelectorAll(".user-buyr_int_games")).forEach(
    (element) => {
      console.log(user.buyr_games);
      if (user.buyr_games.includes(element.alt)) {
        console.log(element);
        element.removeEventListener("click", find_choose_game);
      } else {
        element.addEventListener("click", () => {
          document
            .querySelector(".modul-window")
            .parentNode.removeChild(document.querySelector(".modul-window"));
          document
            .querySelector(".back-modul")
            .parentNode.removeChild(document.querySelector(".back-modul"));
          find_choose_game(element.alt,user.login);
        });
      }
    }
  );
}

document
  .querySelector("body")
  .addEventListener("DOMSubtreeModified", function () {
    const login = document.location.search.substr(1).split("=")[1];

    Array.from(document.querySelectorAll(".main-slide")).forEach((element) => {
      element.addEventListener("click", () => {
        finde_game_bascet(element.alt, login);
      });
    });
  });


function finde_game_bascet(game_name, login) {
  find_choose_game(game_name, login);
}

async function find_choose_game(name, user) {
  console.log("name");
  const val = name;
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/find_game/${val}`);
    const game = await response.json().then((res) => {
      return res.game;
    });
    new_window(game, user);
  } catch (err) {
    console.log(err);
  }
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
    `http://localhost:63342/Kursach_game_store/Client/html/two.html?name=${user}`,
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

window.onload= async function (){

     const name = window
          .location
          .search
          .replace('?','')
          .split('&')
          .reduce(
              function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
              },
              {}
          ).name
console.log(name)
  const response = await fetch(`http://localhost:5500/client/${name}`);
  const list = await response.json().then();
  console.log(list)
   user_list(list)
}
