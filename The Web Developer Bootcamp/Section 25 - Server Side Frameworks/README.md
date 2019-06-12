# Section 25 - Server Side Frameworks

## Table of Contents

- [Section 25 - Server Side Frameworks](#section-25---server-side-frameworks)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Introduction to Express](#lecture-introduction-to-express)
    - [Framework](#framework)
    - [Express.js](#expressjs)
  - [[Lecture] Note about Our First Express App](#lecture-note-about-our-first-express-app)
  - [[Lecture] Our First Express App](#lecture-our-first-express-app)
  - [[Lecture] The Package.json](#lecture-the-packagejson)
  - [[Lecture] How to automate server restart](#lecture-how-to-automate-server-restart)
  - [[Lecture] Route Params](#lecture-route-params)
    - [The `*` Route Matcher](#the--route-matcher)
    - [Route Order](#route-order)
    - [Route Pamras](#route-pamras)
  - [[Lecture] Express Basics Exercise](#lecture-express-basics-exercise)
    - [Demand](#demand)
    - [Example](#example)
  - [[Lecture] Express Basics Exercise: SOLUTION](#lecture-express-basics-exercise-solution)

## [Lecture] Introduction to Express

### Framework

在使用 Express 之前，先來談談什麼叫做 **框架（Framework）**。框架和函數庫一樣，通常是第三方所撰寫好的，但之間最大的差異性在於有沒有 **控制反轉（Inversion Of Control）** 的性質，框架同時具備約束性與支撐性，在有限制的條件下提供開發者在更短時間內開發出品質更佳的產品。對於框架的定義可以參考以下文章：

- [StackOverFlow | Framework vs. Toolkit vs. Library](https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library)
- [簡書 | 人们常说的前端框架是什么](https://www.jianshu.com/p/aa733914c65d)
- [知乎 | 什麼是框架?](https://www.zhihu.com/question/19558524)
- [控制反轉 (IoC) 與 依賴注入 (DI)](https://notfalse.net/3/ioc-di)

### Express.js

網頁框架比比皆是，比如：

- Python 框架 Flask, Django, Tornado...
- Ruby 框架 Rails...
- ...

這門課使用 [Express.js](http://expressjs.com/) 來進行教學，是一個輕量級，基於 Node.js 的開源框架，用以建置網頁應用。輕量級並不代表他所實作的功能較少，而是指相對於 Rails 這類重量級框架而言，許多被掩蓋在框架背後的細節不會被掩蓋掉，這能夠在學習時更了解後端的運作。

## [Lecture] Note about Our First Express App

下一個單元中講師約在影片 13:38 處重啟伺服器，關閉伺服器時是在鍵盤上按下 <kbd>Ctrl + C</kbd>。如果想要知道怎麼樣自動地執行這樣的過程，可以觀看助教 Ian 所錄製的影片 [YouTube | Automate Node Server Restart with Nodemon](https://www.youtube.com/watch?v=GvLvrlOqq9g&feature=youtu.be)。

## [Lecture] Our First Express App

首先創建我們的專案資料夾與檔案：

```bash
$ mkdir FirstExpressApp
$ cd FirstExpressApp
$ touch app.js
$ npm install express --save
```

在 `app.js` 中撰寫簡單的代碼：

```javascript
var express = require("express");
var app = express();

//=============================
// Router
//=============================

// "/" => "Hi there!"
app.get("/", function(req, res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
  res.send("Goodbye");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
  console.log("SOMEONE MADE A REQUEST TO /dog")
  res.send("MEOW");
});

//=============================
// Server
//=============================

// Tell Express to Listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server Started!");
});
```

上述的代碼將會建立一個伺服器，監聽指定的 **埠（port）**，並響應 **路由（route）** 中的需求。路由是指判斷應用程式如何回應用戶端對特定端點的要求，其中包含了 `URI` 與一個特定的 HTTP 要求方法（如：`GET`、`POST`…等）。關於這一部分的內容可以參考以下文件：

- [Express | Hello World](http://expressjs.com/en/starter/hello-world.html)
- [Express | Basic routing](http://expressjs.com/en/starter/basic-routing.html)

值得一提的是在本機端上，伺服器監聽部分應該是這樣寫的：

```javascript
//=============================
// Server
//=============================

// Tell Express to Listen for requests (start server)
app.listen(3000, function() {
  console.log("Server Started!");
});
```

差別在於對於 Cloud9 而言，僅開放了系統所定義的 **埠（port）** 及 IP 位置，此處必須透過環境變數 `process.env.PORT` 和 `process.env.IP` 傳入。

## [Lecture] The Package.json

`package.json` 是一個符合 [CommonJS 規定](http://wiki.commonjs.org/wiki/Packages/1.1) 用來描述套件包的文件，使用 `json` 格式表示，在其中可以定義 **相依（dependency）** 的相關套件以及應用程式資訊，以便我們管理專案所會使用到的套件及其對應版本。透過以下命令可以初始化 `package.json` 檔案：

```bash
$ npm init
```

在安裝套件時，在後方加上 `--save` 參數可以將其加到專案的相依套件中，也就是在 `package.json` 中加上對應的內容，比如：

```bash
$ npm install express --save
```

相關的補充可以查看：

- [What is the file `package.json`?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/)
- [Node.js 系列學習日誌 #6 - 使用 package.json 安裝、管理模組](https://ithelp.ithome.com.tw/articles/10158140)

## [Lecture] How to automate server restart

在前面的單元我們知道可以使用 `node app.js` 命令來啟動伺服器，在助教提供的 [YouTube | Automate Node Server Restart with Nodemon](https://www.youtube.com/watch?v=GvLvrlOqq9g) 影片中介紹了 [nodemon](https://nodemon.io/) 工具來自動地重新載入更動的檔案並啟動伺服器。

```bash
# Install nodemon with npm
$ npm install -g nodemon

# Run server with nodemon
$ nodemon
```

## [Lecture] Route Params

### The `*` Route Matcher

承接上一個課程的路由概念，當使用者對那些沒有設置路由的位置發送 `GET` 請求時，伺服器端將回應 `Cannot GET /URL`，我們可以透過 `*` 對這些位置進行通配，回應相同的結果：

```javascript
app.get("*", function(req, res) {
  res.send("There is no ROUTE!");
});
```

### Route Order

值得注意的是，路由撰寫時擺放的位置是會影響伺服器處理的順序的，比方說將 `*` 通配擺放在其他路由之前，那麼伺服器在處理時都會先受到 `*` 通配路由影響，其餘的都不會處理了。

### Route Pamras

除此之外，我們經常需要將某種模式所匹配到所有路由都對應到同一個組件，比如針對不同的 ID 的用戶來說，路徑可能是 `./user/<id>`，在這裡可以透過 **路由參數（route parameter）** 來標記，比如：

```javascript
app.get("/post/:topic/comments/:id/:title/", function(req, res) {
  console.log(req.params);
  res.send("There is a Route Pamras Page!");
});
```

傳入時的路由參數將被保存在 `req.parems` 當中。

## [Lecture] Express Basics Exercise

### Demand

1. Create a brand new Express app from scratch.
2. Create a `package.json` using `npm init` and add express as a dependency.
3. In your main `app.js` file, add 3 different routes:
    - `/`
    - `/speak/:animal`
    - `/repeat/:message/:times`

### Example

```
Visiting "/" should print "Hi there, welcome to my assignment!"

Visiting "/speak/pig" should print "The pig says 'Qink'"
Visiting "/speak/cow" should print "The cow says 'Moo'"
Visiting "/speak/dog" should print "The cow says 'Woof Woof!'"

Visiting "/repeat/hello/3" should print "hello hello hello"
Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
Visiting "/repeat/blah/2" should print "blah blah"

Visiting any other route, print "Sorry, page not found... What are you doing with your life?"
```

## [Lecture] Express Basics Exercise: SOLUTION

首先創建我們的專案資料夾與檔案：

```bash
$ mkdir ExpressBasic
$ cd ExpressBasic
$ touch app.js
$ npm init
$ npm install express --save
```

於 `app.js` 中完成代碼：

```javascript
var express = require("express");
var app = express();

//=============================
// Router
//=============================

// "/"
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

// "/speak/:animal"
app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Qink",
    cow: "Moo",
    dog: "Wolf Wolf!",
    cat: "Meow",
    goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The" + animal + " says '" + sound + "'");
});

// "/repeat/:message/:times"
app.get("/repeat/:message/:times", function(req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
  
  for (var i = 0; i <= times; i++) {
    result += message + " ";
  };
  
  res.send(result);
});

// "*"
app.get("*", function(req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

//=============================
// Server
//=============================

// Tell Express to Listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server Started!");
});
```