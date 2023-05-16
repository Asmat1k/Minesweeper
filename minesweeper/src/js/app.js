/* eslint-disable import/extensions */
/* eslint-disable import/named */
import * as flsFunctions from './modules/functions.js';
import { genMatrix } from './functions/generate-matrix.js';
import generateBlocks from './functions/generate-html.js';

genMatrix(10);
generateBlocks();

flsFunctions.isWebp();
