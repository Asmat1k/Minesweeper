/* eslint-disable prefer-const */
export default function openLeaderBoard() {
  const leaderBlock = document.querySelector('.leader__popup');
  const icon = document.querySelector('.leader__icon');
  icon.addEventListener('click', () => {
    leaderBlock.classList.toggle('open');
  });
}
