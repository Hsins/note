---
pageClass: udemy
---

# Tree Traversal

## Tree Traversal

樹的遍歷（traverse）就是將所有樹中的節點都進行一次的訪問，常見的方式有二：

- 廣度優先搜索（Breadth First Search, BFS）
- 深度優先搜索（Depth First Search, DFS）

## Breadth First Search (BFS)

### Introduction

廣度優先搜索（Breadth First Search, BFS）的概念是在進行樹的遍歷時，先訪問完同一層的所有節點再往子節點前進。

### Implementation

1. 創建一個貯列（queue）以及一個用來儲存訪問過節點數值的變數
2. 將根節點放置在放進貯列
3. 循環下述操作直到貯列為空
   - 將節點從貯列中移出，並將節點的值推入儲存節點的變數中
   - 如果被移出的節點存在有子節點，將子節點加入貯列中
4. 返回用以儲存值的變數

```javascript
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}
```

## Depth First Search (DFS)

### Introduction

### Implementation (PreOrder)

### Implementation (PostOrder)

### Implementation (InOrder)

## When to Use BFS and DFS?

- If you have a tree that is fully fleshed out like this tree (as wide as it can be the entire way done). We are working with a BFS
