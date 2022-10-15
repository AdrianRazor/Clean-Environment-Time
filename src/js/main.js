document.addEventListener("DOMContentLoaded", function (event) {
  // Дропдаун
  const dropdown = document.querySelectorAll(".dropdown");

  if (dropdown) {
    dropdown.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.classList.toggle("open");

        window.addEventListener("click", (e) => {
          if (!e.target.closest(".dropdown")) {
            item.classList.remove("open");
          }
        });
      });
    });
  }

  // Табы
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

  // Аккордеон
  if (window.innerWidth < 768 && tabItem) {
    tabItem.forEach((item, index) => {
      item.classList.remove("active");

      item.addEventListener("click", () => {
        tabItem[index].classList.toggle("active");
      });
    });
  }

  // Слайдер
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
