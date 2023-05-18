/* eslint-disable import/no-cycle */
/* eslint-disable import/no-self-import */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import startTimer from './timer.js';
import openBlock from './open-block.js';

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      // запуск таймера
      startTimer();
      const index = Array.from(items).indexOf(event.target);
      // получаем координаты в матрице
      const column = index % 10;
      const row = Math.trunc(index / 10);
      openBlock(row, column);
    });
  });
}
