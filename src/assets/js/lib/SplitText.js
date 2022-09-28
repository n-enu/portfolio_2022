import { gsap } from "gsap";

export default function () {
  // const textOneByOne = document.querySelector(".js-splitTextWrap");
  // const textAll = document.querySelector(".js-splitTextWrap span");

  // console.log(textAll);
  // let getText = textOneByOne.textContent;

  // textOneByOne.textContent = "";
  // getText = getText.split("");

  // getText.forEach(function (elem) {
  //   const newText = "<span aria-hidden='true'>" + elem + "</span>";
  //   textOneByOne.insertAdjacentHTML("beforeend", newText);
  // });

  const spanWrapText = (target) => {
    const nodes = [...target.childNodes]; // ノードリストを配列にする
    let returnText = ""; // 最終的に返すテキスト

    for (const node of nodes) {
      if (node.nodeType == 3) {
        //テキストの場合
        const text = node.textContent.replace(/\r?\n/g, ""); //テキストから改行コード削除
        const splitText = text.split(""); // 一文字ずつ分割
        for (const char of splitText) {
          returnText += `<span>${char}</span>`; // spanタグで挟んで連結
        }
      } else {
        //テキスト以外の場合
        //<br>などテキスト以外の要素をそのまま連結
        returnText += node.outerHTML;
      }
    }
    return returnText;
  };

  const textWrap = [...document.querySelectorAll(".js-splitTextWrap")];
  for (const splitText of textWrap) {
    splitText.innerHTML = spanWrapText(splitText);

    // spanたちを配列にし、それをプロパティとして持っておく
    splitText.spans = splitText.querySelectorAll("span");
  }

  // テキスト非表示
  // textWrap.appendChild(splitText).classList.add("u-visuallyHidden");

  // アニメーション
  const items = gsap.utils.toArray(".js-splitTextWrap span");
  // const itemTexts = gsap.utils.toArray(".js-splitTextWrap span");
  items.forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      rotation: -100,
      yPercent: -150,
      duration: 1,
      delay: i * 0.1,
      ease: "bounce",
      stagger: {
        form: "start",
        amount: 1,
      },
      scrollTrigger: {
        trigger: item,
        start: "top 70%",
      },
    });
  });
}
