---
pageClass: udemy
---

# Performance of Arrays and Objects

- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

## When to use objects

- When you don't need order
- When you need fast access / insertion and removal

## Big O of Objects

- Insertion $O(1)$
- Removal $O(1)$
- Searching $O(n)$
- Access $O(1)$
- `Object.keys` $O(n)$
- `Object.values` $O(n)$
- `Object.entries` $O(n)$
- `hasOwnProperty` $O(1)$

## When to use Arrays

- When you need order
- When you need fast access / insertion and removal (sort of)

## Big Of of Arrays

- Insertion: it depends
- Removal: it depends
- Searching: $O(n)$
- Access: $O(1)$
- `Array.push` $O(1)$
- `Array.pop` $O(1)$
- `Array.shift` $O(n)$
- `Array.unshift` $O(n)$
- `Array.concat` $O(n)$
- `Array.slice` $O(n)$
- `Array.splice` $O(n)$
- `Array.sort` $O(n\log{n})$
- `Array.forEach` `Array.map` `Array.filter` `Array.reduce` $O(n)$