# Section 04 - Structuring Apps with Class-Based Components

## Table of Contents

- [Section 04 - Structuring Apps with Class-Based Components](#section-04---structuring-apps-with-class-based-components)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Class-Based Components](#lecture-class-based-components)
  - [[Lecture] Application Overview](#lecture-application-overview)
  - [[Lecture] Scaffolding the App](#lecture-scaffolding-the-app)
  - [[Lecture] Getting a Users Physical Location](#lecture-getting-a-users-physical-location)
  - [[Lecture] Resetting Geolocation Preferences](#lecture-resetting-geolocation-preferences)
  - [[Lecture] Handling Async Operations with Functional Components](#lecture-handling-async-operations-with-functional-components)
  - [[Lecture] Refactoring from Functional to Class Components](#lecture-refactoring-from-functional-to-class-components)
    - [Rules of Class Components](#rules-of-class-components)
    - [Implement a Class Component](#implement-a-class-component)

## [Lecture] Class-Based Components

我們在前面提過 React 組件（Component）其實透過 JavaScript 函數或類別生成 HTML 呈現內容給使用者，通常函數組件處理較為簡單的邏輯，而類別組件則處理較為複雜的狀況。使用類別組件有以下的優點：

- 便於代碼管理
- 可以使用 React 狀態系統（State System）來處理使用者輸入
- 理解生命週期（life cycle）事件

## [Lecture] Application Overview

在這一單元我們將要透過 React 構件來建置一個簡單的應用，將會讀取使用者的位置並決定月份，根據這些資料在頁面上顯示對應的資訊，下面是他的 **實物模型（Mockups）**：

<div align="center">
  <img src="https://i.imgur.com/rfTzU0d.png">
</div>

## [Lecture] Scaffolding the App

在這個項目中，有兩個主要的組件：

- `App`: Has code to determine location and month
- `SeasonDisplay`: Shows different text/icons based on props

## [Lecture] Getting a Users Physical Location

這一小節中我們透過 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) 來獲取使用者的位置：

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );

  return <div>Latitude: {}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Resetting Geolocation Preferences

實際上 Geolocation API 獲取使用者地址是需要權限的，倘若使用者拒絕存取位置時，會返回警告訊息。

## [Lecture] Handling Async Operations with Functional Components

瀏覽器訪問頁面時，經歷的事件是：

1. JS file loaded by browser
2. App component gets created
3. We call geolocation service
4. App returns JSX, gets rendered to page as HTML
5. ...
6. We get result of geolocation!

由於 Geolocation API 在獲取使用者位置時需要約三到五秒的時間，對於函數組件來說無法做到當獲取完成時再將資訊進行渲染，因此我們必須將代碼重構使用類別組件。

## [Lecture] Refactoring from Functional to Class Components

### Rules of Class Components

- Must be a JavaScript Class
- Must extend (subclass) `React.Component`
- Must define a `render` method that returns some amount of JSX

### Implement a Class Component

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```