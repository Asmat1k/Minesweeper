// нажатие на клавишу помощи
export function initHelp(): void {
  const helpButton: HTMLElement = document.querySelector('.game__button')!;
  const node: HTMLElement = document.querySelector('.game-node')!;
  closeNode(node);
  helpButton?.addEventListener('click', () => {
    openNode(node);
  })
}

// Открытие блока с помощью
function openNode(node: HTMLElement) {
  node.style.display = 'flex';
}

// Закрытие блока
function closeNode(node: HTMLElement) {
  const closeNodeButton = document.querySelector('.game-node__button');
  closeNodeButton?.addEventListener('click', () => {
    node.style.display = 'none';
  })
}