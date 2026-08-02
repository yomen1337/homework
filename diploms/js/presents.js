export const productSlider = () => {
  new Swiper(".product__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".product__slide-button--prev",
      nextEl: ".product__slide-button--back",
    },
  });
};
