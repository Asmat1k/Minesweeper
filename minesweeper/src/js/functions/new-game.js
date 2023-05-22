/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import click from './click.js';
import generateBlocks from './generate-html.js';
import setLocalStorage from './set-local.js';
import { resetTimer } from './timer.js';
import getSize from './get-size.js';
import flagSet from './flag-set.js';

let blockCount;

// из локал сторэдж
function getLocalStorage() {
  if (localStorage.getItem('size')) {
    return localStorage.getItem('size');
  }
  return 'easy';
}

// из локал сторэдж
function getBombCount() {
  if (localStorage.getItem('size')) {
    const size = getSize() === 0 ? 10 : getSize() === 1 ? 15 : 25;
    blockCount = size;
  } else {
    blockCount = 10;
  }
}

export function gameReset() {
  const openClass = ['easy', 'medium', 'hard'];
  const END = document.querySelector('.game_end-message');
  const switchBtn = document.querySelector('.switch__input');
  getBombCount();
  setLocalStorage('audio', `${switchBtn.classList.contains('on') ? true : false}`);
  setLocalStorage('size', `${openClass[getSize()]}`);
  END.classList.remove('shown');
  click(true);
  flagSet(true);
  resetTimer();
  document.body.innerHTML = '';
  generateBlocks(blockCount, getLocalStorage());
  boxClick();
}

export default function newGame() {
  const SMILE = document.querySelector('.smile');
  SMILE.addEventListener('click', () => {
    gameReset();
  });
}
