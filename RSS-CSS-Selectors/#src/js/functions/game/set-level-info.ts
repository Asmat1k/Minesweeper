import { Level } from "../../files/types/types";

// Смена информации о таске
export function setCurTask(level: Level): void {
  const taskArea: HTMLElement = document.querySelector('.nav-task')!;
  const title: HTMLElement = taskArea.querySelector('.nav__title')!;
  const check: HTMLElement = document.querySelector('.nav-check')!;
  const mainTitle = document.querySelector('.game__title-main')!;
  const subtitle: HTMLElement = taskArea.querySelector('.nav__subtitle')!;
  const id: HTMLElement = taskArea.querySelector('.nav__id')!;
  const task: HTMLElement = taskArea.querySelector('.nav-task-text')!;
  const example: HTMLElement = taskArea.querySelector('.nav-task-example')!;

  mainTitle.innerHTML = level.toDo;
  title.innerHTML = level.helpText.title;
  if (level.status) {
    check.classList.add('nav-done');
  } else if(check.classList.contains('nav-done')) {
    check.classList.remove('nav-done');
  }
  subtitle.innerHTML = level.helpText.subtitle;
  id.innerHTML = level.helpText.id;
  task.innerHTML = level.helpText.task;
  example.innerHTML = level.helpText.example;
}

// Установка html
export function setCurHtml(level: Level) {
  const htmlArea: HTMLElement = document.querySelector('.html-text')!;
  const table: HTMLElement = htmlArea.querySelector('.table-code')!;
  table.innerHTML = level.htmlCode;
}

// Обеовление столов
export function setCurTable(level: Level) {
  const table: HTMLElement = document.querySelector('.table')!;
  table.innerHTML = level.tableComponents;
}