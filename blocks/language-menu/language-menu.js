const LANGUAGE_MENU = 'language-menu';

const addAria = (el, button) => {
  const currentLink = el.querySelector('a .icon')?.parentElement;
  currentLink?.setAttribute('aria-current', true);

  const menu = el.querySelector('ul');
  menu?.setAttribute('id', LANGUAGE_MENU);
  button?.setAttribute('aria-controls', LANGUAGE_MENU);
};

const closeMenu = (button) => {
  if (!button) return;
  button.classList.remove('inline-dialog-active');
  button.setAttribute('aria-expanded', false);
  button.focus();
};

const init = (el) => {
  const button = document.querySelector('footer .footer-region-button');

  addAria(el, button);

  el.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
      closeMenu(button);
    }
  });
};

export default init;
