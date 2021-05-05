import setSlider from './slider';
import setMobileMenuAction from './menu';

window.addEventListener('DOMContentLoaded', () => {
  setSlider();
  setMobileMenuAction();
  AOS.init({
    once: true,
  });
})