import { dishes } from "../../files/types/dishes";
import { Level } from "../../files/types/types";

// массив уровней
export const LEVELS: Level[] = [
  {
    toDo: 'Select the plates',
    answer: 'testing cool typing',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate/&gt
  &ltplate/&gt
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
    answer: 'answer - 2',
    helpUsed: false,
    status: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
    &ltapple/&gt
  &ltplate/&gt
&lt/div&gt`,
    tableComponents: `${dishes.plateApple}`,
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
    answer: 'idk',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    answer: 'ho-ho-ho',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    answer: 'net voobrazhenia',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
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