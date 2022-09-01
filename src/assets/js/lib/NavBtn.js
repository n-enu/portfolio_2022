export default function () {
  const btn = document.querySelectorAll(".js-navBtn");

  btn.forEach((elem) => {
    elem.addEventListener("click", drawerHide);
  });
}

function drawerHide() {
  document.querySelector("HTML").classList.remove("is-drawerActive");
}
