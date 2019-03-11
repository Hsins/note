# Section 27 - Working With API's

## 273, Intro to API's

**應用程式介面（API, Application Programming Interface）** 是程式和程式之間的溝通接口，是一系列預先定義好的函數，目的在於使得不同的站點或應用程式之間可以互相存取資料或服務。

比如說：

- 呼叫 Twitter API 取得提及「Ice Cream」字句的推特。
- 呼叫 Facebook API 獲取特定用戶的大頭照。
- 呼叫 Weather API 取得指定地區的氣候狀況。
- 呼叫 Reddit API 獲取當前 Reddit 上討論最熱烈的文章標題。
- 呼叫 GooglePlaces API 取得當前用戶鄰近的餐廳資訊。

網路服務平台 [IFTTT](https://ifttt.com/) 就是串接了不同應用服務的 API 來構建一些自動化的命令集。不同的應用程式會提供不同的 API 接口，在 [ProgrammableWeb](https://www.programmableweb.com/) 中彙整了許多網站的 API 資訊。

## 274, JSON and XML

透過 API 接口所取得的資料，通常採用 XML 或 JSON 表示：

### 可延伸標記式語言（XML, Extensible Markup Language）

XML 乍看之下與 HTML 十分類似，但標籤的作用並不在於描述頁面呈現的結果，而是一種 `key-value` 的關係：

```xml
<person>
  <age>21</age>
  <name>Travis</name>
  <city>Los Angeles</city>
</person>
```

### JavaScript 物件標記格式（JSON, JavaScript Object Notation）

JSON 則是將資料的格式以 JavaScript 物件來表達，由於近幾年的網頁在呼叫 API 時往往透過 JavaScript，當回傳的資料型態以 JSON 表示時，可以十分迅速地作為物件資料來處理，所以漸漸成為近幾年的主流：

```json
{
  "person": {
    "age": "21",
    "name": "Travis",
    "city": "Los Angeles"
  }
}
```

## 275, Making API Requests with Node

### Send Request with Command Line

對伺服器發送請求並不是只有透過瀏覽器或是 Postman 這類的工具才可以達成，在命令行中我們可以使用 [curl](https://curl.haxx.se/) 發送請求：

```bash
$ curl www.google.com
```

### Send Request with Node.js

我們在 Node.js 中可以引入 [request](https://github.com/request/request) 套件來對伺服器發送請求，首先透過 npm 進行安裝：

```bash
# Install request with npm
npm install request
```

在代碼中使用 request 發送請求：

```javascript
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

## 276, Sunset Time API Example

在這一小節我們呼叫 [Yahoo Weather API](https://developer.yahoo.com/weather/) 來獲取夏威夷的日落時間：

```javascript
const request = require('request');

request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let parseData = JSON.parse(body);
    console.log("Sunset At Hawaii is at ...");
    console.log(parseData["query"]["results"]["channel"]["astronomy"]["sunset"]);
  }
});
```

在上述代碼中我們要注意到的是雖然透過 API 請求所得到的 JSON 檔案以 JavaScript 的物件格式呈現，但他本身並不是一個 JavaScript 物件，而是一個字串。所以此處透過 `JSON.parse()` 方法來將他轉換成物件。

## 277, Note about Movie API lectures

在接下來課程中所使用到的 Open Movie Data Base Movie API 已經不提供公用的接口，不過 Colt 申請了 API 密鑰提供大家使用。使用 API 密鑰發送請求的方式為：

- **General search**: `http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb`
- **Search with Movie ID**: `http://www.omdbapi.com/?i=tt3896198&apikey=thewdb `

操作方式和影片中幾乎一樣，只需要在發送請求時把密鑰放置在末端即可。

## 278, Movie API App: Introduction

在接下來的小節中，我們要透過呼叫 API 來創建一個查找電影資料的應用程式，由於亞馬遜公司下的網路電影資料庫（IMDb, Internet Movie Database）並沒有提供 API 服務，在接下來的課程中我們使用 [OMDB](http://www.omdbapi.com/) 所提供的 API；除此之外，還可以考慮 [TMDB](https://www.themoviedb.org/)。

首先創建我們的專案資料夾與初始環境：

```bash
# Create Project Folder
mkdir movie_search_app
cd movie_search_app

# npm install
npm init
npm install --save express ejs request

# Create app.js File
touch app.js
```

## 279, Movie API App: Results Route

在這一小節中，我們簡單先處理路由與基礎呼叫 API 的部分，以下代碼的結果將建立一個 `/results` 路由，在該頁面下顯示在 OMDB 資料庫中搜尋「guardians of the galaxy」所找到的第一部電影名稱。

```javascript
var express = require("express");
var request = require("request");
var app = express();

app.get("/results", function(req, res) {
    request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.send(data["Search"][0]["Title"]);
  }
});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});
```

## 280, Movie API App: Displaying Data

這一小節將要實作的是將呼叫 API 所得到的資料，傳遞到模板頁中，並透過模板渲染實際頁面。所以在 `app.js` 中將代碼改寫如下：

```javascript
var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("results", {data: data});
  }
});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});
```

接著創建 `views` 資料夾與模板頁面 `results.ejs`，並修改模板頁面內容如下：

```ejs
<h1>Results Pages!!</h1>

<% data["Search"].forEach(function(movie) { %>
   <li><%= movie["Title"] %></li> 
<% }) %>
```

## 281, Movie API App: Adding Search

接著在這一小節我們要建立搜尋頁面，實際上就是透過一個 HTML 中的表單來獲取使用者輸入，並將值傳遞給 `/result` 路由進行渲染。首先我們在 `app.js` 中添加根目錄的路由，並修改 `/result` 路由，注意的是此處由表單所提交的資料，可以透過 `req.query.search` 取得：

```javascript
var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("results", {data: data});
  }
});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});
```

接著修改根目錄的 `search.ejs` 模板：

```ejs
<h1>Search For a Movie</h1>

<form action="/results" method="GET">
    <input type="text" placeholder="search term" name="search">
    <input type="submit">
</form>
```

以及 `results.ejs` 模板：

```ejs
<h1>Results Page!!!</h1>

<ul>
    <% data["Search"].forEach(function(movie) { %>
      <li>
          <strong>
              <%= movie["Title"] %>
          </strong> 
          - <%=movie["Year"]%>
      </li>
    <% }) %>
</ul>

<a href="/">Search Again!</a>
```