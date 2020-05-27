---
pageClass: udemy
---

# AJAX

## [Note] Callback Function and High-Order Function

回調函式（Callback Function） 或簡稱為回調（Callback），是一個可以作為傳入參數的函式，並在高階函式（High-Order Function）中調用該函式來完成某種例程或動作。

```javascript
function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // Callback function is invoked
  console.log("Callback has been invoked");
}

higherOrder(callback);
```

回調函式是異步操作的常見解決方式之一，容易陷入層層嵌套的回調地獄（Callback Hell）。

## [Note] Stack, Queue and Heap

JavaScript 是單線程（single threaded runtime）的程式語言，代碼的執行順序為線性，不會被中斷。所有的程式碼片段都會在堆疊中（stack）被執行。換句話說 JavaScript 的執行堆疊（called stack）會記錄目前執行函式的順序，順序將函式壓入堆疊中，直到函式結束或返回時進行彈出動作，而宣告的變數都會存放在堆積（heap）中。等待執行的函式則會存放在貯列（queue）中，當執行堆疊為空時檢查貯列並壓入堆疊。

<p align="center">
  <img src="./src/StackAndHeap.svg">
</p>

## [Note] `setTimeout` and `setInterval`

`setTimeout()` 和 `setInterval()` 使用時都需傳入兩個參數：回調函式與時間（以毫秒表示）。前者 `setTimeout()` 為定時器，到達一定的時間觸發一次；後者 `setInterval()` 為計時器，到達一定時間觸發一次，並持續觸發。兩者都會回傳獨立的 `timerID`，當要用到 `clearTimeout()` 或 `clearInterval()` 來取消操作時會使用到：

```javascript
var timeoutID = window.setInterval(( () => console.log("Hello!") ), 1000);

window.clearInterval(timeoutID);
```

## [Note] Promise