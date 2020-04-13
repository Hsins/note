---
pageClass: udemy
---

# Data Structures Introduction

## Which Data Structure is the Best?

資料結構（data structures）描述了一種數值的集合，包含了描述數值間的關係以及數值在記憶體中的儲存方式，以及對應到的相關操作方法。

不同的資料結構有著不同的特性，這也是身為開發者該熟悉的，以便於我們在遇到現實中的問題與數據時，可以透過這些知識來決定選擇哪一種資料結構能夠讓解決的方式更優雅與效率。比如說：

- 如果要儲存地圖或位置資料時，我們可能會選擇圖（graph）結構
- 如果要處理一個有序列表，並且能夠快速地在首尾進行插入與刪除時，我們可能會考慮鏈表（linked list）結構
- 如果要爬梳並處理槽狀的 HTML 代碼時，我們可能會使用樹（tree）結構
- 如果要創建一個排程表，其中任務帶有權重時，我們可能會考慮二叉堆（binary heap）結構

## EMCAScript 2015 Class Syntax

### The `class` Keyword

在接下來的介紹各種資料結構的內容中，會將各種不同的資料結構實作為一個個的類別，所謂的類別（class）是用來創建物件（object）的藍圖，會預先定義好一些屬性與方法。

在 JavaScript 中的繼承實際上是由原型鏈為基礎，並非實際的物件導向繼承模型，但在 EMCA 2015 引入了 [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 關鍵字作為語法糖。以下是他的用法：

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Blue', 'Steele');
```

其中當物件被創建時，會呼叫其中的建構函數 `constructor()`，值得注意的是由於 `class` 關鍵字會創建一個常數變數，因此不能夠重新定義建構函數。除此之外，在建構函數和接下來所提到的實例方法中，關鍵字 `this` 參照到的是類別所創建的物件本身。

### Adding Instance Methods

在類別定義中，還可以定義有別於建構函數的實例方法（instance methods），這些方法並不屬於當前類別，而是屬於被創建的實例。比如下列代碼中的 `fullName()`、`markLate()`、`addScore()` 和 `calculateAverage()`：

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return 'YOU ARE EXPELED!!!';
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}.`;
  }

  addScore(score) {
    this.score.push(store);
    return this.score;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}
```

### Adding Class Methods

在類別定義中，除了實例方法（instance methods）之外，也可以透過添加 `static` 關鍵字來定義靜態方法（static methods），靜態方法不需要替類別創建實例就能進行呼叫（也不能被類別實例所呼叫），通常被用來定義功能函數。比如下列代碼中的 `distance()`：

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
```
