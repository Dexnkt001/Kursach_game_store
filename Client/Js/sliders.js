export function default_slider(id, mass_pict, mass_place){
let index = 0,
mass_len = mass_pict.length;
console.log('id - ', id);
if(-id+5<=mass_len){
  for(let i=-id; i < -id+6;i++){
    mass_place[index].childNodes[1].attributes[0].nodeValue = mass_pict[mass_len-i-1].link;
        mass_place[index].childNodes[3].innerHTML = mass_pict[mass_len-i-1].name;
        mass_place[index].childNodes[5].innerHTML = mass_pict[mass_len-i-1].develop;
        mass_place[index].childNodes[7].innerHTML = mass_pict[mass_len-i-1].prize + ' &#8381;';
        index++;
  }
  return id - 5
}
else{
  let temp = -id+5-mass_len;
  for(let i=-id; i < -id+6-temp;i++){
    mass_place[index].childNodes[1].attributes[0].nodeValue = mass_pict[mass_len+i-1].link;
        mass_place[index].childNodes[3].innerHTML = mass_pict[mass_len+i-1].name;
        mass_place[index].childNodes[5].innerHTML = mass_pict[mass_len+i-1].develop;
        mass_place[index].childNodes[7].innerHTML = mass_pict[mass_len+i-1].prize + ' &#8381;';
        index++;
  }
  for(let i = 0; i < temp; i++){
    mass_place[index].childNodes[1].attributes[0].nodeValue = mass_pict[mass_len+i-1].link;
    mass_place[index].childNodes[3].innerHTML = mass_pict[mass_len+i-1].name;
    mass_place[index].childNodes[5].innerHTML = mass_pict[mass_len+i-1].develop;
    mass_place[index].childNodes[7].innerHTML = mass_pict[mass_len+i-1].prize + ' &#8381;';
    index++;
  }
  return temp - 1
}

}
