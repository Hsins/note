# Section 41 - JavaScript: The Tricky Stuff

## Table of Contents

- [Section 41 - JavaScript: The Tricky Stuff](#section-41---javascript-the-tricky-stuff)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Keyword This 1 - Introduction and Global](#lecture-keyword-this-1---introduction-and-global)
    - [What is `this`](#what-is-this)
  - [[Lecture] Keyword This 2 - Global With Strict](#lecture-keyword-this-2---global-with-strict)
    - [Global Context](#global-context)
    - [Strict Mode](#strict-mode)
  - [[Lecture] Keyword This 3 - Implicit](#lecture-keyword-this-3---implicit)
    - [Implicit: Object](#implicit-object)
    - [Implicit: Nested Object](#implicit-nested-object)
  - [[Lecture] Keyword This 4 - Call Apply Bind](#lecture-keyword-this-4---call-apply-bind)
  - [[Lecture] Keyword This 5 - Fixing Our Issue With Call](#lecture-keyword-this-5---fixing-our-issue-with-call)
  - [[Lecture] Keyword This 6 - Apply](#lecture-keyword-this-6---apply)
  - [[Lecture] Keyword This 7 - Bind](#lecture-keyword-this-7---bind)
  - [[Lecture] Keyword This 8 - Bind Pt. 2](#lecture-keyword-this-8---bind-pt-2)
  - [[Lecture] Keyword This 9 - New Keyword & Recap](#lecture-keyword-this-9---new-keyword--recap)
  - [[Lecture] OOP 1 - Introduction](#lecture-oop-1---introduction)
  - [[Lecture] OOP 2 - New Keyword](#lecture-oop-2---new-keyword)
  - [[Lecture] OOP 3 - Multiple Constructors](#lecture-oop-3---multiple-constructors)
  - [[Lecture] OOP 4 - Recap](#lecture-oop-4---recap)
  - [[Lecture] OOP 5 - Prototypes](#lecture-oop-5---prototypes)
  - [[Lecture] OOP 6 - Prototype Chain](#lecture-oop-6---prototype-chain)
  - [[Lecture] OOP 7 - Exercise](#lecture-oop-7---exercise)
  - [[Lecture] OOP 8 - Solution and Recap](#lecture-oop-8---solution-and-recap)
  - [[Lecture] Closures](#lecture-closures)

## [Lecture] Keyword This 1 - Introduction and Global

在這一單元中將介紹 JavaScript 中關鍵字 `this` 以及物件導向的概念，課程目標是：

- Define what the keyword `this` is
- Understand the four ways to always figure out what the keyword `this` is
- Try as hard as possible not to use the word `this` in a sentence

### What is `this`

關鍵字 `this` 是 JavaScript 中的保留字，他決定了函數是如何被呼叫的，涉及了 **執行上下文（execution context）** 的概念。在 JavaScript 有四條規則決定 `this` 的運作：

- Global
- Object
- Implicit
- Explicit

## [Lecture] Keyword This 2 - Global With Strict

### Global Context

```javascript
console.log(this)       // window

function WhatIsThis() {
  return this;
}

function variablesInThis() {
  // Since the value of this is the window, all we doing here
  // is creating a global variable
  this.person = "Elle";
}

console.log(person);    // Elle
whatIsThis();           // window
```

- 當關鍵字 `this` 不在已宣告的物件中使用時，將會指向 `window` 物件。
- 不在函數中所宣告的變數，都屬於 `window` 物件。

### Strict Mode

承上，這樣的特性可能使得我們在函數中可以透過 `this` 關鍵字創建一個全域變數（然而使用 `var` 在函數中宣告變數時，他僅能在函數中使用）。為了避免這樣的錯誤，我們可以使用 `"use strict"` 關鍵字來避免在變數中使用 `this` 關鍵字：

```javascript
"use strict"

console.log(this)       // window

function WhatIsThis() {
  return this;
}

function variablesInThis() {
  // Since we are in strict mode this is undefined so what happens
  // if we add a property on undefined?
  this.person = "Elle";
}

variablesInThis();      // TypeError, can't set person on undefined!
whatIsThis();           // undefined
```

## [Lecture] Keyword This 3 - Implicit

### Implicit: Object

在物件中，如果沒有槽狀物件於其中，關鍵字 `this` 將綁定物件本身：

```javascript
// strict mode does NOT make a difference here
var person = {
  firstName: "Elle",
  sayHi: function() {
    return "Hi, " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  }
}

person.sayHi();                 // "Hi, Elle"
person.determineContext();      // true
```

### Implicit: Nested Object

在槽狀物件於其中，關鍵字 `this` 將綁定最近的物件本身，因此對於 `dog` 物件來說並沒有 `firstName` 屬性，因此為 `undefine`：

```javascript
var person = {
  firstname: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  }
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
}

person.sayHi();                     // "Hi Colt"
person.determineContext();          // true
person.dog.sayHello();              // "Hello undefind"
person.dog.determineContext();      // false
```

## [Lecture] Keyword This 4 - Call Apply Bind

## [Lecture] Keyword This 5 - Fixing Our Issue With Call

## [Lecture] Keyword This 6 - Apply

## [Lecture] Keyword This 7 - Bind

## [Lecture] Keyword This 8 - Bind Pt. 2

## [Lecture] Keyword This 9 - New Keyword & Recap

## [Lecture] OOP 1 - Introduction

## [Lecture] OOP 2 - New Keyword

## [Lecture] OOP 3 - Multiple Constructors

## [Lecture] OOP 4 - Recap

## [Lecture] OOP 5 - Prototypes

## [Lecture] OOP 6 - Prototype Chain

## [Lecture] OOP 7 - Exercise

## [Lecture] OOP 8 - Solution and Recap

## [Lecture] Closures
