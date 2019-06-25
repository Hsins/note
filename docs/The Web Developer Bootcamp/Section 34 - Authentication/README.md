# Section 34 - Authentication

## Table of Contents

- [Section 34 - Authentication](#section-34---authentication)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Note about authentication section](#lecture-note-about-authentication-section)
  - [[Lecture] Introduction to Authentication](#lecture-introduction-to-authentication)
  - [[Lecture] Secret Page Code Along Pt. 1](#lecture-secret-page-code-along-pt-1)
  - [[Lecture] Secret Page Code Along Pt. 2](#lecture-secret-page-code-along-pt-2)
  - [[Lecture] Secret Page Code Along Pt. 3](#lecture-secret-page-code-along-pt-3)
  - [[Lecture] Secret Page Code Along Pt. 4](#lecture-secret-page-code-along-pt-4)
  - [[Lecture] Secret Page Code Along Pt. 5](#lecture-secret-page-code-along-pt-5)

## [Lecture] Note about authentication section

關於更詳細的 Node 驗證相關內容可以參考 [YouTube | Everything You Ever Wanted to Know about Node Authentication](https://www.youtube.com/watch?v=FkPqcIJvEPk) 影片的說明。

## [Lecture] Introduction to Authentication

在這一個單元要討論的是關於用戶的驗證（Authentication），將會介紹 [Passport.js](http://www.passportjs.org/) 的使用，以及討論關於 Session 的概念。

## [Lecture] Secret Page Code Along Pt. 1

首先創建專案資料夾並初始化專案：

```bash
$ mkdir AuthDemo
$ cd AuthDemo
$ npm init
$ npm install express mongoose ejs --save
$ npm install passport passport-local --save
$ npm install passport-local-mongoose --save
$ npm install body-parser express-session --save
$ mkdir views
$ mkdir models
$ touch app.js views/secret.ejs views/home.ejs
```

設置路由與資料庫：

```javascript
const express               = require("express"),
      mongoose              = require("mongoose");

mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...")
});
```

## [Lecture] Secret Page Code Along Pt. 2

首先創建用戶資料型別 `/models/user.js` 並導出：

```javascript
const mongoose              = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
```

撰寫應用主體：

```javascript
const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrtegy          = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");
      
mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'ejs');

app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...")
});
```

## [Lecture] Secret Page Code Along Pt. 3

在這一小節的內容主要是新增註冊路由，並綁定驗證：

```javascript
const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrtegy          = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");
      
mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================
// Router
// ================

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

// [Auth Routers]
// show sign up form
app.get("/register", function(req, res) {
  res.render("register");
});

// handling user sign up
app.post("/register", function(req, res) {
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    } 
    passport.authenticate("local")(req, res, function() {
      res.redirect("/secret");
    });
  });
});


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...")
});
```

## [Lecture] Secret Page Code Along Pt. 4

這一小節添加登陸路由與驗證綁定：

```javascript
const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrtegy          = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");
      
mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrtegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================
// Router
// ================

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

// [Auth Routers]

// show sign up form
app.get("/register", function(req, res) {
  res.render("register");
});

// handling user sign up
app.post("/register", function(req, res) {
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    } 
    passport.authenticate("local")(req, res, function() {
      res.redirect("/secret");
    });
  });
});

// [Login Routers]
// render login form
app.get("/login", function(req, res) {
  res.render("login");
});

// login logic
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
  }), function(req, res) {
    
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...")
});
```

## [Lecture] Secret Page Code Along Pt. 5

最後增添登出路由與 **中間件（middleware）**：

```javascript
const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrtegy          = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");
      
mongoose.connect('mongodb://localhost:27017/auth_demo_app', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrtegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================
// Router
// ================

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", isLoggedIn(), function(req, res) {
  res.render("secret");
});

// [Auth Routers]
// show sign up form
app.get("/register", function(req, res) {
  res.render("register");
});

// handling user sign up
app.post("/register", function(req, res) {
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    } 
    passport.authenticate("local")(req, res, function() {
      res.redirect("/secret");
    });
  });
});

// [Login Routers]
// render login form
app.get("/login", function(req, res) {
  res.render("login");
});

// login logic
// middleware
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
  }), function(req, res) {
    
});

// [Logout Routers]
app.get("/login", function(req, res) {
  res.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...")
});
```