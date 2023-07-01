import '../scss/style.scss';
import * as myFunctions from './files/functions';
import * as menuFunctions from './functions/menu/burger';
import { initGame } from './init-game';
import { changeLevel, currentLevel } from './functions/change-level/change-level';
import { generateLvlList } from './functions/change-level/generate-level';
import { LEVELS } from './functions/level-storage/arr-level';
import { knowAnswer } from './functions/help-block/know-answer';
import { changeStyle } from './functions/game-process/hover-effect';
import { checkCurRes } from './functions/game-process/check-level';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
menuFunctions.menuInit();

// Генерация уровней в списке из обьекта
generateLvlList();
// Инициализация игры
initGame();
// Печать ответа
knowAnswer();
// Смена уровня
changeLevel();
// Проверка результатов
checkCurRes();
