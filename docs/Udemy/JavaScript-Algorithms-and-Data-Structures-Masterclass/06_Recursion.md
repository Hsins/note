---
pageClass: udemy
---

# Recursion

## What is Recursion?

![recursion](https://user-images.githubusercontent.com/26391143/79159935-8cc9d900-7e0b-11ea-93dc-a158c478e528.png =180x)

在電腦科學中，經常需要重複地將問題拆解成子問題並進行求解，在這種狀況下會使用遞迴（recursion）來重複呼叫自己來獲取答案。在 JavaScript 中其實有許多方法背後都使用到了遞迴的概念，比如說：

- `JSON.parse()`, `JSON.stringify()`...
- `document.getElementById`...

在撰寫遞迴時，必須要找出遞迴關係式與終止條件，也就是說要決定基本情況（Base Case）和一般情況（General Case）：

```javascript
function func() {
  if (...) {      // 達到終止條件
    BASECASE;
    return ...;
  } else {        // 執行遞迴呼叫
    GENERAL CASE;
  }
}
```

## The Call Stack

在絕大多數的程式中，通常會有一個內建的資料結構來管理函數呼叫，也就是所謂的執行堆疊（The Call Stack）。每當函數被呼叫時，就會將他推入 `push` 執行堆疊的上方，當執行到 `return` 關鍵字時，才將其彈出 `pop` 堆疊。

![The Call Stack](https://user-images.githubusercontent.com/26391143/79163712-2c8a6580-7e12-11ea-9622-3b25acce1bed.png =450x)

當我們執行遞迴函數時，每一次遞迴都會將函數推入執行堆疊的上方。

## Example: `countDown`

### Iteration

```javascript
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }

  console.log("All Done!");
}
```

### Recursion

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(num--);
  countDown(num);
}
```

## Example: `sumRange`

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

## Example: `factorial`

### Iteration

```javascript
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}
```

### Recursion

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

## Helper Method and Pure Recursion

### Helper Method Recursion

在前面我們所撰寫的遞迴函數，是單純地在內部呼叫自己直到滿足終止條件，就返回數值。然而，在實際的開發中大多數的遞迴和回溯在實現時，都是使用一個 `helper()` 函數執行自身遞迴的實現，並在主函數中調用他：

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(err);
  return result;
}
```

### Pure Recursion

另外一種實現遞迴函數的方法，稱為純遞迴（Pure Recursion），也就是說遞迴函數本身是能夠自己自足（self-contained），不需要額外的資料結構來實現：

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

在 JavaScript 中，如果要撰寫純遞迴函數，有以下建議：

- 對於陣列來說，使用 `slice`、`concat` 方法和展開運算子（spread operator）來複製陣列，避免更動原始陣列
- 對於字串來說，由於字串是不可變的（immutable），需要使用 `slice`、`substr` 和 `substring` 方法來複製字串
- 對於物件來說，使用 `Object.assign` 或展開運算子（spread operator）來複製物件