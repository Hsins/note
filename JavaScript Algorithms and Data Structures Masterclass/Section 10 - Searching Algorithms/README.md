# Section 10 - Searching Algorithms

## Table of Contents

- [Section 10 - Searching Algorithms](#section-10---searching-algorithms)
  - [Table of Contents](#table-of-contents)
  - [055, PREREQUISITES](#055-prerequisites)
  - [[Lecture] Intro to Searching](#lecture-intro-to-searching)
  - [[Lecture] Intro to Linear Search](#lecture-intro-to-linear-search)
  - [[Lecture] Linear Search Solution](#lecture-linear-search-solution)
    - [Exercise](#exercise)
    - [Pseudocode](#pseudocode)
    - [Solution](#solution)
  - [[Lecture] Linear Search BIG O](#lecture-linear-search-big-o)
  - [[Lecture] Intro to Binary Search](#lecture-intro-to-binary-search)
  - [[Lecture] Binary Search PseudoCode](#lecture-binary-search-pseudocode)
  - [[Lecture] Binary Search Solution](#lecture-binary-search-solution)
    - [Exercise](#exercise-1)
    - [Pseudocode](#pseudocode-1)
    - [Solution](#solution-1)
  - [[Lecture] Binary Search BIG O](#lecture-binary-search-big-o)
  - [[Lecture] Naive String Search](#lecture-naive-string-search)
  - [[Lecture] Naive String Search Implementation](#lecture-naive-string-search-implementation)
    - [Pseudocode](#pseudocode-2)
    - [Solution](#solution-2)
  - [[Lecture] KNP COMING SOON](#lecture-knp-coming-soon)

## 055, PREREQUISITES

- **Section 1: BIG O NOTATION**

## [Lecture] Intro to Searching

當我們談及 **搜索（search）** 可能會聯想到 Google 所提供的網頁搜索服務，但其背後的演算法在今時今日已經十分複雜。在這裡所談及的一系列搜索概念大致上會像是在給定的一個列表中判斷是否存在某一個元素，常見的應用比如：

- 在一篇文章中尋找是否出現過某些文字？
- 當網站的使用者要進行註冊時，檢查資料庫中是否有重複的用戶名稱

## [Lecture] Intro to Linear Search

**線性搜索（Linear Search）** 又稱為循序搜索，透過逐一檢查陣列中的所有項目來判斷要查找的項目是否存在。在 JavaScript 的陣列形態的 `indexOf()` 方法就是透過線性搜索來實作的。

## [Lecture] Linear Search Solution

### Exercise

Write a function called `linearSearch` which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1. Don't use `indexOf()` to implement this function!

Example:

```plain
linearSearch([10, 15, 20, 25, 30], 15)    // 1
linearSearch([9, 8, 7, 6, 5, 4, 3], 4)    // 5
```

### Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

### Solution

```javascript
function linearSearch(arr, val) {
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
```

## [Lecture] Linear Search BIG O

- Best: `O(1)`
- Average: `O(n)`
- Worst: `O(n)`

## [Lecture] Intro to Binary Search

對於 **有序陣列** 來說，**二分搜索（Binary Search）** 是一個效率較高的搜索演算法。每次搜索時，都只搜索當前陣列長度一半的範圍，並逐次縮小範圍。

## [Lecture] Binary Search PseudoCode

詳見下一則筆記。

## [Lecture] Binary Search Solution

### Exercise

Write a function called `binarySearch` which accepts a **sorted** array and a value, and returns the index at which the value exists. Otherwise, return -1.

Example:

```plain
binarySearch([1, 2, 3, 4, 5], 2)    // 1
binarySearch([1, 2, 3, 4, 5], 5)    // 4
```

### Pseudocode

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array.
- While the left pointer comes before the right pointer:
    - Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - If the value is too large, move the right pointer down
- If you never find the value, return -1

### Solution

```javascript
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
```

## [Lecture] Binary Search BIG O

- Best: `O(1)`
- Average: `O(logn)`
- Worst: `O(logn)`

## [Lecture] Naive String Search

這裡要談論的是字串的搜索演算法，其中 **樸素演算法（Native Search）** 是較為暴力但實用的一個手段。在這個演算法當中將會嘗試所有合法的位移狀況，並檢查兩個子字串是否相同。

![](https://i.imgur.com/38QLRFf.png)

## [Lecture] Naive String Search Implementation

### Pseudocode

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increase the count of matches
- Return the count

### Solution

```javascript
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
```

## [Lecture] KNP COMING SOON
