# Section 29 - Databases

## 288, What is a Database?

截至目前為止，由於我們沒有使用到資料庫，因此每當伺服器重啟時就會使得資料返回原始的狀態。那麼什麼是資料庫？簡單來說資料庫就是用以存儲資料的集合，除此之外還提供我們進行存取操作。對於資料庫來說，最基礎也最頻繁的操作就是 CRUD（Create, Read, Update, Delete）。

目前的資料庫主要可以分為兩大類：

- **關聯型資料庫（SQL Database）**：為最傳統且歷史悠久的儲存方式，資料儲存的方式較為扁平而不易擴展，以表格（Table）為主，不同的表格資料間必須進行關聯。
- **非關聯型資料庫（NoSQL Database）**：後期異軍突起的儲存方式，資料儲存的方式較具有階層性，以槽狀（Nested）結構為主。

關於兩者較為深入的差異，可以參考 [關於 NoSQL 與 SQL 的區別](https://read01.com/GPnEx.html)。

## 289, Note about installing MongoDB

在 MongoDB 3.6 版本之後，安裝過程有些許改變（也可以參考影片 [YouTube | MongoDB c9.io Setup - The Web Developer Bootcamp](https://www.youtube.com/watch?v=b089GmAvUyQ)）：

```bash
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```

接著設定資料夾權限並運行 MongoDB：

```bash
$ cd ~
$ mkdir data
$ echo "mongod --dbpath=data --nojournal" > mongod
$ chmod a+x mongod
$ ./mongod
```

除此之外，Colt 在後面影片中使用的 `system.indexes` 也在新版本中無法使用，可以參考 [mongoDB Document | Reference > Database Commands > Administration Commands > listIndexes](https://docs.mongodb.com/manual/reference/command/listIndexes/#dbcmd.listIndexes)。

## 290, Installing MongoDB

請參考上一篇的說明。

## 291, Mongo Shell Basics

在這一小節將會介紹 mongoDB 中幾個常見的命令和操作，更多的內容可以查看官方文檔 [mongoDB Documentation](https://docs.mongodb.com/manual/)。這裡透過創建一個小的狗狗資料庫來做示範：

```
# Show All Database
show dbs

# Use a Database and Insert Data
use demo
db.dogs.insert({name: "Rusty", breed: "Mutt"})
db.dogs.insert({name: "Lucy", breed: "Mutt"})
db.dogs.insert({name: "Lulu", breed: "Poodle"})

# Check Collections
show collections

# Show data in certain database
db.dogs.find()
db.dogs.find({breed: "Mutt"})

# Update data
db.dogs.update({name: "Lulu"}, {breed: "Mutt"})
db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
```

值得注意的是要更新資料內容，必須透過添加 `$set`，否則如範例中所示，名為 `Lulu` 的狗在更新品種之後，名字消失不見了。

## 292, Notes about Mongoose

如果得到以下錯誤，請參考 [DeprecationWarning. This shows when i delete blog.](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/5337646)：

```
DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
```

如果得到以下錯誤，請參考 [Deprecation Warning. Again.](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/5357964)：

```
DeprecationWarning: DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
```

## 293, Introduction to Mongoose Pt. 1

一般來說，有兩種與資料庫進行交互存取的方法：

- 使用資料庫的原生查詢語言（比如：SQL）
- 使用物件資料模型（ODM）或物件關係模型（ORM），他們會將網站的資料表示為 JavaScript 物件並映射到底層資料庫中。

在接下來的內容中，使用 [mongoose](https://mongoosejs.com/) 來溝通 mongoDB 資料庫，首先透過 npm 進行安裝：

```bash
npm install mongoose
```

接著在 JavaScript 代碼中連接資料庫並定義 **綱要（schema）** 並透過 `mongoose.model()` 方法根據綱要來創建模型：

```javascript
// Import the mongoose module and connect it
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

// Define schema
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Compile model from schema
var Cat = mongoose.model("Cat", catSchema);
```

## 294, Introduction to Mongoose Pt. 2

接著我們可以向資料庫裡添加資料與顯示資料庫中的狀態：

```javascript
// Import the mongoose module and connect it
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

// Define schema
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Compile model from schema
var Cat = mongoose.model("Cat", catSchema);

// Add new cats to the DB
var george = new Cat({
  name: "George",
  age: 11,
  temperament: "Grouchy"
});

george.save(function(err, cat) {
  if (err) {
    console.log("SOMETHING WENT WRONG!");
  } else {
    console.log("WE JUST SAVED A CAT TO THE DB:");
    console.log(cat);
  }
});

// Retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
  if (err) {
    console.log("OH NO!, Error!");
    console.log(err);
  } else {
    console.log("All the Cats ...");
    console.log(cats);
  }
})
```