import {slider} from "./sliders.js"


console.log('lol')

let mas_pict_new_game = [
{link:"./Client/images/Assasin.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Back4Blood.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Batman.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/FarCray.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/GTA_5.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Hitman.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Left4Dead.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Medal_of_honor.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Metpo.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/NFS.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/TombRaider.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/WatchDogs.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Witcher_3.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/WoF3.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/Skyrim.jpg",
name:"",
develop:"",
prize:},
{link:"./Client/images/RDR_2.jpg",
name:"",
develop:"",
prize:}
],
id_new_game = 0;
const place_new_pict = document.querySelectorAll('.items-new-games'),
prev_new_game;

prev_new_game = () => {
  // здесь надо будет делать запрос на новые игры в бд, и далее его передавать в функцуию слайдера
  slider(id_new_game,mas_pict_new_game, place_new_pict),
  id_new_game+=5;
}


document.getElementById('new-prev').addEventListener('click',prev_new_game);
