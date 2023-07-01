import '../scss/style.scss';
import * as myFunctions from './files/functions';
import * as menuFunctions from './functions/menu/burger';
import { initGame } from './functions/init-game';
import { changeLevel } from './functions/change-level/change-level';
import { generateLvlList } from './functions/change-level/generate-level';
import { LEVELS } from './functions/level-storage/arr-level';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
menuFunctions.menuInit();

generateLvlList();
initGame();
changeLevel();
