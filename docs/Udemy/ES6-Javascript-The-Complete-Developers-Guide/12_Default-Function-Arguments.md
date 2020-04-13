---
pageClass: udemy
---

# Default Function Arguments

## Specifying Default Function Arguments

當函數中的參數為空或 `undefined` 時，我們可以透過預設參數賦值：

```javascript
function makeAjaxRequest(url, method = 'GET') {
  return method;
  // logic to make the request
}

// GET
makeAjaxRequest('google.com');
//
makeAjaxRequest('google.com', null);
// GET
makeAjaxRequest('google.com', undefined);
// POST
makeAjaxRequest('google.com', 'POST');
```

## Use Cases of Defaulting Arguments

考慮一個較為複雜的狀況，假設今天網頁應用要創建新用戶並分配隨機的亂數 ID：

```javascript
function User(id) {
  this.id = id;
}

function generateID() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateID())) {
  user.admin = true;
  return user;
}
```

## Coding Exercise 27: Using Default Arguments

### Question

Refactor the following code to use default function arguments. Be sure to remove any unused code after you refactor it.

```javascript
function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}
```

### Solution

```javascript
function sum(a = 0, b = 0) {
  return a + b;
}
```

## Coding Exercise 28: Dumping Unused Code

### Question

Refactor the following code to use default function arguments. Be sure to remove any unused code after you refactor it.

```javascript
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}
```

### Solution

```javascript
function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}
```