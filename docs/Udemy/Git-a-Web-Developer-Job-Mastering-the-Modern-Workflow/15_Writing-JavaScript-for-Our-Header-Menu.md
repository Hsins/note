---
pageClass: udemy
---

# Writing JavaScript for Our Header Menu

## [Lecture] How to Avoid jQuery Spaghetti

有時候我們會看到像是這樣的 jQuery Spaghetti：

```javascript
import $ from 'jquery';

class MobileMenu {
  constructor() {
    $(".site-header__menu-icon").click(function() {
      console.log("The top right icon was clicked.");
    })
  }
}

export default MobileMenu;
```

在上述的代碼中，我們透過一個 `$` 串接起了以下的工作：

1. Selecting elements from the DOM
2. Event handling
3. Defining functionality

這樣的撰寫方式在代碼越趨複雜之後不易除錯與修改，較佳的撰寫方式應如：

```javascript
import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
  }
}

export default MobileMenu;
```

注意此處的 `this.menuIcon.click(this.toggleTheMenu.bind(this));` 要透過 `bind()` 來綁定當前的物件。

## [Lecture] Adjusting Our Mobile Menu

略，詳見項目頁面。

## [Lecture] Animating Hamburger Menu Icon Into an "X"

略，詳見項目頁面。