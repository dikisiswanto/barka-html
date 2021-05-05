/* eslint-disable no-undef */
/* eslint-disable no-new */
const setSlider = () => {
  const slider = document.querySelector('.o-slider');
  if (slider) {
    $('.o-slider').owlCarousel({
      animateOut: 'fadeOutLeft',
      animateIn: 'fadeInRight',
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      loop: true,
      smartSpeed: 450,
      navs: false,
    });
  }
};

export default setSlider;
