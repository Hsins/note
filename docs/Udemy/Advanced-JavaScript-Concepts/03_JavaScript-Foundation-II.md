---
pageClass: udemy
---

# JavaScript Foundation II

## Execution Context

- 呼叫堆疊中所存放的是一個個的執行上下文（Execution Context）
- 執行到一個函數時，就會替該函數創建執行上下文並放入呼叫堆疊中
- 實際上，在開始執行時就會建立全局執行上下文（Global Execution Contenxt），創建 `windows` 或 `global` 物件，並將 `this` 指向這個物件

## Lexical Environment

In JavaScript our lexical scope (avaiable data + variables where the function was defined) determines our avaiable variables. Not where the function is called (dynamic scope).

- Lexical Scope, Lexical Analysis
- Where you write something
- Just like universe. Every time we create an execution context, when we said that compilers is doing lexical analysis. All is checking to see where the words were written and located.
- Everytime we create a funciton, it create a new world for us inside that function.
- The execution context is going to tell us which lexical environment is currently running.

```javascript
function printName() {
  return 'Hsins';
}

function findName() {
  function a() {
    return '2';
  }
  return printName();
}

function sayName() {
  return findName();
}

sayName();
```

## Hoisting

Hoisting is the behavior of moving the vairables or function declarations to the top of their respective environments during compilation.

- Variables are partially hoisted
- Functions declarations are hoisted

```javascript
console.log('1-----'); // '1-----'
console.log(teddy); // undefined
console.log(sing()); // 'lalala'
// undefined

var teddy = 'bear';
// function expression
var sing2 = function() {
  console.log('yayaya');
};

// function declaration
function sing() {
  console.log('lalala');
}
```

During the 'creation' phase, the JavaScript Engine is going to look through the code. As soon as it sees two things, it is going to allocate memory.

## Exercise

```javascript
a();
console.log(one);
var one = 1;
var one = 2;
function a() {
  console.log('hi');
}

function a() {
  console.log('bye');
}
```

## Exercise

```javascript
var favouriteFood = 'grapes';

var foodThoughts = function() {
  console.log('Original favourite food: ' + favouriteFood);

  var favouriteFood = 'sushi';

  console.log('New favourite food: ' + favouriteFood);
};

foodThoughts();

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"
```

- Hoisting is happens on every execution context
- Anytime you run a function, a new execution context gets created

## Exercise

```javascript
function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
bigBrother();
```

## Function Invocation

```javascript
// Function Expression
var canada = () => {
  console.log('Cold');
};

// Function Declaration
function india() {
  console.log('warm');
}

// Function Invocation / Call / Execution
canada();
india();
```

- The function `canada` is defined at runtime when we actually run the function
- When a function is invoked, we create a new execution context on top of our global execution context.
- Unlike the global execution context that give us a global object that equals to `this`. Instead, we get something called `arguments` and

```javascript
function marry(person1, person2) {
  console.log('Arguments: ', arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}
```

## Arguments Keyword

- `arguments` is a little bit dangerous to use.
- `arguments` look like an `array` but it's not really an `array`.
- Can't use array methoud on `arguments`.

```javascript
function marry2(...args) {
  console.log('Arguments: ', args);
  return `${args[0]} is now married to ${args[2]}`;
}
```

## Variable Environment

## Scope Chain

## `[[scope]]`
