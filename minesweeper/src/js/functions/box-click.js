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

let flagStatus = false;

export default function boxClick() {
  let isMatrixSet = false;
  const items = document.querySelectorAll('.game__block');
  const flag = document.querySelector('.flag');
  newGame();
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      // если это поле
      if (!item.classList.contains('game__block_opened') && !item.classList.contains('num') && !item.classList.contains('flag')) {
        click(false);
      }
      // запуск таймера если это не флаг
      startTimer();
      // получаем координаты в матрице
      const index = Array.from(items).indexOf(event.target);
      const row = Math.trunc(index / 10);
      const column = index % 10;
      // если матрицы еще не сгенерирована
      if (!isMatrixSet) {
        genMatrix(10, row, column);
        isMatrixSet = true;
      }
      // если нажали на флаг
      if (item.classList.contains('flag')) {
        flag.innerHTML = '🚩';
        flagStatus = !flagStatus;
        flagSet();
      }
      // если не режим флага
      if (!flagStatus) {
        flag.innerHTML = '⛏️';
        openBlock(row, column);
      }
    });
  });
}
