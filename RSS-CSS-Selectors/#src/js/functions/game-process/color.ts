import hljs from 'highlight.js';

//! TODO Пофиксить Any
export function colorBlock(className: string) {
  document.querySelectorAll(className).forEach((el: any) => {
    hljs.highlightElement(el);
  });
}