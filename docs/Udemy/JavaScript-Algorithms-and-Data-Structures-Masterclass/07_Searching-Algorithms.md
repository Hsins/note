---
pageClass: udemy
---

# Searching Algorithms

## Linear Search

There are many different search methods on arrays in JavaScript:

- `indexOf`
- `includes`
- `find`
- `findIndex`

The methods above are all linear search:

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

### Implementation

```javascript
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

linearSearch([34, 56, 1, 2], 1);
linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
```

### Summary

- Best: $O(1)$
- Worst: $O(n)$
- Average: $O(n)$

## Binary Search

Binary Search is a much faster form of search. Rather than eliminating one element at at time, you can eliminate half of the remaining elements at a time. Binary search only works on sorted arrays. The idea is divide and conquer:

1. This function accpets a sorted array and a value.
2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
3. while the left pointer comes before the right pointer:
   - Create a pointer in the middle
   - If you find the value you want, return the index.
   - If the value is too small, move the left pointer up
   - If the value is too large, move the right pointer down
4. If you never find the value, return -1

### Implementation

```javascript
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28], 15)
```

### Summary

- Only works on sorted arrays
- Best: $O(1)$
- Average: $O(\log{n})$
- Worst: $O(\log{n})$

## Naive String Search

## KMP String Search