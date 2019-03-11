# Section 26 - Intermediate Express

## 267, Note about Templates and EJS

當透過 `npm init` 命令創建專案或資料夾時，務必先確認名稱不要與專案中的其他套件相同，比如不要將套件名稱命名為 `ejs` 或 `express`，否則在嘗試使用 `npm install --save <package name>` 命令安裝套件時將會出現以下錯誤：

```
Refusing to install <package name> as a dependency of itsel
```

除此之外，專案名稱必須全部為小寫字母並排除掉網址中不適合出現的字符，比如說空白 ` ` 可以改用減號 `-` 取代。

## 268, Templates and EJS

### `res.render()`

創建路由時，固然可以用 `res.send()` 回傳 HTML 代碼，但倘若要生成頁面會讓代碼變得複雜又亂，此時可以透過 `res.render()` 渲染指定的 HTML 檔案：

```javascript
app.get("/", function(req, res){
  res.render("home.html");
});
```

值得注意的是 `res.render()` 中的檔案路徑，預設文件夾是在 `/views/` 下。

### EJS

EJS 指的是 `Embedded JavaScript` 或 `Effective JavaScript`，使得我們可以在類似 HTML 的文件中加上特定的標註，僅在標註內執行 JavaScript，只需要透過 `npm install ejs --save` 安裝套件後便可以使用。而路由中的變數也可以透過以下方式傳遞進去：

```javascript
app.get("/fellinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});
```

使用時：

```ejs
<h1>You fell in love with: <%= thingVar.toUpperCase() %></h1>
<p>P.S. this is the love.js</p>
```

詳細內容可以參考文件說明：

- [EJS - 高效的 JavaScript 模板引擎](https://ejs.bootcss.com/)

## 269, EJS: Conditionals and Loops

EJS 中的標註有三種型態，分別是：

- `<%= %>`
- `<%- %>`
- `<% %>`

### Condition

在使用條件判斷式時，採用 `<% %>` 進行標註：

```ejs
<% if(thingVar.toLowerCase() === "rusty") { %>
  <p>GOOD CHOICE! RUSTY IS THE BEST!</p>
<% } else { %>
  <p>Bad Choice! You should have say Rusty!</p>
<% } %>
```

### Loops

在使用迴圈時，採用 `<% %>` 進行標註：

```ejs
<% for (var i = 0; i < posts.length; i++){ %>
  <li>
    <%= posts[i].title %> - <strong><%= posts[i].author %></strong>
  </li>
<% } %>
```

```ejs
<% posts.forEach(function(post) { %>
  <li>
    <%= post.title %> - <strong><%= post.author %></strong>
  </li>
<% }) %>
```

## 270, Serving Custom Assets

倘若我們要替頁面加上 CSS 或 JavaScript 效果，當然可以在每一個 ejs 檔案中添加 `<style>` 標籤，但這無疑是個不便利且笨拙的方法。較佳的方式是透過如下的方式引入資源：

```htmlmixed
<link ref="stylesheet" href="/style.css">
```

而我們通常是將這類資源存放在 `public` 文件夾下，然而必須透過以下的方式告知 node.js 在伺服器執行時，存取檔案的預設路徑：

```javascript
// Default express variable
var express = require("express");
var app = express();

// Setting the static PATH
app.use(express.static("public"));
```

### Configure the app to use EJS

除此之外，我們可以透過以下方式設定預設的渲染引擎，也就是往後在路由中渲染頁面時不用加上後綴的副檔名：

```javascript
// Default express variable
var express = require("express");
var app = express();

// Setting the static PATH
app.use(express.static("public"));
app.set("view engine", "ejs");
```

也就是說：

```javascript
// Before Setting "view engine"
app.get("/", function(req, res){
  res.render("home.ejs");
});

// After Setting "view engine"
app.get("/", function(req, res){
  res.render("home");
});
```

### Use Partials to dry up the code

多數的網頁在建構時，會有許多重複部分，我們可以有效地切分並製作 **模板（template）** 儲存於路徑 `/view/partials` 下，並透過以下方法引用：

```javascript
<% include partials/header %>

...

<% include partials/footer %>
```

此處有一個重點的是對於路徑的正確設定，在使用相對路徑時，最前方有沒有加上斜線是有差別的，比如說：

- `image/logo.jpg`: 同一文件夾下的 `image` 文件夾中的 `logo.jpg` 檔案。
- `/image/logo.jpg`: 根目錄下的 `image` 文件夾中的 `logo.jpg` 檔案。

## 271, Post Requests Part I



## 272, Post Requests Part II
