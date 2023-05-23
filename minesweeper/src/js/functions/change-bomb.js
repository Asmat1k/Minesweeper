/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import getBombsCount from './get-bombs.js';
import { gameReset } from './new-game.js';
import setLocalStorage from './set-local.js';

let item;

// из локал сторэдж
function getLocalStorage() {
  if (localStorage.getItem('size')) {
    item = localStorage.getItem('size');
  }
}

function validateInput() {
  getLocalStorage();
  const input = document.querySelector('.settings__input');
  if (input.value >= 10 && input.value <= 100) {
    if (item === 'easy') {
      if (input.value > 81) {
        input.value = 81;
      }
    }
  } else {
    input.value = 10;
  }
  return true;
}

export default function changeBomb() {
  const btn = document.querySelector('.settings__button');
  if (validateInput()) {
    btn.addEventListener('click', () => {
      setLocalStorage('bombs', getBombsCount());
      gameReset();
    });
  }
}
