/* eslint-disable import/extensions */
import getBombsCount from './get-bombs.js';

export default function chageBombCount() {
  const count = document.querySelector('.game-mines');
  let value = getBombsCount();
  if (value < 10) {
    value = `00${value}`;
  } else if (value < 100) {
    value = `0${value}`;
  } else if (value < 1000) {
    value = `${value}`;
  } else {
    value = 'INF';
  }
  count.innerHTML = value;
}
