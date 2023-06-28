import { arrLvl } from "../../files/Levels/arr-lvl";
import { initGame } from "../../files/play";
import { menuClose } from "../menu/burger";

let currentLevel: number = 1;

// Смена уровней
export function changeLevel(): void {
  changeOnArrow();
  changeOnList();
}

// Смена уровней по стрелкам
function changeOnArrow(): void {
  const right: HTMLElement  = document.querySelector('.arrow-right')!;
  const left: HTMLElement  = document.querySelector('.arrow-left')!;
  // на право
  right?.addEventListener('click', (): void => {
    // проверка на максимум
    if (currentLevel < arrLvl.length) {
      currentLevel += 1;
    }
    changeInfo();
  })
  // на лево
  left?.addEventListener('click', (): void => {
    // проверка на минимум
    if (currentLevel > 1) {
      currentLevel -= 1;
    }
    changeInfo();
  })
}

// Cмена уровней по клику в списке
function changeOnList(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  //! TODO Сделать смену подсветки в списке при смене лвла по стрелкам (чтобы при открытии лвл был уже поменен на текущий)
  items.forEach((item) => {
    item.addEventListener('click', (): void => {
      const num: HTMLElement = item.querySelector('.lvl-number')!;
      deactivateItem();
      item.classList.add('current');
      currentLevel = +num.innerHTML;
      menuClose();
      changeInfo();
    }) 
  })
}

// Снятие активного уровня
function deactivateItem() {
  const items = document.querySelectorAll('.header-nav__item')!;
  items.forEach((item) => {
    if (item.classList.contains('current')) item.classList.remove('current');
  });
}

// смена отображения лвла
function changeInfo(): void {
  const current: HTMLElement = document.querySelector('.nav-cur-lvl')!;
  current.innerHTML = `${currentLevel}`;
  changeProgressBar();
  initGame(arrLvl[currentLevel - 1]);
}

// смена позиции прогресс бара
function changeProgressBar(): void {
  const progressPoint: HTMLElement = document.querySelector('.nav-progress-bar')!;
  progressPoint.style.width = `${currentLevel * 10}%`;
}
