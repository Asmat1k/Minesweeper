/* eslint-disable import/extensions */
import { matrix } from './generate-matrix.js';

// проверка на бомбу
function isBomb(row, column) {
  if (matrix[row][column] === 1) {
    return true;
  }
  return false;
}

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  const block = [...items];
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      const index = block.indexOf(event.target);
      const column = index % 10;
      const row = Math.trunc(index / 10);
      // console.log(`${row} and ${column}`);
      // console.log(`${item.innerHTML}`);
      item.innerHTML = isBomb(row, column) ? 'X' : '';
    });
  });
}
