/* eslint-disable import/extensions */
import startTimer, { stopTimer } from './timer.js';

export default function openSettings() {
  const settingBlock = document.querySelector('.settings__popup');
  const game = document.querySelector('.game__wrapper');
  const icon = document.querySelector('.settings__icon');
  const close = document.querySelector('.text');
  icon.addEventListener('click', () => {
    settingBlock.classList.add('settings__open');
    stopTimer();
    close.addEventListener('click', () => {
      settingBlock.classList.remove('settings__open');
      // если игра не была начата
      if (game.classList.contains('start')) {
        startTimer();
      }
      openSettings();
    });
  });
}
