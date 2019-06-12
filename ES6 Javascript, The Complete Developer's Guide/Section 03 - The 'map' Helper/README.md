# Section 03 - The 'map' Helper

## 007, The Map Helper

<p align="center">
  <img src="https://i.imgur.com/wjCtK8V.png">
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

## 008, Map Helper Continued

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

## 009, Where Map Is Used

<p align="center">
  <img src="https://i.imgur.com/SwxJe8i.png">
</p>

## Coding Exercise 3: Plucking Values

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

## Coding Exercise 4: Calculating Values with Map

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

## Coding Exercise 5: Really Hard - Implementing 'Pluck'

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