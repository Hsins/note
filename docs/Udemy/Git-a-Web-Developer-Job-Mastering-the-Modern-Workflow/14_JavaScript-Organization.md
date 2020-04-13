---
pageClass: udemy
---

# JavaScript Organization

## Object-Oriented Programming

這一則影片中簡單介紹了 **物件導向程式設計（OOP, Object-Oriented Programming）** 的概念，有別於獨立變數和函數的形式，物件導向程式設計將構建一個類別，不同的類別存儲著不同的資料和行為：

```javascript
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greeting = function() {
    console.log("Hello, my name is" + this.name + " and my favorite color is " + this.favoriteColor);
  }
}
```

在 ES6 中則提供了類別的寫法：

```javascript
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hello, my name is" + this.name + " and my favorite color is " + this.favoriteColor);
  }
}

// Create class inherit from existed class
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}
```

## [Lecture] The JS Module Pattern and "webpack"

在 JavaScript 定義好的類別，也可以像 CSS 一樣進行模組化的管理，只需要透過 `require()` 在使用之前透過相對路徑導入即可。但這樣的方式並沒辦法在瀏覽器上使用，因此我們需要透過 Webpack 來替我們完成：

```bash
# Install webpack
$ npm install webpack -g
```

安裝好之後在項目的跟目錄建立 `webpack.config.js` 文件：

```javascript
var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts/"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
```

## [Lecture] Integrating "webpack" into our Gulp Automation

這一小節中，我們將 Webpack 集成到 Gulp 自動化工作流中：

```javascript
var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function(callback) {
  webpack(require('../../webpack/config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback;
  });
});
```

## [Lecture] Tomorrow's JavaScript Today (Babel)

W3C 組織制定了 HTML 和 CSS 的標準供不同的瀏覽器去遵守的同時，也制定了 **文件物件模型（DOM, Document Object Model）** 標準。雖然瀏覽器透過 JavaScript 來操作 DOM，但 JavaScript 本身語言的標準卻是由 ECMAScript 標準所規範的。當新規範制定後需要一段時間讓瀏覽器去遵守，而 Babel 則是一個可以將新規範的代碼轉換成舊規範的工具：

```bash
# Install babel
$ npm install babel-core babel-loader babel-preset-es2015 --save-dev
```