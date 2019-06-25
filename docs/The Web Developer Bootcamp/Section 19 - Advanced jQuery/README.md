# Section 19 - Advanced jQuery

## Table of Contents

- [Section 19 - Advanced jQuery](#section-19---advanced-jquery)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] jQuery Events: Click](#lecture-jquery-events-click)
  - [[Lecture] Note about typo in the next lecture](#lecture-note-about-typo-in-the-next-lecture)
  - [[Lecture] jQuery Events: Keypress](#lecture-jquery-events-keypress)
  - [[Lecture] jQuery Events: On](#lecture-jquery-events-on)
  - [[Lecture] jQuery Effects](#lecture-jquery-effects)

## [Lecture] jQuery Events: Click

在原生的 JavaScript 中，對於使用者與瀏覽器互動的事件處理，必須先對指定元素建立監聽器，針對指定的監聽行為觸發執行的動作，而在 jQuery 中，也提供了相對應的處理方式。首先是關於滑鼠點擊事件：

```javascript
// Prints when item with id "submit" is clicked
$("#submit").click(function() {
  console.log("Another Click");
});

// Alerts when ANY button is clicked
$("button").click(function() {
  alert("Someone clicked a button");
});

// Change the color of clicked button
$("button").click(function() {
  $(this).css("background", "pink");
});
```

## [Lecture] Note about typo in the next lecture

下面兩個小節中的影片有錯字，`$('input[type="text"')` 應該被括號恰當地包裹為 `$('input[type="text"]')`。

## [Lecture] jQuery Events: Keypress

在 jQuery 中有幾個容易被混淆的鍵盤事件，其中不同的按鍵對應不同的 [`keycode`](http://keycode.info/)，而以下事件監聽器有些許差異：

- [`.keypress()`](https://api.jquery.com/keypress/)
- [`.keyup()`](https://api.jquery.com/keyup/)
- [`.keydown()`](https://api.jquery.com/keydown/)

> Note that keydown and keyup provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown() and keyup(), but as 97 by keypress. An uppercase "A" is reported as 65 by all events. Because of this distinction, when catching special keystrokes such as arrow keys, .keydown() or .keyup() is a better choice.

```javascript
$("input[type='text']").keypress(function(event) {
  console.log(event.keyCode);
});
```

## [Lecture] jQuery Events: On

在 jQuery 中也提供了一個好用的 `.on()` 方法，比如要監聽 `click` 事件：

```javascript
// Prints when item with id `submit` is clicked
$("#submit").on("click", function() {
  console.log("Another click");
});

// Alerts when ANY button is clicked
$("button").on("click", function() {
  alert("Button Clicked!");
});
```

這個方法可以說是在實際使用過程中佔了絕大多數的事件方法，因為他可以監聽所有類型的事件：

```javascript
// Double Click Event
$("button").on("dblclick", function() {
  alert("DOUBLE CLICKED!");
});

// Drag Start Event
$("a").on("dragstart", function() {
  console.log("Drag Started!");
});

// Keypress Event
$("input[type='text']").on("keypress", function() {
  alert("Keypress in an input!");
});
```

除此之外，使用 `.on()` 與直接使用 `.click()` …方法有所不同：

- `.click()` …等方法 **只會對既有的元素添加監聽器**。
- `.on()` 方法 **將對未來可能出現的元素都添加監聽器**。

## [Lecture] jQuery Effects

jQuery 除了提供 DOM 選擇的功能之外，還有許多令人驚豔的 **效果（effect）**，比如說：[`.fadeIn()`](https://api.jquery.com/fadeIn/)、[`.fadeOut()`](https://api.jquery.com/fadeOut/)、[`.fadeToggle()`](https://api.jquery.com/fadeToggle/) …等：

```javascript
// Log "Fade Completed" when all element fadeout finish
$("button").on("click", function() {
  $("div").fadeOut(1000, function() {
    console.log("Fade Completed!");
  });
});

// Note that the difference:
// fadeOut: add the "display: none" to style
// remove(): delete the elements from file
$("button").on("click", function() {
  $("div").fadeOut(1000, function() {
    $(this).remove();
  });
});
```