import { currentLevel } from "../change-level/change-level"
import { LEVELS } from "../level-storage/arr-level"


// Печать ответа
export function knowAnswer(): void {
  const input: HTMLInputElement = document.querySelector('.editor__input')!;
  const button: HTMLElement = document.querySelector('.answer')!;
  
  button.addEventListener(('click'), (): void => {
    button.classList.add('game__button_close');

    LEVELS[currentLevel - 1].helpUsed = true;

    const answer: string = LEVELS[currentLevel - 1].answer;
    const text: string = answer;

    let count: number = 0;
    let interval: ReturnType<typeof setInterval>;

    input.value = '';

    interval = setInterval(() => {
      input.value += text[count++];
      if (count === answer.length) {
        button.classList.remove('game__button_close');
        clearInterval(interval);
      }
    }, 100);
  });

}