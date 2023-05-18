/* eslint-disable import/no-cycle */
/* eslint-disable import/no-self-import */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import click from './clicks.js';
import openBlock from './open-block.js';

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      // запуск таймера
      if (!item.classList.contains('game__block_opened') && !item.classList.contains('num')) {
        click();
      }
      const index = Array.from(items).indexOf(event.target);
      // получаем координаты в матрице
      const column = index % 10;
      const row = Math.trunc(index / 10);
      openBlock(row, column);
    });
  });
}
