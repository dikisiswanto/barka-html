/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const setMobileMenuAction = () => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const hasDropdownMenuItems = document.querySelectorAll('.has-submenu > .menu-link');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('text-white');
    const menuButtonIcon = menuButton.querySelector('.fa');
    if (menuButtonIcon.classList.contains('fa-bars')) {
      menuButtonIcon.classList.remove('fa-bars');
      menuButtonIcon.classList.add('fa-times');
    } else {
      menuButtonIcon.classList.remove('fa-times');
      menuButtonIcon.classList.add('fa-bars');
    }
    menu.classList.toggle('is-open');
    body.classList.toggle('is-disabled');
  });

  backdrop.addEventListener('click', () => {
    menuButton.classList.remove('text-white');
    const menuButtonIcon = menuButton.querySelector('.fa');
    if (menuButtonIcon.classList.contains('fa-bars')) {
      menuButtonIcon.classList.remove('fa-bars');
      menuButtonIcon.classList.add('fa-times');
    } else {
      menuButtonIcon.classList.remove('fa-times');
      menuButtonIcon.classList.add('fa-bars');
    }
    menu.classList.remove('is-open');
    body.classList.remove('is-disabled');
  });

  hasDropdownMenuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();
      this.parentNode.querySelector('.menu-dropdown').classList.toggle('is-open');
    });
  });
};

export default setMobileMenuAction;
