// Polyfill
import "intersection-observer";
import objectFitImages from "object-fit-images";
objectFitImages();

// Libraly
import $ from "jquery";
import toggle from "./lib/Toggle";
import Switch from "./lib/Switch";
import NavBtn from "./lib/NavBtn";
import Swiper from "swiper/bundle";
import lottie from "lottie-web";

new toggle(".js-drawer");
new Switch();
new NavBtn();

/* ==============================
		Swiper
	============================== */
const slideLength = document.querySelectorAll(".swiper-wrapper .swiper-slide").length;
const sliderElm = document.querySelector(".js-swiper-wrap");
let option = {};

if (slideLength == 1) {
  option = {
    loop: false,
    pagination: false,
  };
  sliderElm.classList.add("is-noSlider");
} else {
  option = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
}
new Swiper(".js-swiper", option);

/* ==============================
		Lottie
	============================== */
lottie.loadAnimation({
  container: document.getElementById("js-animation-hanabi"), //HTMLのID
  renderer: "svg", // 描画形式
  loop: true, //ループするかどうか
  autoplay: true, //自動再生
  path: "../assets/json/hanabi03.json", //jsonファイルのパス
});
lottie.loadAnimation({
  container: document.getElementById("js-animation-mv"), //HTMLのID
  renderer: "svg", // 描画形式
  loop: true, //ループするかどうか
  autoplay: true, //自動再生
  path: "/assets/json/animation_mv.json", //jsonファイルのパス
});
/* ==============================
		Work絞り込み
	============================== */
$(function () {
  var $btn = $(".js-category-btn [data-filter]"),
    $list = $(".js-category-list [data-category]");

  $btn.on("click", function (e) {
    e.preventDefault();

    var $this = $(this);
    $btn.removeClass("is-active");
    $this.addClass("is-active");

    var $btnCat = $(this).attr("data-filter");
    $list.removeClass("is-animate");

    if ($btnCat == "all") {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list.addClass("is-animate").fadeIn();
        });
    } else {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list
            .filter('[data-category = "' + $btnCat + '"]')
            .addClass("is-animate")
            .fadeIn();
        });
    }
  });
});
