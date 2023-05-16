export default function boxClick() {
  const items = document.querySelectorAll('.game__block');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      console.log('click');
    });
  });
}
