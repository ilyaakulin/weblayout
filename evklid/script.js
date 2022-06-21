document.addEventListener("DOMContentLoaded", function () {
  function mySwiper() {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  function tabs() {
    document
      .querySelectorAll(".work-list-item-button")
      .forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (e) {
          const path = e.currentTarget.dataset.path;
          document
            .querySelectorAll(".work-list-item-button")
            .forEach(function (btn) {
              btn.classList.remove("work-list-item-button--active");
            });
          e.currentTarget.classList.add("work-list-item-button--active");

          document.querySelectorAll(".process").forEach(function (tabsBtn) {
            tabsBtn.classList.remove("process--active");
          });
          document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("process--active");
        });
      });
  }

  $(function myAccordion() {
    $(".accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false,
    });
  });

  const headerNav = document.querySelector(".header__nav");
  const headerLinks = document.querySelectorAll(".header-link");
  const screenWidth = window.screen.width;

  function hamburger() {
    document
      .querySelector(".hamburger")
      .addEventListener("click", function (e) {
        e.target.classList.toggle("hamburger--active");
        headerNav.classList.toggle("header__nav--active");
        setTabIndex();
      });
  }

  function setTabIndex(width) {
    if (width < 1920) {
      if (headerNav.classList.contains("header__nav--active")) {
        headerLinks.forEach((el) => {
          el.tabIndex = 0;
        });
        headerNav.tabIndex = 0;
      } else {
        headerLinks.forEach((el) => {
          el.tabIndex = -1;
        });
        headerNav.tabIndex = -1;
      }
    }
  }

  function searcher() {
    document
      .querySelector(".header__search")
      .addEventListener("click", function () {
        document.querySelector(".header__search").classList.add("hidden");
        const headerForm = document.querySelector(".header__form");
        headerForm.classList.add("header__form--active");
        const searchClose = document.querySelector(".search-close");
        searchClose.addEventListener("click", function (ev) {
          document.querySelector(".header__search").classList.remove("hidden");
          headerForm.classList.remove("header__form--active");
          ev.preventDefault();
        });
        document
          .querySelector(".search-btn")
          .addEventListener("click", (ev) => ev.preventDefault());
      });
  }

  mySwiper();
  searcher();
  tabs();
  hamburger();
  setTabIndex(screenWidth);
});
