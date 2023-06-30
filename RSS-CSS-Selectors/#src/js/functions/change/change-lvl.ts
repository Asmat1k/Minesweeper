import { LEVELS } from "../../files/Levels/arr-lvl";
import { initGame } from "../../files/play";
import { menuClose } from "../menu/burger";

export let currentLevel: number = 1;

export function markLevel(num: number) {
  const marks: NodeListOf<HTMLElement> = document.querySelectorAll('.lvl-check')!;
  marks[num].classList.add('nav-done');
  LEVELS[num].status = true;
}

// Переход к следующему уровню при правильном ответе
export function nextLevel(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  const input: HTMLInputElement = document.querySelector('.editor__input')!;
  input.value = '';
  currentLevel += 1;
  deactivateItem();
  items[currentLevel - 1].classList.add('current');
  changeInfo();
}

// Смена уровней
export function changeLevel(): void {
  changeOnArrow();
  changeOnList();
}

// Смена уровней по стрелкам
function changeOnArrow(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
  const right: HTMLElement  = document.querySelector('.arrow-right')!;
  const left: HTMLElement  = document.querySelector('.arrow-left')!;
  // на право
  right?.addEventListener('click', (): void => {
    // проверка на максимум
    if (currentLevel < LEVELS.length) {
      currentLevel += 1;
    }
    deactivateItem();
    items[currentLevel - 1].classList.add('current');
    changeInfo();
  })
  // на лево
  left?.addEventListener('click', (): void => {
    // проверка на минимум
    if (currentLevel > 1) {
      currentLevel -= 1;
    }
    deactivateItem();
    items[currentLevel - 1].classList.add('current');
    changeInfo();
  })
}

// Cмена уровней по клику в списке
function changeOnList(): void {
  const items = document.querySelectorAll('.header-nav__item')!;
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
  initGame(LEVELS[currentLevel - 1]);
}

// смена позиции прогресс бара
function changeProgressBar(): void {
  const progressPoint: HTMLElement = document.querySelector('.nav-progress-bar')!;
  progressPoint.style.width = `${currentLevel * 10}%`;
}
