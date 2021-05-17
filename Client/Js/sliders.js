function default_previus_slider(id, mass_pict, mass_place, numb_pict) {
  console.log("превиас");
  let index = 0;
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider - numb_pict >= 0) {
    console.log("больше нуля");
    for (let i = id_in_slider - numb_pict; i < id_in_slider; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return id - numb_pict;
  } else {
    console.log("меньше нуля");
    let temp = 0;
    for (let i = id_in_slider - 1; i >= 0; i--) {
      console.log("первый", "------", i);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      index++;
    }
    for (let i = mass_len - 1; i > mass_len - 1 - numb_pict + id; i--) {
      console.log("второй", "------", i);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
      temp = i;
    }
    return temp;
  }
}

function default_next_slider(id, mass_pict, mass_place, numb_pict) {
  let index = 0;
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider + numb_pict + numb_pict <= mass_len) {
    for (
      let i = id_in_slider + numb_pict;
      i < id_in_slider + numb_pict * 2;
      i++
    ) {
      console.log("pozicia i : ", i);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return id + numb_pict;
  } else {
    let temp = id_in_slider + numb_pict - mass_len,
      step = 0;
    for (let i = id_in_slider + numb_pict; i < mass_len; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      index++;
      step++;
    }
    for (let i = 0; i < numb_pict - step; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return numb_pict - step;
  }
}

//---------------------------------------------

function discaunt_previus_slider(id, mass_pict, mass_place, numb_pict) {
  console.log("превиас");
  let index = 0;
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider - numb_pict >= 0) {
    console.log("больше нуля");
    for (let i = id_in_slider - numb_pict; i < id_in_slider; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      index++;
    }
    return id - numb_pict;
  } else {
    console.log("меньше нуля");
    let temp = 0;
    for (let i = id_in_slider - 1; i >= 0; i--) {
      console.log("первый", "------", i);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      index++;
    }
    for (let i = mass_len - 1; i > mass_len - 1 - numb_pict + id; i--) {
      console.log("второй", "------", i);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      index++;
      temp = i;
    }
    return temp;
  }
}

function discaunt_next_slider(id, mass_pict, mass_place, numb_pict) {
  let index = 0;
  console.log("element ", mass_place[0].childNodes[7]);
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider + numb_pict + numb_pict <= mass_len) {
    for (
      let i = id_in_slider + numb_pict;
      i < id_in_slider + numb_pict * 2;
      i++
    ) {
      console.log("pozicia i : ", i);
      console.log("element ", mass_place[index].childNodes[1]);
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      // mass_place[index].childNodes[7].innerHTML =
      //   mass_pict[i].prize + " &#8381;";
      index++;
    }
    return id + numb_pict;
  } else {
    let temp = id_in_slider + numb_pict - mass_len,
      step = 0;
    for (let i = id_in_slider + numb_pict; i < mass_len; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      // mass_place[index].childNodes[7].innerHTML =
      //   mass_pict[i].prize + " &#8381;";
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      index++;
      step++;
    }
    for (let i = 0; i < numb_pict - step; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].images.main_img;
      mass_place[index].childNodes[1].alt = mass_pict[i].name;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].developer;
      mass_place[
        index
      ].childNodes[7].childNodes[1].innerHTML = `-${mass_pict[i].discaunt}%`;
      mass_place[
        index
      ].childNodes[7].childNodes[3].innerHTML = `${mass_pict[i].prize}&#8381;`;
      mass_place[index].childNodes[7].childNodes[5].innerHTML = `${
        (mass_pict[i].prize * mass_pict[i].discaunt) / 100
      }&#8381;`;
      // mass_place[index].childNodes[7].innerHTML =
      //   mass_pict[i].prize + " &#8381;";
      index++;
    }
    return numb_pict - step;
  }
}

export {
  default_previus_slider,
  default_next_slider,
  discaunt_previus_slider,
  discaunt_next_slider,
};
