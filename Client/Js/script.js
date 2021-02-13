import {default_slider} from "./sliders.js"


console.log('lol')

let mas_pict_new_game = [
{link:"../images/Medal_of_honor.jpg",
name:"Medal of honor",
develop:"Respawn Entartaimont",
prize:"1000"},
{link:"../images/Back4Blood.jpg",
name:"Back4Blood",
develop:"Turtle Rock Studios",
prize:"1200"},
{link:"../images/Batman.jpg",
name:"Batman",
develop:"Rocksteady Studios",
prize:"1100"},
{link:"../images/FarCray.jpg",
name:"FarCray",
develop:"Ubisoft",
prize:"1500"},
{link:"../images/GTA_5.jpg",
name:"GTA 5",
develop:"Rockstar Games",
prize:"1900"},
{link:"../images/Hitman.jpeg",
name:"Hitman",
develop:"IO Interactive",
prize:"2500"},
{link:"../images/Left4Dead.jpg",
name:"Left4Dead",
develop:"Turtle Rock Studios",
prize:"2000"},
{link:"../images/Assasin.jpg",
name:"Assasin",
develop:"Ubisoft",
prize:"1400"},
{link:"../images/Metpo.jpg",
name:"Metpo",
develop:"4A Games",
prize:"3000"},
{link:"../images/NFS.jpg",
name:"NFS",
develop:"Electronic Arts",
prize:"2800"},
{link:"../images/TombRaider.jpg",
name:"TombRaider",
develop:"Eidos Montreal",
prize:"2700"},
{link:"../images/WatchDogs.jpg",
name:"WatchDogs",
develop:"Ubisoft",
prize:"2200"},
{link:"../images/Witcher_3.jpg",
name:"Witcher 3",
develop:"CD Projekt RED",
prize:"3100"},
{link:"../images/WoF3.jpg",
name:"World of Warcraft 3",
develop:"BLIZZARD",
prize:"900"},
{link:"../images/Skyrim.jpg",
name:"Skyrim",
develop:"Bethesda Game Studios",
prize:"2900"},
{link:"../images/RDR_2.jpg",
name:"Red Dead Redamtion 2",
develop:"Rockstar Games",
prize:"3000"}
],
id_new_game = 0;
// id_discount_game = 0,
// id_preproduces_game = 0,
// id_best_online_game = 0;
const place_new_pict = document.querySelectorAll('.items-new-games'),
place_discount_pict = document.querySelectorAll('.items-discount-games'),
place_preproduce_pict = document.querySelectorAll('.items-preproduce-games'),
place_best_online_pict = document.querySelectorAll('.container-best-online-games');


function ForEach(mass, fun){
 return Array.prototype.forEach.call(mass, fun);
}

const add_class = () => {
  ForEach(place_new_pict, element => {element.classList.add("slider-popcity")});
}

const delete_class = () => {
  ForEach(place_new_pict, element => element.classList.remove("slider-popcity"));
}


function f(id_game, mas_pict_new_game, place_new_pict) {
  console.log('id - game(postupivshee) :',id_game)
add_class();
new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(default_slider(id_game, mas_pict_new_game, place_new_pict))
  },1000)
}).then((result)=>{
  delete_class()
  console.log(result)
  id_new_game = result;
});
}


// const default_slider_prev_game = (id_game, mas_pict_new_game, place_new_pict) => {
//   // здесь надо будет делать запрос на новые игры в бд, и далее его передавать в функцуию слайдера
//   // можно сделать через отдельные классы, то есть запускаю анимаци погасания картинок
//   // далее я знаю что через 1 секунду у меня опасити 0 и это значит что я могу через
//   //сет таймаут запустить функция замены картинок , сэт таймаут пытается сделать все через
//   //вряемя которое ты задал но он может ненамного опаздывать, это знначит
//   //что я в сэте запущу функцию замены а после этой замены я просто верну опасити на 1
//   // и всё
//   let new_id = 0;
//   id_game-=5;
//   console.log('id - game(postupivshee) :',id_game)
// add_class();
// setTimeout(()=>{
//   default_slider(id_game, mas_pict_new_game, place_new_pict);
//   setTimeout(()=>{ delete_class()}, 300)
// }
// , 1000)
//  console.log('new-id : ',new_id)
// }

// const default_slider_next_game = () => {
//   id_game+=5;
// add_class();
// setTimeout(()=>{
//   default_slider(id_game, mas_pict_new_game, place_new_pict);
//   setTimeout(()=>{ delete_class()}, 300)
// }, 1000)
// if(id_game > mas_pict_new_game.length){
//   id_game = 0;
//  }
//  return id_game;
// }

document.getElementById('new-prev').addEventListener('click',()=>{f(id_new_game,mas_pict_new_game, place_new_pict)});
document.getElementById('new-next').addEventListener('click',()=>{id_new_game = default_slider_next_game(id_new_game)});
// document.getElementById('discount-prev').addEventListener('click',()=>{default_slider_prev_game(id_discount_game)});
// document.getElementById('discount-next').addEventListener('click',()=>{default_slider_next_game(id_discount_game)});
// document.getElementById('preproduces-prev').addEventListener('click',()=>{default_slider_prev_game(id_preproduces_game)});
// document.getElementById('preproduces-next').addEventListener('click',()=>{default_slider_next_game(id_preproduces_game)});
// document.getElementById('best-online-prev').addEventListener('click',()=>{default_slider_prev_game(id_best_online_game)});
// document.getElementById('best-online-next').addEventListener('click',()=>{default_slider_next_game(id_best_online_game)});
