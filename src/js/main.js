document.addEventListener("DOMContentLoaded", function (event) {
  const tabItem = document.querySelectorAll(".scope__item");
  const tabContent = document.querySelectorAll(".scope__right .scope__card");

  if (window.innerWidth >= 768 && tabItem) {
    tabItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabItem.forEach((el) => el.classList.remove("active"));
        tabItem[index].classList.add("active");

        tabContent.forEach((el) => el.classList.remove("active"));
        tabContent[index].classList.add("active");
      });
    });
  }

  if (window.innerWidth < 768 && tabItem) {
    tabItem.forEach((item, index) => {
      item.classList.remove("active");

      item.addEventListener("click", () => {
        tabItem[index].classList.toggle("active");
      });
    });
  }

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
