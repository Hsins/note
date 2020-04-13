---
pageClass: udemy
---

# Sorting Algorithms

## Bubble Sort

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
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

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

## Merge Sort

## Quick Sort

## Radix Sort