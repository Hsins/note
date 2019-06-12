# Section 09 - Building Lists of Records

## Table of Contents

- [Section 09 - Building Lists of Records](#section-09---building-lists-of-records)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Rendering Lists](#lecture-rendering-lists)
  - [[Lecture] Review of Map Statements](#lecture-review-of-map-statements)
  - [[Lecture] Rendering Lists of Components](#lecture-rendering-lists-of-components)
  - [[Lecture] The Purpose of Keys in Lists](#lecture-the-purpose-of-keys-in-lists)
  - [[Lecture] Implementing Keys in Lists](#lecture-implementing-keys-in-lists)

## [Lecture] Rendering Lists

在這一單元要處理的是將 API 所獲取的圖片展示出來，首先創建展示圖片用的 `ImageList` 組件：

```jsx
import React from "react";

const ImageList = props => {
  console.log(props.images);
  return <div>ImageList</div>;
};

export default ImageList;
```

## [Lecture] Review of Map Statements

主要回顧了 JavaScript 中陣列的 `.map()` 方法，詳見 [MDN | Array​.prototype​.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。

## [Lecture] Rendering Lists of Components

將 `porps.images` 陣列中的圖片路徑透過 `map()` 方法轉換為 HTML 代碼：

```jsx
import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    return <img src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
```

## [Lecture] The Purpose of Keys in Lists

前一小節的代碼雖然能夠順利地展示圖片在頁面中，但打開控制台會發現以下訊息：

```
Warning: Each child in a list should have a unique "key" prop.
```

這邊要稍微提及一下 `key` 的概念。對於 React 來說，會檢查虛擬 DOM 和實際 DOM 之間的差異，來判斷是否要更新頁面進行渲染，對於頁面中元素存在與否判斷依據，是根據不同元素的 `key` 值所決定。

## [Lecture] Implementing Keys in Lists

我們將每個 `key` 設置為原來陣列中圖片的 `image.id`：

```jsx
import React from "react";

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
```