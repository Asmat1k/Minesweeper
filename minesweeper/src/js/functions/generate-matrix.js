/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

export const matrix = [];

// Рандомное число
function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

// Установка бомб
function setBobms(bombCount, row, column) {
  let bombCurCount = bombCount;
  while (bombCurCount) {
    const x = getRandomArbitrary(0, bombCount);
    const y = getRandomArbitrary(0, bombCount);
    if (matrix[x][y] === 0 && x !== row && y !== column) {
      matrix[x][y] = 1;
      bombCurCount -= 1;
    }
  }
  console.log('Бомбы установлены');
}

// Создание матрицы
export default function genMatrix(size) {
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  console.log('Матрица создана');
  setBobms(size);
}
