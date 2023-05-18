/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import generateBlocks from './generate-html.js';
import genMatrix from './generate-matrix.js';
import { resetTimer } from './timer.js';

function gameReset() {
  const END = document.querySelector('.game_end-message');
  END.classList.remove('shown');
  document.body.innerHTML = '';
  resetTimer();
  genMatrix(10);
  generateBlocks(10);
  boxClick();
}

export default function newGame() {
  const SMILE = document.querySelector('.smile');
  SMILE.addEventListener('click', () => {
    gameReset();
  });
}
