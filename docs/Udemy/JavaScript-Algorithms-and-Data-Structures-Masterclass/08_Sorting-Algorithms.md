---
pageClass: udemy
---

# Sorting Algorithms

## What is Sorting?

排序（Sorting）是將一串資料依照特定順序方式進行重新排列。我們經常需要將資料進行排序：

- 將數字從小排列到大
- 將名稱按照字母順序排列
- 將電影依照上映年份進行排序

## Bubble Sort

### Implementation

1. Start looping from with a variable called `i` the end of the array towards the beginning
2. Start an inner loop with a variable called `j` fromthe beginning until `i - 1`
3. If `arr[j]` is greater than `arr[j+1]`, swap those two values
4. Return the sorted array

```javascript
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2] = arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j ++) [
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    ]
  }

  return arr;
}
```

### Optimization

```javascript
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2] = arr[idx2], arr[idx1]];
  }

  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;

    for (left j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
}
```

### Summary

## Selection Sort

### Introduction

![Selection Sort](https://user-images.githubusercontent.com/26391143/75870879-9b08fa80-5e46-11ea-9311-9b304fb75c9d.gif)

**選擇排序（selection sort）** 會遍歷未排序數組，在其中找到最小（或最大元素），然後存放到排序數組中的位置，並重複此過程，直到所有元素都排序完畢。

### Implementation

1. 儲存當前位置的值並標記為最小值（最大值）
2. 在未排序數組中，逐一比較並更新最小值（最大值）
3. 將找到的最小值（最大值）與當前位置進行交換
4. 重複上述過程直到排序完成

```javascript
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) swap(arr, i, min);
  }
  return arr;
}
```

### Big O Complexity

- 最佳時間複雜度 $O(n^2)$
- 平均時間複雜度 $O(n^2)$
- 最糟時間複雜度 $O(n^2)$
- 空間複雜度 $O(1)$
- 不穩定排序

## Insertion Sort

### Implementation

1. Start by picking the second element in the array.
2. Now compare the second element with the one before it and swap if necessary
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.ie. the left side) to place the element in the correct place
4. Repeat until the array is sorted

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
}

insertionSort([1, 2, 9, 76, 4])
```

### Summary

## Merge Sort

## Quick Sort

## Radix Sort