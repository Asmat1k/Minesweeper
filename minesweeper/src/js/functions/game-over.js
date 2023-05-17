/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import newGame from './new-game.js';

export default function gameOver() {
  const END = document.querySelector('.game_end-message');
  END.classList.add('shown');
  newGame();
}
