(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__menu-mob-open'),
    closeMenuBtn: document.querySelector('.mob__menu-close'),
    menu: document.querySelector('.mob'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();