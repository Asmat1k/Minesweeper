import { checkCurRes } from "./functions/game-process/check-level";
import { setCurHtml, setCurTable, setCurTask } from "./functions/game-process/set-level";
import { initHelp } from "./functions/help-block/initHelp";
import { LEVELS } from "./functions/level-storage/arr-level";
import { colorBlock } from "./functions/game-process/color";

// Инициализация игры
export function initGame(): void {
  initHelp();
  let id: number = getLocalStorage();
  setCurTable(LEVELS[id]);
  setCurHtml(LEVELS[id]);
  setCurTask(LEVELS[id]);
  colorBlock();
  // changeStyle();
}

// Из локал сторедж
export function getLocalStorage(): number {
  let cur: string;
  if(localStorage.getItem('level')) {
    cur = localStorage.getItem('level')!;
  }
  return cur! ? +cur - 1 : 0;
}
window.addEventListener('load', getLocalStorage);



