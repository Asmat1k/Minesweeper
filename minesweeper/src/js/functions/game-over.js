/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { stopTimer } from './timer.js';

export default function gameOver(message) {
  const END = document.querySelector('.game_end-message');
  const MESSAGE = document.querySelector('.message-text');
  MESSAGE.innerHTML = message;
  END.classList.add('shown');
  stopTimer();
}
