const sorts = document.querySelectorAll(".sort-elements-list");
const arr_sorts = Array.from(sorts);
const arr_inputs = Array.from(document.querySelectorAll("input"));
const genre = document.querySelectorAll(".list-g");
const dev = document.querySelectorAll(".list-d");
const arr_li_d = Array.from(dev);
const arr_li_g = Array.from(genre);

console.log(arr_sorts);

var user = JSON.parse(window.localStorage.getItem("user"));

if (typeof user !== "undefined" && user !== null) {
  arr_inputs[0].value = user.login;
  arr_inputs[1].value = user.email;
  arr_inputs[2].value = user.password;
  arr_inputs[3].value = user.country;
  arr_inputs[4].value = user.town;
  arr_inputs[5].value = user.phone;

  arr_li_g.forEach((element) => {
    if (user.genre.includes(element.innerHTML)) {
      element.parentNode.classList.add("active_sorts_item");
      console.log(
        (element.parentNode.lastElementChild.className += " active_accept")
      );
    }
  });

  arr_li_d.forEach((element) => {
    if (user.develop.includes(element.innerHTML)) {
      element.parentNode.classList.add("active_sorts_item");
      console.log(
        (element.parentNode.lastElementChild.className += " active_accept")
      );
    }
  });
}

function info_inputs() {
  return arr_inputs.map((element) => {
    console.log(element.value);
    return element.value;
  });
}

info_inputs();

function get_g() {
  let arr_g = [];
  arr_li_g.forEach((element) => {
    if (element.parentNode.classList[0] == "active_sorts_item") {
      arr_g.push(element.innerHTML);
    }
  });
  return arr_g;
}

function get_d() {
  let arr_d = [];
  arr_li_d.forEach((element) => {
    if (element.parentNode.classList[0] == "active_sorts_item") {
      arr_d.push(element.innerHTML);
    }
  });

  return arr_d;
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

async function press_confirm_update() {
  console.log("up");
  const g = get_g(),
    d = get_d(),
    info_input = info_inputs();

  const user_info = [g, d, info_input, user.login];
  try {
    await fetch("http://localhost:5500/add_user_new_info", {
      method: "POST",
      body: JSON.stringify({
        user_info,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // window.history.back();
  } catch (error) {
    console.log(error);
  }
}

async function press_confirm() {
  const g = get_g(),
    d = get_d(),
    info_input = info_inputs();

  const user_info = [g, d, info_input];
  try {
    await fetch("http://localhost:5500/add_new_user", {
      method: "POST",
      body: JSON.stringify({
        user_info,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // window.history.back();
  } catch (error) {
    console.log(error);
  }
}

window.onload = function () {
  console.log(user);
  if (typeof user === "undefined" || user === null) {
    document.querySelector(".btn-sort").addEventListener("click", () => {
      console.log("no up");
      press_confirm();
    });
  } else {
    document.querySelector(".btn-sort").addEventListener("click", () => {
      console.log("up");
      press_confirm_update();
    });
  }
};

event_sorts(arr_sorts);
