---
pageClass: udemy
---

# The `filter` Helper

## Selecting Needed Data with Filter

<p align="center">
  <img src="https://i.imgur.com/kDqxgKB.png">
</p>

陣列的 `filter()` 方法將會返回一個新的陣列，新陣列中的元素是原始陣列中，滿足邏輯運算為 `True` 者：

```javascript
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
];

// for loop
var filteredProducts = [];
for (var = 1; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

// filter() method
products.filter(function(product) {
  return product.type === 'vegetable';
});
```

## 011, More on Filtering

```javascript
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// Type is 'vegetable', quantity is greater than 0, price less than 10
products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});
```

## Choosing When to Filter

<p align="center">
  <img src="https://i.imgur.com/L09zJ4Z.png">
</p>

如上圖所示，在部落格系統中，不同的文章下有對應不同的評論，給定文章 `Id` 和評論對應的 `PostId`，透過 `filter()` 方法取得指定文章和評論：

```javascript
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'Awesome Post' },
  { postId: 3, content: 'It was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postID === post.id;
  });
}
```

## [Exercise] Filtering Values

### Question

Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50. Assign this new array to a variable called `filteredNumbers`. Don't forget to use the `return` keyword in the function！

```javascript
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
```

### Solution

```javascript
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});
```

## [Exercise] Handling Permissions with Filter

### Question

Filter the array of users, only returning users who have admin level access. Assign the result to the variable `filteredUsers`. Don't forget to use the `return` keyword in the function!

```javascript
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;
```

### Solution

```javascript
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});
```

## [Exercise] Implementing `reject`.

### Question

This is a hard one! Create a function called `reject`. Reject should work in the opposite way of `filter`: if a function returns `true`, the item should **not** be included in the new array. Hint: you can reuse filter.

For Example:

```javascript
var numbers = [10, 20, 30];

// [10]
var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

// Implement
function reject(array, iteratorFunction) {
}
```

### Solution

```javascript
function reject(array, iteratorFunction) {
  return array.filter(function(item) {
    return !iteratorFunction(item);
  });
}
```