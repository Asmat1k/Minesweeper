/* eslint-disable no-unused-vars */
// проверка на попадание в границы
export default function inBorders(row, column) {
  if ((row >= 0 && row <= 9) && (column >= 0 && column <= 9)) return true;
  return false;
}
