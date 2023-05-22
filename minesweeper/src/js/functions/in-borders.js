/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
// проверка на попадание в границы

import getSize from './get-size.js';

export default function inBorders(row, column) {
  const size = getSize() === 0 ? 10 : getSize() === 1 ? 15 : 25;
  if ((row >= 0 && row <= size - 1) && (column >= 0 && column <= size - 1)) return true;
  return false;
}
