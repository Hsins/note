---
pageClass: udemy
---

# Odds and Ends

## Initialization

當我們在進行開發時，如果還沒有串接資料庫或是從其他的 API 獲取資料時，我們可以先透過初始化物件來產生假資料供接口使用，模擬從 API 取得 `json` 格式的資料。

以下的程式碼可以用來初始化一個物件，包含他的屬性與方法：

```javascript
var people = [
  {
    // the 'John' object
    firstname: John,
    lastname: 'Doe',
    addresses: ['111 Main St.', '222 Third St.']
  },
  {
    // the 'Jane' object
    firstname: Jane,
    lastname: 'Doe',
    addresses: ['333 Main St.', '444 Third St.'],
    greet: function() {
      return 'Hello!';
    }
  }
];
```

這裡常犯的小錯誤是少了逗號或是使用了等號作為賦值符號。

## `typeof` and `instanceof`

### `typeof`

```javascript
var a = 3;
console.log(typeof a);

var b = 'Hello';
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
```

### `instanceof`

```javascript
function Person(name) {
  this.name = name;
}
var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);
```

## Strict Mode

在 ECMAScript 5 引入了 [嚴格模式（Strict Mode）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) 來在執行 JavaScript 代碼時啟用更嚴格的檢查來避免失誤，藉此捕獲一些可能存在的錯誤。

在使用時可以全局使用，也可以局部使用（針對特定函數）：

```javascript
// 全局使用嚴格模式
'use strict';

// 函數使用嚴格模式
function myFun() {
  'use strict';
  // statements
}
```
