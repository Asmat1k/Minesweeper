let clicks = 0;

export default function click(isClear) {
  const block = document.querySelector('.game-click');
  // если таймер надо перезазгрузить
  if (isClear) clicks = -1;
  let clicksNum = '000';
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
