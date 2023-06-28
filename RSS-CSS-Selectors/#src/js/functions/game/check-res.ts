import { ILevel } from "../../files/models/ILevel";

// Проверка результатов
export function checkCurRes(level: ILevel): void {
  const attempt: HTMLInputElement = document.querySelector('.editor__input')!;
  inputAnimate(attempt);
  keyboardCheck(level, attempt);
  buttonCheck(level, attempt);
}

// Проверка на нажатие на клавишу
function keyboardCheck(level: ILevel, input: HTMLInputElement) {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  document.addEventListener( 'keydown', (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      inputValidate(level, input, editorArea);
    }
  });
}

// Проверка на нажатие на экране
function buttonCheck(level: ILevel, input: HTMLInputElement): void {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  const button: HTMLElement = document.querySelector('.editor-enter')!;
  button.addEventListener('click', () => {
    inputValidate(level, input, editorArea);
  });
}

// Проверка инпут поля
function inputValidate(level: ILevel, input: HTMLInputElement, area: HTMLElement) {
  if (input.value === level.answer) {
    console.log('Button win!');
  } else {
    console.log('Wrong attempt');
    area.classList.add('shake');
    setTimeout(function() {
      area.classList.remove('shake')
    }, 500);
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