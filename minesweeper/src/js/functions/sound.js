/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/extensions */
import { audioOff, setAudio } from './audio.js';
import setLocalStorage from './set-local.js';

// из локал сторэдж
function getLocalStorage() {
  const switchBtn = document.querySelector('.switch__input');
  if (localStorage.getItem('audio') === 'true') {
    switchBtn.classList.add('on');
    switchBtn.checked = true;
  }
}

export default function controlAudio() {
  getLocalStorage();
  const switchBtn = document.querySelector('.switch__input');
  switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('on');
    setLocalStorage('audio', `${switchBtn.classList.contains('on') ? true : false}`);
    if (switchBtn.classList.contains('on')) {
      setAudio();
    } else {
      audioOff();
    }
  });
}
