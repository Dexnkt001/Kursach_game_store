function default_previus_slider(id, mass_pict, mass_place, numb_pict) {
  let index = 0;
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider + numb_pict <= mass_len) {
    for (let i = id_in_slider; i < id_in_slider + numb_pict; i++) {
      mass_place[index].childNodes[1].src = mass_pict[mass_len - i - 1].link;
      mass_place[index].childNodes[3].innerHTML =
        mass_pict[mass_len - i - 1].name;
      mass_place[index].childNodes[5].innerHTML =
        mass_pict[mass_len - i - 1].develop;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[mass_len - i - 1].prize + " &#8381;";
      index++;
    }
    return id - numb_pict;
  } else {
    let temp = id_in_slider + numb_pict - mass_len;
    for (let i = id_in_slider; i < id_in_slider + numb_pict - temp; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].link;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].develop;
      index++;
    }
    for (let i = 0; i < temp; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].link;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].develop;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return -temp + 1;
  }
}

function default_next_slider(id, mass_pict, mass_place, numb_pict) {
  let index = 0;
  const id_in_slider = Math.abs(id),
    mass_len = mass_pict.length;
  console.log("id - ", id);
  if (id_in_slider + numb_pict <= mass_len) {
    for (let i = id_in_slider; i < id_in_slider + numb_pict; i++) {
      console.log("pozicia i : ", i);
      mass_place[index].childNodes[1].src = mass_pict[i].link;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].develop;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return id + numb_pict;
  } else {
    let temp = id_in_slider + numb_pict - mass_len;
    for (let i = -id; i < id_in_slider + numb_pict - temp; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].link;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].develop;
      index++;
    }
    for (let i = 0; i < temp; i++) {
      mass_place[index].childNodes[1].src = mass_pict[i].link;
      mass_place[index].childNodes[3].innerHTML = mass_pict[i].name;
      mass_place[index].childNodes[5].innerHTML = mass_pict[i].develop;
      mass_place[index].childNodes[7].innerHTML =
        mass_pict[i].prize + " &#8381;";
      index++;
    }
    return temp - 1;
  }
}

export { default_previus_slider, default_next_slider };
