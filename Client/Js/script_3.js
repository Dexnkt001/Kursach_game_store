const images = document.querySelectorAll(".all-gemes-item img");
const sorts = document.querySelectorAll(".sort-elements");
const arr_sorts = Array.from(sorts);
const arr_img = Array.from(images);
const gener = document.querySelectorAll(".genre-item");
const coast = document.querySelectorAll(".cost-item");
const rait = document.querySelectorAll(".rait-item");
let arr_all_games = [];

function event_img(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}

function event_sorts(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (event) => {
      const target = event.target;
      if (
        (target.nodeName == "DIV" || target.nodeName == "UL") &&
        !target.classList.contains("title-sort-elements")
      ) {
        return;
      } else if (target.nodeName == "LI") {
        if (
          target.parentNode.classList.contains("sort-price") ||
          target.parentNode.classList.contains("sort-rait")
        ) {
          [].map.call(target.parentNode.childNodes, (element) => {
            if (element.nodeName == "LI") {
              element.classList.remove("active_sorts_item");
              element.childNodes[target.childNodes.length - 1].classList.remove(
                "active_accept"
              );
            }
          });
        }
        target.classList.toggle("active_sorts_item");
        target.childNodes[target.childNodes.length - 1].classList.toggle(
          "active_accept"
        );
      } else if (target.classList.contains("title-sort-elements")) {
        target.parentNode.childNodes[
          target.parentNode.childNodes.length - 2
        ].classList.toggle("activ_sort");
      } else if (target.parentNode.classList.contains("title-sort-elements")) {
        console.log(target.parentNode.parentNode);
        target.parentNode.parentNode.childNodes[
          target.parentNode.parentNode.childNodes.length - 2
        ].classList.toggle("activ_sort");
      } else {
        console.log(target.parentNode.parentNode);
        if (
          target.parentNode.parentNode.classList.contains("sort-price") ||
          target.parentNode.parentNode.classList.contains("sort-rait")
        ) {
          console.log(target.parentNode.parentNode.childNodes);
          [].map.call(target.parentNode.parentNode.childNodes, (element) => {
            if (element.nodeName == "LI") {
              element.classList.remove("active_sorts_item");
              element.childNodes[
                element.childNodes.length - 1
              ].classList.remove("active_accept");
            }
          });
        }
        target.parentNode.classList.toggle("active_sorts_item");
        target.parentNode.childNodes[
          target.parentNode.childNodes.length - 1
        ].classList.toggle("active_accept");
      }
    });
  });
}

window.onload = async function () {
  await serv_arr_all_games();
  console.log(arr_all_games);
  document
    .querySelector(".module-content")
    .insertAdjacentHTML("afterbegin", all_games_page(arr_all_games));
};

function all_games_page(arr_all_games) {
  let text = ``;

  arr_all_games.forEach((item) => {
    text += str(item);
  });
  return text;
}

function str(element) {
  return `<div class='all-gemes-item'><img class="slides module-content-items" src="${element.images.main_img}" alt="${element.name}">
  <div>
    <div>${element.name}</div>
    <div class='develop-game'>${element.developer}</div>
  </div>
<div>
${element.prize}&#8381;
</div>
</div>
  `;
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

document.querySelector(".btn-sort").addEventListener("click", () => {
  console.log(gener, "-----------------", coast, "-------------", rait);
  let arr_g = Array.from(gener)
    .filter((element) =>
      element.parentNode.classList.contains("active_sorts_item")
    )
    .map((element) => element.innerText);
  let arr_c = Array.from(coast)
    .filter((element) =>
      element.parentNode.classList.contains("active_sorts_item")
    )
    .map((element) => element.innerText);
  let arr_r = Array.from(rait)
    .filter((element) =>
      element.parentNode.classList.contains("active_sorts_item")
    )
    .map((element) => element.innerText);
  console.log(arr_g, "------", arr_c, "-----", arr_r);
  let sort = [arr_g, arr_c, arr_r];

  sort_games(arr_all_games, sort);
});

function sort_games(arr_1, arr_2) {
  let bool;

  console.log(arr_2[1][0]);

  let cost = [arr_2[1][0][0], arr_2[1][0].slice(-5, -1)];

  let rait = [arr_2[2][0].slice(-3, -2)];

  let info_arr=[arr_2[0][1],cost,rait]

  console.log(cost, "------", rait);
  let res = arr_1
    .filter((element) => {
      return element.genre.some((item) => {
        bool = false;
        for (let i = 0; i < info_arr[0].length; i++) {
          if (item === info_arr[0][i]) {
            bool = true;
            break;
          }
        }
        console.log(bool);
        if (bool === true) {
          return true;
        }
      });
    })
    .filter((element) => {
      if(info_arr[1][0] === 'Н'){
    return element.prize<info_arr[1][1]
      }else return element.prize>info_arr[1][1]
    });
console.log(res)

  return res;
}

event_sorts(arr_sorts);
