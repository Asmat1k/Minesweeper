/* eslint-disable import/extensions */

/* eslint-disable no-param-reassign */
let flagCount = 0;

export default function flagSet() {
  const ITEMS = document.querySelectorAll('.game__block');
  const FLAGC = document.querySelector('.game-flags');
  let finalCount;
  ITEMS.forEach((item) => {
    item.addEventListener('click', () => {
      // если клик не по флагу
      if (!item.classList.contains('flag')) {
        // и сюда можно ставить флаг
        if (!item.classList.contains('game__block_opened') && !item.classList.contains('num')) {
          // если флаг есть, то снимаем и наоборот
          if (item.innerHTML === '🚩') {
            flagCount -= 1;
            item.innerHTML = '';
          } else {
            flagCount += 1;
            item.innerHTML = '🚩';
          }
          if (flagCount < 10) finalCount = `00${flagCount}`;
          else finalCount = `0${flagCount}`;
          FLAGC.innerHTML = finalCount;
        }
      }
    });
  });
}
