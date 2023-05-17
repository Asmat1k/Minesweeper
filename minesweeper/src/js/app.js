/* eslint-disable import/extensions */
/* eslint-disable import/named */
import * as flsFunctions from './modules/functions.js';
import boxClick from './functions/box-click.js';
import genMatrix from './functions/generate-matrix.js';
import generateBlocks from './functions/generate-html.js';

genMatrix(10);
generateBlocks(10);

boxClick();

flsFunctions.isWebp();
