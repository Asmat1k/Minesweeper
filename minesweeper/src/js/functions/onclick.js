/* eslint-disable import/extensions */
import bombsArround from './bombs-arround.js';
import { matrix } from './generate-matrix.js';

// проверка на бомбу
function isBomb(row, column) {
  if (matrix[row][column] === 1) {
    return true;
  }
  return false;
}

function openBlock(row, column) {
  let numberClass = ['num_0','num_1','num_2','num_3','num_4'];
  const items = document.querySelectorAll('.game__block');
  const block = [...items];
  const ind = row * 10 + column;
  const item = block[ind];
  if (isBomb(row, column)) {
    item.innerHTML = '💣';
  } else {
    const count = bombsArround(row, column);
    if (count !== 0) {
      item.innerHTML = count;
      item.classList.add(numberClass[count]);
    } else {
      item.innerHTML = '';
      item.classList.add('game__block_opened');
    }
  }
}

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  const block = [...items];
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      const index = block.indexOf(event.target);
      const column = index % 10;
      const row = Math.trunc(index / 10);
      openBlock(row, column);
    });
  });
}
