# Section 18 - Intro to jQuery

## Table of Contents

- [Section 18 - Intro to jQuery](#section-18---intro-to-jquery)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] What is jQuery?](#lecture-what-is-jquery)
  - [[Lecture] Why Use jQuery?](#lecture-why-use-jquery)
  - [[Lecture] Including jQuery](#lecture-including-jquery)
  - [[Lecture] Note about jQuery](#lecture-note-about-jquery)
  - [[Lecture] Selecting with jQuery](#lecture-selecting-with-jquery)
    - [Selector in jQuery](#selector-in-jquery)
    - [Method: `.css()`](#method-css)
  - [[Lecture] Selector Exercise](#lecture-selector-exercise)
    - [Demand](#demand)
    - [Solution](#solution)
  - [[Lecture] Text and HTML](#lecture-text-and-html)
    - [Method: `.html()`](#method-html)
  - [[Lecture] Attr and Val](#lecture-attr-and-val)
  - [[Lecture] Manipulating Classes](#lecture-manipulating-classes)
    - [Method: `.addClass()`、`.removeClass()`、`.toggleClass()`](#method-addclassremoveclasstoggleclass)

## [Lecture] What is jQuery?

[jQuery](https://jquery.com/) 是一個支持許多 DOM 操作方法的 JavaScript **函數庫（library）**，所謂的函數庫就是其他的開發者所撰寫並可以直接引入到我們專案中使用的懶人包。jQuery 提供了以下功能：

- Select Elements
- Manipulate Elements
- Create Elements
- Add Event Listeners
- Animate Elements
- Add Effects
- Make HTTP Request (AJAX)

## [Lecture] Why Use jQuery?

近幾年前端發展迅速，原生瀏覽器所提供的 API 已經足夠使用，因此許多開發者認為並不需要為了操作 DOM 和事件…等額外學習 jQuery 的 API。同時由於前端框架 React、Angular、Vue…等的流行，直接操作 DOM 已經不是主流的開發模式，使用到 jQuery 的場合大大地減少，以下網站提供了大部分代替 jQuery 的寫法：

- [You Might not need jQuery](http://youmightnotneedjquery.com/)

而從另外的角度上來說，學習 jQuery 有其優點：

- 減少代碼量
- 跨瀏覽器的支援（IE8 和 IE9）
- 簡單易用
- AJAX

## [Lecture] Including jQuery

```htmlmixed
<script type="text/javascript" src="jquery.js"></script>
```

在引入時可以考慮下載後於本機目錄下存取，或是透過 CDN(Content Distributed Network) 存取，以下是提供了 CDN 的站點：


- [Google](https://developers.google.com/speed/libraries/devguide#jquery)
- [Microsoft](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0)
- [CDNJS](https://cdnjs.com/libraries/jquery/)
- [jsDelivr](https://www.jsdelivr.com/#!jquery)

## [Lecture] Note about jQuery

由於 Google Chrome 的更新，實際上操作與影片中所顯示的結果將有所不同。瀏覽器回傳的將是 jQuery 物件而非所選取到的元素，透過 `$('div')[0];` 才能夠訪問。對於要遍歷一組元素並記錄到控制台中，可以參考以下連結中的內容：

- [Show Elements when logging jQuery object in Chrome Dev Tools console?
](https://stackoverflow.com/questions/13552432/show-elements-when-logging-jquery-object-in-chrome-dev-tools-console/13567689#13567689)

```javascript
// Access actual DOM element
$("#someSingleDOMObjectSelector")[0];

// Log the content to console
console.log($("#someSingleDOMObjectSelector")[0]);

// Iterate over a collection of elements
$('.someMultipleDOMObjectSelector').each(function(){
  // console.log($(this)[0]); //or -->
  console.log(this);
});
```

## [Lecture] Selecting with jQuery

### Selector in jQuery

在 jQuery 中選擇元素的方式類似於直接使用 JavaScript 中的 `document.querySelectorALL()` 方法：

```javascript
// Select all tags with jQuery
$("myTags")

// Select all specific class
$(".myClass")

// Select element with ID
$("#bonus")

// Select all a tags inside of li's
$("li a")
```

### Method: `.css()`

在 jQuery 中提供了 `.css()` 方法來變更選定元素的樣式：

```javascript
// Select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

// We can also pass in an object with styles
var styles = {
  background: "pink",
  fontweight: "bold"
};

$("#special").css(styles);
```

## [Lecture] Selector Exercise

### Demand

- Correctly include jQuery
- Select all divs and give them a purple background
- Select the divs with class "highlight" and make them 200px wide
- Select the div with id "third" and give it a orange border
- **Bonus**: Select the first div only and change its font color to pink

### Solution

```javascript
// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first").css("color", "pink");
```

關於使用 jQuery 來變更 CSS 樣式表的操作方式，可以參考 [jQuery Api Document: css()](http://api.jquery.com/css/)。

## [Lecture] Text and HTML

在 jQuery 提供了 `.text()` 方法來獲取或改變指定元素中的文字：

```javascript
// Get the text inside element li
$("li").text();

// Change the text inside h1
$("h1").text("hello");
```

- [jQuery Api Document: text()](http://api.jquery.com/text/)

### Method: `.html()`

在 jQuery 提供了 `.html()` 方法來獲取或改變指定元素中的 HTML 代碼：

```javascript
// Get the html code inside element ul
$("ul").html();

// Change the html code inside li
$("li").text("<a href='http://www.google.com/'>Click me to Go to Google!</a>");
```

關於使用 jQuery 來變更 HTML 內容的操作方式，可以參考 [jQuery Api Document: html()](http://api.jquery.com/html/)。

## [Lecture] Attr and Val

在 jQuery 提供了 `.val()` 方法來獲取或改變指定元素中的值：

```javascript
// Get the value from the selected option in a dropdown
$( "select#foo option:checked" ).val();
 
// Get the value from a dropdown select directly
$( "select#foo" ).val();
 
// Get the value from a checked checkbox
$( "input[type=checkbox][name=bar]:checked" ).val();
 
// Get the value from a set of radio buttons
$( "input[type=radio][name=baz]:checked" ).val();
```

關於使用 jQuery 來存取指定元素值的操作方式，可以參考 [jQuery Api Document: val()](http://api.jquery.com/val/)。

## [Lecture] Manipulating Classes

### Method: `.addClass()`、`.removeClass()`、`.toggleClass()`

在 jQuery 也能夠對指定元素進行添加和刪去類別的動作：

```javascript
$('h1').addClass("correct");
$('h1').removeClass("correct");
$('h1').toggleClass("correct");
```