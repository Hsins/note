# YelpCamp: Basics

## [Lecture] YelpCamp: Initial Routes

在接下來的課程中我們將要建置 YelpCamp 專案，在這一小節中我們將完成的部分有：

- Objective 01: Add Landing Page
- Objective 02: Add Campgrounds Page that lists all campgrounds. Each Campground has Name and Image

首先是創建專案環境：

```bash
mkdir YelpCamp
cd YelpCamp
mkdir v1
cd v1

npm init
npm install --save express ejs
touch app.js
```

於 `app.js` 中設置路由：

```javascript
var express = require("express");
var app = express();

app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
```

建置 `campgrounds.ejs` 模板：

```javascript
<h1>This is the campgrounds page!</h1>

<% campgrounds.forEach(function(campground) { %>
  <div>
    <h4><%= campground.name %></h4>
    <img src="<%= campground.image %>">
  </div>
<% }); %>
```

## [Lecture] YelpCamp: Layout

在這一小節中我們將完成的部分有：

- Objective 01: Create our header and footer partials
- Objective 02: Add in Bookstrap

首先是在放置模板的 `/views` 資料夾下創建 `/partials` 資料夾，並添加我們的 `header.ejs` 和 `footer.ejs` 檔案，並且在 `<head>` 標籤中引入 Bootstrape：

**header.ejs**

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>YelpCamp</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
```
**footer.ejs**

```ejs
        <p>TradeMark YelpCamp 2018</p>
    </body>
</html>
```

回頭修改模板中內容：

**campgrounds.ejs**

```ejs
<% include partials/header %>

<h1>This is the campgrounds page!</h1>

<% campgrounds.forEach(function(campground) { %>
  <div>
    <h4><%= campground.name %></h4>
    <img src="<%= campground.image %>">
  </div>
<% }); %>

<% include partials/footer %>
```

## [Lecture] YelpCamp: Creating Campgrounds

在這一小節中我們將完成的部分有：

- Objective 01: Setup new campground POST route
- Objective 02: Add in body-parser
- Objective 03: Setup route to shoe form
- Objective 04: Add basic unstyled form

由於涉及了對 `POST` 請求進行解析，這部份我們要透過套件 [body-parser](https://github.com/expressjs/body-parser) 來處理，首先透過 npm 進行安裝：

```bash
$ npm install --save body-parser
```

接著我們要在 `app.js` 中創建 `/campgrounds` 的 POST 路由以及 `/new` 的 GET 路由並引入 `body-parser`：

```javascript
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // Redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});
```

創建 `new.ejs` 並修改 `campgrounds.ejs` 模板：

**campgrounds.ejs**

```ejs
<% include partials/header %>

<h1>This is the campgrounds page!</h1>

<a href="/campgrounds/new">Add new Campground</a>

<% campgrounds.forEach(function(campground) { %>
  <div>
    <h4><%= campground.name %></h4>
    <img src="<%= campground.image %>">
  </div>
<% }); %>

<% include partials/footer %>
```

**news.ejs**

```ejs
<% include partials/header %>

<h1>Create a New Campground</h1>

<form action="/campgrounds" method="POST">
    <input type="text" name="name" placeholder="name">
    <input type="text" name="image" placeholder="image url">
    <button>Submit</button>
</form>

<a href="/campgrounds">Go Back</a>

<% include partials/footer %>
```

## [Lecture] Note about YelpCamp: Styling Campgrounds Lecture

課程影片中使用的是 Bootstrap 3 而不是 Bootstrap 4，兩個版本在使用時存在語法上的差異，如果要使用 Bootstrap 4 來完成這個專案的話，可以參考助教 Ian 錄製的影片 [YouTube | Migrating to Bootstrap 4 - YelpCamp Tutorial - Unedited](https://www.youtube.com/watch?v=NHHh0sj1uKY)。

## [Lecture] YelpCamp: Styling Campgrounds

在這一小節我們透過 Bootstrap 將版型渲染得漂亮一些：

```ejs
<% include partials/header %>

 <div class="container">
     <header class="jumbotron">
         <div class="container">
             <h1>Welcome To YelpCamp!</h1>
             <p>View our hand-picked campgrounds from all over the world</p>
             <p>
                <a class="btn btn-primary btn-large" href="/campgrounds/new">Add New Campground</a>
             </p>
         </div>
     </header>
     
     <div class="row text-center" style="display:flex; flex-wrap: wrap;">
        <% campgrounds.forEach(function(campground){ %>
            <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                   <img src="<%= campground.image %>">
                   <div class="caption">
                       <h4><%= campground.name %></h4>
                   </div>
                </div>
            </div>
        <% }); %>
    </div>
</div>

<% include partials/footer %>
```

- 將頁面除了頁首和頁腳的部分放置到 `<div class="container">` 中。
- 替 `Add New Campground` 添加按鈕類別。
- 頁面標題放置在 `<header class="jumbotron">` 並將內容包裹在 `<div class="container">` 中。
- 添加 `style="display:flex; flex-wrap: wrap;"` 處理高度不統一的問題。

## [Lecture] YelpCamp: Styling Nav and Forms

在這一小節，將處理每個頁面上方的導覽列以及添加窗口的美化：

**header.ejs**

```
<!DOCTYPE html>
<html>
    <head>
        <title>YelpCamp</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    </head>
    <body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">YelpCamp</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
```

**new.ejs**

```
<% include partials/header %>

<div class="container">
    <div class="row">
        <h1 style="text-align: center">Create a New Campground</h1>
        <div style="width: 30%; margin: 25px auto;">
            <form action="/campgrounds" method="POST">
                <div class="form-group">
                    <input class="form-control" type="text" name="name" placeholder="name">
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" name="image" placeholder="image url">
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary btn-block">Submit!</button>
                </div>
            </form>
            <a href="/campgrounds">Go Back</a>
        </div>
    </div>
</div>

<% include partials/footer %>
```