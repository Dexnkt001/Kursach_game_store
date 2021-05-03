import { default_previus_slider, default_next_slider } from "./sliders.js";
import {
  all_game,
  top_chart,
  log_in,
  sign_up,
  module_game,
  status,
  admin_buttons,
} from "./moduls_forms.js";

let mass_pict_new_game = [
    {
      link: "../images/Medal_of_honor.jpg",
      name: "Medal of honor",
      develop: "Respawn Entartaimont",
      prize: "1000",
    },
    {
      link: "../images/Back4Blood.jpg",
      name: "Back4Blood",
      develop: "Turtle Rock Studios",
      prize: "1200",
    },
    {
      link: "../images/Batman.jpg",
      name: "Batman",
      develop: "Rocksteady Studios",
      prize: "1100",
    },
    {
      link: "../images/FarCray.jpg",
      name: "FarCray",
      develop: "Ubisoft",
      prize: "1500",
      all_img: [
        "../images/FarCray.jpg",
        "../images/FarCry_2.jpg",
        "../images/FarCry_3.jpg",
      ],
      short_info:
        "Игра про времена индертальцев как в те далекие времена выживали наши предки",
      publish: "Ubisoft",
      release: "6 октября 2015",
      tag: "За жизнь надо бороться!",
      rait: "4",
      platform: "Windows",
      full_info:
        "игра про давние времена когда челоек еще не находился на вершине пищевой цепи и каждый день был на грани жизни и смерти и что бы выжить люди шли на отчаенные меры",
      proc: ["intel_1", "intel_2"],
      cpu: ["8gb", "16gb"],
      memory: ["70gb", "100gb"],
      direct: ["10", "11"],
      video: ["960", "1660ti"],
    },

    {
      link: "../images/GTA_5.jpg",
      name: "GTA 5",
      develop: "Rockstar Games",

      prize: "1900",
    },
    {
      link: "../images/Hitman.jpeg",
      name: "Hitman",
      develop: "IO Interactive",
      prize: "2500",
    },
    {
      link: "../images/Left4Dead.jpg",
      name: "Left4Dead",
      develop: "Turtle Rock Studios",
      prize: "2000",
    },
    {
      link: "../images/Assasin.jpg",
      name: "Assasin",
      develop: "Ubisoft",
      prize: "1400",
    },
    {
      link: "../images/Metpo.jpg",
      name: "Metpo",
      develop: "4A Games",
      prize: "3000",
    },
    {
      link: "../images/NFS.jpg",
      name: "NFS",
      develop: "Electronic Arts",
      prize: "2800",
    },
    {
      link: "../images/TombRaider.jpg",
      name: "Tomb Raider",
      develop: "Eidos Montreal",
      prize: "2700",
    },
    {
      link: "../images/WatchDogs.jpg",
      name: "WatchDogs",
      develop: "Ubisoft",
      prize: "2200",
    },
    {
      link: "../images/Witcher_3.jpg",
      name: "Witcher 3",
      develop: "CD Projekt RED",
      prize: "3100",
    },
    {
      link: "../images/WoF3.jpg",
      name: "World of Warcraft 3",
      develop: "BLIZZARD",
      prize: "900",
    },
    {
      link: "../images/Skyrim.jpg",
      name: "Skyrim",
      develop: "Bethesda Game Studios",
      prize: "2900",
    },
    {
      link: "../images/RDR_2.jpg",
      name: "Red Dead Redamtion 2",
      develop: "Rockstar Games",
      prize: "3000",
    },
  ],
  id_new_game = 0,
  //id_discount_game = 0,
  id_preproduces_game = 0,
  id_best_online_game = 0,
  click_img = document.querySelectorAll(".click_img"),
  admin = false;
const place_new_pict = document.querySelectorAll(".items-new-games"),
  //place_discount_pict = document.querySelectorAll('.items-discount-games'),
  place_preproduce_pict = document.querySelectorAll(".items-preproduce-games"),
  place_best_online_pict = document.querySelectorAll(
    ".items-best-online-games"
  );

function ForEach(mass, fun) {
  return Array.prototype.forEach.call(mass, fun);
}

const add_class = (place_pict) => {
  ForEach(place_pict, (element) => {
    element.classList.add("slider-popcity");
  });
};

const delete_class = (place_pict) => {
  ForEach(place_pict, (element) => element.classList.remove("slider-popcity"));
};

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

function listener_for_img() {
  for (let i = 0; i < click_img.length; i++) {
    click_img[i].addEventListener("click", (e) => {
      find_choose_game(e);
    });
  }
}

function find_choose_game(e) {
  const name = e.target.alt;
  for (let i = 0; i < mass_pict_new_game.length; i++) {
    if (mass_pict_new_game[i].name === name) {
      module_game(mass_pict_new_game[i]);
      break;
    }
  }
}

async function add_new_game_db(arr) {
  console.log(arr);
  const game_info = arr;
  if (game_info.length === 4) {
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
        `;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
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
    console.log(Object.keys(list).length);
    if (Object.keys(list).length === 2) {
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
        let html = `
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${list.login}
    </a>
        `;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
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
    mass_pict_new_game,
    place_new_pict,
    5
  ).then((res) => (id_new_game = res));
});
document.getElementById("new-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_new_game,
    mass_pict_new_game,
    place_new_pict,
    5
  ).then((res) => (id_new_game = res));
});
// document.getElementById('discount-prev').addEventListener('click',()=>{default_slider_prev_game(id_discount_game,mass_pict_new_game, place_new_pict)});
// document.getElementById('discount-next').addEventListener('click',()=>{default_slider_next_game(id_discount_game,mass_pict_new_game, place_new_pict)});
document.getElementById("preproduces-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_preproduces_game,
    mass_pict_new_game,
    place_preproduce_pict,
    4
  ).then((res) => (id_preproduces_game = res));
});
document.getElementById("preproduces-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_preproduces_game,
    mass_pict_new_game,
    place_preproduce_pict,
    4
  ).then((res) => (id_preproduces_game = res));
});
document.getElementById("best-online-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_best_online_game,
    mass_pict_new_game,
    place_best_online_pict,
    5
  ).then((res) => (id_best_online_game = res));
});
document.getElementById("best-online-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_best_online_game,
    mass_pict_new_game,
    place_best_online_pict,
    5
  ).then((res) => (id_best_online_game = res));
});
document.getElementById("view").addEventListener("click", () => {
  console.log("all_game");
  all_game(mass_pict_new_game);
});

document.getElementById("more_top_gaems").addEventListener("click", () => {
  top_chart(mass_pict_new_game);
});
document.getElementById("log_in").addEventListener("click", () => {
  log_in();
});
document.getElementById("sign_up").addEventListener("click", () => {
  sign_up();
});
listener_for_img();

// document.querySelector('.search_game').addEventListener('');

document.querySelector(".search-wrapper").addEventListener("submit", () => {
  console.log("submit");
});

export { add_new_game_db, add_new_user, log_in_user, add_new_status };
