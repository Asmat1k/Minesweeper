/* eslint-disable import/extensions */

// из локал сторэдж
function getLocalStorage() {
  const input = document.querySelector('.settings__input');
  if (localStorage.getItem('bombs')) {
    input.value = localStorage.getItem('bombs');
  } else {
    input.value = 10;
  }
}

export default function openSettings() {
  const settingBlock = document.querySelector('.settings__popup');
  const icon = document.querySelector('.settings__icon');
  getLocalStorage();
  icon.addEventListener('click', () => {
    settingBlock.classList.toggle('open');
  });
}
