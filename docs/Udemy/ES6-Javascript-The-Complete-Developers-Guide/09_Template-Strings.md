---
pageClass: udemy
---

# Template Strings

## Template Strings

**模版字符串（template literals / template strings）** 是 ES6 中提供的語法糖，以下面的代碼為例：

```javascript
function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}
```

透過模板字符串可以將變數的使用或運算式一同放入以反引號包裹的字串中：

- 使用模板字符串時必須使用反引號 ``` ` ``` 包裹
- 使用變數貨運算式時，以錢字號 `$` 引導並將運算式放置在花括號 `{ }` 內

```javascript
function get Message() {
  return `The year is ${new Date().getFullYear()}`;
}
```

## When to Reach for Template Strings



## Coding Exercise 19: Template Strings in Practice

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

## Coding Exercise 20: Name Helpers

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
