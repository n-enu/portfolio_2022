// import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// Animation
export default function () {
  gsap.registerPlugin(ScrollTrigger);

  // 固定するコンテンツ
  const animeContent = document.querySelector(".l-animation-content");

  // MVアニメーション

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: animeContent,
      start: "top top",
      end: "+=250%",
      scrub: 0.5,
      pin: true,
    },
  });

  tl.to(
    ".circle01",
    {
      scale: 3,
      left: "-40vw",
      bottom: "-30%",
      duration: 50,
      opacity: 0,
    },
    "move01"
  )
    .to(
      ".circle02",
      {
        scale: 3,
        right: "-40vw",
        bottom: "-20vw",
        duration: 50,
        opacity: 0,
      },
      "move01"
    )
    .to(
      ".circle03",
      {
        scale: 3,
        right: "-40vw",
        top: "0vw",
        duration: 50,
        opacity: 0,
      },
      "move01"
    )
    .to(
      ".js-anime-name",
      {
        scale: 2,
        bottom: "100vw",
        duration: 50,
        opacity: 0,
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
      "-=20"
    );
  // .to(".p-hero__content-area", {
  //   opacity: 0,
  //   duration: 10,
  // });
  // .to(
  //   ".circle-large.-base",
  //   {
  //     width: "150vw",
  //     height: "150vw",
  //     duration: 50,
  //   },
  //   "+=0"
  // );

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

  // About .c-card-icon
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
    const y = wrap.getAttribute("data-y") || -100;

    gsap.to(wrap, {
      y: y,
      scale: 1.2,
      scrollTrigger: {
        trigger: wrap,
        start: "top 80%",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
}
