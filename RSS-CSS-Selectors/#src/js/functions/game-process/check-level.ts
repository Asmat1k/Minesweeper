import { LEVELS } from "../level-storage/arr-level";
import { currentLevel, markLevel, nextLevel } from "../change-level/change-level";

// Проверка результатов
export function checkCurRes(): void {
  const attempt: HTMLInputElement = document.querySelector('.editor__input')!;
  inputAnimate(attempt);
  keyboardCheck(attempt);
  buttonCheck(attempt);
}

// Проверка на нажатие на клавишу
function keyboardCheck(input: HTMLInputElement) {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  document.addEventListener( 'keydown', (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      inputValidate(input, editorArea);
    }
  });
}

// Проверка на нажатие на экране
function buttonCheck(input: HTMLInputElement): void {
  const editorArea: HTMLElement = document.querySelector('.game-editor')!;
  const button: HTMLElement = document.querySelector('.editor-enter')!;
  button.addEventListener('click', () => {
    inputValidate(input, editorArea);
  });
}

// Проверка инпут поля
function inputValidate(input: HTMLInputElement, area: HTMLElement) {
  if (input.value === LEVELS[currentLevel - 1].answer) {
    markLevel(currentLevel - 1);
    // время на анимацию
    //! TODO Сделать, чтобы галочка была желтой если подсказка была использована
    setTimeout(() => nextLevel(), 2000) 
    console.log('Button win!');
  } else {
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