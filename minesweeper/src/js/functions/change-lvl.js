/* eslint-disable import/extensions */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import click from './click.js';
import generateBlocks from './generate-html.js';
import setLocalStorage from './set-local.js';
import { resetTimer } from './timer.js';

function gameReset() {
  const END = document.querySelector('.game_end-message');
  const switchBtn = document.querySelector('.switch__input');
  setLocalStorage('audio', `${switchBtn.classList.contains('on') ? true : false}`);
  END.classList.remove('shown');
  click(true);
  resetTimer();
  boxClick();
}

export default function changeLvL() {
  const lvlBtn = document.querySelectorAll('.lvl');
  const bodyW = document.querySelector('.game__wrapper');
  lvlBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (document.body.classList.contains('dark-body')) document.body.classList.remove('dark-body');
      document.body.innerHTML = '';
      if (event.target.classList.contains('easy')) {
        generateBlocks(10, 'easy');
        setLocalStorage('size', 'easy');
        bodyW.classList.add('easy');
      }
      if (event.target.classList.contains('medium')) {
        generateBlocks(15, 'medium');
        setLocalStorage('size', 'medium');
        bodyW.classList.add('medium');
      }
      if (event.target.classList.contains('hard')) {
        generateBlocks(25, 'hard');
        setLocalStorage('size', 'hard');
        bodyW.classList.add('hard');
      }
      gameReset();
    });
  });
}
