/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

/* eslint-disable no-trailing-spaces */
export default function generateBlocks(size, classSize) {
  const headerClasses = ['game-click', 'game-status', 'game-score'];
  const footerClasses = ['game-mines', 'game-block', 'game-flags'];
  const MAIN = document.createElement('main');
  MAIN.classList.add('block');
  
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('game__wrapper');
  WRAPPER.classList.add('light-1');
  WRAPPER.classList.add(classSize);

  // заполнение хедера
  const HEADER = document.createElement('div');
  HEADER.classList.add('game__header');
  HEADER.classList.add('light-2');
  for (let i = 0; i < 3; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add(headerClasses[i]);
    if (i === 0 || i === 2) {
      elem.classList.add('numbers');
      elem.innerHTML = '000';
    } else if (i === 1) {
      elem.classList.add('smile');
      elem.classList.add('light-1');
      elem.innerHTML = '🙂';
    }
    HEADER.appendChild(elem);
  }
  WRAPPER.appendChild(HEADER);

  // тело игры
  const BODY = document.createElement('div');
  BODY.classList.add('game__body');
  BODY.classList.add('light-2');
  for (let i = 0; i < size; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('game__row');
    for (let j = 0; j < size; j += 1) {
      const block = document.createElement('div');
      block.classList.add('game__block');
      block.classList.add(classSize);
      block.classList.add('light-1');
      elem.appendChild(block);
    }
    BODY.appendChild(elem);
  }
  WRAPPER.appendChild(BODY);

  // футер игры
  const FOOTER = document.createElement('div');
  FOOTER.classList.add('game__footer');
  FOOTER.classList.add('light-2');
  for (let i = 0; i < 3; i += 1) {
    const block = document.createElement('div');
    block.classList.add(footerClasses[i]);
    if (i === 0 || i === 2) {
      block.classList.add('numbers');
      if (i === 0) block.innerHTML = '000';
      if (i === 2) block.innerHTML = '000';
    } else {
      block.classList.add('game__block');
      block.classList.add('flag');
      block.classList.add('light-1');
      block.innerHTML = '⛏️';
    }
    FOOTER.appendChild(block);
  }
  WRAPPER.appendChild(FOOTER);

  // Конец игры
  const FINAL_MESSAGE = document.createElement('div');
  FINAL_MESSAGE.classList.add('game_end-message');
  const TEXT = document.createElement('div');
  TEXT.classList.add('message-text');
  FINAL_MESSAGE.appendChild(TEXT);
  
  WRAPPER.appendChild(FINAL_MESSAGE);
  MAIN.appendChild(WRAPPER);

  // значок настроек
  const SETTINGS__ICON = document.createElement('div');
  SETTINGS__ICON.classList.add('settings__icon');
  SETTINGS__ICON.innerHTML = '⚙';
  document.body.appendChild(SETTINGS__ICON);

  // значок настроек
  const SETTINGS__POPUP = document.createElement('div');
  SETTINGS__POPUP.classList.add('settings__popup');

  // значок выхода
  const SETTINGS__CLOSE = document.createElement('div');
  SETTINGS__CLOSE.classList.add('settings__close');
  const SETTINGS__TEXT = document.createElement('span');
  SETTINGS__TEXT.innerHTML = 'back';
  SETTINGS__TEXT.classList.add('text');
  SETTINGS__CLOSE.appendChild(SETTINGS__TEXT);

  // настройка музыки
  const SETTINGS__MUSIC = document.createElement('div');
  SETTINGS__MUSIC.classList.add('settings__music');

  const MUSIC__TEXT = document.createElement('div');
  MUSIC__TEXT.classList.add('settings__text');
  MUSIC__TEXT.innerHTML = 'Sound:';
  SETTINGS__MUSIC.appendChild(MUSIC__TEXT);

  // переключатель
  const SWITCH = document.createElement('label');
  SWITCH.classList.add('switch');
  
  const INPUT = document.createElement('input');
  INPUT.classList.add('switch__input');
  INPUT.setAttribute('type', 'checkbox');
  SWITCH.appendChild(INPUT);

  const SPAN = document.createElement('span');
  SPAN.classList.add('switch__slider');
  SWITCH.appendChild(SPAN);

  SETTINGS__MUSIC.appendChild(SWITCH);

  const THEME = document.createElement('div');
  THEME.classList.add('settings__theme');
  THEME.innerHTML = '<span class="theme dark">Dark</span> &nbsp / &nbsp <span class="theme light">Light</span>';

  const COUNT = document.createElement('div');
  COUNT.classList.add('settings__lvl');
  COUNT.innerHTML = '<span class="lvl easy">Easy</span> &nbsp / &nbsp <span class="lvl medium">Medium</span> &nbsp  / &nbsp <span class="lvl hard">Hard</span>';
  
  const BOMBS = document.createElement('div');
  BOMBS.classList.add('settings__bombs');
  BOMBS.innerHTML = '<div calss="settings__text"> Bombs: </div> <input type="number" value="10" class="settings__input"/> <button class="settings__button">ok</button>';

  SETTINGS__POPUP.appendChild(SETTINGS__CLOSE);
  SETTINGS__POPUP.appendChild(SETTINGS__MUSIC);
  SETTINGS__POPUP.appendChild(THEME);
  SETTINGS__POPUP.appendChild(COUNT);
  SETTINGS__POPUP.appendChild(BOMBS);

  document.body.appendChild(SETTINGS__POPUP);

  document.body.appendChild(MAIN);
}
