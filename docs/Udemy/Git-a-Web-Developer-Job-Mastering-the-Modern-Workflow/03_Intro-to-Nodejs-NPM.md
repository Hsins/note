---
pageClass: udemy
---

# Intro to Node.js & NPM

## [Lecture] The Need for Automation and Organization

接下來的課程中將會介紹 `Node` 和 `npm`，透過這些工具可以有效地管理並進行自動化操作來節省我們的時間。在這裡介紹了幾個例子：

- Automatic Browser Refreshing: 網頁開發的過程中，我們經常需要在每次更新文件後重新整理頁面來檢查，這可以透過工具來監聽文件變化並自動刷新頁面。
- CSS Autoprefixer: 當前 CSS 樣式不斷推陳出新的屬性，但並不是所有的瀏覽器都支援，因此必須替特定的 CSS 屬性加上前綴，透過工具可以自動檢查並替我們加上前綴。
- CSS Organization: 為了實現模組化，通常我們會將不同的樣式表分開寫在不同的檔案中，但希望每次 HTML 只加載一個樣式表即可，可以透過工具自動將樣式表進行合併與管理。

## [Lecture] A Quick Note

接下來的課程目的是展示一些有趣的 Node 範例，並不需要完完全全理解代碼的內容。

## [Lecture] Node.js Introduction

起初 JavaScript 只能運行在瀏覽器上，並不能像 Ruby, PHP 或 Python…等語言在伺服器端或電腦端操作或存取檔案與資料庫，而 Node 採用了 Google 開發的 V8 引擎使得 JavaScript 可以運行在伺服器端。接下來的例子運行後會在當前目錄下創建一個 `index.html` 檔案，以及自指定的位置下載圖片：

```javascript
var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});
```

## [Lecture] NPM Introduction

### NPM Overview

這一小節將介紹 Node 的套件包管理器 **npm（Node Package Manager）**，好比製作蛋糕必須要到雜貨店裡選購香料、麵粉和糖…等原料，在製作網頁時則可以透過套件管理工具從 [npm](https://www.npmjs.com/) 網站下載其他開發者所提供的免費套件來協助與增加開發效率。接著請按照下面內容來替課程項目設置好 `jQuery` 和 `normalize.css` 套件：

```bash
# Initiate a package.json file
$ cd udemy_travel-site
$ npm init

# Install the jQuery and normalize.css package
$ npm install jquery --save
$ npm install normalize.css --save
```

命令 `npm init` 會生成一個 `package.json` 檔用來保存專案的套件與版本資訊，換句話說即使套件資料夾被刪除，只要保留 `package.json` 檔案依然可以透過 `npm install` 將對應版本的套件安裝回來。

### Common Question

下面回答一些常見的問題：

1. 要如何知道確切的套件名稱？

> 在這門課中不需要擔心這個，講師 Brad 會在接下來的內容中告訴我們必須使用到那些套件以及為什麼要使用他。如果是在未來的開發過程中遇到不知道的套件，可以到 [npm](https://www.npmjs.com/) 的網站中進行搜索。

2. 要如何使用 npm 所下載到 `node_modules` 資料夾中的套件?

> 我們不會額外將這些檔案自檔案夾中取出來使用，在接下來的內容中將會介紹如何優雅地在項目中使用這些套件。

3. Why are the new package files not tracked by Git?

> 在 `.gitignore` 檔案中我們設定了指定檔名後綴和特定資料夾位置不被追蹤。這有一個好處是可以避免將太過龐大的套件包一次性地上傳到 Github 倉庫中，因為只要留著 `package.json` 檔案就可以使用 `npm install` 指令將套件裝好。

## [Lecture] Important Note About Version Numbers

透過 npm 安裝套件包時，預設將會下載最新的版本，但不同的套件包之間可能會造成衝突，講師提供以下的 `package.json` 檔案以保證接下來課程中的套件版本都和課程相同，可以使用 `npm install` 進行安裝：

```json
{
  "name": "travel-site",
  "version": "1.0.0",
  "dependencies": {
    "jquery": "3.2.1",
    "jquery-smooth-scroll": "2.2.0",
    "lazysizes": "4.0.1",
    "normalize.css": "7.0.0",
    "picturefill": "3.0.2",
    "waypoints": "4.0.1"
  },
  "devDependencies": {
    "autoprefixer": "7.1.6",
    "babel-core": "6.26.0",
    "babel-loader": "7.1.2",
    "babel-preset-es2015": "6.24.1",
    "browser-sync": "2.18.13",
    "del": "3.0.0",
    "gulp": "3.9.1",
    "gulp-cssnano": "2.1.2",
    "gulp-imagemin": "4.0.0",
    "gulp-modernizr": "1.0.0-alpha",
    "gulp-postcss": "7.0.0",
    "gulp-rename": "1.2.2",
    "gulp-rev": "8.1.0",
    "gulp-svg-sprite": "1.3.7",
    "gulp-svg2png": "2.0.2",
    "gulp-uglify": "3.0.0",
    "gulp-usemin": "0.3.28",
    "gulp-watch": "4.3.11",
    "postcss-hexrgba": "1.0.0",
    "postcss-import": "11.0.0",
    "postcss-mixins": "6.2.0",
    "postcss-nested": "2.1.2",
    "postcss-simple-vars": "4.1.0",
    "webpack": "3.8.1"
  }
}
```