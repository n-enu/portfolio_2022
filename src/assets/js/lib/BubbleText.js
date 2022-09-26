export default function () {
  const bubbleText = document.querySelector(".js-bubbleText");
  const bubbleTitle = document.querySelectorAll(".js-bubbleTitle");

  bubbleTitle.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      console.log("test");
      const nextSibling = elem.nextElementSibling;
      const nextSiblingText = nextSibling.textContent;
      bubbleText.textContent = nextSiblingText;
    });
  });
}
