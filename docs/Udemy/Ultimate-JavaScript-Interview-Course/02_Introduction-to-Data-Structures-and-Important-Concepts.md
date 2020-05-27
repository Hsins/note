# Introduction to Data Structures and Important Concepts

## Constructor Functions and `this` Keyword

```javascript
// declare the constructor function
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

// create User instance
var user1 = new User('John', 'Smith', 26, 'male');
var user2 = new User('Jill', 'Robinson', 25, 'female');
```

When we created our constructor function, we use the `this` keyword to assign the properties. Note that the `this` keyword doesn't refer to the function, but instead `this` refers to the object that we created by the constructor function.

## The Prototype Object

If we want our constructor function istances to all have a property or method that is the same for all of them, we will put it on the prototype instead of on the constructor function itself to keep the instances more cleaner.

```javascript
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain;
};
```
