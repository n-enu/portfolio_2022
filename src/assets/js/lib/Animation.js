// import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default function () {
  gsap.registerPlugin(ScrollTrigger);

  // ローディングアニメーション
  let flg = null;
  let check_access = function () {
    // sessionStorageの値を判定
    if (sessionStorage.getItem("access_flg")) {
      flg = 1;
    } else {
      sessionStorage.setItem("access_flg", true);
      flg = 0;
    }
    return flg;
  };

  let $i = check_access();
  if ($i == 0) {
    // 1回目アクセスの処理
    const tl_loading = gsap.timeline();
    gsap.set(".p-loading__icon", {
      rotation: -100,
      yPercent: -600,
      opacity: 0,
    });
    tl_loading
      .to(".p-loading__icon", {
        opacity: 1,
        rotation: 0,
        yPercent: 0,
        ease: "Bounce.easeOut",
        delay: 0.8,
        duration: 1,
      })
      .to(
        ".p-loading__content",
        {
          y: "150vh",
          duration: 1,
          ease: "Power1.easeInOut",
        },
        "+=.5"
      )
      .to(
        ".p-loading__bg",
        {
          y: "160vh",
          x: "140vw",
          duration: 1,
          ease: "Power1.easeInOut",
        },
        "-=.4"
      )
      .to(".p-loading", {
        display: "none",
      });
  } else {
    gsap.set(".p-loading", {
      display: "none",
    });
  }

  // MVアニメーション
  const animeContent = document.querySelector(".l-animation-content");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: animeContent,
      start: "top top",
      end: "+=250%",
      scrub: 0.5,
      pin: true,
    },
  });

  gsap.set(".circle01", {
    opacity: 1,
  });

  tl.to(
    ".js-anime-name",
    {
      scale: 2,
      bottom: "100vw",
      duration: 50,
      opacity: 0,
    },
    "move01"
  )
    .fromTo(
      ".circle01",
      {
        opacity: 0,
        scale: 0,
      },
      {
        scale: 3,
        top: "100%",
        left: "-10%",
        duration: 50,
        opacity: 0.7,
      },
      "move01"
    )
    .fromTo(
      ".circle02",
      {
        opacity: 0,
        scale: 0,
      },
      {
        scale: 3,
        left: "110%",
        top: "100%",
        duration: 50,
        opacity: 0.7,
      },
      "move01"
    )
    .fromTo(
      ".circle03",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 3,
        left: "100%",
        top: "-10%",
        duration: 50,
        opacity: 0.7,
      },
      "move01"
    )

    .to(
      ".circle-large.-blue",
      {
        width: "150vw",
        height: "150vw",
        opacity: 1,
        duration: 50,
      },
      "-=40"
    )
    .fromTo(
      ".p-hero__content-area",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 10,
      },
      "-=30"
    );

  // ふわふわ浮く円
  gsap.registerPlugin(MotionPathPlugin);
  const fuwas = gsap.utils.toArray(".js-fuwa");

  fuwas.forEach((fuwa) => {
    gsap.fromTo(
      fuwa,
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
        yoyo: true,
        repeatDelay: 0,
        ease: "power1.inOut",
        repeat: -1,
        delay: Math.random(),
        scrollTrigger: {
          toggleActions: "play pause resume restart",
          trigger: fuwa,
          start: "top bottom",
        },
      }
    );
  });

  // 背景画像追従
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".js-anime-name", {
      scrollTrigger: {
        trigger: ".js-anime-name",
        toggleActions: "play pause resume restart",
        start: "top bottom",
      },
      backgroundPosition: `${mouseX}px ${mouseY}px`,
      stagger: 0.1,
      duration: 2,
    });
  });

  // About アイコンを順番に表示
  gsap.from(".js-cardIcon", {
    scrollTrigger: {
      trigger: ".c-card-icon",
      toggleActions: "play pause resume restart",
      start: "top bottom",
    },
    stagger: {
      each: 1.5,
    },
    scale: 0,
    repeat: -1,
    repeatDelay: 1,
    ease: "elastic.out(0.4, 0.3)",
  });

  // パララックス
  gsap.utils.toArray(".js-parallax").forEach((wrap) => {
    const y = wrap.getAttribute("data-y") || -150;

    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: "top 80%",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
}
