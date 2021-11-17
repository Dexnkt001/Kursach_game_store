const images = document.querySelectorAll(".all-gemes-item img");
const sorts = document.querySelectorAll(".sort-elements");
const arr_sorts = Array.from(sorts);
const arr_img = Array.from(images);
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

// document.querySelector('.btn-sort').addEventListener('click', ()=>{

// })

event_sorts(arr_sorts);
