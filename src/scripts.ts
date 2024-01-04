import { logDate } from './logDate';

logDate();

function menuOnClick() {
  document.querySelector('.menu-bar').classList.toggle('change');
  document.querySelector('.menu').classList.toggle('change');
  document.querySelector('.menu-bg').classList.toggle('change-bg');
}

const menu = document.querySelector('.menu-bar');
menu.addEventListener('click', menuOnClick);
