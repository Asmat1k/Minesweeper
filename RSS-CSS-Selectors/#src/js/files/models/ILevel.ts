import { Task } from "../types/types";

export interface ILevel {
  mainTitle: string;
  title: string;
  answer: string;
  htmlCode: string;
  tableComponents: string;
  taskText: Task;
}