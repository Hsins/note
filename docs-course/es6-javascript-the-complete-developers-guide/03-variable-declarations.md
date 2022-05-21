---
title: Variable Declarations
---

# Variable Declarations

ES6 主要有兩個方向的變革，一個是類似之前課程所提到的一系列 **語法糖（syntax sugar）**，可以使開發過程中儘可能減少代碼量來增加開發效率，另一個變革則是讓語言在開發過程中更加穩健。這一小節所要提及的變數宣告關鍵字 `const` 和 `let` 就屬於第二種。

```javascript
// const and let
const name = 'Jane';
let title = 'Soft Engineer';
let hourlyWage = 40;
title = 'Senior Soft Engineer';
hourlyWage = 45;
```

關鍵字 `const` 用以宣告變數，宣告之後不能改變變數型態及其所儲存的值。

## What Const and Let Solve

ES6 中使用 `const` 和 `let` 作為宣告變數的關鍵字，最主要是在處理使用 `var` 可能延伸出的種種問題，可以參考 [2017 iT 邦鐵人賽 | Day 05: ES6 篇 - let 與 const](https://ithelp.ithome.com.tw/articles/10185142) 這篇文章中的講解會比講師說得更為詳細一些。

## [Exercise] Letting Variables Be Variables

### Question

Imagine that your are building an application to manage a user's Facebook profile. A profile might have a `name`, `age` and `dateOfBirth`. Declare three variables with these same names, making sure to use `const` or `let` depending on whether you expect the value to chnage over time.

### Solution

```javascript
const name = 'Peter';
const dateOfBirth = '900422';
let age = 25;
```

## [Exercise] Const/Let Refactoring

### Question

The following code uses `var` instead of `const` and `let`. Refactor the function to use the new keywords. Be sure to consider whether the variable should be declared using `const` or `let` depending on whether the variable gets reassigned or not.

```javascript
var statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';
for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```

### Solution

```javascript
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';
for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```