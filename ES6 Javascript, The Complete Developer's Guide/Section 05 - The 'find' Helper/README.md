# Section 05 - The 'find' Helper

## 013, Querying For Records with Find

<p align="center">
  <img src="https://i.imgur.com/2k83lrd.png">
</p>

陣列的 `find()` 方法將會回傳 **第一個** 滿足測試函數的元素值，否則回傳 `undefined`：

```javascript
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

// for loop
var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
  }
}

// find() Method
users.find(function(user) {
  return user.name === 'Alex';
});
```

## 014, Find Continued

### With Class

```javascript
function Car(model) {
  this.model = model;
}

var vars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});
```

### With JavaScript Object

```javascript
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postID: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  })
}
```

## 015, Using Find to Search for Users

<p align="center">
  <img src="https://i.imgur.com/zhnWzo0.png">
</p>

如上圖所示，在部落格系統中，我們經常會需要取得對應的 PostId 中的內容，可以使用 `find()` 方法：

```javascript
// All Posts
const posts = [
  { id: 1 , title = 'Post Title' },
  { id: 2 , title = 'Post Title' },
  { id: 3 , title = 'Post Title' },
  { id: 4 , title = 'Post Title' },
  { id: 5 , title = 'Post Title' },
  { id: 6 , title = 'Post Title' },
];

// Get Post ID from URL
const postId = getIdFromURL();

posts.find(post => post.id === postId);
```

## Coding Exercise 9: Finding Admin Users

### Question

Find the user in the user's array who is an amdin. Assign this user to the vairable `admin`.

```javascript
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
```

### Solution

```javascript
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin === true;
});
```

## Coding Exercise 10: What's Your Balance?

### Question

Find the account with a balance of 12 and assign it to the variable `account`

```javascript
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
```

### Solution

```javascript
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
  return account.balance === 12;
});
```

## Coding Exercise 11: Really Challenging: Custom findWhere Helper

### Question

This is a tough one! The most common find operation is to an object that has a given property. Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:

```javascript
findWhere(ladders, { height: '20 feet' });
```

The object `{ ladders: '20 feet' }` should be used as the search criteria - we would want to find a ladder whose `height` property was `'20 feet'`;

**Your Goal**: Write a `findWhere` function that achieves this shorthand approach. `findWhere` should return the found object. In summary:

```javascript
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

// return: { id: 3, height: 25 }
findWhere(ladders, { height: 25 });
```

**Hint**: The hard part of this is figuring out the name of the property on the criteria. You can use `Object.key(criteria)[0]` to figure out the name of the property on the object. For example, `Object.key({ height: '20 feet' })` would return `height`. You could then check to see if a given element in the array had a property equal to the criteria's value with something like `element[property] === criteria[property]`.

```javascript
function findWhere(array, criteria) {
  
}
```

### Solution

```javascript
function findWhere(array, criteria) {
  var prop = Object.keys(criteria)[0];
  
  return array.find(function(element) {
  	return element[prop] === criteria[prop];
  });
}
```
