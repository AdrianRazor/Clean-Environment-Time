document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".swiper")) {
    const swiperGallery = new Swiper(".swiperGallery", {
      slidesPerView: 1,
      spaceBetween: 15,

      breakpoints: {
        481: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      scrollbar: {
        el: ".gallery__scrollbar",
        draggable: true,
        dragClass: "gallery__scrolldrag",
      },
    });
  }

  console.log("DOM fully loaded and parsed");
});
