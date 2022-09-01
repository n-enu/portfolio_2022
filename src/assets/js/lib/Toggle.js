/* ==============================
		Drawer
	============================== */

export default function toggle(selector, target = "html") {
  // ボタンとターゲットを取得
  this.btn = document.querySelector(selector);
  this.target = document.querySelector(target);

  // selectorの5文字目から全部取り出す
  this.objectName = selector.substring(4);

  // メソッドの作成
  this.toggle = function () {
    // aria-expandedにtrueかfalseが入る
    const isExpanded = this.btn.getAttribute("aria-expanded") !== false;
    // aria-expanded属性を反転させる
    this.btn.setAttribute("aria-expanded", !isExpanded);

    this.target.classList.toggle(`is-${this.objectName}Active`);
  };

  this.btn.addEventListener("click", this.toggle.bind(this));
}
