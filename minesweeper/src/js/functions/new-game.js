/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import click from './click.js';
import generateBlocks from './generate-html.js';
import { resetTimer } from './timer.js';

// в лока сторэдж c key
function setLocalStorage(name, status) {
  localStorage.setItem(name, status);
}

function gameReset() {
  const END = document.querySelector('.game_end-message');
  const switchBtn = document.querySelector('.switch__input');
  END.classList.remove('shown');
  setLocalStorage('audio', `${switchBtn.classList.contains('on') ? true : false}`);
  click(true);
  document.body.innerHTML = '';
  resetTimer();
  generateBlocks(10);
  boxClick();
}

export default function newGame() {
  const SMILE = document.querySelector('.smile');
  SMILE.addEventListener('click', () => {
    gameReset();
  });
}
