export default function () {
  const link = document.querySelectorAll(".js-navBtn");

  link.forEach((elem) => {
    elem.addEventListener("click", drawerHide);
  });
}

function drawerHide() {
  const btn = document.querySelector(".js-drawer");
  document.querySelector("HTML").classList.remove("is-drawerActive");

  const isExpanded = btn.getAttribute("aria-expanded") !== "false";
  btn.setAttribute("aria-expanded", !isExpanded);
}
