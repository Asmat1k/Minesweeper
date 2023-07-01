import { checkCurRes } from "./game-process/check-level";
import { changeStyle } from "./game-process/hover-effect";
import { setCurHtml, setCurTable, setCurTask } from "./game-process/set-level";
import { initHelp } from "./help-block/initHelp";
import { Level } from "../files/types/types";
import { currentLevel } from "./change-level/change-level";
import { LEVELS } from "./level-storage/arr-level";
import { colorBlock } from "./game-process/color";

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



