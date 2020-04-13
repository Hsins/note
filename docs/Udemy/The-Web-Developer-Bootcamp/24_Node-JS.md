# Node JS

## [Lecture] Introduction to Node

什麼是 [Node.js](https://nodejs.org/en/) 呢？官方網站上是這麼介紹的：

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

在早期 JavaScript 只能透過瀏覽器上的直譯來解釋，而 Node.js 則透過了 Google 開發的 V8 引擎得以在伺服器端運行 JavaScript 代碼，是目前十分流行的後端技術棧。關於目前各大瀏覽器與廠商所使用的 JavaScript 引擎可以參考 [Wikipedia | JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine)。

## [Lecture] Using Node

### Node.js Console: REPL

在命令行窗口鍵入以下內容可以進入 Node.js 的 **交互式解釋器（REPL, Read Eval Print Loop）**，他類似於一個終端或 Linux Shell，在交互式的狀態下可以執行一些 JavaScript 的簡單代碼段：

```bash
$ node
> 1 +4
5
> 5 / 2
2.5
```

這個環境類似於 Chrome 瀏覽器中的 console 環境，但區別在於像是 `alert()` 這樣作用於瀏覽器端的函數並不能夠在命令行環境下被執行。按下 `ctrl + c` 結束並跳出當前的控制台。

### Execute js File

透過 `node <filename>` 可以執行 JavaScript 代碼，比如我們創建一個 `hello.js` 文件寫入以內容：

```javascript
for (var i = 0; i < 10; i++) {
  console.log("Hello From Hello.js");
};
```

執行結果如下：

```bash
$ node hello.js 
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
Hello From Hello.js
```

## [Lecture] Node Echo Exercise

### Demand

Using the command line, create a file "echo.js". Inside the file, write a function named echo that takes 2 arguments: 

1. A String
2. A Number

It should print out the string, number number of times. Add the 2 examples below to the end of your file.

```javascript
// Print "Echo!!!" 10 times
echo("Echo!!!", 10);

// Print "Tater Tots" 3 times
echo("Tater Tots", 3);
```

Lastly, run the contents of "echo.js" using node.

### Solution

```javascript
function echo(str, num) {
  for (var i = 1; i <= num; i++) {
    console.log(str);
  }
}

// Print "Echo!!!" 10 times
echo("Echo!!!", 10);

// Print "Tater Tots" 3 times
echo("Tater Tots", 3);
```

## [Lecture] Node Average Exercise

### Demand

Create a new file named `"grader.js"`:

- In the file define a new function named `"average"`.
- The function `"average"` should take a single parameter: an array of test scores (all numbers).
- The function `"average"` should return the average score in the array, rounded to the nearest whole number.

For example:

```javascript
// Should return 94
var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

// Should return 68
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
```

### Solution

```javascript
function average(scores) {
  // Add all scores together
  var total = 0;
  scores.forEach(function(score) {
    total += score;
  });

  // Divide by total number of scores
  var avg = Math.round(total/scores.length);

  // Round Average
  console.log(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

// Should return 68
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
```

## [Lecture] Introduction to NPM

[npm](https://www.npmjs.com/)（全稱為 Node Package Manager）是 Node.js 預設的套件管理系統。在前端的撰寫過程中，如果我們要引入其他人所撰寫的 **函數庫（library）** 或 **模組（module）**，是透過 CDN 或將對應的檔案存在本機上並在 HTML 文件中引入。而在伺服器端，則可以透過 npm 來引入第三方的函數庫。

除此之外，近年來由 Facebook 團隊和 Exponent、 Google、Tilde 所合作開發的後起之秀 [Yarn](https://yarnpkg.com/en/) 以一種更加可靠的方式來管理套件間的依賴，可以作為 npm 客戶端的替代器，更加快速、可靠、安全。

## [Lecture] Note about Installing NPM Packages

接下來的課程中將透過 npm 安裝第三方套件，可能會遇到如下的警告：

```
npm WARN enoent ENOENT: no such file or directory, open '/home/ubuntu/workspace/test/package.json'
npm WARN test No description
npm WARN test No repository field.
npm WARN test No README data
npm WARN test No license field.
```

在後續的課程會介紹如何對 npm 進行初始化，並安全地忽略這些警告。

## [Lecture] Installing NPM Packages

透過 `npm install <module name>` 在專案的資料夾中安裝第三方套件，並在要使用的檔案中使用 `require("module name")` 來引入。比如：

```bash
$ npm install cat-me
$ npm install knock-knock-jokes
```

在安裝上述套件 [`cat-me`](https://www.npmjs.com/package/cat-me) 和 [`knock-knock-jokes`](https://www.npmjs.com/package/knock-knock-jokes) 之後，我們可以在 JavaScript 檔案中引入：

```javascript
var cat = require("cat-me");
var joke = require("knock-knock-jokes");

console.log(cat());
console.log(joke());
```

## [Lecture] Note about NPM Faker Exercise

在接下來的測驗中，要注意的是 npm 中的套件名稱是區分大小寫的，比如 [`faker`](https://www.npmjs.com/package/faker) 與 [`Faker`](https://www.npmjs.com/package/Faker) 是兩個截然不同的套件。

## [Lecture] NPM Faker Exercise

### Demand

- Create a new directory named `"MyShop"`.
- Add a file named "listProducts.js".
- Install the [`faker`](https://www.npmjs.com/package/faker) package.
- Read the [`faker`](https://www.npmjs.com/package/faker) docs and figure out how it works.
- Use [`faker`](https://www.npmjs.com/package/faker) to print out 10 random product names and prices.
- **Be Resourceful! Don't Cheat and Fast Forward!!**
- Run your file with node and make sure it works!

### Solution

In terminal:

```bash
# Initial Project
$ mkdir MyShop
$ cd MyShop
$ npm install faker
$ touch listProducts.js

# After modify the file. Execute File
$ node listProducts.js
```

In the `listProducts.js` file:

```javascript
var faker = require("faker");

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");

for (var i = 1; i <= 10; i++) {
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
```