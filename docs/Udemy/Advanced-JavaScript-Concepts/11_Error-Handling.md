---
pageClass: udemy
---

# Error Handling

## Errors in JavaScript

In JavaScript, we have a native error constructor funcion. There are three properties `name` `message` and `stack`

```javascript
new Error('oopsie');
```

The error instance which is what we created with the `new` keyword it doesn't actually do anything. What we need to do instead is to `throw` an error when we start throwing errows. When we throw something, your script that we're currently running stops executing or at least stops executing it unless you're handling this through somehow which will go over.

```javasciprt
throw new Error();
```

## Try, Catch and Finally

```javascript
function fail() {
  try {
    console.log('this works');
    throw new Error('oopsie!!!');
  } catch {
    console.log('we have made an oopsie', error);
  } finally {
    console.log('Still Good');
    return 'returning fail';
  }
}
```

This type of try catch block can be used to catch any type of synchronous errors. This catch block doesn't catch the asynchronus code.

```javascript
try {
  setTimeout(function() {
    fakevariable;
  }, 1000)
} catch {
  console.log('got it', error);
}
```

## Async Error Handling

## Extending Errors
