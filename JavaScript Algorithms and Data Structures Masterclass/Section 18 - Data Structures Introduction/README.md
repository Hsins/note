# Section 18 - Data Structures Introduction

## Table of Contents

- [Section 18 - Data Structures Introduction](#section-18---data-structures-introduction)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Which Data Structure Is The Best?](#lecture-which-data-structure-is-the-best)
  - [[Lecture] ES2015 Class Syntax Overview](#lecture-es2015-class-syntax-overview)
  - [[Lecture] Data Structures: The Class Keyword](#lecture-data-structures-the-class-keyword)
    - [Class Declaration](#class-declaration)
    - [Using Class](#using-class)
  - [[Lecture] Data Structures: Adding Instance Methods](#lecture-data-structures-adding-instance-methods)
  - [[Lecture] Data Structures: Adding Class Methods](#lecture-data-structures-adding-class-methods)

## [Lecture] Which Data Structure Is The Best?

在這一單元開始要來介紹各式各樣的 **資料結構（Data Structure）**，包括他們的性質以及如何實作，資料結構描述了資料之間彼此的關係與操作，是開發者必須具備的知識，同時也是面試時經常被考察的項目。不同的資料結構有著不同的性質和適合的業務場景，選擇適當的資料結構能夠使得程式更有效率：

- 當要處理地圖上座標間的關係時，採用 **圖（graph）**
- 對於有序列表，要在首端和尾端有效率地插入資料時，採用 **鏈表（linked list）**
- 爬取網頁 HTML 槽狀內容時，採用 **樹（tree）**
- 要進行事件排程，採用 **二元堆（binary heap）**

## [Lecture] ES2015 Class Syntax Overview

在 ES2015 之後提供了原生的 **類別（class）** 物件，類別是一個具有性質與方法的物件，在接下來的內容中我們會將各個資料結構定義為一個個不同的類別。關於 JavaScript 中物件的說明可以參考 [MDN | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 查看詳細的內容。

## [Lecture] Data Structures: The Class Keyword

### Class Declaration

在 JavaScript 中類別的宣告方式如下，其中建構子方法 `constructor()` 是物件進行初始化不可或缺的方法：

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.grade = year;
  }
}
```

### Using Class

類別進行宣告之後，可以透過關鍵字 `new` 來創建一個屬於指定類別的物件，此時被創造出的物件被稱為該類別的 **實例（instance）**：

```javascript
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

在上述代碼中，我們稱 `firstStudent` 和 `firstStudent` 物件是類別 `Student` 的實例。

## [Lecture] Data Structures: Adding Instance Methods

在類別中我們所定義的函數稱為該類別的 **方法（method）**，其中沒有被加上關鍵字 `static` 的方法被稱為 **原型方法（prototype method）** 或 **實例方法（instance method）**，他們可以直接被該類別所創建的實例呼叫：

```javascript
class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score){
    this.scores.push(score);
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b;})
    return sum/this.scores.length;
  }  
  }

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```

注意此處的 `this` 為所創建類別的實例，而非類別本身。

## [Lecture] Data Structures: Adding Class Methods

加上了關鍵字 `static` 的方法稱為 **靜態方法（static method）** 或 **類別方法（class method）**，這些方法只存在於類別之中，不能被實例所提取：

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

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

在接下來的內容中，將會大量使用到建構子與實例方法，幾乎不會使用到類別方法。關於兩者的差異與比較更詳細的內容可以參考 [PJCHENder 私房菜 | [JS] JavaScript 類（Class）](https://pjchender.github.io/2017/10/28/js-javascript-%E9%A1%9E%EF%BC%88class%EF%BC%89/)。