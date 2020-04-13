# Section 01 - Let's Dive In!

## [Lecture] How to Get Help

有三種方式可以詢問問題：

1. 使用 Udemy 的問題討論區
2. 透過 Twitter 聯繫，講師的帳號為 `@ste_grider`
3. 透過 Email 聯繫，講師的信箱為 `ste.grider@gmail.com`

## [Lecture] Our First App

在這一小節 Stephen 提供了簡單的 React 專案 [React Starter](https://codepen.io/sgrider/pen/yRWZEq) 進行演示。完成的 JavaScript 部分代碼如下：

**JavaScript**

```javascript
function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
}

class App extends React.Component {
  state = {styleOne: {}, styleTwo: {}};

  onMouseMove = (event) => {
    this.setState({
        styleOne: transform(-event.clientX / event.clientY),
        styleTwo: transform(event.clientX / event.clientY)
    });
  }

  render() {
    return (
      <div onMouseMove={this.onMouseMove}>
          <div className="panel" style={this.state.styleOne}/>
          <div className="panel" style={this.state.styleTwo}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
```

## [Lecture] CodePen Solution!

如果沒有正確顯示，通常最多人犯錯的地方是：

- 必須使用 `ReactDom.render` 而非 `ReactDOM.render`
- `render()` 函數後的 JSX 語法必須使用 `()` 括起來

## [Lecture] Critical Questions!

在這一單元要來回答幾個常見的問題：

- What is React and its purpose?
  - React is a JavaScript library
  - React's ultimate purpose is to show content (HTML) to users and handle user interaction
- Why didn't we have to use Redux to make that app?
  - React can work by itself
  - But it can also work with a tremendous variety of other libraries, packages, servers and databases
- What was that `class` thing?
  - A JavaScript `class`
  - React **Components** are made using either JavaScript functions or classes
- What was the HTML looking stuff?
  - JSX
  - It looks like HTML and can be placed in JavaScript code. Determines the content of our React app just like normal HTML.
- How did the screen change when we moved the mouse?
  - An event handler
  - Event handlers are used to detect user interaction and respond to it
- Why did we add two libraries `react` and `reactDom`?
  - React is split into two separate libraries
  - `React` knows that a component is and how to make components work together
  - `ReactDOM` knows how to take a component and make it show up in the DOM

## [Lecture] Installing Node JS

在前面的小專案使用了 [Codepen](https://codepen.io/) 來撰寫，但實際上較複雜的專案還是會在本機端上進行編程，為此我們必須在電腦上安裝好 [node.js](https://nodejs.org/en/) 環境。在官網安裝好後可以打開終端機，檢查是否已安裝好：

```bash
# Check the version of node
$ node -v
```

## [Lecture] Generating a React Project

### Install create-react-app by npm

在後續的課程我們會透過 `create-react-app` 腳手架工具來創建 React 專案，在安裝好 node.js 之後，可以在終端機中透過 npm 套件管理工具進行安裝：

```bash
# Install create-react-app
$ npm install -g create-react-app
```

在命令中的 `-g` 代表安裝到全局，這樣便可以直接在終端機執行命令。

### Create our first React app

我們可以透過以下命令使用 create-react-app 初始化一個名為 `jsx` 的專案：

```bash
# Create react app
$ create-react-app jsx

# [Alternative] Run create-react-app without install it
$ npx create-react-app jsx
```

在 React 的官方文件可以看到上述的第二條命令，差別在於可以不需要先透過 npm 套件安裝就直接執行，但缺點是在過於老舊的 node 版本中不能使用。

## [Lecture] Why Create React App?

這裡常有的一個問題是為什麼較複雜的專案要透過如 create-react-app 這樣的腳手架工具來構建呢？為什麼不簡單地使用 CodePen 就好了呢？如果翻閱一下剛剛透過 `create-react-app` 命令初始化專案資料夾時的終端機紀錄：

```
Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

+ react-dom@16.8.4
+ react@16.8.4
+ react-scripts@2.1.8
added 1838 packages from 718 contributors and audited 36231 packages in 81.356s
found 63 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

可以從紀錄中發現為了初始化這個專案，腳手架工具替我們安裝了一千多個套件，這些套件包含了 `webpack`、`babel` 和 `Dev server`…等。因為在現代的網頁開發中，必須顧及不同使用者所使用的不同瀏覽器，由於 JavaScript 的標準不斷推陳出新，並不是所有的瀏覽器都能夠完全支援新的特性與語法，因此需要透過 [babel](https://babeljs.io/) 工具來替我們轉換為適當的版本來適應不同瀏覽器。

## [Lecture] Exploring a Create-React-App Project

這一小節介紹了一個 create-react-app 初始化專案的文件夾的架構：

```
.
├── src/                Folder where we put all the source code we write
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
├── public/             Folder that stores statics files, like images
│   ├── index.html
│   └── favicon.ico
├── node_modules/       Folder that contains all of our project dependencies
│   └── ...
├── package.json        Records our project dependencies and configures our project
├── package-lock.json   Records the exact version of packages that we install
└── README.md           Instructions on how to use this project
```

## [Lecture] Starting and Stopping a React App

- 運行伺服器：`npm start`
- 停止運行：按下 <kbd>Ctrl + C</kbd>

## [Lecture] Javascript Module Systems

首先把專案目錄 `src/` 資料夾下的檔案清空，讓我們從頭來撰寫一個 JavaScript 檔案。這一小節要介紹的部分是 import 相關的套件庫 `react` 和 `react-dom`：

```javascript
// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
```

上述的 `import` 關鍵字來自於 EMCAScript 於 2015 定稿的 JavaScript 模組標準，在這之前常見到的 `require()` 則是來自於 CommonJS 的模組標準：

```javascript
const React = require('react');
const ReactDOM = require('react-dom');
```

## [Lecture] Displaying Content with Functional Components

<div align="center">
  <img src="https://i.imgur.com/dqtX5Ft.png">
</div>

> A React Component is a Function or Class that produces HTML to show the user and handles feedback from the user.

接續前面所說的，所謂的 React 組件（Component）可以是一個用來產生 HTML 代碼的 JavaScript 函數或類別，並透過事件接受器來與使用者進行互動，在這裡我們使用 ES6 所提供的箭頭函數回傳一段 JSX 語法：

```javascript
// Create a react component
const App = () => {
  return <div>Hi There!</div>
};
```

接著使用 `ReactDOM` 來在 HTML 中指定的元素進行渲染：

```javascript
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
```

## [Lecture] Link to Completed Github Repo

課程專案的完整代碼可以到 [Github | StephenGrider/redux-code](https://github.com/StephenGrider/redux-code) 查看。

## [Lecture] Common Questions About My Environment

關於課程中所使用的編輯器與終端：

- Visual Studio Code
  - Theme: `Solarized Light`
  - Plugin: `preittier`
- Terminal
  - Iterm2
  - oh-myzsh