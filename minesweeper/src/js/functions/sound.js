/* eslint-disable import/extensions */
import { audioOff, setAudio } from './audio.js';

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
    if (switchBtn.classList.contains('on')) {
      setAudio();
    } else {
      audioOff();
    }
  });
}
