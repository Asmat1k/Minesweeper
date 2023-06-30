// Информация для навигации
export type Task = {
  title: string,
  subtitle: string,
  id: string,
  task: string,
  example: string, 
}

// Информация с кодом элементов посуды
export type Dishes = {
  plate: string,
  apple: string,
  plateApple: string,
}

export type Level = {
  toDo: string,
  answer: string,
  status: boolean,
  htmlCode: string,
  tableComponents: string,
  helpTitle: string,
  helpText: helpLevel
}

export type helpLevel = {
  title: string,
  subtitle: string,
  id: string,
  task: string,
  example: string,
}