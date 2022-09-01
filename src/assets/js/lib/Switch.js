/* ==============================
		ダークモードの切り替え
	============================== */
export default function () {
  const btn = document.querySelector("#btn-dark-mode");

  //チェックボックス切り替え判定
  btn.addEventListener("change", () => {
    if (btn.checked === true) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode-settings", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("dark-mode-settings", "light");
    }
  });

  //ローカルストレージ判定
  if (localStorage.getItem("dark-mode-settings") === "dark") {
    document.body.classList.add("dark-mode");
    btn.checked = true;
  } else if (localStorage.getItem("dark-mode-settings") === "light") {
    document.body.classList.add("light-mode");
  }
}
