---
pageClass: udemy
---

# Hello React

## Section Intro: Hello React

第一部份要實作的 Proejct 是名為 Indecision 的應用，關於最後的成品和代碼可以詳見以下連結：

- [Hekuro | Indecision](http://indecision.mead.io/)
- [Github | andrewjmead/react-course-2-indecision-app](https://github.com/andrewjmead/react-course-2-indecision-app)

## Setting up a Web Server

在本地端進行開發經常需要搭建臨時的伺服器，在過往通常經常透過 `http-server` 來完成，近年來流行在修改文件時自動刷新瀏覽器內容，漸漸轉而使用 `live-server`：

```bash
# [Option 1] Install live-server with yarn
yarn global add live-server

# [Option 2] Install live-server with npm
npm install -g live-server

# Run live-server
live-server public
```

## Hello React

### React / React-Dom

在 `<body>` 標籤內透過 [CDN](https://reactjs.org/docs/cdn-links.html) 服務加載 React 和 React-Dom：

```html
<!-- Import React / React-Dom -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

### JSX - JavaScript XML

開發 React 時的核心語法 JSX 是 JavaScript 語言的擴展，實際使用時我們透過 JSX 構建 React 部件再透過 `ReactDom.render(element, container, [callback])` 方法進行渲染：

```jsx
var template = <p>This is JSX from app.js!</p>
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);
```

### Babel

由於各大瀏覽器原生並不支持 JSX 語法的渲染，在開發過程中我們必須透過 JavaScript 的編譯器 [Babel](https://babeljs.io/) 來將 JSX 編譯成原生的 JavaScript 語法：

```javascript
// JSX Syntax
var template = <p id='words'>This is JSX from app.js!</p>

// ES 2015
'use strict';

var template = React.createElement(
  'p',
  { id: 'words' },
  'This is JSX from app.js!'
);
```

## Setting up Babel

### Install Babel

在這一小節我們要在本機端上建置 Babel 工具，好讓我們在開發過程中只需要專注在 JSX 語法上：

```bash
# [Option 1] Install babel with yarn
yarn global add babel-cli@6.24.1

# [Option 2] Install live-server with npm
npm install -g babel-cli@6.24.1
```

### Setup Preset Environment

透過 `yarn install` 可以創建並安裝一個 Project 所需要的依賴套件庫：

```bash
yarn init
yarn add babel-preset-react babel-preset-env
```

### Using Babel

```bash
# Basic babel command
babel src/app.js --out-file="public/scripts/app.js" --presets=env,react

# babel watch
babel src/app.js --out-file="public/scripts/app.js" --presets=env,react --watch
```

## Exploring JSX

### Visual Studio Code Plugin

- **Babel ES6/ES7**
- **Path Intellisense** 可以在輸入路徑的時候，自動地補齊路徑。

### More code in JSX

```jsx
var template = (
  <div>
    <h1>Indecision Apps</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
```

- 如果在一個變數中存放超過一個以上的標籤時，必須放置在一個主要的 `<div>` 標籤內。
- 可以整理成跨行的形式方便閱讀，但記得前後要加上括弧 `()`。

## JSX Expressions

```jsx
var user = {
  name: 'John',
  age: 26,
  location: 'Taiwan'
};

var template = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
```

- JavaScript 的變數可以透過花括號 `{}` 配合變數名稱，傳遞到 JSX 語法結構中使用。

## Conditional Rendering in JSX

條件判斷在程式開發中具有舉足輕重的地位，比如說在撰寫登入頁面時要根據輸入的帳號密碼是否正確來給予不同的回應，這一小節的內容中將介紹在 JSX 中經常使用到的邏輯判斷結構：

### if-else

```jsx
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

var template {
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
}
```

- JSX 語法可以作為回傳值使用。
- 函數呼叫可以透過花括號 `{}` 傳遞。

### Conditional (Ternary) Operator

條件三元運算子也是一個經常使用到的條件式，語法形式為：

`[布林運算式] ? [回傳值（條件為真）] : [回傳值（條件為假）]`

比如下列代碼將會判斷 `user.name` 是否有值，若有則回傳其值，否則返回字串 `'Anonymous'`：

```jsx
var template = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);
```

### Logical Operators

| Operator | Usage | Description |
| :--: | :--: | :-- |
| AND（`&&`） | `運算式1 && 運算式2` | 假如 `運算式1` 可以被轉換成 `false` 的話，回傳 `運算式1`; 否則回傳 `運算式2`。 |
| OR（`\|\|`） | `運算式1 \|\| 運算式2` | 假如 `運算式1` 可以被轉換成 `true` 的話，回傳 `運算式1`; 否則回傳 `運算式2`。 |
| NOT（`!`） | `!運算式` | 假如單一個運算元能被轉換成 `true` 時，回傳 `false`，不然回傳 `true`。 |

JavaScript 中的邏輯運算子如上所示，透過邏輯運算子也可以達成條件判斷的需求。比如在下述代碼中只有當 `user.age` 存在且滿足 `user.age >= 18` 時才會回傳值，否則將會返回 `false`：

```jsx
var template = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
```

## ES6 Aside: const and let

Javascript 在 ES6 中新增了 `let` 和 `const` 用以進行變數宣告，在此之前的 JavaScript 中並沒有區塊作用域的概念，常態性地使用 `var` 來宣告所有變數容易造成變數覆蓋或循環變數洩漏的狀況。以下簡單說明差異，更詳細的內容可以查看 [阮一峰 | ECMAScript 6 入門](http://es6.ruanyifeng.com/#docs/let)。

### `var`

```javascript
// 使用 var 進行宣告的變數可以重新宣告，可以重新赋值
var nameVar = 'Andrew';
var nameVar = 'Mike';                  // 可以重新宣告
nameVar = 'Mike';                      // 可以重新賦值
console.log('nameVar: ', nameVar);     // nameVar: Mike
```

- `var` 存在變數提升（hosting）的現象，也就是變數可以在宣告之前被使用，其值為 `undefined`。

### `let`

```javascript
// 使用 let 進行宣告的變數不能重新宣告，可以新赋值
let nameLet = 'Jane';
let nameLet = 'Judy';                  // 不能重新宣告
nameVar = 'Judy';                      // 可以重新賦值
console.log('nameLet: ', nameLet);     // nameLet: Judy
```

- 使用 `let` 所宣告的變數只在塊級作用域内有效。
- `let` 所宣告的變數一定要在宣告之後使用，否則將報錯。

### `const`

```javascript
// 使用 const 進行宣告的變數不能重新宣告，可以新赋值
const nameConst = 'John';
const nameConst = 'Jack';              // 不能重新宣告
nameConst = 'Jack';                    // 不能重新賦值
console.log('nameConst: ', nameConst); // nameConst: John
```

## 014, ES6 Aside: Arrow Functions

Javascript 在 ES6 中加入了具備 **lambda 表達式（lambda expression）** 概念的 **箭頭函數（arrow function）**。透過這樣的 lambda 表達式可以簡化函數定義的結構，並且所有的箭頭函數都是匿名函數：

```javascript
// Regular Function
const squre = function (x) {
  return x * x;
};

// Arrow Function
const square = (x) => {
  return x * x;
};

// Arrow Function (implicit return)
const square = (x) => x * x;
```

## ES6 Aside: Arrow Functions Part II

### Arrow Functions and `arguments`, `this`

在這一小節介紹一些 Arrow Functions 的特性：

1. 在 Arrow Functions 中不再綁定有 `arguments` 物件：

```javascript
// arguments object, bound with regular function
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

// arguments object, no longer bound with arrow function
const add = (a, b) => {
  console.log(arguments);    // Would be error
  return a + b;
};
```

2. 在 Arrow Functions 中不再綁定 `this`：

```javascript
// `this`, bound with regular function
const user = {
  name: 'Andrew',
  cities: ['Taipei', 'Taichung', 'Hualian'],
  printPlacesLived: function () {
    this.cities.forEach(function (city) {
      console.log(this.name + 'has lived in ' + city);
    });
  }
}

user.printPlacesLived();

// `this`, not bound with arrow function
const user = {
  name: 'Andrew',
  cities: ['Taipei', 'Taichung', 'Hualian'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + 'has lived in ' + city);
    });
  }
}

user.printPlacesLived();
```

### Array Methods: `forEach()`, `map`

1. `forEach()` 方法是陣列方法中最單純的一個，不會額外回傳值，只單純執行每個陣列內的物件或值：

```javascript
// forEach()
const user = {
  name: 'Andrew',
  cities: ['Taipei', 'Taichung', 'Hualian'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + 'has lived in ' + city);
    });
  }
}

user.printPlacesLived();
```

2. 使用 `map()` 方法時需要回傳值，他會透過函數內所回傳的值組合成一個陣列，若不回傳則返回 `undefined`：

```javascript
// map()
const user = {
  name: 'Andrew',
  cities: ['Taipei', 'Taichung', 'Hualian'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(user.printPlacesLived());
```

## Events and Attributes

### Supported HTML Attributes

```jsx
let counts = 0;
const someID = 'my-ID'

const template = (
  <div>
    <h1>Count: {counts}</h1>
    <button id={someID} className="button">+1</button>
  </div>
);
```

- 在 JSX 語法中並不是所有的 HTML 屬性都可以支援，比如 `class` 在 JavaScript 是保留字，因此在 JSX 語法中必須使用 `className` 代替，關於支援的屬性可以在 [React | All Supported HTML Attributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) 查看。
- 同樣地，此處也可以透過花括號 `{}` 來將變數傳遞進去。

### Events

使用者進行交互是網頁應用十分重要的一環，通常透過對特定的 **事件（event）** 呼叫不同的函數來完成：

```jsx
let counts = 0;
const addOne = () => {
  console.log('addOne');
}
const template = (
  <div>
    <h1>Count: {counts}</h1>
    <button onClick={addOne}>+1</button>
  </div>
);
```

## Manual Data Binding

React 採用虛擬 DOM 機制使得渲染頁面時只會進行最小的更動，在下面的範例中為了讓點擊按鈕改變變數的結果渲染在頁面上，我們將 React 組件和 `ReactDOM.render()` 方法放置在一個函數內，每次點擊都呼叫這個函數來更新頁面內容：

```jsx
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

// Initialization
renderCounterApp();
```

## Forms and Inputs

### `onSubmit` Event

在這一小節要介紹的是透過提交 `<form>` 事件來獲取使用者的輸入，其中關於 React 中的事件可以在 [React | SyntheticEvent](https://reactjs.org/docs/events.html) 頁面查看。

### `preventDefault()` Method and event object

對 `<form>` 標籤添加提交事件監聽器，當提交被觸發時會返回一個 **事件物件（event object）**，透過該物件可以取得相關的變數。值得一提的是當表單被提交時，預設會將文本框中的數值提交並刷新頁面，因此在此處必須添加 `preventDefault()` 方法來避免原本動作執行：

```jsx
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  renderOnFormSubmit();
}
```

## Arrays in JSX

在 JSX 中的陣列通常並不會拿來直接使用，而是透過陣列的 `map()` 方法來構造回傳值：

```jsx
app.options.map((option) => <li key={option}>{option}</li>)
```

## Picking an Option

### Picking Function

隨機從陣列中挑選出一個返回，我們可以使用 `Math.random()` 返回一個 0 到 1 之間數字，再乘上陣列長度 n 並使用 `Math.floor()` 向下取整可以得到介於 0 到 (n - 1) 的數：

```jsx
const onMakeDecision = () {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}
```

### Disable Button when no options

在這邊有一個小技巧是將 `<button>` 標籤的 `disable` 屬性設置為 `{app.options.length === 0}`，這樣每當陣列中沒有儲存元素時，按鈕呈現不可點擊的狀態：

```jsx
<button disable={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
```

## Build It: Visibility Toggle
