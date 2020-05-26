---
pageClass: udemy
---

# Template Strings

## Template Strings

**樣板字面值（Template Literals）** 允許在字串中嵌入運算式，是 ECMAScript 6 提供的語法糖，又稱為 **模版字符串（Template Strings）**。使用時使用反引號 ``` ` ``` 包裹，在使用到變數時需要以錢字號 `$` 引導並將運算式放置在花括號 `{ }` 內。

```javascript
// Use string and add operator
function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

// Use Template Strings
function get Message() {
  return `The year is ${new Date().getFullYear()}`;
}
```

詳細內容可以參考 [MDN | Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## When to Reach for Template Strings

```javascript
const device_id = 4;
const guid = 20;
const username = "Hello";

const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}", "}`;
```

## [Exercise] Template Strings in Practice

### Question

Refactor the function to use template strings

```javascript
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
```

### Solution

```javascript
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
```

## [Exercise] Name Helpers

### Question

Refactor the function to use template strings

```javascript
function fullName(firstName, lastName) {
  return firstName + lastName;
}
```

### Solution

```javascript
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```
