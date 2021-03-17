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
  img.setAttribute('alt', 'lol');
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
  img.setAttribute('alt', 'lol');
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
  exit = document.createElement('div');
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
  exit = document.createElement('div');
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

document.querySelector('.exit').addEventListener('click', ()=>{
  document.querySelector('.sign_up').parentNode.removeChild(document.querySelector('.sign_up'));
  document.querySelector('.back-modul').parentNode.removeChild(document.querySelector('.back-modul'));
})

}


export {all_game, top_chart, log_in, sign_up};
