/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-self-import */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import startTimer from './timer.js';
import openBlock from './open-block.js';
import flagSet from './flag-set.js';
import newGame from './new-game.js';
import click from './click.js';
import genMatrix from './generate-matrix.js';
import blockOnClick, { flagClick } from './audio.js';
import controlAudio from './sound.js';
import openSettings from './settings.js';
import changeLvL from './change-lvl.js';
import getSize from './get-size.js';
import getBombsCount from './get-bombs.js';
import changeBombCount from './change-count.js';
import changeBomb from './change-bomb.js';
import openLeaderBoard from './leader-board.js';

export default function boxClick() {
  let flagStatus = false;
  let isMatrixSet = false;
  let isTimerRun = false;
  const size = getSize() === 0 ? 10 : getSize() === 1 ? 15 : 25;
  const game = document.querySelector('.game__wrapper');
  const items = document.querySelectorAll('.game__block');
  const flag = document.querySelector('.flag');
  newGame();
  controlAudio();
  openSettings();
  openLeaderBoard();
  changeLvL();
  changeBomb();
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      game.classList.add('start');
      // если это поле
      if (!(item.innerHTML === '🚩') && !item.classList.contains('game__block_opened') && !item.classList.contains('num') && !item.classList.contains('flag')) {
        click(false);
      }
      // получаем координаты в матрице
      const index = Array.from(items).indexOf(event.target);
      const row = Math.trunc(index / size);
      const column = index % size;
      // если матрицы еще не сгенерирована
      if (!isMatrixSet && !item.classList.contains('flag')) {
        genMatrix(size, row, column, getBombsCount());
        isMatrixSet = true;
        changeBombCount();
      }
      if (!isTimerRun) {
        // запуск таймера если это не флаг
        startTimer();
        isTimerRun = true;
      }
      // если нажали на флаг
      if (item.classList.contains('flag')) {
        flag.innerHTML = '🚩';
        flagStatus = !flagStatus;
        flagSet();
      }
      if (flagStatus && !item.classList.contains('flag') && !item.classList.contains('game__block_opened') && !item.classList.contains('num') && !item.classList.contains('flag')) {
        if (item.innerHTML === '🚩') {
          flagClick(false);
        } else {
          flagClick(true);
        }
      }
      // если не режим флага
      if (!flagStatus) {
        flag.innerHTML = '⛏️';
        if (openBlock(row, column)) {
          blockOnClick();
        }
      }
    });
  });
}
