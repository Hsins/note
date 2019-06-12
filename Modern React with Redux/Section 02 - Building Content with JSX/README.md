# Section 02 - Building Content with JSX

## Table of Contents

- [Section 02 - Building Content with JSX](#section-02---building-content-with-jsx)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] What is JSX?](#lecture-what-is-jsx)
  - [[Lecture] Converting HTML to JSX](#lecture-converting-html-to-jsx)
  - [[Lecture] Inline Styling with JSX](#lecture-inline-styling-with-jsx)
  - [[Lecture] Converting Styling to JSX Format](#lecture-converting-styling-to-jsx-format)
  - [[Lecture] Class vs ClassName](#lecture-class-vs-classname)
  - [[Lecture] Referencing JS Variables in JSX](#lecture-referencing-js-variables-in-jsx)
  - [[Lecture] Values JSX Can't Show](#lecture-values-jsx-cant-show)
  - [[Lecture] Finding Forbidden Property Names](#lecture-finding-forbidden-property-names)
  - [[Lecture] Exercise Introduction](#lecture-exercise-introduction)
  - [[Exercise] Test Your Knowledge: JSX Interpolation](#exercise-test-your-knowledge-jsx-interpolation)
  - [[Lecture] JSX Exercise Solution](#lecture-jsx-exercise-solution)

## [Lecture] What is JSX?

在 React 中建議使用 JSX 來描述使用者頁面，透過 JSX 這種 JavaScript 的語法擴展和 Babel 工具，可以使得我們很迅速並簡單地在 JavaScript 撰寫 HTML 代碼，並統一轉換成適當的 JavaScript 代碼。比如：

```javascript
// JSX
const App = () => {
  return <div>Hi There!</div>
};

// ES 5
var App = function App() {
  return React.createElement("div", null, "Hi There!");
};
```

## [Lecture] Converting HTML to JSX

我們先簡單地將 HTML 代碼直接包裹在 JSX 語法中，注意 `return` 關鍵字後方的內容如果要進行斷行建議加上左右括號：

```jsx
const App = () => {
  return (
    <div>
      <label class="label" for="name">Enter name: </label>
      <input id="name" type="text" />
      <button style="background-color: blue; color: white;">Submit</button>
    </div>
  )
};
```

上述這段代碼並不合乎 JSX 的語法規範，詳見下一則筆記。

## [Lecture] Inline Styling with JSX

```jsx
// HTML
<div style="background-color: red;"></div>
<div style="border: 1px solid red"></div>

// JSX
<div style={{ backgroundColor: 'red' }}></div>
<div style={{ border: '1px solid red' }}></div>
```

## [Lecture] Converting Styling to JSX Format

```jsx
// HTML
<button style="background-color: blue; color: white;">Submit</button>

// JSX
<button style={{ backgroundColor: 'blue', color: 'white' }}>
  Submit
</button>
```

這邊有個小建議是在撰寫 JSX 時，關於單引號與雙引號約定成俗的慣例：

- Use single quote for any non JSX properties
- Use double quote for all of the JSX properties

## [Lecture] Class vs ClassName

```jsx
// HTML
<label class="label" for="name">Enter name: </label>

// JSX
<label className="label" for="name">Enter name: </label>
```

在 JSX 中建議使用 `className` 來替 HTML 元素宣告類別，因為 `class` 自 ES6 開始已經為 JavaScript 的關鍵字。

## [Lecture] Referencing JS Variables in JSX

在 JSX 中十分方便的是可以使用大括號 `{}` 參照到 JavaScript 變數：

```jsx
const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label class="label" for="name">Enter name: </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  )
};
```

或者是 JavaScript 函數：

```jsx
function getButtonText() {
  return 'Click on me!';
};

const App = () => {
  return (
    <div>
      <label class="label" for="name">Enter name: </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  )
};
```

## [Lecture] Values JSX Can't Show

雖然 JSX 可以參照並渲染大部分 JavaScript 變數中所儲存的內容，比如：字串、數字與列表…等，但切記 **JSX 無法將 JavaScript 物件渲染成文字**，這會提示錯誤：

```
Objects are not valid as a React child. If you meant to render a collection of children, use an array instead.
```

但依然可以參照 JavaScript 物件，只要不將其渲染成頁面上的文字。

## [Lecture] Finding Forbidden Property Names

在前面的課程中只簡單地列出了最常見且應該避免的 HTML 與 JSX 差異，但仍然有許多 JSX 關鍵字衝突是沒有被提及的，建議在開發過程中可以時常檢視開發者工具的 Console 訊息是否有跳出警告。

## [Lecture] Exercise Introduction

略。

## [Exercise] Test Your Knowledge: JSX Interpolation

The `App` function below returns some JSX that has a hardcoded value for the current time. Chances are that the time isn't correct.

- Use the `getTime` function to make sure the `App` component shows the current time!

Remember, you can show a javascript variable - or even the result of a function call - by using curly braces like so: `<div>{myJSVariable}</div>`.

```jsx
<script type="text/babel" data-presets="env,react">
  function getTime() {
    return (new Date()).toLocaleTimeString()
  }

  // Creates a functional component
  const App = () => {
    return (
      <div>
        <div>Current Time:</div>
        <h3>12:05 PM</h3>
      </div>
    );
  }

  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

## [Lecture] JSX Exercise Solution

只需要將代碼中的時間改為 `getTime()` 函數傳遞即可：

```jsx
<script type="text/babel" data-presets="env,react">
  function getTime() {
    return (new Date()).toLocaleTimeString()
  }

  // Creates a functional component
  const App = () => {
    return (
      <div>
        <div>Current Time:</div>
        <h3>{getTime()}</h3>
      </div>
    );
  }

  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```