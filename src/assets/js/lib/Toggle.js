/* ==============================
		Drawer
	============================== */

// export default function toggle(selector, target = "html") {
//   // ボタンとターゲットを取得
//   this.btn = document.querySelector(selector);
//   this.target = document.querySelector(target);

//   // selectorの5文字目から全部取り出す
//   this.objectName = selector.substring(4);

//   // メソッドの作成
//   this.toggle = function () {
//     // aria-expandedにtrueかfalseが入る
//     const isExpanded = this.btn.getAttribute("aria-expanded") !== false;
//     console.log(isExpanded);
//     // aria-expanded属性を反転させる
//     this.btn.setAttribute("aria-expanded", !isExpanded);

//     this.target.classList.toggle(`is-${this.objectName}Active`);
//   };

//   this.btn.addEventListener("click", this.toggle.bind(this));
// }

export default class Toggle {
  constructor(selector, target = "html") {
    this.btn = document.querySelector(selector);
    this.target = document.querySelector(target);

    // 5文字目から取得
    this.objectName = selector.substring(4);

    // クリックでtoggle関数を実行
    this.btn.addEventListener("click", this._toggle.bind(this));
  }

  // メソッド作成
  _toggle() {
    // aria-expanded属性取得
    const isExpanded = this.btn.getAttribute("aria-expanded") !== "false";
    // 属性を変更
    this.btn.setAttribute("aria-expanded", !isExpanded);

    this.target.classList.toggle(`is-${this.objectName}Active`);
  }
}
