---
pageClass: udemy
---

# Linked Lists

## Singly Linked Lists

### What is a linked list?

- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

### Comparisons with Arrays

- 鏈表不具有索引值，陣列具有索引值
- 鏈表中元素的連接透過指針，陣列則是順序存放在記憶體中
- 鏈表元素不能夠進隨機訪問（random access）
- 陣列的插入與刪除耗費資源

## Implementation

### Node class

```javascript
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
}
```

### Traverse

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}
```

### Push

1. 根據傳入的數值創建新的節點
2. 如果鏈表中沒有頭節點，將剛剛創立的節點作為鏈表的頭節點和尾節點；如果已經存在頭節點，則將列表的尾節點的 `next` 指向剛剛創立的節點，並將列表的尾節點改為此節點
3. 將鏈表長度增加一，並返回鏈表

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
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

### Pop

`pop()` 操作會將鏈表中的末端元素彈出


## Doubly Linked Lists