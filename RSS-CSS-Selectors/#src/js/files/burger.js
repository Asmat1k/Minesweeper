// МЕНЮ-БУРГЕР
export function menuInit() {
  if (document.querySelector('.nav-burger')) {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.nav-burger')) {
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.nav__header_menu').classList.toggle('menu-open');
      }
    });
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
