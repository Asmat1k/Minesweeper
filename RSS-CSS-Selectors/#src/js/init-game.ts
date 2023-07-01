import { checkCurRes } from "./functions/game-process/check-level";
import { changeStyle } from "./functions/game-process/hover-effect";
import { setCurHtml, setCurTable, setCurTask } from "./functions/game-process/set-level";
import { initHelp } from "./functions/help-block/initHelp";
import { Level } from "./files/types/types";
import { currentLevel } from "./functions/change-level/change-level";
import { LEVELS } from "./functions/level-storage/arr-level";
import { colorBlock } from "./functions/game-process/color";

// Инициализация игры
export function initGame(): void {
  initHelp();
  let id: number = getLocalStorage();
  setCurTable(LEVELS[id]);
  setCurHtml(LEVELS[id]);
  setCurTask(LEVELS[id]);
  checkCurRes(LEVELS[id]);
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



