# Section 19 - Singly Linked Lists

## Table of Contents

- [Section 19 - Singly Linked Lists](#section-19---singly-linked-lists)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] PREREQUISITES](#lecture-prerequisites)
  - [[Lecture] Intro to Singly Linked Lists](#lecture-intro-to-singly-linked-lists)
    - [Objectives](#objectives)
    - [What is Singly Linked Lists?](#what-is-singly-linked-lists)
    - [Comparisions with Arrays](#comparisions-with-arrays)
  - [[Lecture] Starter Code and Push Intro](#lecture-starter-code-and-push-intro)
    - [Starter Code](#starter-code)
    - [Pushing Pseudocode](#pushing-pseudocode)
  - [[Lecture] Singly Linked List: Push Solution](#lecture-singly-linked-list-push-solution)
  - [[Lecture] Singly Linked List: Pop Intro](#lecture-singly-linked-list-pop-intro)
    - [Popping Pseudocode](#popping-pseudocode)
  - [[Lecture] Singly Linked List: Pop Solution](#lecture-singly-linked-list-pop-solution)
  - [[Lecture] Singly Linked List: Shift Intro](#lecture-singly-linked-list-shift-intro)
  - [[Lecture] Singly Linked List: Shift Solution](#lecture-singly-linked-list-shift-solution)
  - [[Lecture] Singly Linked List: Unshift Intro](#lecture-singly-linked-list-unshift-intro)
  - [[Lecture] Singly Linked List: Unshift Solution](#lecture-singly-linked-list-unshift-solution)
  - [[Lecture] Singly Linked List: Get Intro](#lecture-singly-linked-list-get-intro)
  - [[Lecture] Singly Linked List: Get Solution](#lecture-singly-linked-list-get-solution)
  - [[Lecture] Singly Linked List: Set Intro](#lecture-singly-linked-list-set-intro)
  - [[Lecture] Singly Linked List: Set Solution](#lecture-singly-linked-list-set-solution)
  - [[Lecture] Singly Linked List: Insert Intro](#lecture-singly-linked-list-insert-intro)
  - [[Lecture] Singly Linked List: Insert Solution](#lecture-singly-linked-list-insert-solution)
  - [[Lecture] Singly Linked List: Remove Intro](#lecture-singly-linked-list-remove-intro)
  - [[Lecture] Singly Linked List: Remove Solution](#lecture-singly-linked-list-remove-solution)
  - [[Lecture] Singly Linked List: Reverse Intro](#lecture-singly-linked-list-reverse-intro)
  - [[Lecture] Singly Linked List: Reverse Solution](#lecture-singly-linked-list-reverse-solution)
  - [[Lecture] Singly Linked List: BIG O Complexity](#lecture-singly-linked-list-big-o-complexity)

## [Lecture] PREREQUISITES

- Section 01: BIG O NOTATION
- Section 18: DATA STRUCTURES INTRO

## [Lecture] Intro to Singly Linked Lists

### Objectives

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked Lists

### What is Singly Linked Lists?

**鏈結列表（Linked Lists）** 具有頭部、尾部與長度性質，每個結點除了儲存資料之外，還有一個指向下一結點的指針，列表的操作動畫可以參考 [VisuALGO | LINKED LIST](https://visualgo.net/en/list)：

<div align="center">
  <img src="https://i.imgur.com/PIyfJm7.png">
</div>

### Comparisions with Arrays

- Lists
  - 不具備索引值
  - 結點間的連接使用 `next` 指針
  - 不允許隨機訪問
- Arrays
  - 有順序的索引值
  - 插入和刪除耗費資源
  - 可以透過索引值進行隨機訪問

## [Lecture] Starter Code and Push Intro

### Starter Code

```javascript
// Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    
  }
}
```

### Pushing Pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly - created node
- Otherwise set the next property on the tail to be the new node and set the tail - property on the list to be the newly created node
- Increment the length by one
- Return the linked list

## [Lecture] Singly Linked List: Push Solution

```javascript
// Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
```

## [Lecture] Singly Linked List: Pop Intro

### Popping Pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

## [Lecture] Singly Linked List: Pop Solution

```javascript
// Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
```

## [Lecture] Singly Linked List: Shift Intro
## [Lecture] Singly Linked List: Shift Solution
## [Lecture] Singly Linked List: Unshift Intro
## [Lecture] Singly Linked List: Unshift Solution
## [Lecture] Singly Linked List: Get Intro
## [Lecture] Singly Linked List: Get Solution
## [Lecture] Singly Linked List: Set Intro
## [Lecture] Singly Linked List: Set Solution
## [Lecture] Singly Linked List: Insert Intro
## [Lecture] Singly Linked List: Insert Solution
## [Lecture] Singly Linked List: Remove Intro
## [Lecture] Singly Linked List: Remove Solution
## [Lecture] Singly Linked List: Reverse Intro
## [Lecture] Singly Linked List: Reverse Solution
## [Lecture] Singly Linked List: BIG O Complexity