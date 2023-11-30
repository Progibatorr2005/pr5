//всайпер
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    observer: true,
    breakpoints: {
      850: {
        spaceBetween: 0,
        enabled: false
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });

  document.getElementsByClassName("swiper__button")[0].addEventListener("click", () => {
    document.getElementsByClassName("swiper-wrapper")[0].classList.toggle("swiper-wrapper--active");
  } );