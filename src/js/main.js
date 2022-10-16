document.addEventListener("DOMContentLoaded", function (event) {
  //Бургер
  let header = document.querySelector(".header");
  let burger = document.querySelector(".burger");

  if (burger) {
    const rootElement = document.documentElement;

    burger.addEventListener("click", function () {
      header.classList.toggle("open");
      burger.classList.toggle("open");
      rootElement.classList.toggle("block");

      let headerOpen = document.querySelector(".header.open");

      if (headerOpen) {
        let navItem = headerOpen.querySelectorAll(".header.open .nav__item");

        navItem.forEach((item) => {
          item.addEventListener("click", function () {
            header.classList.remove("open");
            burger.classList.remove("open");
            rootElement.classList.remove("block");
          });
        });
      }
    });
  }

  // Дропдаун
  const dropdown = document.querySelectorAll(".dropdown");

  if (dropdown) {
    dropdown.forEach((item, index) => {
      item.addEventListener("click", () => {
        dropdown.forEach((el) => el.classList.remove("open"));

        item.classList.add("open");

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
        el: ".scrollbar",
        draggable: true,
        dragClass: "scrollbar__drag",
      },
    });

    const swiperDocs = new Swiper(".swiperDocs", {
      slidesPerView: 1,
      spaceBetween: 15,

      breakpoints: {
        481: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      scrollbar: {
        el: ".scrollbar",
        draggable: true,
        dragClass: "scrollbar__drag",
      },
    });
  }

  console.log("DOM fully loaded and parsed");
});
