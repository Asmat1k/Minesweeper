import { LEVELS } from "../level-storage/arr-level";

// Заполнение списка уровней
export function generateLvlList(): void {
  const list: HTMLElement = document.querySelector('.header-nav__list')!;
  list.innerHTML = '';
  for (let i = 0; i < LEVELS.length; i += 1) {
    // создание нового элемента в списке
    const item: HTMLElement = document.createElement('div');
    if  (i === 0) {
      item.classList.add('current');
    }
    item.classList.add('header-nav__item');
    item.innerHTML = `<span class="lvl-check"></span><span class="lvl-number">${i + 1}</span><a class="header-nav__link">${LEVELS[i].helpText.id}</a>`;
    list.appendChild(item);
  }
}