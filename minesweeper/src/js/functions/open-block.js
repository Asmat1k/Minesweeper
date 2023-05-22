/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import gameOver from './game-over.js';
import inBorders from './in-borders.js';
import bombsArround from './bombs-arround.js';
import { matrix } from './generate-matrix.js';
import { bombClick } from './audio.js';

// проверка на бомбу
function isBomb(row, column) {
  if (matrix[row][column] === 1) {
    return true;
  }
  return false;
}

function getSize() {
  const wrapper = document.querySelector('.game__wrapper');
  if (wrapper.classList.contains('easy')) return 0;
  if (wrapper.classList.contains('medium')) return 1;
  if (wrapper.classList.contains('hard')) return 2;
  return 0;
}

// Открытие блока
export default function openBlock(row, column) {
  const size = getSize() === 0 ? 10 : getSize() === 1 ? 15 : 25;
  const items = document.querySelectorAll('.game__block');
  const smile = document.querySelector('.smile');
  const openClass = ['opened-easy', 'opened-medium', 'opened-hard'];
  const numberClass = ['num_0', 'num_1', 'num_2', 'num_3', 'num_4', 'num_5', 'num_6'];
  let nonBombBlocks = 0;
  const ind = row * size + column;
  const item = items[ind];
  const loose = 'GAME OVER';
  const win = 'YOU WIN';
  // проверки
  if (!inBorders(row, column)) return false;
  if (item.classList.contains('game__block_opened')) return false;
  if (item.innerHTML === '🚩') return false;
  // если бомба
  if (isBomb(row, column)) {
    gameOver(loose, false);
    bombClick();
    smile.innerHTML = '😞';
    item.innerHTML = '💣';
    item.classList.add('bomb');
    item.classList.add('game__block_opened');
    item.classList.add(openClass[getSize()]);
    return false;
  }
  items.forEach((block) => {
    if (block.classList.contains('game__block_opened') || block.classList.contains('num')) {
      nonBombBlocks += 1;
    }
  });
  if (nonBombBlocks >= (size * size) - 11) {
    gameOver(win, true);
  }
  // сколько бомб рядом
  const count = bombsArround(row, column);
  if (count !== 0) {
    item.innerHTML = count;
    item.classList.add('num');
    item.classList.add(numberClass[count]);
    return true;
  }
  // если бомб нет рядом открываем через рекурсию
  item.innerHTML = '';
  item.classList.add('game__block_opened');
  item.classList.add(openClass[getSize()]);
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      openBlock(row + j, column + i);
    }
  }
  return true;
}
