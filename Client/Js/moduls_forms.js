import {add_new_game_db} from "./script.js"

function all_game(massPict){
  const sort_bar = `<ul class='sort-bar'>
  <li><div class="sort-elements"><div class='title-sort-elements'><span>Жанр</span><span class="arrow arrow-dawn">></span></div>
    <ul class="sort-elements-list genre">
    <li>Шутер</li>
    <li>Онлайн</li>
    <li>Гонки</li>
    <li>РПГ</li>
    <li>Стратегии</li>
    <li>Спортивные</li>
    <li>Файтинг</li>
    <li>Хоррор</li>
    </ul>
  </div></li>
  <li><div class="sort-elements"><div class='title-sort-elements'><span>Цена</span><span class="arrow">></span></div>
    <ul class="sort-elements-list sort-price">
    <li>Ниже | 1000&#8381;</li>
    <li>Ниже | 2000&#8381;</li>
    <li>Ниже | 3000&#8381;</li>
    <li>Выше | 3000&#8381;</li></ul>
  </div></li>
  <li><div class="sort-elements"><div class='title-sort-elements'><span>Рэйтинг</span><span class="arrow">></span></div>
    <ul class="sort-elements-list sort-rait">
    <li>Выше | 1	&#9734;</li>
    <li>Выше | 2	&#9734;</li>
    <li>Выше | 3	&#9734;</li>
    <li>Выше | 4	&#9734;</li>
   </ul>
  </div></li>
 </ul>`
  const module_window_all_game = document.createElement('div'),
  back_module_window = document.createElement('div'),
  main_section_module_window = document.createElement('div'),
  module_content = document.createElement('div'),
  up_modul = document.createElement('div'),
  exit = document.createElement('div');
  back_module_window.classList.add('back-modul');
  module_window_all_game.classList.add('modul-window');
  up_modul.classList.add('up-module-window');
  exit.classList.add('exit');
  exit.setAttribute('id', 'exit');
  exit.innerHTML = '<span>&#10006</span>';
  main_section_module_window.classList.add('main-section-modul-window');
  main_section_module_window.classList.add('all-game');
module_content.classList.add('module-content');
document.querySelector('header').after(back_module_window);
back_module_window.after(module_window_all_game);
module_window_all_game.prepend(up_modul);
up_modul.append(exit);
module_window_all_game.append(main_section_module_window);
main_section_module_window.innerHTML = sort_bar;
main_section_module_window.append(module_content);
massPict.forEach(element => {
  let img = document.createElement('img');
  img.classList.add('slides');
  img.classList.add('module-content-items');
  img.setAttribute('src', `${element.link}`);
  img.setAttribute('alt', `${element.name}`);
module_content.append(img);
});

document.querySelector('.exit').addEventListener('click', ()=>{
  document.querySelector('.modul-window').parentNode.removeChild(document.querySelector('.modul-window'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})

}

function top_chart(massPict){
  const module_window_all_game = document.createElement('div'),
  back_module_window = document.createElement('div'),
  main_section_module_window = document.createElement('div'),
  module_content = document.createElement('div'),
  up_modul = document.createElement('div'),
  exit = document.createElement('div');
  back_module_window.classList.add('back-modul');
  module_window_all_game.classList.add('modul-window');
  up_modul.classList.add('up-module-window');
  exit.classList.add('exit');
  exit.setAttribute('id', 'exit');
  exit.innerHTML = '<span>&#10006</span>';
  main_section_module_window.classList.add('main-section-modul-window');
  main_section_module_window.classList.add('all-game');
module_content.classList.add('module-content');
module_content.classList.add('top-chart');
document.querySelector('header').after(back_module_window);
back_module_window.after(module_window_all_game);
module_window_all_game.prepend(up_modul);
up_modul.append(exit);
module_window_all_game.append(main_section_module_window);
main_section_module_window.append(module_content);
massPict.forEach(element => {
  let img = document.createElement('img');
  img.classList.add('slides');
  img.classList.add('module-content-items');
  img.classList.add('top-chart-items-game');
  img.setAttribute('src', `${element.link}`);
  img.setAttribute('alt', `${element.name}`);
module_content.append(img);
});

document.querySelector('.exit').addEventListener('click', ()=>{
  document.querySelector('.modul-window').parentNode.removeChild(document.querySelector('.modul-window'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})

}

function log_in(){
  const log_window = document.createElement('div'),
  back_module_window = document.createElement('div'),
  content_log_in = document.createElement('div'),
  inputs = document.createElement('div'),
  up_modul = document.createElement('div'),
  h1 = document.createElement('h1'),
  exit = document.createElement('div'),
  button = document.createElement('button');
  back_module_window.classList.add('back-modul');
  log_window.classList.add('log_in');
  up_modul.classList.add('up-module-window');
  exit.classList.add('exit');
  exit.setAttribute('id', 'exit');
  exit.innerHTML = '<span>&#10006</span>';
content_log_in.classList.add('content_log_in');
inputs.classList.add('inputs');
document.querySelector('header').after(back_module_window);
back_module_window.after(log_window);
log_window.prepend(up_modul);
up_modul.append(exit);
log_window.append(content_log_in);
h1.innerHTML="Log in";
content_log_in.prepend(h1);
content_log_in.append(inputs);
for(let i=0; i < 2; i++){
  console.log(i);
 let nick =  document.createElement('div'),
 span =  document.createElement('span'),
 input = document.createElement('input');
 nick.classList.add('nick');
 if(i === 0){
   span.innerHTML = "Nickname";
   input.setAttribute('type', 'text');
 }
 else{
  span.innerHTML = "Password";
   input.setAttribute('type', 'password')
 }
inputs.append(nick);
nick.append(span);
nick.append(input)
}

button.classList.add('add_user');
button.setAttribute('type', 'submit');
button.innerHTML="Submit"
inputs.append(button);

document.querySelector('.exit').addEventListener('click', ()=>{
  document.querySelector('.log_in').parentNode.removeChild(document.querySelector('.log_in'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})

}

function sign_up(){
  const log_window = document.createElement('div'),
  back_module_window = document.createElement('div'),
  content_log_in = document.createElement('div'),
  inputs = document.createElement('div'),
  up_modul = document.createElement('div'),
  h1 = document.createElement('h1'),
  exit = document.createElement('div'),
  button = document.createElement('button');
  back_module_window.classList.add('back-modul');
  log_window.classList.add('sign_up');
  up_modul.classList.add('up-module-window');
  exit.classList.add('exit');
  exit.setAttribute('id', 'exit');
  exit.innerHTML = '<span>&#10006</span>';
content_log_in.classList.add('content_log_in');
inputs.classList.add('inputs');
inputs.classList.add('inputs_sign_up');
document.querySelector('header').after(back_module_window);
back_module_window.after(log_window);
log_window.prepend(up_modul);
up_modul.append(exit);
log_window.append(content_log_in);
h1.innerHTML="Sign up";
content_log_in.prepend(h1);
content_log_in.append(inputs);
for(let i=0; i < 3; i++){
  console.log(i);
 let nick =  document.createElement('div'),
 span =  document.createElement('span'),
 input = document.createElement('input');
 nick.classList.add('nick');
 if(i === 0){
   span.innerHTML = "Nickname";
   input.setAttribute('type', 'text');
 } else if(i === 1){
  span.innerHTML = "Email";
   input.setAttribute('type', 'text');
 }
 else{
  span.innerHTML = "Password";
   input.setAttribute('type', 'password')
 }
inputs.append(nick);
nick.append(span);
nick.append(input)
}
button.classList.add('add_user');
button.setAttribute('type', 'submit');
button.innerHTML="Submit"
inputs.append(button);
document.querySelector('.exit').addEventListener('click', ()=>{
  document.querySelector('.sign_up').parentNode.removeChild(document.querySelector('.sign_up'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})

}

function module_game(obj){
let str = obj.all_img.map(element => {
 return  `<img class="main-slide" src="${element}" alt="cyber">`
}).join(',').replace(/[,]/g, '');

let html_text = `
<div class="back-modul-game"></div>
<div class="modul-window assasin_bg">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class="img_game">
    <img src="${obj.link}" alt="assasin">
  </div>
  <div class="short_module_info">
    <img src="${obj.link}" alt="assasin">
    <div class="short_text_module">
    ${obj.short_info}
    </div>
    <div class="module_conteiner_prize">
      <div class="module_prize">
        <div class="numb_prize"><span>${obj.prize} &#8381;</span></div>
        <div class="module_button_buy">Купить сейчас</div>
      </div>
    </div>
  </div>

  <div class="full_module_info">
    <div class="title_module">
      Об игре ${obj.name}
    </div>
    <div class="info_for_module_game">
      <div class="module_game_dev">
        <div>Developer</div>
        <div>${obj.developer}</div>
      </div>
      <div class="module_game_publisher">
        <div>Publisher</div>
        <div>${obj.publish}</div>
      </div>
      <div class="module_game_data">
        <div>Release data</div>
        <div>${obj.release}</div>
      </div>
      <div class="module_game_tags">
        <div>Tags</div>
        <div>${obj.tag}</div>
      </div>
      <div class="module_game_raiting">
        <div>Raiting</div>
        <div>${obj.rait}</div>
      </div>
      <div class="module_game_platform">
        <div>Platforma</div>
        <div>${obj.platform}</div>
      </div>
    </div>
      <div class="module_full_info_text">
        <div class="title_full_info_module_game">${obj.name}</div>
        <div class="text_full_info_under_title">${obj.full_info}</div>
      </div>
      <div class="main-slider module-imgs-game">
        <div class="container-slider-module-imgs-game">
           ${str}
        </div>
        <div class="open-close-img"><span>Свернуть картинки</span></div>
      </div>
    </div>
    <div class="full_module_info">
      <div class="title_module">
       Системные требования
      </div>
      <div class="info_for_req_module_game">
        <div class="minimal_req">
          <div>
            <div class="title_req">Minimal</div>
          </div>
          <div>
            <div class="title_req">OS</div>
            <div>Windows 10</div>
          </div>
          <div>
            <div class="title_req">Processor</div>
            <div>${obj.proc[0]}</div>
          </div>
          <div><div class="title_req">CPU</div>
            <div>${obj.cpu[0]}</div>
          </div>
          <div><div class="title_req">Memory</div>
            <div>${obj.memory[0]}</div>
          </div>
          <div><div class="title_req">Direct X</div>
            <div>${obj.direct[0]}</div>
          </div>
          <div><div class="title_req">Video card</div>
            <div>${obj.video[0]}</div>
          </div>
        </div>
        <div class="recommended_req">
          <div>
            <div class="title_req">Minimal</div>
          </div>
          <div>
            <div class="title_req">OS</div>
            <div>Windows 10</div>
          </div>
          <div>
            <div class="title_req">Processor</div>
            <div>${obj.proc[1]}</div>
          </div>
          <div><div class="title_req">CPU</div>
            <div>${obj.cpu[1]}</div>
          </div>
          <div><div class="title_req">Memory</div>
            <div>${obj.memory[1]}</div>
          </div>
          <div><div class="title_req">Direct X</div>
            <div>${obj.direct[1]}</div>
          </div>
          <div><div class="title_req">Video card</div>
            <div>${obj.video[1]}</div>
          </div>
        </div>
        </div>
      </div>
  </div>

</div>
`


document.querySelector('header').insertAdjacentHTML("afterend", html_text);

document.getElementById('exit').addEventListener('click', ()=>{
  document.querySelector('.modul-window').parentNode.removeChild(document.querySelector('.modul-window'));
  document.querySelector('.back-modul-game').parentNode.removeChild(document.querySelector('.back-modul-game'));
})
}

function add_new_game(){
  let html_text = `
  <div class="back-modul"></div>
  <form action="new_game" method='POST' class='module_wind_new_game' onsubmit="return false;">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>New game</h1>
<div class="inputs inputs_add_new_game">
  <div class="nick"><span>main image</span><input type="text"></div>
  <div class="nick"><span>name game</span><input type="text"></div>
<div class="nick"><span>develop</span><input type="text"></div>
<div class="nick"><span>prize</span><input type="text"></div>
<div class="nick"><span>all image</span><input type="text"></div>
<div class="nick"><span>short info</span><input type="text"></div>
<div class="nick"><span>publish</span><input type="text"></div>
<div class="nick"><span>release</span><input type="text"></div>
<div class="nick"><span>tag</span><input type="text"></div>
<div class="nick"><span>raiting</span><input type="text"></div>
<div class="nick"><span>platforma</span><input type="text"></div>
<div class="nick"><span>full info</span><input type="text"></div>
<div class="nick"><span>proc</span><input type="text"></div>
<div class="nick"><span>cpu</span><input type="text"></div>
<div class="nick"><span>memory</span><input type="text"></div>
<div class="nick"><span>direct</span><input type="text"></div>
<div class="nick"><span>video</span><input type="text"></div>
<button type="submit" class="add_user">Add</button>
</div>
  </div>
</form>
`
document.querySelector('header').insertAdjacentHTML("afterend", html_text);

const full_information_new_game = document.querySelectorAll('.nick input');
console.log(full_information_new_game)
document.querySelector('.add_user').addEventListener('click',()=>{
  const info_items = Array.from(full_information_new_game).map(element=>element.value)
  console.log(info_items);
  add_new_game_db(info_items)});
document.getElementById('exit').addEventListener('click', ()=>{
  document.querySelector('.module_wind_new_game').parentNode.removeChild(document.querySelector('.module_wind_new_game'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})
}


function change_game(){
  let html_text = `
  <div class="back-modul"></div>
  <form action="change_game" class='sign_up' method='POST'onsubmit = "return false;">
    <div class="up-module-window">
      <div id='exit' class="exit"><span>&#10006</span></div>
    </div>
    <div class='content_log_in'>
      <h1>Change_game</h1>
  <div class="inputs inputs_sign_up">
    <div class="nick"><input type="text" placeholder="Name"></div>
    <div class="nick"><input type="text" placeholder="Effect"></div>
  <button type="submit" class="add_user">Add</button>
  </div>
    </div>
  </div>

`
document.querySelector('header').insertAdjacentHTML("afterend", html_text);

const full_information_new_game = document.querySelectorAll('.nick input');
console.log(full_information_new_game)
document.querySelector('.add_user').addEventListener('click',()=>{
  const info_items = Array.from(full_information_new_game).map(element=>element.value)
  console.log(info_items);
  add_new_game_db(info_items)});
document.getElementById('exit').addEventListener('click', ()=>{
  document.querySelector('.sign_up').parentNode.removeChild(document.querySelector('.sign_up'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})
}




export {all_game, top_chart, log_in, sign_up,module_game,add_new_game,change_game};
