import { checkCurRes } from "../functions/game/check-res";
import { changeStyle } from "../functions/game/hover";
import { setCurHtml, setCurTable, setCurTask } from "../functions/game/set-level-info";
import { initHelp } from "../functions/help/node";
import { Level } from "./types/types";

// Инициализация игры
export function initGame(level: Level): void {
  initHelp();
  setCurTable(level);
  setCurHtml(level);
  setCurTask(level);
  checkCurRes(level);
  changeStyle();
}



