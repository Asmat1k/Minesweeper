import { dishes } from "../../files/types/dishes";
import { Level } from "../../files/types/types";

// массив уровней
export const LEVELS: Level[] = [
  {
    toDo: 'Select the plates',
    answer: 'popa tyt vashe',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
      <br>
      <plate>&ltplate/&gt</plate>
      <br>
    &lt/div&gt
    `,
    tableComponents: `${dishes.plate}${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector1',
      subtitle: 'Select elements by their type',
      id: 'A',
      task: `Selects all elements of type <strong>A</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `<code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: 'Select the bento boxes',
    answer: '2',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '3',
    answer: '3',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '4',
    answer: '4',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '5',
    answer: '5',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '6',
    answer: '6',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '7',
    answer: '7',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '8',
    answer: '8',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: 'Select the bento boxes',
    answer: '9',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: '10',
    answer: '10',
    status: false,
    htmlCode:  
    `&ltdiv class="table"&gt
     <br>
      <plate>&ltplate/&gt</plate>
     <br>
    &lt/div&gt`,
    tableComponents: `${dishes.plate}`,
    helpTitle: 'Type Selector',
    helpText: {
      title: 'Type Selector 2',
      subtitle: 'Select elements by their type 2',
      id: 'A2',
      task: `2. Selects all elements of type <strong>A2</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `2. <code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  
]