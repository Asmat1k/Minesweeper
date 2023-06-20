// МЕНЮ-БУРГЕР
export function menuInit() {
  if (document.querySelector('.nav-burger')) {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.nav-burger')) {
        lineChange();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.nav__header_menu').classList.toggle('menu-open');
      }
    });
  }
}

function lineChange() {
  const lines = document.querySelectorAll('.burger-line');
  for(let i = 0; i < lines.length; i += 1) {
    lines[i].classList.toggle('active');
  }
}

export function menuOpen() {
  document.documentElement.classList.add('menu-open');
  document.querySelector('.nav__header_menu').classList.add('menu-open');
}

export function menuClose() {
  document.documentElement.classList.remove('menu-open');
  document.querySelector('.nav__header_menu').classList.remove('menu-open');
}
//----------------------------------------------------------------------
