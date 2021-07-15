$(document).ready(function () {
  $(".portfolio__item").click(function (e) {
    e.preventDefault();
    $(".portfolio__item").removeClass("_active");
    $(this).addClass("_active");
    let id = $(this).attr("data-id");
    if (id == 0) {
      $(".portfolio__img-block").show();
      return true;
    }
    $(".portfolio__img-block").hide();
    $(".portfolio__item_id_" + id).show();
  });
});

//=====================================================================================
let langMenu = document.querySelector(".menu__lang-dropdown");
if (langMenu != null) {
  let langList = document.querySelector(".lang-dropdown__list");
	langMenu.addEventListener("click", function (e) {
    langMenu.classList.toggle("_active");
    langList.classList.toggle("_active");
  });
};
//======================================================================================
lightGallery(document.getElementById("animated-thumbnails"), {
  thumbnail: true,
  mode: "lg-fade",
});
//======================================================================================
let main_slider = new Swiper(".main-slider", {
  // effect: "fade",
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: ".main-slider__pagination",
    type: "bullets",
    clickable: true,
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});
//======================================================================================
let popular_swiper = new Swiper(".popular__swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".popular__navigation .popular__arrow_r",
    prevEl: ".popular__navigation .popular__arrow_l",
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
//======================================================================================
let productMainSlider = new Swiper(".product__slider_big", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 4,
});
let productGallerySlider = new Swiper(".product__slider_gallery", {
  observer: true,
  observeParents: true,
  spaceBetween: 10,
  // centeredSlides: true,
  slidesPerView: 4,
  // touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".gallery-product__arrow_next",
    prevEl: ".gallery-product__arrow_prev",
  },
});
productMainSlider.controller.control = productGallerySlider;
productGallerySlider.controller.control = productMainSlider;