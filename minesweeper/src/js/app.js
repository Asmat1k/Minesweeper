/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import * as flsFunctions from './modules/functions.js';
import boxClick from './functions/box-click.js';
import generateBlocks from './functions/generate-html.js';
import { setAudio } from './functions/audio.js';

// из локал сторэдж
function getLocalStorage() {
  if (localStorage.getItem('audio') === 'true') {
    setAudio();
  }
  if (localStorage.getItem('size')) {
    const item2 = localStorage.getItem('size');
    const item = item2 === 'easy' ? 10 : item2 === 'medium' ? 15 : 25;
    generateBlocks(item, item2);
  } else {
    generateBlocks(10, 'easy');
  }
}

getLocalStorage();

boxClick();

flsFunctions.isWebp();
