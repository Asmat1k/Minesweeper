let clicks = 0;

export default function click() {
  const block = document.querySelector('.game-score');
  let clicksNum = '000';
  if (clicks >= 0) {
    clicks += 1;
    if (clicks < 10) {
      clicksNum = `00${clicks}`;
    } else if (clicks < 100) {
      clicksNum = `0${clicks}`;
    } else if (clicks < 1000) {
      clicksNum = `${clicks}`;
    } else {
      clicksNum = 'INF';
    }
    block.innerHTML = clicksNum;
  }
}
