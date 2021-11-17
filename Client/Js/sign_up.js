const sorts = document.querySelectorAll(".sort-elements-list");
const arr_sorts = Array.from(sorts);
const arr_inputs = Array.from(document.querySelectorAll("input"));

const arr_li_g = Array.from(document.querySelectorAll(".list-g"));
arr_li_g.forEach((element) => {
  console.log(element.innerHTML);
});

const arr_li_d = Array.from(document.querySelectorAll(".list-d"));
arr_li_d.forEach((element) => {
  console.log(element.parentNode.classList[0]);
});

function info_inputs() {
  return arr_inputs.map((element) => {
    return element.value;
  });
}

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
    window.history.back();
  } catch (error) {
    console.log(error);
  }
}

document.querySelector(".btn-sort").addEventListener("click", () => {
  press_confirm();
});

event_sorts(arr_sorts);
