---
pageClass: udemy
---

# Big O Notation

We have multiple implementations of the same function. How can we determine which one is the best? eg: "Write a function that accepts a string input and returns a reversed copy".

There are more than 10 implementations.

- Its' important to have a precise vocabulary to talk about how our code performs.
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in out applications.
- It comes up in interviews.

But what does better mean?

- Faster?
- Less memory-intensive?
- More readable?

## Timing Our Code

Suppose we want to write a function that calculates the sum of all numbers from 1 up tp (and including) some number n.

```javascript
// Solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// Solution 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
```

- Different machines will record different times.
- The same machine will record different times.
- For fast algorithms, speed measurements may not be precise enough.

## Counting Operations

Let's count the number of simple operations the computer has to perform.

```javascript
// 3 simple operations
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// n operations
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Counting is hard!! It depends on what we are counting, the number of operations can be as low as $2n$ or as high as $5n + 2$.

But regardless of the exact number, the number of operations grows roughly proportionally with $n$.

## Visualizing Time Complexities

[Performance Tracker](https://rithmschool.github.io/function-timer-demo/)

## Big O Notation

Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. We won't care about the details, only the trends.

We say that an algorithms is $O(f(n))$ if the number of simple operations the computer has to do is eventually less than a constant times $f(n)$ as $n$ increases.

$f(n)$ could be:

- Linear: $f(n) = n$
- Quadratic: $f(n) = n^2$
- Constant: $f(n) = 1$
- ...

## Simplifying Big O Expressions

### Rules

- Arithmetic Operations are constant
- Variable Assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant

### Constants Don't Matter

- $O(2n) \rightarrow O(n)$
- $O(500) \rightarrow O(1)$
- $O(13n^2) \rightarrow O(n^2)$

### Smaller Terms Don't Matter

- $O(n + 10) \rightarrow O(n)$
- $O(1000n + 50) \rightarrow O(n)$
- $O(n^2 + 5n + 8) \rightarrow O(n^2)$

## Space Complexity
