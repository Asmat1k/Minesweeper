/* eslint-disable import/extensions */
import setLocalStorage from './set-local.js';

function change() {
  const colored1 = document.querySelectorAll('.light-1');
  const colored2 = document.querySelectorAll('.light-2');
  for (let i = 0; i < colored1.length; i += 1) {
    colored1[i].classList.toggle('dark-1');
  }
  for (let i = 0; i < colored2.length; i += 1) {
    colored2[i].classList.toggle('dark-2');
  }
}

export default function changeTheme() {
  const button = document.querySelector('.theme');
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-body');
    change();
    if (document.body.classList.contains('dark-body')) {
      setLocalStorage('theme', 'dark');
    } else {
      setLocalStorage('theme', 'light');
    }
  });
}
