export default function getSize() {
  const wrapper = document.querySelector('.game__wrapper');
  if (wrapper.classList.contains('easy')) return 0;
  if (wrapper.classList.contains('medium')) return 1;
  if (wrapper.classList.contains('hard')) return 2;
  return 0;
}
