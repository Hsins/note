# Section 15 - DOM Manipulation

## Table of Contents

- [Section 15 - DOM Manipulation](#section-15---dom-manipulation)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Note About DOM Manipulation Lectures](#lecture-note-about-dom-manipulation-lectures)
  - [[Lecture] Introduction to the DOM](#lecture-introduction-to-the-dom)
  - [[Lecture] Defining the DOM](#lecture-defining-the-dom)
  - [[Lecture] Select and Manipulate](#lecture-select-and-manipulate)
    - [Change the `<h1>` color](#change-the-h1-color)
    - [Change the `<body>` background color every second](#change-the-body-background-color-every-second)
  - [[Lecture] Note about UI changes in new versions of Chrome](#lecture-note-about-ui-changes-in-new-versions-of-chrome)
  - [[Lecture] Important Selector Methods](#lecture-important-selector-methods)
    - [`document.getElementById()`](#documentgetelementbyid)
    - [`document.getElementsByClassName()`](#documentgetelementsbyclassname)
    - [`document.getElementsByTagName()`](#documentgetelementsbytagname)
    - [`document.querySelector()`](#documentqueryselector)
    - [`document.querySelectorAll()`](#documentqueryselectorall)
  - [[Lecture] Selector Exercise](#lecture-selector-exercise)
    - [Demand](#demand)
    - [Solution](#solution)
  - [[Lecture] Note about next lecture (Manipulating Style):](#lecture-note-about-next-lecture-manipulating-style)
  - [[Lecture] Manipulating Style](#lecture-manipulating-style)
    - [The `style` property](#the-style-property)
    - [The Alterative: define the class in CSS files and add class to selected element](#the-alterative-define-the-class-in-css-files-and-add-class-to-selected-element)
    - [The method of `classList`](#the-method-of-classlist)
  - [[Lecture] Manipulating Text and Content](#lecture-manipulating-text-and-content)
    - [The `textContent` property](#the-textcontent-property)
    - [The `innerHTML` property](#the-innerhtml-property)
  - [[Lecture] Manipulating Attributes](#lecture-manipulating-attributes)
  - [[Lecture] Note about changing the Google logo in next lecture](#lecture-note-about-changing-the-google-logo-in-next-lecture)
  - [[Lecture] Playing With Google Code Along](#lecture-playing-with-google-code-along)
    - [Change and Resize the Logo Picture](#change-and-resize-the-logo-picture)
    - [Change Links color and background](#change-links-color-and-background)

## [Lecture] Note About DOM Manipulation Lectures

在透過 JavaScript 操作 DOM 來選擇 HTML 元素時，執行 JavaScript 程式碼之前必須先將 HTML 頁面載入，因此必須要將 JavaScript 程式碼放置在 HTML 文件的底部，也就是 `</body>` 標前之前：

```htmlmixed
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <h1>Some HTML Code Here</h1>
 
  <script src="scriptfile.js"></script>
</body>
</html>
```

## [Lecture] Introduction to the DOM

透過 JavaScript 來選擇並操作 HTML 元素，可以完成許多事情，比如：

- Games
- Scrolling Effects
- Dropdown Menus
- Form Validations
- Interactivity
- Animations

族繁不及備載，在課堂中 Colt 介紹了由 [Jono Brandel](http://jonobr1.com/) 所創作的 [Patatap](http://patatap.com/) 網站，利用操縱 DOM 在按下鍵盤上 a-z 的字母時，轉換聲音並加上影像驅動。

## [Lecture] Defining the DOM

**文件物件模型（DOM, Document Object Model）** 是一種瀏覽器、平台和語言的接口。在瀏覽器渲染 HTML 的同時，會將所有的 HTML 標籤轉換成我們可以操縱的 JavaScript 物件，並提供了一個如下圖所示的文件（樹）狀結構表示：

<p align="center">
  <img src="https://i.imgur.com/ihMGYYQ.png">
</p>

在 Chrome 的控制台中，可以使用 `console.dir(document)` 來查看文件的 DOM 及其屬性和內容：

<p align="center">
  <img src="https://i.imgur.com/R2fY5wt.png">
</p>

## [Lecture] Select and Manipulate

### Change the `<h1>` color

```javascript
var h1 = document.querySelector("h1");        // SELECT
h1.style.color = "pink";                      // Manipulate
```

### Change the `<body>` background color every second

```javascript
var body = document.querySelector("body");    // SELECT
var isBlue = false;

setInterval(function() {                      // Manipulate
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);
```

## [Lecture] Note about UI changes in new versions of Chrome

## [Lecture] Important Selector Methods

DOM 提供了各式各樣的 **選擇器（selector）**，在這個單元中將要介紹的是較為常被使用的：

### `document.getElementById()`

```javascript
// Takes a string argument and returns the one element with
// a matching ID
var tag = document.getElementById("highlight");
```

### `document.getElementsByClassName()`

```javascript
// Takes a string argument and returns a list of elements that
// have a much class
var tags = document.getElementsByClassName("bolded");
```

### `document.getElementsByTagName()`

```javascript
// Returns a list of all elements of a given tag name, like "li"
// or "h1"
var tags = document.getElementsByTagName("li");
```

### `document.querySelector()`

```javascript
// Returns the "first" element that matches a given CSS-style selector
// Select by ID
var tag = document.querySelector("#highlight");

// // Select by class
var tag = document.querySelector(".bolded");

// Select by tag
var tag = document.querySelector("h1");
```

### `document.querySelectorAll()`

```javascript
// Returns "a list of elements" that matches a given CSS-style selector
// // Select by class
var tag = document.querySelectorAll(".bolded");

// Select by tag
var tag = document.querySelectorAll("h1");
```

## [Lecture] Selector Exercise

### Demand

Come up with 4 different ways to select the first `<p>` tag:

```htmlmixed
<!DOCTYPE html>
<html>
<head>
  <title>My title</title>
</head>
  <body>
    <h1>I am an h1!</h1>
    <p id="first" class="special">Hello</p>
    <p class="special">Goodbye</p>
    <p>Hi Again</p>
    <p id="last">Goodbye Again</p>
  </body>
</html>
```

### Solution

```javascript
// getElementById()
document.getElementById("first");

// getElementsByClassName() with index [0]
document.getElementsByClassName("special")[0];

// getElementsByTagName() with index [0]
document.getElementsByTagName("p")[0];

// querySelector()
document.querySelector("#first");          // with ID selector
document.querySelector(".special");        // with class selector
document.querySelector("p");               // with tag selector
document.querySelector("h1 + p");          // with tag selector (adjacent)

// querySelectorAll() with index [0]
document.querySelectorAll(".special")[0];  // with class selector
document.querySelectorAll("p")[0];         // with tag selector
```

## [Lecture] Note about next lecture (Manipulating Style):


## [Lecture] Manipulating Style

### The `style` property

物件 DOM 提供了 `style` 屬性，透過變更這些屬性值可以來改動頁面元素的風格：

```javascript
// SELECT
var tag = document.getElementById("highlight");

// Manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

雖然可以透過變更 `style` 屬性的屬性值來改動頁面元素風格，但並不建議那麼做：

> It is recommended for styles to be defined in a separate file or files. The style property allows for quick styling, for example for testing purpose.

### The Alterative: define the class in CSS files and add class to selected element

如下圖，基於 **關注點分離 (SOCs, Separation of Concerns）** 的原則，我們一般希望 HTML/CSS/JavaScript 能夠各司其職，分別處理各自的主要工作來降低工程的複雜度，但又保留部分的交集：


<p align="center">
  <img src="https://i.imgur.com/yqEH5OZ.png">
</p>

因此建議不要直接透過 JavaScript 來變更 `style` 屬性的屬性值，而是定義一個 CSS 的 **類別（class）** 並透過 JavaScript 決定其套用與否：

```javascript
// INSTEAD of this:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
```

在 CSS 文件中預先定義好類別：

```css
/* DEFINE A CLASS in CSS */
.some-class {
  color: blue;
  border: 10px solid red;
}
```

再透過 JavaScript 添加類別到指定元素：

```javascript
var tag = document.getElementById("highlight");

// Add the new class to the selected element
tag.classList.add("some-class");
```

### The method of `classList`

屬性 `classList` 是一個 **唯讀（read-only）** 屬性，將會以列表形式返回指定元素的類別，以下為該屬性常用的方法：

```javascript
var tag = document.querySelector("h1");

// Add a class to the selected element
tag.classList.add("another-class");

// Remove a class from the selected element
tag.classList.remove("another-class");

// Toggle a class from the selected element
tag.classList.toggle("another-class");
```

值得注意的是屬性 `classList` 並不是 **陣列（array）** 型態，因此必須使用 `.add()`、`.remove()` …方法，而不能夠使用 `.push()`…等。

## [Lecture] Manipulating Text and Content

除了可以透過 `style` 屬性來變更元素的顯示風格之外，DOM 也提供了其它的屬性來變更文字內容：

### The `textContent` property

```javascript
// SELECT
var tag = document.querySelector("p");

// Retrieve the textContent
tag.textContent;

// Alter the textContent
tag.textContent = "Hello World!"
```

值得注意的是 `textContent` 屬性會以 **字串（string）** 型態回傳指定元素中的文字，但 **並不包含在其中的 HTML 標籤**。

### The `innerHTML` property

```javascript
// SELECT
var tag = document.querySelector("p");

// Retrieve the innerHTML
tag.innerHTML;
```

和 `textContent` 屬性類似的還有 `innerHTML` 屬性，但它會以 **字串（string）** 型態回傳指定元素中的內容，並且 **包含其中的 HTML 標籤**。

## [Lecture] Manipulating Attributes

若要對指定元素標籤中的 **屬性（attribute）** 進行存取與更動，則必須使用到 `getAttribute()` 和 `setAttribute` 方法：

```javascript
// Example: Change the link href
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "https://github.com/");

// Example: Change the image src
var img = document.querySelector("img");
img.getAttribute("src");
img.setAttribute("src", "./figure.png");
```

## [Lecture] Note about changing the Google logo in next lecture

- 由於 Google 首頁的 HTML 檔案和錄製影片時有所差異，若要更改其 logo 時，必須使用 `srcset` 屬性而非影片中所使用的 `src` 屬性。
- 訪問 Google 首頁時，伺服器會根據所在的國家地點重新導向，可以改為造訪：[https://www.google.com/ncr](https://www.google.com/ncr)

## [Lecture] Playing With Google Code Along

### Change and Resize the Logo Picture

```javascript
// SELECT
var logo = document.querySelector("#hplogo");

// Change Logo
logo.setAttribute("srcset", "https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg");

// Resize
logo.style.width = "200px";
logo.style.height = "100px";

// Add border
logo.style.border = "2px solid purple";
```

### Change Links color and background

```javascript
// SELECT
var links = document.getElementarysByTagName("a");

// Change the links Style
for (var i = 0; i < links.length; i++){
  links[i].style.background = "pink";
  links[i].style.border = "1px dashed purple";
  links[i].style.color = "orange";
}
```
