export default function getResult() {
  const block = document.querySelector('.game-click');
  const score = Number(block.innerHTML);
  return score;
}
