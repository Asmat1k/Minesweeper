/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import generateBlocks from './generate-html.js';
import genMatrix from './generate-matrix.js';

function gameReset() {
  const END = document.querySelector('.game_end-message');
  END.classList.remove('shown');
  document.body.innerHTML = '';
  // timer(0, true);
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
