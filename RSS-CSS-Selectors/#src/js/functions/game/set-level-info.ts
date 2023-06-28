import { ILevel } from "../../files/models/ILevel";

// Смена информации о таске
export function setCurTask(level: ILevel): void {
  const taskArea: HTMLElement = document.querySelector('.nav-task')!;
  const title: HTMLElement = taskArea.querySelector('.nav__title')!;
  const mainTitle = document.querySelector('.game__title-main')!;
  const subtitle: HTMLElement = taskArea.querySelector('.nav__subtitle')!;
  const id: HTMLElement = taskArea.querySelector('.nav__id')!;
  const task: HTMLElement = taskArea.querySelector('.nav-task-text')!;
  const example: HTMLElement = taskArea.querySelector('.nav-task-example')!;

  mainTitle.innerHTML = level.mainTitle;
  title.innerHTML = level.taskText.title;
  subtitle.innerHTML = level.taskText.subtitle;
  id.innerHTML = level.taskText.id;
  task.innerHTML = level.taskText.task;
  example.innerHTML = level.taskText.example;
}

// Установка html
export function setCurHtml(level: ILevel) {
  const htmlArea: HTMLElement = document.querySelector('.html-text')!;
  //! TODO Сделать добавление именно HTML кода в блок, для дальнейшей работы с эффектом :hover
  // чтобы при наведении на блок в едиторе, посуда на столе подсвечивалсь
  // вроде как можно сделать при помощи SASS: блок-в-едиторе:hover .тарелка-на-столе { еффект } :)))
  htmlArea.innerHTML = level.htmlCode;
}

// Обеовление столов
export function setCurTable(level: ILevel) {
  const table: HTMLElement = document.querySelector('.table')!;
  table.innerHTML = level.tableComponents;
}