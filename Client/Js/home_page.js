function main_list(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("main");
  });

  let html_text = `
  <ul class="main-list">
      <li><img class="slides" src='${new_arr[1].images.main_img}' alt='${new_arr[1].name}'><span>${new_arr[1].name}</span></li>
      <li><img class="slides" src='${new_arr[2].images.main_img}' alt='${new_arr[2].name}'><span>${new_arr[2].name}</span></li>
      <li><img class="slides" src='${new_arr[3].images.main_img}' alt='${new_arr[3].name}'><span>${new_arr[3].name}</span></li>
      <li><img class="slides" src='${new_arr[4].images.main_img}' alt='${new_arr[4].name}'><span>${new_arr[4].name}</span></li>
      <li><img class="slides" src='${new_arr[5].images.main_img}' alt='${new_arr[5].name}'><span>${new_arr[5].name}</span></li>
      <li><img class="slides" src='${new_arr[6].images.main_img}' alt='${new_arr[6].name}'><span>${new_arr[6].name}</span></li>
    </ul>
    `,
    main_img = `<img class="main-slide" src='${new_arr[0].images.main_img}' alt='${new_arr[0].name}'>
    <div class="information-main-slide">
    <div class="relize">${new_arr[0].release}</div>
    <div class="short-info-main-game">${new_arr[0].short_info}</div>
    <div class="prise-main-game">${new_arr[0].prize} &#8381;</div>
    <div class="button full-butt red">Купить</div>
  </div>
    `;
  document
    .querySelector(".main-slide-container")
    .insertAdjacentHTML("beforeend", main_img);
  document
    .querySelector(".main-slide-container")
    .insertAdjacentHTML("afterend", html_text);
}

function main_list_new_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("new");
  });

  let new_games_html = `
  <div class="items-new-games">

      <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
      <div class="new-game-name">${new_arr[0].name}</div>
      <div class="new-game-developer ">${new_arr[0].develop}</div>
      <div class="new-game-prise">${new_arr[0].prize} &#8381;</div>
    </div>
    <div class="items-new-games">

    <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
    <div class="new-game-name">${new_arr[1].name}</div>
    <div class="new-game-developer ">${new_arr[1].develop}</div>
    <div class="new-game-prise">${new_arr[1].prize} &#8381;</div>
    </div>
    <div class="items-new-games">

    <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
    <div class="new-game-name">${new_arr[2].name}</div>
    <div class="new-game-developer ">${new_arr[2].develop}</div>
    <div class="new-game-prise">${new_arr[2].prize} &#8381;</div>
    </div>
    <div class="items-new-games">

    <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
    <div class="new-game-name">${new_arr[3].name}</div>
    <div class="new-game-developer ">${new_arr[3].develop}</div>
    <div class="new-game-prise">${new_arr[3].prize} &#8381;</div>
    </div>
    <div class="items-new-games">

    <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
    <div class="new-game-name">${new_arr[4].name}</div>
    <div class="new-game-developer ">${new_arr[4].develop}</div>
    <div class="new-game-prise">${new_arr[4].prize} &#8381;</div>
    </div>
  `;
  document
    .querySelector(".container-new-games")
    .insertAdjacentHTML("beforeend", main_list_new_games);
}

function main_list_popular_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("popular");
  });

  let popular_games_html = `
<div class="grid-container">
  <div class="first-popular-item"><img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}"></div>
  <div class="second-popular-item"><img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}"></div>
  <div class="third-popular-item"><img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}"></div>
  <div class="forth-popular-item"><img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}"></div>
  <div class="fivth-popular-item"><img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}"></div>
  <div class="sixth-popular-item"><img class="click_img" src="${new_arr[5].images.main_img}" alt="${new_arr[5].name}"></div>
</div>
`;

  document
    .querySelector(".popular-title")
    .insertAdjacentHTML("afterend", popular_games_html);
}

function main_list_top_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("top");
  });

  let top_games_html = `
  <div class="items-top-games">

      <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
      <div class="top-game-name">${new_arr[0].name}</div>
      <div class="top-game-developer ">${new_arr[0].develop}</div>
      <div class="top-game-prise">${new_arr[0].prize} &#8381;</div>
    </div>
    <div class="items-top-games">

    <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
    <div class="top-game-name">${new_arr[1].name}</div>
    <div class="top-game-developer ">${new_arr[1].develop}</div>
    <div class="top-game-prise">${new_arr[1].prize} &#8381;</div>
    </div>
    <div class="items-top-games">

    <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
    <div class="top-game-name">${new_arr[2].name}</div>
    <div class="top-game-developer ">${new_arr[2].develop}</div>
    <div class="top-game-prise">${new_arr[2].prize} &#8381;</div>
    </div>
  `;

  document
    .querySelector(".container-top-games")
    .insertAdjacentHTML("beforeend", top_games_html);
}

function main_list_week_game(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("week");
  });

  let week_game = `
<img src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
<div class="inormatio-top-week-game">
  <div class="name-top-week-game">${new_arr[0].name}</div>
  <div class="short-inormatio-top-week-game">${new_arr[0].short_info}</div>
  <div class="prise-top-week-game">${new_arr[0].prize} &#8381;</div>
  <div class="button full-butt orange">Купить</div>
</div>
`;

  document
    .querySelector(".top-week-game")
    .insertAdjacentHTML("beforeend", week_game);
}

function main_list_discount_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("discount");
  });

  let discount_games_html = `
<div class="items-discount-games">

<img class="click_img" src="${new_arr[0].images.main_img}" alt="${
    new_arr[0].name
  }">
<div class="discount-game-name">${new_arr[0].name}</div>
<div class="discount-game-developer ">${new_arr[0].develop}</div>
<div class="discount-information">
  <div class="discount">-${new_arr[0].discaunt}%</div>
  <div class="befor-discount-game-prise">${new_arr[0].prize}&#8381;</div>
  <div class="after-discount-game-prise">${
    (new_arr[0].prize * new_arr[0].discaunt) / 100
  }&#8381;</div>
</div>
</div>
<div class="items-discount-games">

<img class="click_img" src="${new_arr[1].images.main_img}" alt="${
    new_arr[1].name
  }">
<div class="discount-game-name">${new_arr[1].name}</div>
<div class="discount-game-developer ">${new_arr[1].develop}</div>
<div class="discount-information">
  <div class="discount">-${new_arr[1].discaunt}%</div>
  <div class="befor-discount-game-prise">${new_arr[1].prize}&#8381;</div>
  <div class="after-discount-game-prise">${
    (new_arr[1].prize * new_arr[1].discaunt) / 100
  }&#8381;</div>
</div>
</div>
<div class="items-discount-games">

<img class="click_img" src="${new_arr[2].images.main_img}" alt="${
    new_arr[2].name
  }">
<div class="discount-game-name">${new_arr[2].name}</div>
<div class="discount-game-developer ">${new_arr[2].develop}</div>
<div class="discount-information">
  <div class="discount">-${new_arr[2].discaunt}%</div>
  <div class="befor-discount-game-prise">${new_arr[2].prize}&#8381;</div>
  <div class="after-discount-game-prise">${
    (new_arr[2].prize * new_arr[2].discaunt) / 100
  }&#8381;</div>
</div>
</div>
<div class="items-discount-games">

<img class="click_img" src="${new_arr[3].images.main_img}" alt="${
    new_arr[3].name
  }">
<div class="discount-game-name">${new_arr[3].name}</div>
<div class="discount-game-developer ">${new_arr[3].develop}</div>
<div class="discount-information">
  <div class="discount">-${new_arr[3].discaunt}%</div>
  <div class="befor-discount-game-prise">${new_arr[3].prize}&#8381;</div>
  <div class="after-discount-game-prise">${
    (new_arr[3].prize * new_arr[3].discaunt) / 100
  }&#8381;</div>
</div>
</div>
<div class="items-discount-games">

<img class="click_img" src="${new_arr[4].images.main_img}" alt="${
    new_arr[4].name
  }">
<div class="discount-game-name">${new_arr[4].name}</div>
<div class="discount-game-developer ">${new_arr[4].develop}</div>
<div class="discount-information">
  <div class="discount">-${new_arr[4].discaunt}%</div>
  <div class="befor-discount-game-prise">${new_arr[4].prize}&#8381;</div>
  <div class="after-discount-game-prise">${
    (new_arr[4].prize * new_arr[4].discaunt) / 100
  }&#8381;</div>
</div>
</div>
`;

  document
    .querySelector(".container-discount-games")
    .insertAdjacentHTML("beforeend", discount_games_html);
}

function main_list_free_game(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("free");
  });

  let free_game = `
<img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
<div class="inormatio-free-test-game">
  <div class="name-free-test-game">="${new_arr[0].name}</div>
  <div class="short-inormatio-free-test-game">="${new_arr[0].short_info}</div>
  <div class="button full-butt blue lern-more-butt">Узнать больше</div>
</div>
`;

  document
    .querySelector(".title-free-test-game")
    .insertAdjacentHTML("afterend", free_game);
}

function main_list_preprodaction_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("prepoduction");
  });

  let preprodaction_game = `
  <div class="items-preproduce-games">

  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="preproduce-game-name">${new_arr[0].name}</div>
  <div class="preproduce-game-developer">${new_arr[0].develop}</div>
    <div class="preproduce-game-prise">${new_arr[0].prize}&#8381;</div>
</div>
<div class="items-preproduce-games">

  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="preproduce-game-name">${new_arr[1].name}</div>
  <div class="preproduce-game-developer">${new_arr[1].develop}</div>
    <div class="preproduce-game-prise">${new_arr[1].prize}&#8381;</div>
</div>
<div class="items-preproduce-games">

  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="preproduce-game-name">${new_arr[2].name}</div>
  <div class="preproduce-game-developer">${new_arr[2].develop}</div>
    <div class="preproduce-game-prise">${new_arr[2].prize}&#8381;</div>
</div>
<div class="items-preproduce-games">

  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="preproduce-game-name">${new_arr[3].name}</div>
  <div class="preproduce-game-developer">${new_arr[3].develop}</div>
  <div class="preproduce-game-prise">${new_arr[3].prize}&#8381;</div>
</div>
`;

  document
    .querySelector(".container-preproduce-games")
    .insertAdjacentHTML("beforeend", preprodaction_game);
}

function main_list_online_games(arr) {
  let new_arr = arr.filter((element) => {
    return element.effect.includes("online");
  });

  let online_games = `
  <div class="items-best-online-games">

      <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
      <div class="new-game-name">${new_arr[0].name}</div>
      <div class="new-game-developer ">${new_arr[0].develop}</div>
      <div class="new-game-prise">${new_arr[0].prize} &#8381;</div>
    </div>
    <div class="items-best-online-games">

      <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
      <div class="best-online-game-name">${new_arr[1].name}</div>
      <div class="best-online-game-developer">${new_arr[1].develop}</div>
      <div class="best-online-game-prise">${new_arr[1].prize}&#8381;</div>
    </div>
    <div class="items-best-online-games">

    <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
    <div class="best-online-game-name">${new_arr[2].name}</div>
    <div class="best-online-game-developer">${new_arr[2].develop}</div>
    <div class="best-online-game-prise">${new_arr[2].prize}&#8381;</div>
    </div>
    <div class="items-best-online-games">

    <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
    <div class="best-online-game-name">${new_arr[3].name}</div>
    <div class="best-online-game-developer">${new_arr[3].develop}</div>
    <div class="best-online-game-prise">${new_arr[3].prize}&#8381;</div>
    </div>
    <div class="items-best-online-games">

    <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
    <div class="best-online-game-name">${new_arr[4].name}</div>
    <div class="best-online-game-developer">${new_arr[4].develop}</div>
    <div class="best-online-game-prise">${new_arr[4].prize}&#8381;</div>
    </div>
`;

  document
    .querySelector(".container-best-online-games")
    .insertAdjacentHTML("beforeend", online_games);
}

export {
  main_list,
  main_list_new_games,
  main_list_popular_games,
  main_list_top_games,
  main_list_week_game,
  main_list_discount_games,
  main_list_free_game,
  main_list_preprodaction_games,
  main_list_online_games,
};
