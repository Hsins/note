# Section 10 - Using Ref's for DOM Access

## Table of Contents

- [Section 10 - Using Ref's for DOM Access](#section-10---using-refs-for-dom-access)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Grid CSS](#lecture-grid-css)
  - [[Lecture] Issues with Grid CSS](#lecture-issues-with-grid-css)
  - [[Lecture] Creating an Image Card Component](#lecture-creating-an-image-card-component)
  - [[Lecture] Accessing the DOM with Refs](#lecture-accessing-the-dom-with-refs)
  - [[Lecture] Accessing Image Height](#lecture-accessing-image-height)
  - [[Lecture] Callbacks on Image Load](#lecture-callbacks-on-image-load)
  - [[Lecture] Dynamic Spans](#lecture-dynamic-spans)
  - [[Lecture] App Review](#lecture-app-review)

## [Lecture] Grid CSS

在 2017 年之後，大部分的瀏覽器已經逐漸開始支援 CSS 的 Grid Layout 了，在接下來的內容中將透過網格系統進行排版。創建 `ImageList.css` 樣式表：

```css
.image-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}

.image-list img {
  width: 250px;
}
```

關於 Grid Layout 可以參考以下文章：

- [MDN | Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [TechBridge 技術共筆部落格 | 與 CSS Grid 的第一次接觸](https://blog.techbridge.cc/2017/02/03/css-grid-intro/)

## [Lecture] Issues with Grid CSS

雖然 CSS 中的 Grid Layout 能夠提供網格來進行排版布局，但有個問題在於無法有效地實現瀑布流的圖片展示方式。一個簡單的處理方式是替每一張圖片設置 `grid-row-end` 來決定圖片會占用幾個單位的行網格：

```css
.image-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 150px;
}

.image-list img {
  width: 250px;
  grid-row-end: span 2;
}
```

然而由於每一張圖片的長寬不一定，因此必須透過 JavaScript 來替每一張圖片計算該使用的大小。

## [Lecture] Creating an Image Card Component

為了解決圖片大小不一定的問題，我們創建一個 React 組件 `ImageCard.js` 來處理每一張圖片，在接下來的內容將由組件設定圖片大小。首先我們先將業務邏輯進行重構：

```jsx
import React from "react";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
```

## [Lecture] Accessing the DOM with Refs

我們的構想是透過 `ImageCard` 組件自行渲染圖片與調整大小，透過 DOM 取得圖片的高度並根據高度來設置組件狀態，也就是賦值 `grid-row-end`。在 React 中可以使用 `ref()` 函數來訪問 DOM 元素。

## [Lecture] Accessing Image Height

在建構函數中創建 `ref()` 對象，並存放在 `<img>` 的 `ref` 性質中： 

```jsx
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
```

## [Lecture] Callbacks on Image Load

在上面的代碼中會發現 `console.log(this.imageRef.current.clientHeight);` 陳述式所打印出來的值都是 `0`，這是因為我們在瀏覽器還沒取得 DOM 時就將其存入變數中，我們必須採用異步方式處理：

```jsx
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
```

## [Lecture] Dynamic Spans

```jsx
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
```

## [Lecture] App Review
