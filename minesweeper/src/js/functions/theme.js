export default function changeTheme() {
  const buttons = document.querySelectorAll('.theme');
  buttons.forEach((button) => {
    if (button.classList.contains('light')) {
      // changeOnLight();
    }
  });
}
