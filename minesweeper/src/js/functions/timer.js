/* eslint-disable no-unused-vars */
let interval;
let seconds = 0;
let scoreNum = 0;
let score = document.querySelector('.game-score');

export function stopTimer() {
  clearInterval(interval);
}

export function resetTimer() {
  stopTimer();
  seconds = 0;
  score.innerHTML = '000';
}

export default function startTimer() {
  stopTimer();
  score = document.querySelector('.game-score');
  interval = setInterval(() => {
    seconds += 1;
    if (seconds < 10) {
      scoreNum = `00${seconds}`;
    } else if (seconds < 100) {
      scoreNum = `0${seconds}`;
    } else if (seconds < 1000) {
      scoreNum = `${seconds}`;
    } else {
      scoreNum = 'INF';
    }
    score.innerHTML = scoreNum;
  }, 1000);
}
