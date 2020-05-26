---
pageClass: udemy
---

# Classes

## Inheritance with Prototype Chain

```javascript
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

const car = new Car({ title: 'Focus' });

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
```

## Inheritance with Classes

```javascript
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Focus' });
```

## When to Use Classes

## [Exercise] Game Classes

### Question

You are a game developer tasked with setting up some basic classes for a new game you are working on. Create a class called `Monster`. In the constructor, you'll need to do some basic setup for Monster whenever they are created.

- Initialize the Monster's health to 100.
- The constructor will be called with an `options` object that has a `name` property. Assign the `name` to the Monster.

### Solution

```javascript
class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}
```

## [Exercise] Subclassing Monsters

### Question

Now that you have a monster created, create a subclass of the Monster called `Snake`.

- The Snake should have a `bite` method. The only argument to this method is another instance of a Snake.
- The instance of Snake that is passed in should have their health deducated by 10.

### Solution

```javascript
```