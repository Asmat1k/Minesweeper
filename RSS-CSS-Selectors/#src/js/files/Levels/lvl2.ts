import { dishes } from "../types/dishes";
import { ILevel } from "../models/ILevel";
import { Task } from "../types/types";

// Уровень 1
export class Level2 implements ILevel {
  mainTitle: string;
  title: string;
  answer: string;
  htmlCode: string;
  tableComponents: string;
  taskText: Task;
  constructor() {
    this.mainTitle = 'Select the bento boxes';
    this.title = 'Type Selector'
    this.answer = '2';
    this.htmlCode =  
`&lttable&gt
  &ltplate&gt&lt/plate&gt
&lt/table&gt`
    this.tableComponents = `${dishes.plate}`;
    this.taskText = {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  }
  
}