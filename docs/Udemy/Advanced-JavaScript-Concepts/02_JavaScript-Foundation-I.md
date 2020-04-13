---
pageClass: udemy
---

# JavaScript Foundation I

## JavaScript Engines

![JavaScript Engine](https://user-images.githubusercontent.com/26391143/78589615-12311480-7873-11ea-9435-cd5ed4621601.png)

目前的計算機，只能夠理解由二進制代碼所表示的機器語言（Machine Languages）。開發者所撰寫的 JavaScript 代碼必須透過 ECMAScript 引擎（ECMAScript Engine）轉換成計算機所能理解的機器語言，常見的 JavaScript 引擎有：

- [V8](https://v8.dev/) 是目前主流的 JavaScript 引擎，主要被使用於 Google Chrome 和 Node.js 中
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) 主要被使用於 FireFox 中
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) 是早期主流的 JavaScript 引擎，主要被使用於 Webkit 瀏覽器內核中
- [Chakra](https://github.com/microsoft/ChakraCore) 主要被使用於 Edge 中

更多的 JavaScript 引擎可以在 [List of ECMAScript Engines](https://www.wikiwand.com/en/List_of_ECMAScript_engines) 中找到。

## Inside the Engine

以 V8 引擎為例，在進行編譯 JavaScript 代碼時，會歷經以下的流程：

![V8 Engine Pipeline](https://user-images.githubusercontent.com/26391143/78508100-e6505900-77b6-11ea-9ac8-b6172e079ada.png)

1. 解析器（Parser）將代碼解析並生成一個抽象語法樹（AST, Abstract Syntax Tree）
2. 解釋器（Interpreter）根據抽象語法樹生成字節碼（Bytecode）
3. 編譯器（Compiler）同時將字節碼生成優化的機械碼（Machine Code）

有興趣的話可以在 [AST Explorer](https://astexplorer.net/) 裡面模擬抽象語法樹的生成，關於 V8 引擎字節碼的相關補充可以參考 [Understanding V8’s Bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)。

::: callout 💡 即時編譯（JIT, Just in Time）
當前較為主流的 JavaScript 引擎在運行 JavaScript 時，都是結合了解釋和編譯兩種方式，實現了所謂的即時編譯（JIT, Just in Time），一邊解釋一邊編譯來讓執行的效率更高。
:::


## Writing Optimized Code

理解了上述的概念之後，可以幫助我們寫出更加優化的代碼，在這邊介紹相關的優化技術如：隱藏類別（Hidden Class）和內聯緩存（Inline Cache），關於詳細的內容可以參考 [Javascript Hidden Classes and Inline Caching in V8](https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html) 和 [Optimization Killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) 兩篇文章。

### Hidden Classes

為了減少 JavaScript 中訪問物件屬性所花的時間，V8 會動態地替物件創建隱藏類別（hidden class），將物件的值保存在記憶體中。但由於 JavaScript 屬於動態語言，任何在創建類別之後才被添加到實例中的屬性或方法可能導致對應的隱藏類別發生改變，從而降低運行的效率。

也就是說，同一個隱藏類別能不能被重複使用，取決於在實例創建之後動態添加物件屬性的順序，如果順序不同不能夠被重複使用。比如：

```javascript
function Point(x,y) {
  this.x = x;
  this.y = y;
}
​
// 到目前為止，obj1 和 obj2 共享同一個隱藏類別
var obj1 = new Point(1,2);
var obj2 = new Point(3,4);
​
// 由於屬性 a 和屬性 b 按照相反的順序添加
// 最終 obj1 和 obj2 由於遵循不同轉換路徑而具有不同的隱藏類別
obj1.a = 5;
obj1.b = 10;
​
obj2.b = 10;
​obj2.a = 5;
```

### Inline Caching

在第一次執行到訪問某個物件屬性的代碼時，會找出物件當前的隱藏類別；同時，V8 引擎會假設在相同代碼段裡面的其他物件屬性訪問，都由這個隱藏類別進行描述，並修改相對應的內聯代碼使他們直接使用這個隱藏類別。如果假設正確，存取屬性只需要一條指令就可以完成，反之則會再次修改內聯代碼並移除剛剛加入的內聯優化。

### Summary

針對這些設計，在撰寫代碼時可以注意以下細節：

- 始終按照同一順序來對物件實例進行屬性賦值，永遠不要刪除物件的某個屬性
- 在構造函數裡，就宣告所有的屬性
- 單態操作優於多態操作，謹慎使用 `try catch` 和 `for in`

## WebAssembly

前端的開發邏輯隨著業務需求越來越複雜，相應的代碼量也變得越來越多，為了解決 JavaScript 的性能問題，瀏覽器廠商們共同設計了以二進制表示的 [WebAssembly (wasm)](https://webassembly.org/) 語言，在 2019 年的十二月 W3C 正式宣佈 [WebAssembly 與 HTML, CSS, JavaScript 並列，可以原生運行於瀏覽器上](https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en)。

## Call Stack and Memory Heap

在 JavaScript 有兩個重要的概念，就是呼叫堆疊（Call Stack）和記憶體堆（Memory Heap）：

![Call Stack and Memory Heap](https://user-images.githubusercontent.com/26391143/78589962-a56a4a00-7873-11ea-9a00-2c3a191edabd.png)

- **呼叫堆疊（Call Stack）** 是一個先入後出（FILO, First-in Last-out）結構，用來儲存函數或方法調用、基礎數據類型（primitive variables）和引用（references）。
- **記憶體堆（Memory Heap）** 沒有順序的概念，用來儲存所有引用類型的實際資料，比如物件。

當我們呼叫太多的函數（比如說遞迴的深度太深），直至呼叫堆疊無法容納時，就會發生堆疊溢出（stack overflow）的現象。

## Garbage Collection

JavaScript 在創建物件時自動進行了記憶體分配，當沒有再繼續使用這些物件時，會自動進行釋放，這樣的過程稱為垃圾回收（GC, Garbage Collection）。在各大瀏覽器中，常見的垃圾回收機制有兩種方法：

- **標記清除（Mark and Sweep）** 的核心概念是「一個物件如果不能夠被獲得，就需要進行釋放」，資源管理器會定期從 `root` 開始遍歷引用的物件，找出所有可以被獲得的物件和不能被獲得的物件，並釋放這些不能被獲得的物件所佔用的記憶體。
- **引用計數（Reference Counting）** 的核心概念是「跟蹤物件被引用的次數，當物件不被引用時就進行釋放」。

## Memory Leak

在程式運行過程中，沒有即時釋放那些不再被使用到的記憶體所造成的系統記憶體浪費，這種現象稱為記憶體洩漏（Memory Leak），容易導致程式運行速度減慢甚至崩潰。這裡將介紹 JavaScript 中常見的記憶體洩漏情境：

### Global Variables

當我們宣告全局變數，如果沒有手動去設置為 `null` 的話，其記憶體會一直被佔用。不過多數的狀況會是無意間創建了全局變數：

```javascript
// 當全局變量不被使用，需要手動設置為 null
var arr = [1, 2, 3];
console.log(arr);
arr = null;
```

```javascript
// 沒有宣告便賦值，直接成為全局變量
function foo() {
  bar = "this is a hidden global variable";
}
```

```javascript
// 注意此時的 this 指向全局物件（在瀏覽器中為 window）
function foo() {
  this.variable = "potential accidental global";
}

foo();
```

### `setInterval` and `setTimeout`

```javascript
// 每一個時間間隔，就配置一段新的記憶體區塊存放匿名函數
setTimeout(() => { ... }, 500);

// 較為健康的作法
setTimeout(foo(), 500);
```

### Closures

閉包（Closure）是一個內部函數，可以訪問外部函數的變量，一旦一個閉包的作用域被同一個父作用域的閉包所創建，那麼這個作用域是共享的：

```javascript
var theThing = null;

var replaceThing = function () {
  var originalThing = theThing;
  var unused = () => { if (originalThing) console.log("hi") };
  theThing = {
    longStr: newArray(1000000).join('*'),
    someMethod: () => { console.log(someMessage) };
    }
   };
 };
setInterval(replaceThing, 1000);
```

每次調用 `replaceThing` 時，`theThing` 會得到一個包含一個大數組和一個新閉包（`someMethod`）的新物件。同時，變數 `unused`是一個引用 `originalThing` 的閉包（先前的 `replaceThing` 又調用了 `theThing`）。`someMethod` 可以通過 `theThing` 使用，`someMethod` 與 `unused` 共享閉包作用域，儘管 `unused` 從未使用，它引用的 `originalThing` 迫使它保留在記憶體中（防止被回收）。

### Event Listeners

```javascript
// 如果監聽事件不再被使用到，需要移除監聽器
var button = document.getElementById('button');
button.addEventListener('click', onClick);
button.removeEventListener('click', onClick);
```

由於現代瀏覽器使用了較為先進的標記清除垃圾回收演算法，其實已經可以正確檢查與處理循環引用。所以其實回收 DOM 節點記憶體時，不必非要呼叫 `removeEventListener` 了。

## Single Threaded

起初的 JavaScript 只是用於操作瀏覽器中的 DOM 元素，實現頁面的互動效果，因此被設計為單執行緒程式語言（single threaded language），也就是說在同一個時間點只有一個任務被同步（Synchronous）地執行，不能夠平行地執行代碼。一個用來判斷單執行緒程式語言的方式，就是在運行的過程中，他只有一個呼叫堆疊和一個記憶體堆。

這樣順序地執行代碼或許乍看之下並沒有什麼缺陷，但當一個任務所耗費的時間較長時，便會延宕後面的任務執行，也就是所謂的堵塞（blocking）現象。在目前的網頁應用中，由於 [AJAX](https://www.wikiwand.com/en/Ajax_(programming)) 的開發技術應用得很廣，經常會需要等待服務器返回資料的任務，因此需要能夠進行異步操作

## JavaScript Runtime

實際上 JavaScript 是被運行在 JavaScript 執行環境中的（Runetime），所謂的執行環境是由 JavaScript 引擎（包含呼叫堆疊和記憶體堆）、回調貯列（Callback Queue）和 Web APIs 基於事件循環（Event Loop）機制所實做的並行模型（Concurrency Model）。

![JavaScript Runtime Visualized](https://user-images.githubusercontent.com/26391143/78592102-1eb76c00-7877-11ea-818d-de712c1ef7e8.gif)

如同以上的動畫所示，所謂的 Web APIs 是由瀏覽器或 Node.js 所提供，而並不存在於 JavaScript 原始碼中的函數與方法，比如 `setTimeout()` 和 `setInterval` 方法，這些 Web API 會交由瀏覽器或 Node.js 進行調用而不影響到執行堆疊，此時 JavaScript 引擎可以繼續完成任務，而 Web APIs 中的執行結果將被存放在回調貯列中，事件循環機制會隨時檢查當前的執行堆疊是否為空，若為空時就從等待中的貯列中取出回調函數放入執行堆疊中。

相關的說明可以觀看 Philip Roberts 的演講 [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) 並搭配 [Loupe](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) 網站來將整個過程視覺化。

## An Interview Question

### Question

請問以下代碼的輸出結果？

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
```

### Solution

```
1
3
2
```

1. `console.log('1')` 被放入執行堆疊，執行完畢並彈出堆疊
2. `setTimeout()` 被放入執行堆疊，交由瀏覽器或執行環境處理，計時器倒數零秒之後將 `console.log('2')` 放入回調貯列
3. `console.log('3')` 被放入執行堆疊，執行完畢並彈出堆疊
4. 事件循環機制檢查到當前執行堆疊為空，檢查回調貯列
5. `console.log('2')` 被放入執行堆疊，執行完畢並彈出堆疊
6. 執行完畢

## Fix the Code

### Question

下列代碼會造成堆疊溢出，請嘗試修改：

```javascript
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();
  if (item) {
    removeItemsFromList();
  }
};

removeItemsFromList();
```

### Solution

遞迴代碼造成堆疊溢出，將遞迴採用回調方式進行呼叫：

```javascript
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();
  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
};

removeItemsFromList();
```