/* eslint-disable no-trailing-spaces */
export default function generateBlocks() {
  const headerClasses = ['game-flag', 'game-status', 'game-score'];
  const MAIN = document.createElement('main');
  MAIN.classList.add('block');
  
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('game__wrapper');

  // заполнение хедера
  const HEADER = document.createElement('div');
  HEADER.classList.add('game__header');
  for (let i = 0; i < 3; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add(headerClasses[i]);
    if (i === 0 || i === 2) {
      elem.classList.add('numbers');
      elem.innerHTML = '123';
    } else if (i === 1) {
      elem.innerHTML = '🙂';
    }
    HEADER.appendChild(elem);
  }
  WRAPPER.appendChild(HEADER);

  // тело игры
  const BODY = document.createElement('div');
  BODY.classList.add('game__body');
  for (let i = 0; i < 10; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('game__row');
    for (let j = 0; j < 10; j += 1) {
      const block = document.createElement('div');
      block.classList.add('game__block');
      elem.appendChild(block);
    }
    BODY.appendChild(elem);
  }
  WRAPPER.appendChild(BODY);

  // футер игры
  const FOOTER = document.createElement('div');
  FOOTER.classList.add('game__footer');
  const block = document.createElement('div');
  block.classList.add('game__block');
  block.innerHTML = '🚩';
  FOOTER.appendChild(block);
  WRAPPER.appendChild(FOOTER);

  MAIN.appendChild(WRAPPER);

  document.body.appendChild(MAIN);
}
