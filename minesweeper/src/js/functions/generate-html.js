/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { matrix } from './generate-matrix.js';

/* eslint-disable no-trailing-spaces */
export default function generateBlocks(size) {
  const headerClasses = ['game-click', 'game-status', 'game-score'];
  const MAIN = document.createElement('main');
  MAIN.classList.add('block');
  
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('game__wrapper');

  // заполнение хедера
  const HEADER = document.createElement('div');
  HEADER.classList.add('game__header');
  for (let i = 0; i < 3; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add(headerClasses[i]);
    if (i === 0 || i === 2) {
      elem.classList.add('numbers');
      elem.innerHTML = '000';
    } else if (i === 1) {
      elem.classList.add('smile');
      elem.innerHTML = '🙂';
    }
    HEADER.appendChild(elem);
  }
  WRAPPER.appendChild(HEADER);

  // тело игры
  const BODY = document.createElement('div');
  BODY.classList.add('game__body');
  for (let i = 0; i < size; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('game__row');
    for (let j = 0; j < size; j += 1) {
      const block = document.createElement('div');
      block.classList.add('game__block');
      // block.innerHTML = matrix[i][j];
      elem.appendChild(block);
    }
    BODY.appendChild(elem);
  }
  WRAPPER.appendChild(BODY);

  // футер игры
  const FOOTER = document.createElement('div');
  FOOTER.classList.add('game__footer');
  const block = document.createElement('div');
  block.classList.add('game__block');
  block.classList.add('flag');
  block.innerHTML = '⛏️';
  FOOTER.appendChild(block);
  WRAPPER.appendChild(FOOTER);

  // Конец игры
  const FINAL_MESSAGE = document.createElement('div');
  FINAL_MESSAGE.classList.add('game_end-message');
  const TEXT = document.createElement('div');
  TEXT.classList.add('message-text');
  FINAL_MESSAGE.appendChild(TEXT);

  WRAPPER.appendChild(FINAL_MESSAGE);
  MAIN.appendChild(WRAPPER);

  document.body.appendChild(MAIN);
}
