---
pageClass: udemy
---

# Binary Search Trees

## Introduction to Trees

### Tree Treminology

- **Root**: The top node in a tree.
- **Child**: A node directly connected to another tree.
- **Parent**: The converse notion of a child.
- **Siblings**: A group of nodes with the same parent.
- **Leaf**: A node with no children.
- **Edge**: The connection between one node and another.

### Applications of Trees

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

## Binary Search Trees

### What are Binary Search Trees (BST)?

二元搜索樹（Binary Search Tree, BST）是二元樹的一種，他滿足以下性質：

- 所有的父節點最多只能有兩個子節點
- 所有的父節點中的數值必須大於其左子節點中的數值
- 所有的父節點中的數值必須大於其左子節點中的數值

網站 [VisuAlgo | Binary Search Tree](https://visualgo.net/en/bst) 提供了一個二元搜索樹的例子。

### Search A Binary Search Trees

### Quiz: Valid Binary Search Trees

## Implementation: Binary Search Trees

### Tree Classes

```javascript
// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// Tree Instance
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
```

### Insert

`insert()` 可以迭代實現或遞迴實現，由於結構樹本身作為一個可以被遞迴定義的結構，多數都會採用遞迴方式實作，但此處以較為直觀的迭代方式進行實現。為了滿足二元搜索樹的性質，在進行元素插入時，會有以下步驟：

1. 創建新的節點
2. 從根節點開始進行插入
   - 檢查是否存在根節點，若不存在則將創建的節點作為根節點
   - 比較當前數值與根節點所存放數值，考慮向左節點移動或右節點移動
   - 若不存在左右節點，則將創建的節點作為左右節點，反之重複進行此過程

```javascript
// Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert()
  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}
```

### Search

`contain()` 可以迭代實現或遞迴實現，由於結構樹本身作為一個可以被遞迴定義的結構，多數都會採用遞迴方式實作，但此處以較為直觀的迭代方式進行實現。為了滿足二元搜索樹的性質，在查找元素時，會有以下步驟：

- 從根節點開始進行查找
  - 檢查是否存在根節點，若不存在則結束查找
  - 比較當前數值與根節點所存放數值，若相同則返回，否則根據大小關係決定向左或右節點進行查找

```javascript
// Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // contain()
  contain(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
      return false;
    }
  }
}
```

## Big O of Binary Search Tree

- **Insert**: $O(\log{n})$
- **Search**: $O(\log{n})$
