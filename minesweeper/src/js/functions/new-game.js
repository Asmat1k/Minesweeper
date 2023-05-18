/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import boxClick from './box-click.js';
import click from './click.js';
import generateBlocks from './generate-html.js';
import { resetTimer } from './timer.js';

function gameReset() {
  const END = document.querySelector('.game_end-message');
  END.classList.remove('shown');
  click(true);
  document.body.innerHTML = '';
  resetTimer();
  generateBlocks(10);
  boxClick();
}

export default function newGame() {
  const SMILE = document.querySelector('.smile');
  SMILE.addEventListener('click', () => {
    gameReset();
  });
}
