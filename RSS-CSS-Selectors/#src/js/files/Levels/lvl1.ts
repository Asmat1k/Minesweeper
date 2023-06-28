import { dishes } from "../types/dishes";
import { ILevel } from "../models/ILevel";
import { Task } from "../types/types";

// Уровень 1
export class Level1 implements ILevel {
  mainTitle: string;
  title: string;
  answer: string;
  htmlCode: string;
  tableComponents: string;
  taskText: Task;
  constructor() {
    this.mainTitle = 'Select the plates';
    this.title = 'Type Selector'
    this.answer = '1';
    this.htmlCode =  
`&lttable&gt
  &ltplate&gt&lt/plate&gt
  &ltplate&gt&lt/plate&gt
&lt/table&gt`
    this.tableComponents = `${dishes.plateApple}${dishes.plate}`;
    this.taskText = {
      title: 'Type Selector1',
      subtitle: 'Select elements by their type',
      id: 'A',
      task: `Selects all elements of type <strong>A</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `<code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  }
}