/* eslint-disable no-use-before-define */
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

// проверка на попадание в границы
function inBorders(row, column) {
  if ((row >= 0 && row <= 9) && (column >= 0 && column <= 9)) return true;
  return false;
}

// на клик делаем
function onClick(event, items) {
  const index = Array.from(items).indexOf(event.target);
  // получаем координаты в матрице
  const column = index % 10;
  const row = Math.trunc(index / 10);
  openBlock(row, column);
}

// Открытие блока
function openBlock(row, column) {
  const smile = document.querySelector('.smile');
  const numberClass = ['num_0', 'num_1', 'num_2', 'num_3', 'num_4'];
  const items = document.querySelectorAll('.game__block');
  const ind = row * 10 + column;
  const item = items[ind];
  // проверка на попадание в границы
  if (!inBorders(row, column)) return;
  if (item.classList.contains('game__block_opened')) return;
  // если бомба
  if (isBomb(row, column)) {
    smile.innerHTML = '😞';
    item.innerHTML = '💣';
    item.classList.add('bomb');
    item.classList.add('game__block_opened');
    return;
  }
  // сколько бомб рядом
  const count = bombsArround(row, column);
  if (count !== 0) {
    item.innerHTML = count;
    item.classList.add(numberClass[count]);
    return;
  }
  // если бомб нет рядом открываем через рекурсию
  item.innerHTML = '';
  item.removeEventListener('click', (event) => {
    onClick(event, items);
  });
  item.classList.add('game__block_opened');
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      openBlock(row + j, column + i);
    }
  }
}

export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      onClick(event, items);
    });
  });
}
