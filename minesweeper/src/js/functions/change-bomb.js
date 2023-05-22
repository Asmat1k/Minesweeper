/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import getBombsCount from './get-bombs.js';
import { gameReset } from './new-game.js';
import setLocalStorage from './set-local.js';

// let item;

// из локал сторэдж
// function getLocalStorage() {
//   if (localStorage.getItem('size')) {
//     const item = localStorage.getItem('size');
//   }
// }

// function validateInput() {
//   const input = document.querySelector('.settings__input');
// }

export default function changeBomb() {
  const btn = document.querySelector('.settings__button');
  btn.addEventListener('click', () => {
    setLocalStorage('bombs', getBombsCount());
    gameReset();
  });
}
