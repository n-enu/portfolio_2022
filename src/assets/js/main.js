// Polyfill
import "intersection-observer";
import objectFitImages from "object-fit-images";
objectFitImages();

// Libraly
import Toggle from "./lib/Toggle";
import Switch from "./lib/Switch";
import NavBtn from "./lib/NavBtn";
import Animation from "./lib/Animation";
import SplitText from "./lib/SplitText";
import BubbleText from "./lib/BubbleText";
import Swiper from "swiper/bundle";
import lottie from "lottie-web";
import MicroModal from "micromodal";

new Toggle(".js-drawer");
new Switch();
new NavBtn();
new Animation();
new SplitText();
new BubbleText();

MicroModal.init({
  disableScroll: true,
  awaitCloseAnimation: true,
});

/* ==============================
		Swiper
	============================== */
const sliderWrap = document.querySelectorAll(".js-swiper");
const elmPager = document.querySelectorAll(".swiper-pagination");
const prev = document.querySelectorAll(".swiper-button-prev");
const next = document.querySelectorAll(".swiper-button-next");

for (let i = 0; i < sliderWrap.length; i++) {
  var num = ("00" + (i + 1)).slice(-2);
  sliderWrap[i].className += num;
  elmPager[i].className += num;
  prev[i].className += num;
  next[i].className += num;

  const slideLength = document.querySelectorAll(`.js-swiper${num} .swiper-slide`).length;
  let option = {};

  if (slideLength == 1) {
    option = {
      loop: false,
      pagination: false,
      navigation: false,
    };
    const buttonPrev = document.querySelector(`.swiper-button-prev${num}`);
    const buttonNext = document.querySelector(`.swiper-button-next${num}`);
    const pagenation = document.querySelector(`.swiper-pagination${num}`);
    buttonPrev.remove();
    buttonNext.remove();
    pagenation.remove();
  } else {
    option = {
      centeredSlides: true,
      slidesPerView: 1,
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
        el: ".swiper-pagination" + num,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next" + num,
        prevEl: ".swiper-button-prev" + num,
      },
    };
  }
  new Swiper(".js-swiper" + num, option);
}

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
  container: document.getElementById("js-animation-bounce"), //HTMLのID
  renderer: "svg", // 描画形式
  loop: true, //ループするかどうか
  autoplay: true, //自動再生
  path: "/assets/json/animation_mv.json", //jsonファイルのパス
});
