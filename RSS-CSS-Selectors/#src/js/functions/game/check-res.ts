import { LEVELS } from "../../files/Levels/arr-lvl";
import { Level } from "../../files/types/types";
import { currentLevel, markLevel, nextLevel } from "../change/change-lvl";

// Проверка результатов
export function checkCurRes(level: Level): void {
  const attempt: HTMLInputElement = document.querySelector('.editor__input')!;
  inputAnimate(attempt);
  keyboardCheck(level, attempt);
  buttonCheck(level, attempt);
}

// Проверка на нажатие на клавишу
function keyboardCheck(level: Level, input: HTMLInputElement) {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  document.addEventListener( 'keydown', (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      inputValidate(level, input, editorArea);
    }
  });
}

// Проверка на нажатие на экране
function buttonCheck(level: Level, input: HTMLInputElement): void {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  const button: HTMLElement = document.querySelector('.editor-enter')!;
  button.addEventListener('click', () => {
    inputValidate(level, input, editorArea);
  });
}

// Проверка инпут поля
function inputValidate(level: Level, input: HTMLInputElement, area: HTMLElement) {
  //! TODO Пофиксить багу с зацыкливанием вызово
  if(currentLevel - 1 === LEVELS.indexOf(level)) {
    if (input.value === level.answer) {
      markLevel(currentLevel - 1);
      nextLevel();
      console.log('Button win!');
    } else {
      area.classList.add('shake');
      setTimeout(function() {
        area.classList.remove('shake')
      }, 500);
    }
  }
}

// Анимация
function inputAnimate(attempt: HTMLInputElement) {
  attempt.addEventListener('input', () => {
    if (attempt.value.length > 0) {
      attempt.classList.remove('blink')
    } else {
      attempt.classList.add('blink')
    }
  });
}