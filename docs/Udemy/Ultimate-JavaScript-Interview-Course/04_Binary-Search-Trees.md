---
pageClass: udemy
---

# Binary Search Trees

## Recursion

```javascript
// Fractorial (!)
// 4! = 4 * 3 * 2 * 1
function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}
```

## Call Stack

## Binary Search Trees Implementation

```javascript
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

BST.prototype.depthFirstTraversal = function(iteratorFunc) {

}
```