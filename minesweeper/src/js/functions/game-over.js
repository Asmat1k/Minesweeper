/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { gameOverSound } from './audio.js';
import getResult from './get-score.js';
import setResult from './results.js';
import { stopTimer } from './timer.js';

export default function gameOver(message, status) {
  const END = document.querySelector('.game_end-message');
  const MESSAGE = document.querySelector('.message-text');
  if (status) {
    gameOverSound(true);
  } else {
    gameOverSound(false);
  }
  setResult(getResult());
  MESSAGE.innerHTML = message;
  END.classList.add('shown');
  stopTimer();
}
