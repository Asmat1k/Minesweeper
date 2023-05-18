/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import gameOver from './game-over.js';
import inBorders from './in-borders.js';
import bombsArround from './bombs-arround.js';
import { matrix } from './generate-matrix.js';

// проверка на бомбу
function isBomb(row, column) {
  if (matrix[row][column] === 1) {
    return true;
  }
  return false;
}

// Открытие блока
export default function openBlock(row, column) {
  const items = document.querySelectorAll('.game__block');
  const smile = document.querySelector('.smile');
  const numberClass = ['num_0', 'num_1', 'num_2', 'num_3', 'num_4', 'num_5', 'num_6'];
  let nonBombBlocks = 0;
  const ind = row * 10 + column;
  const item = items[ind];
  const loose = 'GAME OVER';
  const win = 'YOU WIN';
  // проверки
  if (!inBorders(row, column)) return;
  if (item.classList.contains('game__block_opened')) return;
  if (item.innerHTML === '🚩') return;
  // если бомба
  if (isBomb(row, column)) {
    gameOver(loose);
    smile.innerHTML = '😞';
    item.innerHTML = '💣';
    item.classList.add('bomb');
    item.classList.add('game__block_opened');
    return;
  }
  items.forEach((block) => {
    if (block.classList.contains('game__block_opened') || block.classList.contains('num')) {
      nonBombBlocks += 1;
    }
  });
  if (nonBombBlocks >= 89) {
    gameOver(win);
  }
  // сколько бомб рядом
  const count = bombsArround(row, column);
  if (count !== 0) {
    item.innerHTML = count;
    item.classList.add('num');
    item.classList.add(numberClass[count]);
    return;
  }
  // если бомб нет рядом открываем через рекурсию
  item.innerHTML = '';
  item.classList.add('game__block_opened');
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      openBlock(row + j, column + i);
    }
  }
}
