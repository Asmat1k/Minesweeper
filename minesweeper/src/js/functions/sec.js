export default function timer(sec, flag) {
  const isWorking = flag;
  let SEC = sec;
  const block = document.querySelector('.game-score');
  let seconds = '000';
  if (isWorking) {
    const secondsTimerId = setInterval(() => {
      if (SEC >= 0) {
        SEC += 1;
        if (SEC < 10) {
          seconds = `00${SEC}`;
        } else if (SEC < 100) {
          seconds = `0${SEC}`;
        } else if (SEC < 1000) {
          seconds = `${SEC}`;
        } else {
          seconds = 'INF';
        }
        block.innerHTML = seconds;
      } else {
        clearInterval(secondsTimerId);
      }
    }, 1000);
  } else {
    block.innerHTML = '999';
  }
}
