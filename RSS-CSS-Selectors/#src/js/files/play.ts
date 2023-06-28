import { checkCurRes } from "../functions/game/check-res";
import { setCurHtml, setCurTable, setCurTask } from "../functions/game/set-level-info";
import { initHelp } from "../functions/help/node";
import { ILevel } from "./models/ILevel";

// Инициализация игры
export function initGame(level: ILevel): void {
  initHelp();
  setCurTable(level);
  setCurHtml(level);
  setCurTask(level);
  checkCurRes(level);
}



