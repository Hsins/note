# Section 14 - Javascript Basics: Objects

## Table of Contents

- [Section 14 - Javascript Basics: Objects](#section-14---javascript-basics-objects)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Introduction to Objects](#lecture-introduction-to-objects)
    - [Creating Objects](#creating-objects)
    - [Retrieving Data](#retrieving-data)
    - [Updating Data](#updating-data)
  - [[Lecture] Comparing Objects and Arrays](#lecture-comparing-objects-and-arrays)
  - [[Lecture] Nested Objects and Arrays](#lecture-nested-objects-and-arrays)
  - [[Lecture] Objects Quiz](#lecture-objects-quiz)
    - [Exercise 01](#exercise-01)
    - [Exercise 02](#exercise-02)
  - [[Lecture] Movie Database Exercise](#lecture-movie-database-exercise)
    - [Demand](#demand)
    - [Solution](#solution)
  - [[Lecture] Adding Methods to Objects](#lecture-adding-methods-to-objects)
  - [[Lecture] The Keyword This](#lecture-the-keyword-this)
    - [`underscore.js`](#underscorejs)
    - [The keyword `this`](#the-keyword-this)

## [Lecture] Introduction to Objects

除了之前所介紹的 **陣列（array）** 之外，JavaScript 提供了 **物件（object）** 型態，如下所示：

```javascript
// Declare a object
var person = {
  name: "Sean Lian",
  age: 18,
  city: "Taipei",
  isMarried: false,
  friends: [John, Peter],
  pet: {
    name: "Lucky",
    species: "dog",
    age: 2
  }
};
```

- **物件（object）** 型態以 `key-value` 對應的方式來儲存資料，其中的 `key` 值稱為物件的 **屬性（property）**。
- 有別於 **陣列（array）** 型態，物件中的元素並沒有順序的差別。
- 物件中所儲存的資料型態不受限制。
- 與 Python 中的 **字典（dictionary）** 型態類似。

### Creating Objects

構建物件的方式有：

```javascript
// Make an empty object and then add property to it
var person = {};
person.name = "Sean Lian";
person.age = 18;
person.city = "Taipei";

// All at once
var person = {
  name: "Sean Lian",
  age: 18;
  city: "Taipei"
};

// Using the keyword "new"
var person = new Object();
person.name = "Sean Lian";
person.age = 18;
person.city = "Taipei";
```

### Retrieving Data

若要使用指定的 `key` 來獲取物件中所對應的 `value` 時，有兩種記號方式可供使用，但存在些許差異：

```javascript
// Retrieving Data with "bracket notation"
console.log(person["name"]);

// Retrieving Data with "dot notation"
console.log(person.name);

// You can't use "dot notation" with cases below
someObject.10days;    // INVALID if the property starts with a number
someObject.gg QQ;     // INVALID if the property names with spaces
someObject.myStr;     // INVALID using a variable to retrieve

// But almost be able with "bracket notation"
someObject["10days"]; // VALID with "bracket notation"
someObject["gg QQ"]   // VALID with "bracket notation"
someObject[myStr]     // VALID with "bracket notation"
```

### Updating Data

```javascript
person["age"] += 1;
person.city = "Taichung"
```

## [Lecture] Comparing Objects and Arrays



## [Lecture] Nested Objects and Arrays

我們可以將 **物件（object）** 型態作為元素放置在 **陣列（array）** 型態中，形成槽狀的形式：

```javascript
var post = [
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome post", "Terrible post"]
  },
  {
    title: "Cats are actually awesome",
    author: "Cat Luvr",
    comments: ["<3", "Go to hell I hate you"]
  }
]
```

## [Lecture] Objects Quiz

### Exercise 01

```javascript
var someObject = {};

// Which of the following are valid?

var prop = "color";
someObject._name = "Hedwig";
someObject.age = 6;
someObject[prop] = "red";
someObject.123 = true;              // Syntax Error
```

### Exercise 02

```javascript
var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

// Write code to retrieve "Malfoy" from someObject
// Go one "layer" at a time!
someObject["friends"][0]["name"]    // bracket notation
someObject.friends[0].name          // dot notation
```

## [Lecture] Movie Database Exercise

### Demand

Create an array of movie objects. Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out something that looks like:

```plain
You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars
```

### Solution

```javascript
// Declare the array of movie objects
var movies = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  }, 
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  }, 
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }, 
];

// The iterate function
movies.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = "You have ";

  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }

  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";

  return result;
}
```

## [Lecture] Adding Methods to Objects

在 **物件（object）型態** 中，屬性的值也可以設置為函數，此時我們稱這個屬性為物件的 **方法（method）**：

```javascript
// Declare an object
var obj = {
  name: "Chunk",
  age: 45,
  isCool: false,
  friends: ["Bob", "Tina"],
  // Construct the "add" method
  add: function(x, y) {
    return x + y;
  }
};

// Call method
obj.add(3, 4);
```

## [Lecture] The Keyword This

### `underscore.js`

[`underscore.js`](http://underscorejs.org/) 是一個 JavaScript 的套件工具庫，提供了許多函數式程式設計的實用功能。

### The keyword `this`

`this` 是 JavaScript 中一個十分特別的 **關鍵字（keyword）**，將它放置於不同的內容中，表現的結果也不盡相同。比如在構建物件的方法時，我們透過 `this` 將物件本身傳遞進去：

**【外置函數】**

```javascript
var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

function print(arr) {
  arr.forEach(function(el){
    console.log(el);
  });
}

print(comments.data);
```

**【物件方法】**

```javascript
var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

comments.print = function() {
  this.data.forEach(function(el){
    console.log(el);
  });
}

comments.data.print();
```