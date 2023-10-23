/* eslint-disable import/extensions */
import setLocalStorage from './set-local.js';

let result = [];

// из локал сторэдж
function getLocalStorage() {
  if (localStorage.getItem('leader')) {
    result = localStorage.getItem('leader').split(',').reverse();
  }
}

export default function setResult(num) {
  getLocalStorage();
  result.push(num.toString());
  result = result.reverse();
  const position = document.querySelectorAll('.position');
  for (let i = 0; i < 10; i += 1) {
    if (result[i]) position[i].innerHTML = `${result[i]} clicks`;
    else position[i].innerHTML = '...';
  }
  const str = result.join();
  setLocalStorage('leader', str);
}
