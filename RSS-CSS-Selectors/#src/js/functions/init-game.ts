import { checkCurRes } from "./game-process/check-level";
import { changeStyle } from "./game-process/hover-effect";
import { setCurHtml, setCurTable, setCurTask } from "./game-process/set-level";
import { initHelp } from "./help-block/initHelp";
import { Level } from "../files/types/types";

// Инициализация игры
export function initGame(level: Level): void {
  initHelp();
  setCurTable(level);
  setCurHtml(level);
  setCurTask(level);
  checkCurRes(level);
  changeStyle();
}



