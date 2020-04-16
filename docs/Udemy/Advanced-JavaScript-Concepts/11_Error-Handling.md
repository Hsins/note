---
pageClass: udemy
---

# Error Handling

## Errors in JavaScript

當執行環境（runtime）運行 JavaScript 代碼發生錯誤時，會拋出一個 `Error` 物件實體。除了系統本身所拋出的錯誤之外，我們可以也透過原生的建構函數創建一個 `Error` 物件實體：

```javascript
const myError = new Error('oopsie');

myError.name;     // "Error"
myError.message;  // "oopsie"
myError.stack;    // "Error: oopsie
                  //     at <anonymous>:1:37"
```

所有的 `Error` 物件實體都會繼承 `Error.prototype` 原型鏈，比如原型鏈中所提供的屬性 `name`、`message` 和 `stack`…等。其中 `stack` 屬性會以字串的形式返回錯誤被拋出位置的的函數呼叫堆疊：

```javascript
function a() {
  const b = new Error('what??');
  return b;
}

a().stack;        // "Error: what??
                  //    at a (<anonymous>:2:12)
                  //    at <anonymous>:1:1
```

實際上，透過關鍵字 `new` 創建這些 `Error` 物件實體並沒有什麼效果，必須將錯誤拋出（throw）才有作用。在 JavaScript 中，當運行過程中遇到錯誤拋出時，會暫時停止運行並查看是否需要進行處理。如果要將錯誤拋出，需要使用 `throw` 關鍵字（實際上他可以拋出任何運算式）：

```javasciprt
throw new Error();
```

除了泛用的錯誤建構函數 `Error` 之外，原生的 JavaScript 還提供了其他七個核心錯誤建構函數如：`EvalError`、`InternalError`、`RangeError`、`ReferenceError`、`SyntaxError`、`TypeError` 和 `URIError`。關於更詳細的內容可以查看 [MDN | Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) 文件。

## Try, Catch and Finally

在 JavaScript 中，我們透過 `throw` 關鍵字來拋出例外或錯誤，通常會將拋出錯誤放在 `try` 區塊中執行，接著透過 `catch` 區塊捕獲並執行對應的陳述。

比如以下代碼，當運行到 `throw` 時，控制權會被轉移到 `catch` 區塊中，而 `finally` 區塊則會在 `try` 和 `catch` 區塊執行後執行：

```javascript
function fail() {
  try {
    console.log('This works.');           // 在錯誤拋出之前，仍會執行
    throw new Error('oopsie!!!');         // 拋出錯誤，將控制轉移到 catch 區塊
    console.log('This would not work.');  // 在錯誤拋出之後，不會執行
  } catch (error) {
    console.log('We have made an oopsie', error);
  } finally {
    console.log('Still Good');
    return 'Returning fail';
  }
}

fail();
```

值得注意的是，這樣的例外處理方式可以用來捕獲任何的同步（synchronous）錯誤，但無法捕獲非同步（asynchronous）錯誤。比如：

```javascript
try {
  console.log('This works!');
  setTimeout(() => {
    throw new Error('oopsie!!!');
  }, 1000)
  console.log('This also works!!!');
} catch (error) {
  console.log('got it', error);
}
```

由於此處 `setTimeout()` 將交由 Web API 處理，接著當完成時間倒數之後會將回調函數放入 Queue 中，最後才被放入 Call Stack 中進行執行，因此此時所拋出的錯誤，無法被 `catch` 所捕獲。

## Async Error Handling

## Extending Errors
