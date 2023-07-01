import hljs from 'highlight.js';

export function colorBlock() {
  document.querySelectorAll('.html').forEach((el: any) => {
    hljs.highlightElement(el);
  });
}