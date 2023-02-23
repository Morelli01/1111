(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-price-open]'),
    closeMenuBtn: document.querySelector('[data-price-close]'),
    menu: document.querySelector('[data-price]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
  }
})();