import { matrix } from './generate-matrix';

export default function bombsArround(x, y) {
  let count = 0;
  let row;
  const curX = x;
  const curY = y;
  if (matrix[curX - 1]) {
    row = curX - 1;
    if (matrix[row][curY - 1]) count += 1;
    if (matrix[row][curY]) count += 1;
    if (matrix[row][curY + 1]) count += 1;
  }
  if (matrix[curX]) {
    row = curX;
    if (matrix[row][curY - 1]) count += 1;
    if (matrix[row][curY + 1]) count += 1;
  }
  if (matrix[curX + 1]) {
    row = curX + 1;
    if (matrix[row][curY - 1]) count += 1;
    if (matrix[row][curY]) count += 1;
    if (matrix[row][curY + 1]) count += 1;
  }
  return count;
}
