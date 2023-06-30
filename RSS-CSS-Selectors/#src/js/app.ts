import '../scss/style.scss';
import * as myFunctions from './files/functions';
import * as menuFunctions from './functions/menu/burger';
import { initGame } from './files/play';
import { changeLevel } from './functions/change/change-lvl';
import { generateLvlList } from './functions/change/generate-lvl';
import { LEVELS } from './files/Levels/arr-lvl';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
menuFunctions.menuInit();

generateLvlList();
initGame(LEVELS[0]);
changeLevel();
