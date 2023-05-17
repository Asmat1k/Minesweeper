/* eslint-disable import/no-self-import */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import openBlock from './open-block.js';

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  let flag = false;
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      // запуск таймера
      if (!flag) {
        flag = !flag;
        // timer(0, true);
      }
      const index = Array.from(items).indexOf(event.target);
      // получаем координаты в матрице
      const column = index % 10;
      const row = Math.trunc(index / 10);
      openBlock(row, column);
    });
  });
}
