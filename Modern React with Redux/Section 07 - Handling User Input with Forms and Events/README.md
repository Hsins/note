# Section 07 - Handling User Input with Forms and Events

## Table of Contents

- [Section 07 - Handling User Input with Forms and Events](#section-07---handling-user-input-with-forms-and-events)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] App Overview](#lecture-app-overview)
  - [[Lecture] Component Design](#lecture-component-design)
  - [[Lecture] Adding Some Project Structure](#lecture-adding-some-project-structure)
  - [[Lecture] Showing Forms to the User](#lecture-showing-forms-to-the-user)
  - [[Lecture] Adding a Touch of Style](#lecture-adding-a-touch-of-style)
  - [[Lecture] Creating Event Handlers](#lecture-creating-event-handlers)
  - [[Lecture] Alternate Event Handler Syntax](#lecture-alternate-event-handler-syntax)
  - [[Lecture] Uncontrolled vs Controlled Elements](#lecture-uncontrolled-vs-controlled-elements)
  - [[Lecture] More on Controlled Elements](#lecture-more-on-controlled-elements)
  - [[Lecture] Handling Form Submittal](#lecture-handling-form-submittal)
  - [[Lecture] Understanding 'this' In Javascript](#lecture-understanding-this-in-javascript)
  - [[Lecture] Solving Context Issues](#lecture-solving-context-issues)
  - [[Lecture] Communicating Child to Parent](#lecture-communicating-child-to-parent)
  - [[Lecture] Invoking Callbacks in Children](#lecture-invoking-callbacks-in-children)

## [Lecture] App Overview

在這一章節將探討以下的問題：

- 如何從用戶端取得反饋？
- 如何從第三方 API 或其他伺服器取得資料？
- 如何展示這些東西？

並將建構一個網頁應用讓使用者輸入資料，並根據資料從第三方 API 查詢圖片並渲染到頁面中。

## [Lecture] Component Design

對於整個應用，首先可以初步地劃分出兩個主要的組件：

- `SearchBar` 組件：讓用戶輸入查詢內容
- `ImageList` 組件：將取得的圖片渲染在頁面上

## [Lecture] Adding Some Project Structure

為了讓整個專案的資料夾更有結構體系，我們將 React 組件都放在 `./src/components` 資料夾中，並在 `index.js` 中透過如下的語句來引入：

```javascript
import App from "./components/App";
```

## [Lecture] Showing Forms to the User

首先創建 `SearchBar` 組件：

```jsx
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] Adding a Touch of Style

我們使用 [Semantic UI](https://semantic-ui.com/) 來替輸入框添加樣式，只需要將其樣式表檔案在 `index.html` 中載入之後，設置 HTML 元素的類別即可：

```jsx
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] Creating Event Handlers

在這一單元裡面要處理的是讓 `SearchBar` 組件在使用者進行輸入時的事件處理，我們添加一個 `onInputChange` 方法並在 `input` 元素監聽 `onChange` 事件來執行對應操作：

```jsx
import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] Alternate Event Handler Syntax

我們也可以透過 ES6 所提供的箭頭函數來改寫上一單元中的內容：

```jsx
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={e => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] Uncontrolled vs Controlled Elements

將組件進行重構，使元素從未被控制轉換成被控制的，也就是說將使用者輸入的內容以狀態進行儲存：

```jsx
import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] More on Controlled Elements

這裡有一個重要的概念是我們將資料存放在組件的狀態，而不是交由 DOM 來存放。除此之外，因為這樣的緣故所以我們會需要將 `<input>` 元素的 `value` 進行變更。

## [Lecture] Handling Form Submittal

在 HTML 的 `<form>` 進行提交時，預設的行為會將表單內的值傳送到後端伺服器進行處理，因此在填寫完表單按下 <kbd>Enter</kbd> 鍵之後會刷新頁面。由於我們的網頁應用將採用第三方 API 來處理，不具有自己的後端伺服器，所以必須禁止預設的行為：

```jsx
import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

## [Lecture] Understanding 'this' In Javascript

## [Lecture] Solving Context Issues

要處理關於 `this` 的問題，有三種常見的方式：

- 建構子方法 `constructor()`
- 改以箭頭函數撰寫方法
- 使用箭頭函數呼叫方法

## [Lecture] Communicating Child to Parent

我們在前面的課程中只有提及了組件間的資料可以透過狀態和屬性來進行傳遞，這樣的傳遞方式只能夠從父組件傳遞到子組件，如果要傳遞子組件的資料到父組件需要透過一些小技巧。

## [Lecture] Invoking Callbacks in Children

我們將會把 `App` 組件重構為類別組件：

```jsx
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
```