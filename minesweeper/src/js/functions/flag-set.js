/* eslint-disable no-param-reassign */
export default function flagSet() {
  const ITEMS = document.querySelectorAll('.game__block');
  ITEMS.forEach((item) => {
    item.addEventListener('click', () => {
      // если клик не по флагу
      if (!item.classList.contains('flag')) {
        // и сюда можно ставить флаг
        if (!item.classList.contains('game__block_opened') && !item.classList.contains('num')) {
          // если флаг есть, то снимаем и наоборот
          if (item.innerHTML === '🚩') item.innerHTML = '';
          else item.innerHTML = '🚩';
        }
      }
    });
  });
}
