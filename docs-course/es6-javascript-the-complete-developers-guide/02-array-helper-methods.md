---
title: Array Helper Methods
---

# Array Helper Methods

在前面幾堂課程中，我們將介紹新版本中的陣列方法，比如：`forEach()`、`map()`、`filter()`、`find()`、`every()`、`some()` 和 `reduce()`…等，這些功能可能在以往必須透過第三方的函數庫如 [Underscore.js](https://underscorejs.org/) 來使用。這些方法可以讓我們儘量減少 for 迴圈的使用。

## The `forEach()` Helper

首先介紹的是 `forEach()` 方法，詳細說明可以參考 [MDN | Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)。以下範例分別使用 for 迴圈和 `forEach()` 方法來遍歷一個陣列中的元素並輸出到控制台中：

```javascript
const colors = ['red', 'blue', 'green'];

// for-loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach() Method
colors.forEach(function(color) {
  console.log(colors[i]);
});
```

在 `forEach()` 方法中可以使用匿名函數，上述的例子中陣列的 `forEach` 方法會逐一將陣列元素放入後方的匿名函數使用。

## forEach Continued

除了使用匿名函數之外，實際上 `forEach()` 方法也可以使用實名函數，比如給定一個陣列，計算所有元素的總和：

```javascript
var number = [1, 2, 3, 4, 5];
var sum = 0;
function adder(number) {
  sum += number;
}
number.forEach(adder());
console.log(sum);
```

## Why Use forEach?

什麼時候會使用到 `forEach()` 方法呢？其實這個方法在陣列中幾乎像是一個多功能瑞士軍刀的用途，其他的方法也可以透過他來實作。在這裡講師舉了一個貼近生活的例子，倘若在信箱中有許多垃圾郵件要進行刪除，對於勾選的信件都要執行刪除的動作時，就可以透過 `forEach()` 來實踐。

![](https://i.imgur.com/Vi1toDV.png)

簡而言之，如果對於陣列中的元素都要執行相同的方法時，就可以透過 `forEach()` 來完成。

## [Exercise] Moving Away from For Loops

### Question

The code below is calling 'savePost' three times, but it is doing so using a for loop. This implementation works, but the for loop makes it more challenging to understand the purpose of the function. Rather than using a for loop, refering the code below to instead use the forEach helper.

```javascript
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
```

### Solution

```javascript
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    posts.forEach(function(post) {
      savePost(post);
    });
}
```

## [Exercise] Processing Values

### Question

The array below contains an array of objects, each of which is representation of an image. Using the forEach helper, calculate the area of each image and store it in a new array called `areas`. The area of an image can be calculated as `image.height * image.width`.

```javascript
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
```

### Solution

```javascript
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function(image) {
  areas.push(image.height * image.width);
});
```

## The Map Helper

<p align="center">
  <img src="https://i.imgur.com/wjCtK8V.png" />
</p>

陣列的 `map()` 方法將會返回一個新的陣列，新陣列中的元素是原始陣列每個元素調用函數處理後的值，我們可以使用 for 迴圈或 `forEach()` 進行實作：

```javascript
var numbers = [1, 2, 3];
// for loop
var doubleNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}
// map() method
var doubled = numbers.map(function(number) {
  return number * 2;
})
// [2, 4, 6]
doubled;
```

## Map Helper Continued

這裡來介紹一個關於 `map()` 方法更靈活的使用方式：

```javascript
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' }
];
var prices = cars.map(function(car) {
  return car.price;
})
// ["CHEAP", "EXPENSIVE"]
prices;
```

## Where Map Is Used

<p align="center">
  <img src="https://i.imgur.com/SwxJe8i.png" />
</p>

## [Exercise] Plucking Values

### Question

Using map, create a new array that contains the `height` property of each object. Assign this new array to the variable `heights`. Don't forget to use the `return` keyword in the function!

```javascript
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
var heights;
```

### Solution

```javascript
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
var heights = images.map(function(image) {
  return image.height;
});
```

## [Exercise] Calculating Values with Map

### Question

Using map, create a new array that contains the distance / time value from each trip. In other words, the new array should contain the (distance / time) value. Assign the result to the variable `speeds`.

```javascript
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds;
```

### Solution

```javascript
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds = trips.map(function(trip) {
  return (trip.distance / trip.time);
});
```

## [Exercise] Implementing `Pluck`

### Question

Implement a `pluck` function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object.

**Example**

```javascript
var paints = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'yellow'}
];
// ['red', 'yellow', 'blue']
pluck(paints, 'color');
```

**Hint**

Remember that you can access a property on an object by using square bracket notation. For example: `person['name'];`

### Solution

```javascript
function pluck(array, property) {
  return array.map(function(obj) {
    return obj[property];
  });
}
```